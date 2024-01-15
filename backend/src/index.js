const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { Pool } = require("pg");
const cors = require("cors");
const path = require('path');
const multer = require("multer");
const nodemailer = require("nodemailer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Simpan file di folder 'uploads'
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Nama file unik
  },
});

const upload = multer({ storage: storage });

const db = new Pool({
  user: "postgres",
  host: "db.nulzpapkaphhhbxislpu.supabase.co",
  database: "postgres",
  password: "thisismyportfolio",
  port: 6543,
});

db.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log(
      "Database connected successfully. Current time:",
      res.rows[0].now
    );
  }
});

app.use(bodyParser.json());
app.use(cors());
app.use("/upload_project", express.static("uploads"));
app.use("/upload_file", express.static("uploads"));

app.get("/upload_project/:filename", (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, "..", "uploads", filename));
});
app.get("/upload_file/:filename", (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, "..", "uploads", filename));
});

//portofolio
app.get("/portofolio", (req, res) => {
  db.query("SELECT * FROM portofolio", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results.rows);
  });
});

app.get("/portofolio/:id", (req, res) => {
  const portofolioId = req.params.id;

  // untuk mendapatkan data portofolio berdasarkan ID
  const query = "SELECT * FROM portofolio WHERE id = $1";

  db.query(query, [portofolioId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Periksa apakah data ditemukan
    if (results.length === 0) {
      res.status(404).json({ error: "Portofolio not found" });
    } else {
      res.json(results.rows[0]);
    }
  });
});

app.post("/portofolio", upload.single("upload_project"), (req, res) => {
  const { project_title, description } = req.body;
  const file = req.file; // Mengambil informasi file yang diunggah

  db.query(
    "INSERT INTO portofolio (project_title, upload_project, description) VALUES ($1, $2, $3) RETURNING id",
    [project_title, file.filename, description],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: "Portofolio created", id: result.rows[0].id });
      }
    }
  );
});

app.patch("/portofolio/:id", upload.single("upload_project"), (req, res) => {
  const portofolioId = req.params.id;
  const { project_title, description } = req.body;
  const file = req.file;

  // Buat objek untuk menyimpan data yang akan diupdate
  const updateData = {};

  // Tambahkan data yang tidak null atau tidak didefinisikan
  if (project_title !== undefined && project_title !== null) {
    updateData.project_title = project_title;
  }

  if (file) {
    updateData.upload_project = file.filename;
  }

  if (description !== undefined && description !== null) {
    updateData.description = description;
  }

  if (Object.keys(updateData).length === 0) {
    res.status(400).json({ error: "No data provided for update" });
    return;
  }

  db.query(
    "UPDATE portofolio SET $1 WHERE id = $2",
    [updateData, portofolioId],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: "Portofolio updated",
        affectedRows: result.rowCount,
      });
    }
  );
});

app.delete("/portofolio/:id", (req, res) => {
  const portofolioId = req.params.id;
  db.query(
    "DELETE FROM portofolio WHERE id = $1",
    [portofolioId],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: "Portofolio deleted",
        affectedRows: result.rowCount,
      });
    }
  );
});

//certificate
app.get("/certificate", (req, res) => {
  db.query("SELECT * FROM certificate", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results.rows);
  });
});

app.get("/certificate/detail/:id", (req, res) => {
  const certificateId = req.params.id;

  // Query PostgreSQL to get certificate data based on ID
  const query = "SELECT * FROM certificate WHERE id = $1";

  db.query(query, [certificateId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Check if data is found
    if (results.rows.length === 0) { // Use results.rows instead of results
      res.status(404).json({ error: "Certificate not found" });
    } else {
      res.json(results.rows[0]); // Use results.rows instead of results
    }
  });
});

app.post("/certificate", upload.single("upload_file"), (req, res) => {
  const { category, title, caption } = req.body;
  const file = req.file;
  db.query(
    "INSERT INTO certificate (category, title, upload_file, caption) VALUES ($1, $2, $3, $4) RETURNING id",
    [category, title, file.filename, caption],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "Certificate Submit", id: result.rows[0].id }); 
    }
  );
});

app.patch("/certificate/:id", (req, res) => {
  const certificateId = req.params.id;
  const { category, title, upload_file, caption } = req.body;
  db.query(
    "UPDATE certificate SET category = $1, title = $2, upload_file = $3, caption = $4 WHERE id = $5",
    [category, title, upload_file, caption, certificateId],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: "Certificate updated",
        affectedRows: result.rowCount,
      });
    }
  );
});

app.delete("/certificate/:id", (req, res) => {
  const certificateId = req.params.id;
  db.query(
    "DELETE FROM certificate WHERE id = $1",
    [certificateId],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: "Certificate deleted",
        affectedRows: result.rowCount,
      });
    }
  );
});

//contact
app.get("/contact", (req, res) => {
  db.query("SELECT * FROM contact", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results.rows);
  });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  const recepient = "alfnnur43@gmail.com";
  db.query(
    "INSERT INTO contact (name, email, message) VALUES ($1, $2, $3) RETURNING id",
    [name, email, message],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      } else {
        sendEmail({ name, email, message, recepient });
        res.json({ message: "Pesan berhasil dikirim", id: result.rows[0].id });
      }
    }
  );
});

function sendEmail({ name, email, message, recepient }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 456,
    auth: {
      user: "messegeportfolio@gmail.com",
      pass: "voeb oqmk oyoc gmva",
    },
  });

  console.log("Sending email...");

  const mailOptions = {
    from: "messegeportfolio@gmail.com",
    to: recepient,
    subject: "New Contact Form Submission",
    text: `YOU'RE GETTING A NEW MESSAGE!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

app.delete("/contact/:id", (req, res) => {
  const contactId = req.params.id;
  db.query("DELETE FROM contact WHERE id = $1", [contactId], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "Contact deleted",
      affectedRows: result.rowCount,
    });
  });
});

app.get("/certificate/:category", (req, res) => {
  const category = req.params.category;

  if (category.toLowerCase() === "all") {
    const query = "SELECT * FROM certificate";

    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results.rows);
    });
  } else {
    const query = "SELECT * FROM certificate WHERE category = $1";

    db.query(query, [category], (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results.rows);
    });
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM admin WHERE username = $1 AND password = $2";
  db.query(query, [username, password], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(results.rows[0]);
    }
  });
});

app.listen(4000, () => {
  console.log("Server berhasil dirunning di port 4000");
});

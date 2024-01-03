import { useState } from "react";
import axios from "axios";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    recepient: "",
  });

  const sendMessage = async () => {
    try {
      const res = await axios.post("http://localhost:4000/contact", data);
      setData({ name: "", email: "", message: "", recepient: "" });
      alert("Send message successfully");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <section id="contact" className="pt-36 pb-16 bg-gray-200">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Contact</h4>
            <h2 className="font-bold text-font text-3xl mb-4">Contact Here</h2>
            <p className="font-medium text-md text-secondery md:text-lg text-gray-500">
              Fill in your personal details and the message you want to convey.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/3 lg:mx-auto">
          <div className="w-full px-4 mb-8">
            <label for="name" className="text-base text-primary font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-white text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              value={data.name}
              required
            />
          </div>
          <div className="w-full px-4 mb-8">
            <label for="email" className="text-base text-primary font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-white text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
              required
            />
          </div>
          <div className="w-full px-4 mb-8">
            <label for="messege" className="text-base text-primary font-bold">
              Messege
            </label>
            <textarea
              type="text"
              id="messege"
              className="w-full bg-white text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:border-primary h-32"
              onChange={(e) => setData({ ...data, message: e.target.value })}
              value={data.message}
              required
            ></textarea>
          </div>
          <div className="w-full px-4">
            <button
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow=lg transition duration-500"
              onClick={() => sendMessage()}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Contact };

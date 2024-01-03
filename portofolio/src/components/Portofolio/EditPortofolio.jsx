import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Logo from "../Navbar/Logo";

function EditPortofolio() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("project_title", data?.project_title);
      formData.append("description", data?.description);
      if (imageFile) {
        formData.append("upload_project", imageFile);
      }

      const res = await axios.patch(
        `http://localhost:4000/portofolio/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("tes", res.data);

      alert("Portfolio updated successfully");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/portofolio/${id}`);
        console.log("data", res.data);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Logo></Logo>

      <section id="add" className="pt-30 pb-16">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-10">
              <h2 className="font-bold text-primary text-3xl mb-2">
                Edit Portfolio
              </h2>
              <p className="font-medium text-md text-secondery md:text-lg text-font">
                Fill out the form and add your newest portfolio
              </p>
              <div className="flex gap-2 justify-center m-3">
                <Link to="/MyPortofolio">
                  <h4 className="text-base text-gray-500 hover:text-primary">
                    Portofolio |
                  </h4>
                </Link>
                <Link to="/AddProject">
                  <h4 className="text-base  text-gray-500 hover:text-primary">
                    Add Portofolio
                  </h4>
                </Link>
              </div>
            </div>
          </div>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label for="name" className="text-base text-primary font-bold">
                  Project Title
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-200 text-dark p-3 rounded-md focus:ring-primary focus:border-primary"
                  onChange={(e) =>
                    setData({ ...data, project_title: e.target.value })
                  }
                  value={data?.project_title}
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label for="image" className="text-base text-primary font-bold">
                  Upload Project
                </label>
                <img
                  src={`http://localhost:4000/upload_project/${data?.upload_project}`}
                  className={"w-full"}
                />
                <input
                  type="file"
                  className="w-full bg-gray-200 text-dark p-3 rounded-md focus:ring-primary focus:border-primary"
                  onChange={(e) => {
                    setImageFile(e.target.files[0]);
                  }}
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  for="messege"
                  className="text-base text-primary font-bold"
                >
                  Project Description
                </label>
                <textarea
                  type="text"
                  id="messege"
                  className="w-full bg-gray-200 text-dark p-3 rounded-md  focus:ring-primary focus:border-primary h-32"
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                  value={data?.description}
                ></textarea>
              </div>
              <div className="px-4 flex justify-end">
                <button
                  className="text-base text-white bg-primary py-2 px-5 rounded-full hover:opacity-80 hover:shadow=lg transition duration-500"
                  onClick={() => handleUpdate()}
                >
                  Update
                </button>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default EditPortofolio;

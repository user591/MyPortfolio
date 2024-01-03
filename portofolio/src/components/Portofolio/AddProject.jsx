import { Link } from "react-router-dom";
import Logo from "../Navbar/Logo";
import { useState } from "react";
import axios from "axios";

function AddProject() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ project_title: "", description: "" });
  const [imageFile, setImageFile] = useState(null);
  const handlePost = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("project_title", data?.project_title);
      formData.append("description", data?.description);
      if (imageFile) {
        formData.append("upload_project", imageFile);
      }

      const res = await axios.post(
        `http://localhost:4000/portofolio`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Portfolio added successfully");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <>
      <Logo></Logo>

      <section id="add" className="pt-30 pb-16">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-10">
              <h2 className="font-bold text-primary text-3xl mb-2">
                Add New Portfolio
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
                required
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label for="image" className="text-base text-primary font-bold">
                Upload Project
              </label>
              <input
                type="file"
                className="w-full bg-gray-200 text-dark p-3 rounded-md focus:ring-primary focus:border-primary"
                onChange={(e) => {
                  setImageFile(e.target.files[0]);
                }}
                required
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label for="messege" className="text-base text-primary font-bold">
                Project Description
              </label>
              <textarea
                type="text"
                id="messege"
                className="w-full bg-gray-200 text-dark p-3 rounded-md  focus:ring-primary focus:border-primary h-32"
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                required
              ></textarea>
            </div>
            <div className="px-4 flex justify-end">
              <button
                className="text-base text-white bg-primary py-2 px-5 rounded-full hover:opacity-80 hover:shadow=lg transition duration-500"
                onClick={() => handlePost()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddProject;

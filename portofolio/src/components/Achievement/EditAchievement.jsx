import Logo from "../Navbar/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditAchievement() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("category", data?.category);
      formData.append("title", data?.title);
      formData.append("caption", data?.caption);
      if (imageFile) {
        formData.append("upload_file", imageFile);
      }

      const res = await axios.patch(
        `http://localhost:4000/certificate/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("tes", res.data);

      alert("Certificate updated successfully");
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
        const res = await axios.get(`http://localhost:4000/certificate/detail/${id}`);
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
      <section id="" className="pt-30 pb-16">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-10">
              <h2 className="font-bold text-primary text-3xl mb-2">
                Edit Achievement
              </h2>
              <p className="font-medium text-md text-secondery md:text-lg text-font">
                Edit your Achievement
              </p>
              <div className="flex gap-2 justify-center m-3">
                <Link to="/MyAchievement">
                  <h4 className="text-base text-gray-500 hover:text-primary">
                    Achievement |
                  </h4>
                </Link>
                <Link to="/AddAchievement">
                  <h4 className="text-base  text-gray-500 hover:text-primary">
                    Add Achievement
                  </h4>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="relative flex flex-wrap mb-8">
              <div className="w-full px-4 mb-3">
                <label for="text" className="text-base text-primary font-bold">
                  Category
                </label>
              </div>
              <select
                id="button-select"
                className="appearance-none w-full bg-white border border-primary rounded-full px-4 py-2 pr-8 shadow-sm focus:outline-none focus:border-primary text-font"
                placeholder="choose category"
                onChange={(e) => setData({ ...data, category: e.target.value })}
                value={data?.category}
              >
                <option value="course">Course</option>
                <option value="lomba">Lomba</option>
                <option value="seminar">Seminar</option>
                <option value="magang">Magang</option>
                <option value="webinar">Webinar</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-font">
                <svg
                  className="fill-current h-8 w-8 mt-14"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7.293 5.293a1 1 0 011.414 0L10 6.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" />
                  {/* <path d="M10 18a1 1 0 01-.707-.293l-2-2a1 1 0 111.414-1.414L10 15.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-.707.293z" /> */}
                </svg>
              </div>
            </div>
            <div className="w-full px-4 mb-8">
              <label for="title" className="text-base text-primary font-bold">
                Achievement Title
              </label>
              <input
                type="text"
                id=""
                className="w-full bg-gray-200 text-dark p-3 rounded-md focus:ring-primary focus:border-primary"
                onChange={(e) => setData({ ...data, title: e.target.value })}
                value={data?.title}
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label for="title" className="text-base text-primary font-bold">
                Upload Certificate
              </label>
              <img
                src={`http://localhost:4000/upload_file/${data?.upload_file}`}
                className={"w-full"}
              />
              <input
                type="file"
                id=""
                className="w-full bg-gray-200 text-dark p-3 rounded-md focus:ring-primary focus:border-primary"
                onChange={(e) => {
                  setImageFile(e.target.files[0]);
                }}
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label for="messege" className="text-base text-primary font-bold">
                Caption
              </label>
              <textarea
                type="text"
                id="messege"
                className="w-full bg-gray-200 text-dark p-3 rounded-md  focus:ring-primary focus:border-primary h-32"
                onChange={(e) => setData({ ...data, caption: e.target.value })}
                value={data?.caption}
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

export default EditAchievement;

import Logo from "../Navbar/Logo";
import { useNavigate , Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MyAchievement() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:4000/certificate/${id}`);
      console.log(res.data);
      window.location.reload();
      alert("Certificate successfully deleted");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/certificate");
        console.log(res.data);
        setData(res.data.reverse());
      } catch (err) {
        console.log(err);
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
                My Achievement
              </h2>
              <p className="font-medium text-md text-secondery md:text-lg text-font">
                This is your Achievement
              </p>
              <div className="flex gap-2 justify-center m-3">
                <Link to="/MyAchievement">
                  <h4 className="text-base text-gray-500">Achievement |</h4>
                </Link>
                <Link to="/AddAchievement">
                  <h4 className="text-base  text-gray-500">Add Achievement</h4>
                </Link>
              </div>
            </div>
            <div className="border-t border-gray-400 w-full"></div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:2-10/12 xl:mx-auto">
            {data.map((item) => {
              return (
                <div key={item.id} className="mb-12 p-4 md:w-1/4">
                  <div className="rounded-md shadow-md overflow-hidden p-4 bg-white">
                    <img
                      className="rounded-md"
                      src={`http://localhost:4000/upload_file/${item.upload_file}`}
                      alt={item.upload_file}
                      width="w-full"
                    />
                    <h3>
                      <a
                        href="#"
                        className="block font-semibold text-font mt-5 mb-3 text-xl hover:text-primary truncate"
                      >
                        {item.title}
                      </a>
                    </h3>

                    <p className="font-medium text-base text-gray-500 text-justify truncate">
                      {item.caption}
                    </p>
                    <div className="px-2 flex justify-end">
                      <button
                        type="submit"
                        className="text-base text-white bg-primary py-2 px-3 rounded-full hover:opacity-80 hover:shadow=lg transition duration-500"
                        onClick={() => navigate(`/MyAchievement/${item.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        type="submit"
                        className="text-base text-white bg-primary py-2 px-3 rounded-full hover:opacity-80 hover:shadow=lg transition duration-500"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default MyAchievement;

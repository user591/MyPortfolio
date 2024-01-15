import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthContext";

function Portofolio() {
  const [data, setData] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/portofolio");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <section id="portofolio" className="pt-36 pb-16 bg-gray-200">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Portfolio</h4>
            <h2 className="font-bold text-font text-3xl mb-4">
              Project
              {user && (
                <sup>
                  <Link to="/MyPortofolio">
                    <img
                      className="h-7 inline justify-end opacity-30"
                      src="src/assets/edit.png"
                    />
                  </Link>
                </sup>
              )}
            </h2>
            <p className="font-medium text-md text-gray-500">
              Saya memiliki sejumlah proyek yang telah saya selesaikan
              sebelumnya, yang meliputi berbagai bidang mulai dari pengembangan
              perangkat lunak, hingga desain grafis, serta proyek-proyek yang
              saya selesaikan saat mengikuti program
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:2-10/12 xl:mx-auto">
          {data.map((item) => {
            return (
              <div key={item.id} className="mb-12 p-4 md:w-1/3">
                <div className="rounded-md shadow-md overflow-hidden p-4 bg-white">
                  <img
                    className="rounded-md"
                    src={`http://localhost:4000/upload_project/${item.upload_project}`}
                    alt={item.upload_project}
                    width="w-full"
                  />
                  <h3>
                    <a
                      href="#"
                      className="block font-semibold text-font mt-5 mb-3 text-xl hover:text-primary truncate"
                    >
                      {item.project_title}
                    </a>
                  </h3>

                  <p className="font-medium text-base text-gray-500 text-justify truncate">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="block font-base text-gray-500 mt-5 mb-3 hover:text-primary"
                  >
                    See more
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Portofolio };

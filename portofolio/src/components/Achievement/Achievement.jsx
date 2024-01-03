import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../AuthContext";

function Achievement() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("all");

  const { user } = useAuth();
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/certificate/${type}`
        );
        console.log(res.data);
        setData(res.data.reverse());
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getData();
  }, [type]);
  return (
    <section id="achivement" className="pt-36 pb-16">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Achivement</h4>
            <h2 className="font-bold text-font text-3xl mb-4">
              Certificate
              {user && (
                <sup>
                  <Link to="/MyAchievement">
                    <img
                      className="h-7 inline justify-end opacity-30"
                      src="src/assets/edit.png"
                    />
                  </Link>
                </sup>
              )}
            </h2>
          </div>
          <div className="relative flex flex-wrap">
            <p className="font-semibold py-3 text-base text-font">
              Select an Option:
            </p>
            <select
              id="button-select"
              onChange={(e) => setType(e.target.value)}
              className="appearance-none w-full bg-white border border-primary rounded-full px-4 py-2 pr-8 shadow-sm focus:outline-none focus:border-primary text-font"
            >
              <option value="all">Semua</option>
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
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:2-10/12 xl:mx-auto">
          {data?.length === 0 ? (
            <h1>Tidak Terdapat Data</h1>
          ) : (
            data.map((item) => {
              return (
                <div key={item.id} className="mb-12 p-4 md:w-1/3">
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
                    <a
                      href="#"
                      className="block font-base text-gray-500 mt-5 mb-3 hover:text-primary"
                    >
                      See more
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

export { Achievement };

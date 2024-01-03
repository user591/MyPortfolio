function Profile() {
  return (
    <section id="profile" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-font md:text-xl">
              <i>Anyeong!</i> Saya
              <span className="block font-bold text-primary text-4xl mt-1 lg:text-5xl">
                Alfina Nur Hidayah
              </span>
            </h1>
            <h2 className="font-medium text-lg text-gray-500 mt-2 mb-5 lg:text-2xl">
              🏛 Students at <span className="text-font">Amikom Yogyakarta</span>
            </h2>
            <p className="font-medium text-font mb-10 text-justify">
              I am a 7th-semester student, interested in the world of
              technology, programming, design, data analysis and also have a
              creative mind. I have high curiosity, can work in a team or
              individually. I like to learn new things.
            </p>

            <a
              href="#contact"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contact Here
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <img
                src="src/assets/pict.png"
                alt="Alfina Nur Hidayah"
                className="max-w-full mx-auto mb-10"
              />
              <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-100">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#f59e0b"
                    d="M51.1,-64.8C66.7,-59,80.3,-44.7,78.4,-30.2C76.6,-15.8,59.4,-1,49.3,11.7C39.3,24.5,36.4,35.4,29.4,43.1C22.4,50.9,11.2,55.5,-2,58.3C-15.2,61,-30.4,61.9,-45.7,56.9C-61,51.8,-76.3,40.8,-81.4,26.2C-86.4,11.6,-81.3,-6.6,-73.3,-21.5C-65.3,-36.5,-54.4,-48.2,-41.7,-55C-29,-61.8,-14.5,-63.8,1.6,-66C17.7,-68.2,35.4,-70.7,51.1,-64.8Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Profile };

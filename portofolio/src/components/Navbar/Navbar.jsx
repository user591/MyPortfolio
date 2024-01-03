import { useEffect, useState } from "react"; 
import Logo from "../Navbar/Logo";

function Navbar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false); // Menambahkan state untuk menentukan apakah navbar harus diperbaiki atau tidak

  useEffect(() => {
    // Menambahkan event listener saat komponen dimuat
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen dilepaskan
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fungsi untuk menangani perubahan saat menggulir halaman
  const handleScroll = () => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      setIsNavbarFixed(true); // Navbar perlu diperbaiki
    } else {
      setIsNavbarFixed(false); // Navbar tidak perlu diperbaiki
    }
  };

  // Fungsi untuk menangani klik hamburger
  const handleHamburgerClick = () => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };

  return (
    <>
      <header
        className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${
          isNavbarFixed ? "navbar-fixed" : ""
        }`}
      >
        <div className="w-full">
          <div className="flex item-center justify-between">
            <Logo></Logo>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
                onClick={handleHamburgerClick} // Menambahkan event onClick untuk hamburger
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#profile"
                      className="text-base text-font py-2 mx-8 flex group-hover:text-primary"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portofolio"
                      className="text-base text-font py-2 mx-8 flex group-hover:text-primary"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#achivement"
                      className="text-base text-font py-2 mx-8 flex group-hover:text-primary"
                    >
                      Achievement
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-font py-2 mx-8 flex group-hover:text-primary"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#info"
                      className="text-base text-font py-2 mx-8 flex group-hover:text-primary"
                    >
                      Info
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export { Navbar };

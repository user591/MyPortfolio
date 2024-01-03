import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="justify-between px-20">
      <Link to="/" className="font-bold text-lg text-font block py-6">
        <img
          className="h-8 inline justify-start"
          src="https://cdn-icons-png.flaticon.com/512/1990/1990920.png"
          alt="Logo"
        />
        <span className="text-primary">Alfina</span> Portofolio
      </Link>
    </div>
  );
}

export default Logo;

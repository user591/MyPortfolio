import { Route, Routes } from "react-router-dom";
import App from "./App";
import AddProject from "./components/Portofolio/AddProject";
import MyPortofolio from "./components/Portofolio/MyPortofolio";
import AddAchievement from "./components/Achievement/AddAchievement";
import MyAchievement from "./components/Achievement/MyAchievement";
import EditPortofolio from "./components/Portofolio/EditPortofolio";
import EditAchievement from "./components/Achievement/EditAchievement";
import LoginForm from "./components/Login/login";

function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/AddProject" element={<AddProject />} />
      <Route path="/MyPortofolio" element={<MyPortofolio />} />
      <Route path="/MyPortofolio/:id" element={<EditPortofolio />} />
      <Route path="/AddAchievement" element={<AddAchievement />} />
      <Route path="/MyAchievement" element={<MyAchievement />} />
      <Route path="/MyAchievement/:id" element={<EditAchievement />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default RouteComponent;

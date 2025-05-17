import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const MainTemplate = () => {
  return (
    <div className="bg-black px-3 py-5 text-white">
      <div className="grid grid-cols-[215px_1fr] gap-5 max-w-[1300px] mx-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};



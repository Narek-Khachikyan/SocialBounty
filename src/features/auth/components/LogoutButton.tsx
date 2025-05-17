import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../shared/firebase"; // Adjust path as needed
import { useNavigate } from "react-router";

const LogoutButton: React.FC<{ name?: string }> = ({ name = "Log out" }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    // You can use your existing HeaderButton styles or create new ones
    <button
      onClick={handleLogout}
      className="text-white p-2 text-xl font-bold hover:bg-gray-600 hover:rounded-md duration-200 transition-colors ease-in-out cursor-pointer"
    >
      {name}
    </button>
  );
};

export default LogoutButton;

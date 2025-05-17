import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../shared/firebase";
import { Link, useNavigate } from "react-router";

export const SignInPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Sign In
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
          <input
            className="py-3 px-4 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="py-3 px-4 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button
            className="py-3 px-4 bg-blue-500 text-white rounded text-base font-bold cursor-pointer hover:bg-blue-600 transition-colors duration-150"
            type="submit"
            // disabled={loading} // If you add loading state
          >
            {/* {loading ? "Signing In..." : "Sign In"} // If you add loading state */}
            Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register" // Adjust the path as needed
            className="text-blue-500 hover:text-blue-600 font-bold no-underline hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

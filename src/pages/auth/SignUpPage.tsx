// src/components/SignUp.tsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../shared/firebase";
import { Link } from "react-router";

export const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="py-3 px-4 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="py-3 px-4 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={loading}
            className={`py-3 px-4 bg-blue-500 text-white rounded text-base font-bold ${
              loading
                ? "cursor-default opacity-70"
                : "cursor-pointer hover:bg-blue-600"
            } transition-colors duration-150`}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
          {error && (
            <p className="text-red-500 text-center mt-2 text-sm">{error}</p>
          )}
        </form>
        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-600 font-bold no-underline hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

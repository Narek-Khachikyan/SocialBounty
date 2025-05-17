import { Routes, Route } from "react-router";
import HomePage from "./HomePage";
import MainTemplate from "../shared/templates/MainTemplate";
import SignUpPage from "./auth/SignUpPage";
import SignInPage from "./auth/SignInPage";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={""} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="*" element={""} />
      </Route>
    </Routes>
  );
};

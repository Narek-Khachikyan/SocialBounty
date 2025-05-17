import { Routes, Route } from "react-router";
import { MainTemplate } from "../shared/templates";
import { HomePage } from "./HomePage";
import { SignInPage } from "./auth/SignInPage";
import { SignUpPage } from "./auth/SignUpPage";

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

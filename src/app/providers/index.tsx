import type { ReactNode } from "react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "../store";
import { AuthProvider } from "./authProviders";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>{children}</Provider>
      </AuthProvider>
    </BrowserRouter>
  );
};

import { NavLink } from "react-router";
import HeaderButton from "./HeaderButton";
import { useAuth } from "../../../../app/providers/authProviders";
import LogoutButton from "../../../../features/auth/components/LogoutButton";

const headerNavItems = [
  { name: "Home", path: "/" },
  { name: "Profile", path: "/profile" },
  { name: "Sign in", path: "/login" },
  { name: "sign up", path: "/register" },
];

const HeaderLogedInItems = [
  { name: "Home", path: "/" },
  { name: "Profile", path: "/profile" },
];

export const Header = () => {
  const { user } = useAuth();
  return (
    <header>
      <ul className="flex flex-col gap-5 max-w-xs">
        {user ? (
          <>
            {HeaderLogedInItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path}>
                  <HeaderButton name={item.name} />
                </NavLink>
              </li>
            ))}
            <li>
              <LogoutButton />
            </li>
          </>
        ) : (
          headerNavItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path}>
                <HeaderButton name={item.name} />
              </NavLink>
            </li>
          ))
        )}
      </ul>
    </header>
  );
};

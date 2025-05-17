import { NavLink } from "react-router";
import HeaderButton from "./ui/HeaderButton";
import { useAuth } from "../../../app/providers/authProviders";
import LogoutButton from "../../../features/auth/components/LogoutButton";

interface NavItem {
  name: string;
  path: string;
  requiresAuth?: boolean;
  hideWhenAuth?: boolean;
}

const allNavItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Profile", path: "/profile", requiresAuth: true },
  { name: "Sign in", path: "/login", hideWhenAuth: true },
  { name: "Sign up", path: "/register", hideWhenAuth: true },
];

export const Header = () => {
  const { user } = useAuth();

  const displayedNavItems = allNavItems.filter((item) => {
    if (item.requiresAuth && !user) return false;
    if (item.hideWhenAuth && user) return false;
    return true;
  });

  return (
    <header>
      <nav>
        <ul className="flex flex-col gap-5 max-w-xs">
          {displayedNavItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path}>
                {({ isActive }) => (
                  <HeaderButton name={item.name} isActive={isActive} />
                )}
              </NavLink>
            </li>
          ))}
          {user && (
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

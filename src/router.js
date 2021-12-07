import { Users } from "./containers/Users/Users";
import { Link, Outlet, ReactLocation, Router, useMatch } from "react-location";
import { http } from "./service/api";
import { Header } from "./components/Header";

const location = new ReactLocation();
const routes = [
  {
    path: "/",
    element: <Header>Dashboard</Header>,
  },
  {
    path: "/users",
    element: <Users />,
    loader: async () => ({
      users: await http.get("/users").then((data) => {
        return data.data.users;
      }),
    }),
    pendingElement: async () => <div>Loading...</div>,
    pendingMs: 300,
  },
];

export { location, routes, Router, Link, Outlet, useMatch };

import { Link, Outlet, ReactLocation, Router, useMatch } from "react-location";
import { ReactLocationSimpleCache } from "react-location-simple-cache";
import { http } from "./service/api";
import { Header, Spinner } from "./components";

const location = new ReactLocation();
const cache = new ReactLocationSimpleCache();
const routes = [
  {
    path: "/",
    element: <Header>Dashboard</Header>,
  },
  {
    path: "/users",
    element: () =>
      import("./containers/Users/Users").then((module) => <module.default />),
    loader: cache.createLoader(async () => ({
      users: await http.get("/users").then((data) => {
        return data.data.users;
      }),
    })),
    pendingElement: async () => (
      <Spinner variant="green" message="Loading users" />
    ),
    pendingMs: 300,
  },
  {
    path: "/products",
    element: () =>
      import("./containers/Products").then((module) => <module.default />),
  },
];

export { location, routes, Router, Link, Outlet, useMatch };

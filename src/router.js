import { Users } from "./containers/Users/Users";
import { Link, Outlet, ReactLocation, Router } from "react-location";

const location = new ReactLocation();
const routes = [
  {
    path: "/",
    element: <h1>Dashboard</h1>,
  },
  {
    path: "/users",
    element: <Users />,
  },
];

export { location, routes, Router, Link, Outlet };

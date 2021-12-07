import { Users } from "./containers/Users/Users";
import { Link, Outlet, ReactLocation, Router, useMatch } from "react-location";
import { http } from "./service/api";

const location = new ReactLocation();
const routes = [
  {
    path: "/",
    element: (
      <header>
        <div className="max-w-7xl mx-auto pb-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
    ),
  },
  {
    path: "/users",
    element: <Users />,
    loader: async () => ({
      users: await http.get("/users").then((data) => {
        return data.data.users;
      }),
    }),
  },
];

export { location, routes, Router, Link, Outlet, useMatch };

import { useEffect, useState } from "react";
import { http } from "../../service/api";

export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    http.get("/users").then(({ data }) => setUsers(data.users));
  }, []);

  return (
    <div>
      {users?.map((user) => (
        <p key={user.id} data-testid="user">
          {user.name}
        </p>
      ))}
    </div>
  );
}

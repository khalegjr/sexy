import { Card } from "./Card";
import { useMatch } from "../../router";

export function Users() {
  const {
    data: { users },
  } = useMatch();

  return (
    <div>
      <header>
        <div className="max-w-7xl mx-auto pb-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
        </div>
      </header>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users?.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

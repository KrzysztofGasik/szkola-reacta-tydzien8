import React from "react";

import "./UserList.css";
import User from "../User";

export default function UserList() {
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div className="userlist">
      {data.map((user) => (
        <User key={user.login.uuid} data={user} />
      ))}
    </div>
  );
}

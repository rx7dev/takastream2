import React from "react";
import UsersItem from "./UsersItem";

const UsersList = ({ users, onUsersSelect }) => {
  const renderedUsersList = users.map(user => {
    return (
      <UsersItem key={user.id} onUSersSelect={onUsersSelect} user={user} />
    );
  });
  return (
    <div className="fluid-container">
      <div className="list">
        <div className="wrapper-tg">{renderedUsersList}</div>
      </div>
    </div>
  );
};

export default UsersList;

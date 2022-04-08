import * as React from "react";

export type UserListProps = {
  title: string
}

const UserList = ({ title }: UserListProps) => (
  <div>
    <h2>{title}</h2>
    <ul>
      <li>Zak</li>
      <li>Andre</li>
      <li>Eugenio</li>
    </ul>
  </div>
);

export default UserList;

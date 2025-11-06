import type React from "react";
import { DataTableDemo } from "./components/DataTableDemo";
import { DialogDemo } from "./components/DialogDemo";
import type { IUser } from "./types/types";
import { useEffect, useState } from "react";
import { addUser, deleteUser, getUsers, updateUser } from "./apis/api";

const App: React.FC = () => {
  const [userList, setUserList] = useState<IUser[]>([]);
  let [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  async function fetchUsers() {
    const users = await getUsers();
    setUserList(users.user);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  async function handleSave(user: IUser) {
    if (user._id) {
      await updateUser(user._id, user);
      console.log("Updated:", user);
    } else {
      await addUser(user);
      console.log("Added:", user);
    }
    await fetchUsers();
  }

  async function deleteUserHandler(userId: string) {
    await deleteUser(userId);
    await fetchUsers();
  }

  function handleEdit(user: IUser) {
    setSelectedUser(user);
    setDialogOpen(true);
  }

  return (
    <div className="p-10">
      <DialogDemo
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        selectedUser={selectedUser}
        onSave={handleSave}
      />
      <DataTableDemo
        users={userList}
        onEdit={handleEdit}
        deleteValue={deleteUserHandler}
      />
    </div>
  );
};

export default App;

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const api = "https://retoolapi.dev/7lgZBX/users";

interface User {
  id: string;
  name: string;
  email: string;
}

function UserData() {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingUser, setEditingUser] = useState<User | null>(null); // Track the user being edited
  const [showModal, setShowModal] = useState(false);
  // Fetching users
  const { data, isLoading, isError, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async (): Promise<User[]> => {
      const response = await axios.get(api);
      return response.data;
    },
  });

  // Mutation for adding users
  const mutation = useMutation({
    mutationFn: async () => {
      await axios.post(api, {
        name,
        email,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setName(""); // Clear input fields
      setEmail("");
    },
  });
  const mutationAfterDelete = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`${api}` + "/" + `${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
  const mutationAfterEdit = useMutation({
    mutationFn: async ({ id, name, email }: User) => {
      await axios.put(`${api}/${id}`, { name, email });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] }); // Refetch data
      setEditingUser(null); // Close modal
      setName("");
      setEmail("");
      setShowModal(false)
    },
  });
  const handleDelete = (id: string) => {
    mutationAfterDelete.mutate(id);
  };

  //edit
  const handleEditClick = (user: User) => {
    setEditingUser(user); // Open modal with user's data
    setName(user.name);
    setEmail(user.email);
    setShowModal(true);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUser) {
      mutationAfterEdit.mutate({
        id: editingUser.id,
        name,
        email,
      });
    }
  };
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      mutation.mutate();
    } else {
      alert("Both fields are required!");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="w-[100%]">
      {showModal && (
        <div className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit User</h2>
            <form onSubmit={handleEditSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Enter email"
                />
              </div>
              <div className="flex justify-between gap-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="w-full bg-gray-300 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <h1>Add User Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
      <div className="w-full h-[80vh] overflow-y-scroll border">
        <table className="w-full border-collapse border">
          <thead className="sticky top-0 bg-white">
            <tr>
              <th className="border">Id</th>
              <th className="border">Username</th>
              <th className="border">Email</th>
              <th colSpan={2} className="border">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <tr key={user.id} className="border">
                <td className="border">{index + 1}</td>
                <td className="border">{user.name}</td>
                <td className="border">{user.email}</td>
                <td className="border">
                  <button
                    className="bg-yellow-500 px-[6px] rounded-[5px] text-white"
                    onClick={() => handleEditClick(user)}
                  >
                    Edit
                  </button>
                </td>
                <td className="border">
                  <button
                    className="bg-red-500 px-[6px] rounded-[5px] text-white"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserData;

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { BellRing, Check, Edit, Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";


const UserUsers = () => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    courseRegistered: '', // added field
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      email: "john@example.com",
      password: "",
      courseRegistered: "Course 1", // added field
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      email: "jane@example.com",
      password: "",
      courseRegistered: "Course 2", // added field
    },
  ]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.username || !formData.email || !formData.password || !formData.courseRegistered) {
      setError("Please fill in all the details");
    } else {
      if (editMode) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === currentUserId ? { ...user, ...formData } : user
          )
        );
      } else {
        setUsers((prevUsers) => [
          ...prevUsers,
          { id: users.length + 1, ...formData },
        ]);
      }
      setOpen(false);
      setEditMode(false);
      setFormData({ name: '', username: '', email: '', password: '', courseRegistered: '' }); // reset form data
      setError(null);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
      courseRegistered: user.courseRegistered, // added field
    });
    setCurrentUserId(user.id);
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Users</CardTitle>
          <Button onClick={() => { setOpen(true); setEditMode(false); }}>
            <Plus className='h-10 w-10 mr-2' /> Add
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Course Registered</TableHead> {/* added column */}
                <TableHead className="flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.courseRegistered}</TableCell>
                  <TableCell>
                    <span className='w-full h-full flex justify-center items-center gap-3'>
                      <Edit className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md'
                        onClick={() => handleEdit(user)} />
                                            <TrashIcon className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md'
                        onClick={() => handleDelete(user.id)} />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Sheet open={open} onClose={() => setOpen(false)}>
        <SheetHeader>
          <SheetTitle>{editMode ? 'Edit User' : 'Add User'}</SheetTitle>
        </SheetHeader>
        <SheetContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={formData.name} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="username">Username</Label>
                <Input id="username" value={formData.username} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={formData.email} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" value={formData.password} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="courseRegistered">Course Registered</Label>
                <Input id="courseRegistered" value={formData.courseRegistered} onChange={handleInputChange} />
              </div>
            </div>
            {error && (
              <div className="text-red-500">{error}</div>
            )}
            <div className="flex justify-end gap-4 mt-4">
              <Button type="button" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit">{editMode ? 'Update' : 'Add'}</Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default UserUsers;
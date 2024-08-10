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

const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    courseName: '',
    institution: '',
    instructor: '',
    password: '',
    courseRegistered: '', // added field
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      courseName: "Course 1",
      institution: "Institution 1",
      instructor: "John Doe",
      password: "",
      courseRegistered: "Course 1", // added field
    },
    {
      id: 2,
      courseName: "Course 2",
      institution: "Institution 2",
      instructor: "Jane Smith",
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
    if (!formData.courseName || !formData.institution || !formData.instructor || !formData.password || !formData.courseRegistered) {
      setError("Please fill in all the details");
    } else if (formData.password !== '1234') {
      setError("Password does not match");
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
      setFormData({ courseName: '', institution: '', instructor: '', password: '', courseRegistered: '' }); // reset form data
      setError(null);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      courseName: user.courseName,
      institution: user.institution,
      instructor: user.instructor,
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
          <CardTitle>Courses</CardTitle>
          <Button onClick={() => { setOpen(true); setEditMode(false); }}>
            <Plus className='h-10 w-10 mr-2' /> Add
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Course Name</TableHead>
                <TableHead>Institution</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Course Registered</TableHead> {/* added column */}
                <TableHead className="flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.courseName}</TableCell>
                  <TableCell>{user.institution}</TableCell>
                  <TableCell>{user.instructor}</TableCell>
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
          <SheetTitle>{editMode ? 'Edit Course' : 'Add Course'}</SheetTitle>
        </SheetHeader>
        <SheetContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="courseName">Course Name</Label>
                <Input id="courseName" value={formData.courseName} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="institution">Institution</Label>
                <Input id="institution" value={formData.institution} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="instructor">Instructor</Label>
                <Input id="instructor" value={formData.instructor} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" value={formData.password} onChange={handleInputChange} />
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

export default AdminUsers;

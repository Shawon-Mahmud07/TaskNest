import React, { useContext, useState } from "react";
import { LuPlus } from "react-icons/lu";
// React Hook Form
import { useForm } from "react-hook-form";
import { RiTodoFill } from "react-icons/ri";
import { FcTodoList } from "react-icons/fc";
import { MdDoubleArrow } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";

import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ToDoList = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleOpenEdit = () => setOpenEdit((cur) => !cur);

  const [singleData, setSingleData] = useState({});

  const handleEditBtn = async (_id) => {
    try {
      const response = await fetch(
        `https://task-nest-server-livid.vercel.app/single-todo?id=${_id}`
      );
      const data = await response.json();
      setSingleData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(singleData);

  // Delete todo task
  const handleDeleteBtn = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://task-nest-server-livid.vercel.app/delete-todo/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Task has been Deleted.", "success");
              todoTaskRefetch();
            }
          });
      }
    });
  };

  // get user todo task list
  const {
    data: allToDoTask,
    isLoading: isLoadingFrom,
    refetch: todoTaskRefetch,
  } = useQuery({
    queryFn: async () => {
      const res = await axios.get(
        `https://task-nest-server-livid.vercel.app/user-todo?email=${user?.email}`
      );
      return res.data;
    },

    queryKey: ["AllTask", "updateTask"],
  });

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const title = data.title;
    const description = data.description;
    const deadline = data.date;
    const priority = data.priority;
    const email = user?.email;
    const toDoList = {
      title,
      description,
      deadline,
      priority,
      email,
    };
    console.log(toDoList);

    // send data to the server
    fetch("https://task-nest-server-livid.vercel.app/Add-ToDo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toDoList),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        todoTaskRefetch();
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "New Task Created Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          reset();
        }
      });
  };
  if (isLoadingFrom) {
    return <div>loading...</div>;
  }
  return (
    <div className="w-full h-screen overflow-y-scroll  ">
      {/* Create Task Modal/Form*/}
      <div>
        <div className=" text-end mt-5 ">
          <Button
            className=" bg-gradient-to-r from-[#6F00CC]  to-[#9000CC]  hover:from-[#6F00CC] px-2 py-2 hover:to-[#9000CC] mr-6"
            onClick={handleOpen}
          >
            <LuPlus className="inline pb-1 mr-1 text-xl" />
            Create New Task
          </Button>
        </div>

        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardBody className="flex flex-col gap-4">
                <Typography variant="h4" color="blue-gray">
                  Create a Task
                </Typography>
                <Typography className="-mb-2" variant="h6">
                  Title
                </Typography>
                <Input
                  {...register("title")}
                  type="text"
                  label="Title"
                  size="lg"
                  required
                />
                <Typography className="-mb-2" variant="h6">
                  Description
                </Typography>
                <textarea
                  {...register("description")}
                  className="border"
                  cols="10"
                  rows="4"
                  required
                ></textarea>
                <Typography className="-mb-2" variant="h6">
                  Deadline
                </Typography>
                <input
                  className="border py-1"
                  {...register("date")}
                  type="date"
                  required
                />
                <Typography className="-mb-2" variant="h6">
                  Priority
                </Typography>
                <select {...register("priority")} className="border py-2">
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </CardBody>
              <CardFooter className="pt-0">
                <div className="text-right">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#6F00CC]  to-[#9000CC]  hover:from-[#6F00CC] px-2 py-2 hover:to-[#9000CC] "
                    onClick={handleOpen}
                  >
                    <LuPlus className="inline pb-1 mr-1 text-xl" />
                    Create Task
                  </Button>
                </div>
              </CardFooter>
            </form>
          </Card>
        </Dialog>
      </div>

      {/* Task mainlayout */}
      <div className=" mt-5 grid grid-cols-3 text-center mr-4 gap-3 ">
        {/* to-do */}
        <div className=" bg-gray-500 py-2 rounded-md">
          <h3 className="text-xl font-bold flex justify-center items-center ">
            <RiTodoFill />
            To-Do ({allToDoTask.length})
          </h3>
          <hr />

          <div className="mt-6   ">
            {allToDoTask.map((todo, index) => {
              return (
                <div key={index}>
                  <Card className="h-auto mb-3 mx-5 rounded-md">
                    <CardBody className="p-3">
                      <h4 className="mb-1 text-lg break-words">
                        {" "}
                        {todo?.title}{" "}
                      </h4>
                      <p className="text-sm text-justify break-words ">
                        {todo?.description}
                      </p>

                      <div className="flex mt-3 justify-between">
                        <h5 className="text-sm text-left ">
                          Deadline: {todo?.deadline}
                        </h5>
                        <div className="flex gap-3">
                          <div
                            onClick={() => {
                              handleEditBtn(todo?._id);
                            }}
                          >
                            <FaEdit onClick={handleOpenEdit} title="Edit" />
                          </div>
                          <ImBin
                            title="Delete"
                            onClick={() => {
                              handleDeleteBtn(todo?._id);
                            }}
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* ongoing */}
        <div className=" bg-blue-gray-500 py-2 rounded-md">
          <h3 className="text-xl font-bold flex justify-center items-center ">
            <MdDoubleArrow />
            Ongoing
          </h3>
          <hr />
        </div>
        {/* completed */}
        <div className=" bg-green-300  py-2 rounded-md ">
          <h3 className="text-xl font-bold flex justify-center items-center   ">
            <FcTodoList />
            Completed
          </h3>
          <hr />
        </div>
        {/* Dialog for Edit todo task */}
        <Dialog
          size="xs"
          open={openEdit}
          handler={handleOpenEdit}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <form>
              <CardBody className="flex flex-col gap-4">
                <Typography variant="h4" color="blue-gray">
                  Create a Task
                </Typography>
                <Typography className="-mb-2" variant="h6">
                  Title
                </Typography>
                <Input
                  {...register("title")}
                  type="text"
                  label="Title"
                  size="lg"
                  defaultValue={singleData?.title}
                  required
                />
                <Typography className="-mb-2" variant="h6">
                  Description
                </Typography>
                <textarea
                  {...register("description")}
                  className="border"
                  cols="10"
                  rows="4"
                  defaultValue={singleData?.description}
                  required
                ></textarea>
                <Typography className="-mb-2" variant="h6">
                  Deadline
                </Typography>
                <input
                  className="border py-1"
                  {...register("date")}
                  type="date"
                  required
                />
                <Typography className="-mb-2" variant="h6">
                  Priority
                </Typography>
                <select {...register("priority")} className="border py-2">
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </CardBody>
              <CardFooter className="pt-0">
                <div className="text-right">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#6F00CC]  to-[#9000CC]  hover:from-[#6F00CC] px-2 py-2 hover:to-[#9000CC] "
                    onClick={handleOpenEdit}
                  >
                    <LuPlus className="inline pb-1 mr-1 text-xl" />
                    Save Task
                  </Button>
                </div>
              </CardFooter>
            </form>
          </Card>
        </Dialog>
      </div>
    </div>
  );
};

export default ToDoList;

import React from "react";
import { LuPlus } from "react-icons/lu";
// React Hook Form
import { useForm } from "react-hook-form";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { Form } from "react-router-dom";

const ToDoList = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full">
      <div>
        <div className=" text-right mt-10">
          <Button
            className="bg-gradient-to-r from-[#6F00CC]  to-[#9000CC]  hover:from-[#6F00CC] px-2 py-2 hover:to-[#9000CC] mr-6"
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
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                  name="title"
                  label="Title"
                  size="lg"
                />
                <Typography className="-mb-2" variant="h6">
                  Description
                </Typography>
                <textarea
                  className="border"
                  id=""
                  cols="10"
                  rows="4"
                ></textarea>
                <Typography className="-mb-2" variant="h6">
                  Deadline
                </Typography>
                <input type="date" name="" id="" />

                <Select {...register("priority")} size="md" label="Priority">
                  <Option value="Low">Low</Option>
                  <Option value="Moderate">Moderate</Option>
                  <Option value="High">High</Option>
                </Select>
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
            </Form>
          </Card>
        </Dialog>
      </div>
    </div>
  );
};

export default ToDoList;

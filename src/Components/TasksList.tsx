import React, { useState } from "react";
import Button from "../assets/Components/Button";
import EditIcon from "../assets/Components/EditIcon";
import EditModal from "../assets/Components/EditModal";
import Modal from "../assets/Components/Modal";

const TasksList = ({ tasksLists, setIndex, setEditShowModal }: any) => {
  return (
    <div>
      {tasksLists?.map((item, i: number) => {
        return (
          <div
            className="flex justify-between items-center bg-bgColor-200 p-5 rounded-lg w-[400px] m-4 relative"
            key={i}
          >
            <div className="absolute top-3 right-3 cursor-pointer">
              <EditIcon
                onClick={() => {
                  setEditShowModal(true);
                  setIndex(i);
                }}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-lg">Title: {item?.title}</p>

              <p className="text-lg">Description: {item?.description}</p>
            </div>
            <div className="text-lg">
              {`${
                item?.time?.hr > 10 ? item?.time?.hr : `0${item?.time?.hr}`
              } : ${
                item?.time?.min > 10 ? item?.time?.min : `0${item?.time?.min}`
              } : ${
                item?.time?.sec > 10 ? item?.time?.sec : `0${item?.time?.sec}`
              }`}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TasksList;

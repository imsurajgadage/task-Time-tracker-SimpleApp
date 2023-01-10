import React, { useEffect, useRef } from "react";
import Button from "./Button";

export default function EditModal({
  setShowModal,
  showModal,
  setTasksList,
  tasksLists,
  index,
}: any) {
  const title = useRef();
  const description = useRef();
  useEffect(() => {
    if (showModal) {
      const list = tasksLists?.find((e, i) => i == index);
      title.current.value = list.title;
      description.current.value = list.description;
    }
  }, [showModal]);
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.8)]">
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 bg-[#4b587c] h-[50%] w-[400px]">
        <h1 className="text-4xl text-bgColor-400 mb-8">TaskList Modal</h1>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <input
              name="title"
              placeholder="Title"
              ref={title}
              disabled={true}
              className="p-2 rounded-lg w-full mb-3 disabled:bg-bgColor-100"
            />
          </div>
          <div className="col-span-12">
            <input
              name="description"
              placeholder="Description"
              ref={description}
              className="p-2 rounded-lg w-full"
            />
          </div>

          <div className="col-span-7 flex mt-5 gap-6">
            <Button
              label="Update"
              onClick={() => {
                let list = [...tasksLists];
                list[index] = {
                  ...list[index],
                  description: description.current.value,
                };
                setTasksList(list);
                setShowModal(false);
              }}
            />
            <Button label="Cancel" onClick={() => setShowModal(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

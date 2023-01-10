import React, { useState } from "react";
import EditModal from "./assets/Components/EditModal";
import Modal from "./assets/Components/Modal";
import TasksList from "./Components/TasksList";
import Timer from "./Components/Timer";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [editShowModal, setEditShowModal] = useState(false);

  const [tasksLists, setTasksList] = useState([]);
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hr: 0,
  });
  const [intervalId, setIntervalId] = useState("");
  const [index, setIndex] = useState(0);
  return (
    <React.Fragment>
      <div className="flex justify-evenly relative h-[100vh] w-[100%]">
        <div className="flex justify-center mt-[10%] w-[50%]">
          <Timer
            setShowModal={setShowModal}
            setTime={setTime}
            time={time}
            intervalId={intervalId}
            setIntervalId={setIntervalId}
            showModal={showModal}
          />
        </div>
        <div className=" flex flex-col items-center w-[50%] ">
          <h1 className="text-4xl mt-10 text-bgColor-400">
            TaskList Section ({tasksLists?.length})
          </h1>
          <div className="overflow-y-scroll h-[75%] my-4">
            <TasksList
              tasksLists={tasksLists}
              setIndex={setIndex}
              setEditShowModal={setEditShowModal}
            />
          </div>
        </div>
        {showModal && (
          <Modal
            setShowModal={setShowModal}
            setTasksList={setTasksList}
            setIntervalId={setIntervalId}
            setTime={setTime}
            intervalId={intervalId}
            time={time}
          />
        )}
        {editShowModal && (
          <EditModal
            setShowModal={setEditShowModal}
            showModal={editShowModal}
            index={index}
            tasksLists={tasksLists}
            setTasksList={setTasksList}
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default App;

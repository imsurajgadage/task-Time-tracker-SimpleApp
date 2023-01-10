import { useState } from "react";
import Button from "../assets/Components/Button";

export default function Timer({
  setShowModal,
  time,
  setTime,
  setIntervalId,
  intervalId,
  showModal,
}: any) {
  const updateTimer = () => {
    setTime((prev) => {
      let newTime = { ...prev };
      if (newTime.sec < 59) newTime.sec += 1;
      else {
        newTime.min += 1;
        newTime.sec = 0;
      }
      if (newTime.min === 60) {
        newTime.min = 0;
        newTime.hr += 1;
      }
      return newTime;
    });
  };

  const pauseOrResume = () => {
    if (!intervalId) {
      let id = setInterval(updateTimer, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId("");
    }
  };

  const save = () => {
    clearInterval(intervalId);
    setIntervalId("");
    setShowModal(true);
  };

  return (
    <div className="min-w-[250px] text-center text-bgColor-400 ">
      <h1 className="text-6xl">Timer</h1>
      <h2 className="text-6xl mt-4 mb-10">{`${time.hr < 10 ? 0 : ""}${
        time.hr
      } : ${time.min < 10 ? 0 : ""}${time.min} : ${time.sec < 10 ? 0 : ""}${
        time.sec
      }`}</h2>
      <div className="flex justify-between mt-2">
        <Button onClick={pauseOrResume} label="Start" disabled={intervalId} />
        <Button onClick={pauseOrResume} label="Pause" disabled={!intervalId} />
        <Button onClick={save} label="Save" disabled={showModal} />
      </div>
    </div>
  );
}

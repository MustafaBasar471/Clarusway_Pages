import React from "react";

const AddTask = ({ handleSubmit }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="space-y-5">
        <div className="flex flex-col">
          <label className="text-xl mb-1 text-white" htmlFor="TaskName">
            Task
          </label>
          <input
            id="TaskName"
            name="taskName"
            className="py-2 px-3 outline-none rounded"
            placeholder="Enter a Task"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl mb-1 text-white" htmlFor="Day">
            Day & Time
          </label>
          <select
            className="py-2 px-3 rounded outline-none"
            required
            name="selectt"
            defaultValue={"0"}
          >
            <option value="0" disabled hidden>
              Select Date & Time
            </option>
            <option value="Dec 12th at 2.30PM">Dec 12th at 2.30PM</option>
            <option value="Dec 12th at 2.30PM">Dec 12th at 2.30PM</option>
            <option value="Dec 12th at 2.30PM">Dec 12th at 2.30PM</option>
            <option value="Dec 12th at 2.30PM">Dec 12th at 2.30PM</option>
            <option value="Dec 12th at 2.30PM">Dec 12th at 2.30PM</option>
          </select>
        </div>
        <button className="bg-red-800 py-2 rounded text-white w-full">
          Save Task
        </button>
      </div>
    </form>
  );
};

export default AddTask;

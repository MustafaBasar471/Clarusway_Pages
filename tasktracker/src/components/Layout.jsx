import React, { useState, useEffect } from "react";
import { Header, AddTask, Task } from "./";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getMilliseconds(),
      title: e.target.taskName.value,
      date: e.target.selectt.value,
      complated: false,
    };
    setData([...data, newTodo]);
    setTodoToLocalStorage(newTodo);
  };

  const handleRemove = (id) => {
    setData(data.filter((todo) => todo.id !== id));
    deleteTodoToStorage(id);
  };

  const handleComplated = (id) => {
    const updatedData = data.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complated: !todo.complated };
      }
      return todo;
    });
    setData(updatedData);
  };

  // LocalStorage Section
  const getData = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
  };

  const setTodoToLocalStorage = (newTodo) => {
    let todo = getData();
    todo.push(newTodo);
    localStorage.setItem("todos", JSON.stringify([...todo]));
  };

  const deleteTodoToStorage = (deleteTodoID) => {
    let todos = getData();

    todos.forEach((todo, idx) => {
      if (todo.id === deleteTodoID) {
        todos.splice(idx, 1);
      }
    });
    localStorage.setItem("todos", JSON.stringify([...todos]));
  };

  const loadAllData = () => {
    let todos = getData();
    setData([...todos]);
  };
  useEffect(() => {
    loadAllData();
    console.log("This area is working right now");
  }, []);

  // LocalStoraga Section is Done
  return (
    <div className="mt-[2.5rem] w-[40rem] bg-pink-500 pb-10">
      <Header active={isActive} setActive={setIsActive} />
      {isActive && (
        <div className="w-[30rem] mx-auto pb-10">
          <AddTask handleSubmit={handleSubmit} />
        </div>
      )}
      {data.length !== 0 ? (
        <div className="max-h-[25rem] overflow-y-auto scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin">
          {data.map((item, idx) => (
            <div key={idx}>
              <Task
                data={item}
                handleRemove={handleRemove}
                handleComplated={handleComplated}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl font-semibold">No task yet</p>
      )}
    </div>
  );
};

export default Layout;

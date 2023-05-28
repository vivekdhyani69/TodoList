import React, { useState } from "react";

export const Todo = () => {
  const dummy = [
    {
      id: 1,
      task1: "Running"
    },
    {
      id: 2,
      task1: "Sleeping"
    },
    {
      id: 3,
      task1: "Studing"
    },
    {
      id: 4,
      task1: "Eating"
    }
  ];

  const handleDelete = (value) => {
    setData(data.filter((xyz) => xyz.id !== value.id));

    // data.splice( data.indexOf(value) , 1)
    // setData([...data])
    // const inddex = data.indexOf(value)
    // const newData = data.slice(0,inddex)
    // const newSecData = data.slice(inddex +1)
    // // console.log(newData)
    // setData([...newData , ...newSecData])
  };
  const handleClick = () => {
    const newTodo = {
      id: Math.random(),
      task1: taskValue
    };

    setData([...data, newTodo]);
    setTaskValue("");
    console.log(dummy);
  };
  const [taskValue, setTaskValue] = useState("");
  const [data, setData] = useState(dummy);
  return (
    <>
      <h1>Todo List</h1>
      <input value={taskValue} onChange={(e) => setTaskValue(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      {data.map((value, index) => (
        <div key={value.id}>
          <p>
            {index + 1}. {value.task1}
          </p>
          <button onClick={() => handleDelete(value)}>delete</button>
        </div>
      ))}
    </>
  );
};

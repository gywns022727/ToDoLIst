import styled from "styled-components";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function App() {
  // localStorage.clear();
  const previous = JSON.parse(localStorage.getItem("todo"))
  const {register, handleSubmit, formState: { errors }} = useForm();

  const createTodo = (data) => {
    if (previous) {
      const addTodo = {
        id: previous.length + 1,
        name: data.data,
      };
      localStorage.setItem("todo", JSON.stringify([...previous, addTodo]));
      location.reload();
    } else {
      localStorage.setItem("todo", JSON.stringify([{ id: 1, name: data.data }]));
      location.reload();
    }
  };

  const updateTodo = () => {};

  const deleteTodo = () => {};
  return (
    <div>
      <Header />
      <Container>
        <form onSubmit={handleSubmit(createTodo)}>
          <input
            type="text"
            id="data"
            name="data"
            {...register("data", { required: true })}
            placeholder="일정을 입력해주세요."
          />
          <button>추가</button>
          {errors.data && <Error>일정을 입력해주세요.</Error>}
        </form>
        <ul>
          {JSON.parse(localStorage.getItem("todo"))
            ? JSON.parse(localStorage.getItem("todo")).map((item) => (
                <li key={item.id}>{item.name}</li>
              ))
            : ""}
        </ul>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > form {
    > input {
      margin-right: 10px;
      padding: 8px;
      width: 180px;
      height: 20px;
      font-size: 12px;
      outline-color: #4b89dc;
      border: none;
      border-radius: 1vh;
      box-shadow: 2px 2px 2px #eee;
    }
    > button {
      width: 80px;
      height: 20px;
      border: none;
      border-radius: 1vh;
      color: #fff;
      font-size: 12px;
      background-color: #4b89dc;
      box-shadow: 2px 2px 2px #eee;
    }
  }
`;

const Error = styled.div`
  padding: 5px 0 0 5px;
  font-size: 12px;
  color: red;
  text-shadow: 2px 2px 2px #eee;
`;

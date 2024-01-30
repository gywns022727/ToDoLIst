import React, { useRef, useState } from "react";
import { Container, TextContainer, BtnContainer } from "./style";

export default function index(props) {
  const [isComplete, setComplete] = useState(props.state);
  const [idDelete, setDelete] = useState(
    JSON.parse(localStorage.getItem("todo"))
  );

  const Complete = (e) => {
    !e.target.checked ? setComplete(true) : setComplete(false);
  };

  const updateTodo = () => {};

  const deleteTodo = () => {
    setDelete(idDelete.splice(props.index, 1));
    // console.log(idDelete);
    localStorage.setItem("todo", JSON.stringify(idDelete));
    location.reload();
  };
  // localStorage.clear();

  return (
    <Container>
      <TextContainer>
        <input
          type="checkbox"
          onChange={(e) => {
            Complete(e);
          }}
        />
        {isComplete ? (
          <span>{props.children}</span>
        ) : (
          <span className="line">{props.children}</span>
        )}
      </TextContainer>
      <BtnContainer>
        <button className="update">수정</button>
        <button
          className="delete"
          onClick={() => {
            deleteTodo();
          }}
        >
          삭제
        </button>
      </BtnContainer>
    </Container>
  );
}

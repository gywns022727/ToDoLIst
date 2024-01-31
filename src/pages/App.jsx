import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Header from "../components/Header";

function App() {
  const [previous, setPrevious] = useState(
    JSON.parse(localStorage.getItem("todo"))
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createTodo = (data) => {
    setPrevious(
      // !previous
      // ?
      { id: 0, text: data.data }
      // : [...previous, { id: Number(previous), text: data.data }]
    );
    // location.reload();
  };

  const deleteTodo = () => {
    localStorage.clear();
  };

  useEffect(() => {
    console.log(previous);
    // localStorage.setItem("todo", JSON.stringify(previous));
  }, [previous]);

  return (
    <div>
      <Header />
      <Container>
        <form onSubmit={handleSubmit(createTodo)}>
          <input
            type="text"
            name="data"
            autoFocus
            autoComplete="off"
            placeholder="일정을 입력해주세요."
            {...register("data", { required: true })}
          />
          <button>추가</button>
          {errors.data && <Error>일정을 입력해주세요.</Error>}
        </form>
        <ListContainer>
          {previous
            ? previous.map((item) => (
                <List key={item.id}>
                  <p>{item.text}</p>
                  <BtnContainer>
                    <button className="update">수정</button>
                    <button className="delete" onClick={deleteTodo}>
                      삭제
                    </button>
                  </BtnContainer>
                </List>
              ))
            : ""}
        </ListContainer>
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

const ListContainer = styled.div`
  margin-top: 30px;
  width: 350px;
`;

const Error = styled.div`
  padding: 5px 0 0 5px;
  font-size: 12px;
  text-shadow: 2px 2px 2px #eee;
  color: red;
`;

const List = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-radius: 2vh;
  box-shadow: 2px 2px 2px 2px #eee;
  background-color: #fffffe;
  > p {
    padding-left: 10px;
    text-shadow: 2px 2px 2px 2px #eee;
  }
`;

const BtnContainer = styled.div`
  > button {
    margin-right: 5px;
    width: 64px;
    height: 20px;
    border-radius: 1vh;
    border: none;
    color: #eee;
    box-shadow: 2px 2px 2px 2px #eee;
  }
  .update {
    background-color: #4b89dc;
  }

  .delete {
    background-color: #d1180b;
  }
`;

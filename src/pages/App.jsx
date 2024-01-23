import styled from "styled-components";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { useState } from "react";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isData, setData] = useState([{ data: "" }]);

  const onSubmit = (data) => {
    arr.push(data.data);
  };

  return (
    <div>
      <Header />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
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
      </Container>
    </div>
  );
}

export default App;

// https://velog.io/@bellecode20/localStorage%EC%97%90-state-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0

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

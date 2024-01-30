import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2vh;
  box-shadow: 2px 2px 2px #eee;
`;

export const TextContainer = styled.div`
  > span {
    padding-left: 10px;
  }
  > .line {
    text-decoration: line-through;
    color: #5f5f5f;
    text-shadow: 2px 2px 2px #eee;
  }
`;

export const BtnContainer = styled.div`
  > button {
    margin-right: 5px;
    width: 64px;
    height: 20px;
    border-radius: 1vh;
    border: none;
    color: #eee;
  }
  .update {
    background-color: #4b89dc;
  }

  .delete {
    background-color: #d1180b;
  }
`;

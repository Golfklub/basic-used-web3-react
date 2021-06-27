import React, { useState, useContext } from "react";
import { useWeb3React } from "@web3-react/core";
import styled from "styled-components";
import { StyledButton } from "./button";
import { TodoContext } from "../context/TodoListProvider";

export default function TodoItem({ text, id }) {
  const { account, error } = useWeb3React();
  const [statusLoading, setStatusLoading] = useState(false);
  const [deleteLoading, setDeleteloading] = useState(false);

  const { setTodoStatus: setTodoStatusContext, removeTodo: removeTodoContext } =
    useContext(TodoContext);

  const setTodoDone = () => {
    setStatusLoading(true);
    setTodoStatusContext(id, true).finally(() => {
      setStatusLoading(false);
    });
  };

  const removeTodo = () => {
    setDeleteloading(true);
    removeTodoContext(id).finally(() => {
      setDeleteloading(false);
    });
  };

  return (
    <Container>
      {account && !error && (
        <>
          <Text>{text}</Text>
          <ButtonContainer>
            <DoneButton onClick={setTodoDone} disabled={statusLoading}>
              {!statusLoading ? "Done" : "Processing"}
            </DoneButton>
            <DeleteButton onClick={removeTodo} disabled={deleteLoading}>
              {!deleteLoading ? "Remove" : "Processing"}
            </DeleteButton>
          </ButtonContainer>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 12px 0px;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  font-size: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const DoneButton = styled(StyledButton)`
  background: #10b981;
  padding: 4px 12px;
`;

const DeleteButton = styled(DoneButton)`
  background: #ef4444;
`;

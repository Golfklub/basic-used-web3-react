import React, { useContext } from "react";
import styled from "styled-components";
import TodoItem from "../components/todoItem";
import { TodoContext } from "../context/TodoListProvider";

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <Container>
      {todos.map((res) => (
        <TodoItem text={res.title} id={res.id} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding: 40px;
`;

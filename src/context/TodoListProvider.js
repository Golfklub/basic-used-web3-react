import { useWeb3React } from "@web3-react/core";
import { createContext, useCallback, useEffect, useState } from "react";
import { useTodo } from "../hooks/useContract";

export const TodoContext = createContext({
  addTodo: () => Promise.resolve(),
  removeTodo: () => Promise.resolve(),
  editTodo: () => Promise.resolve(),
  setTodoStatus: () => Promise.resolve(),
  getTodo: () => undefined,
  todos: [],
});

const TodoListProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const { account, chainId } = useWeb3React();

  const todoContract = useTodo();

  const fetchTodos = useCallback(() => {
    if (account) {
      todoContract?.getTotalTodoByAddress().then((size) => {
        return Promise.all(
          Array(size.toNumber())
            .fill(null)
            .map((_, i) => i)
            .map((index) => {
              return todoContract?.todos(account, index).then((todo) => {
                return todo;
              });
            })
        ).then((todos) => {
          setTodos(todos);
        });
      });
    } else {
      setTodos([]);
    }

    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [account, todoContract, chainId]);

  useEffect(() => {
    fetchTodos();

    return () => {
      setTodos([]);
    };
  }, [fetchTodos]);

  const addTodo = (todo) => {
    return todoContract
      ?.addTodo(todo.title, todo.description, todo.status)
      .then((tx) => {
        return tx.wait();
      })
      .then(() => {
        return fetchTodos();
      });
  };

  const removeTodo = (id) => {
    console.log("id", id);
    return todoContract
      ?.removeTodo(id)
      .then((tx) => {
        return tx.wait();
      })
      .then(() => {
        return fetchTodos();
      });
  };

  const setTodoStatus = (id, status) => {
    const todo = todos.find((item) => item.id === id);
    if (todo) {
      return todoContract
        ?.editTodo(id, todo.title, todo.description, status)
        .then((tx) => {
          return tx.wait();
        })
        .then(() => {
          return fetchTodos();
        });
    } else {
      return Promise.reject(`Todo "${id}" not found.`);
    }
  };

  const getTodo = (id) => {
    return todos.find((item) => item.id === id);
  };

  const editTodo = (todo) => {
    return todoContract
      ?.editTodo(todo.id, todo.title, todo.description, todo.status)
      .then((tx) => {
        return tx.wait();
      })
      .then(() => {
        return fetchTodos();
      });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        setTodoStatus,
        getTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoListProvider;

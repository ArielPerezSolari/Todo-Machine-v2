import React from 'react';
import { useTodos } from '../useTodos';
import { TodoHeader } from '../../Ui/TodoHeader';
import { TodoCounter } from '../../Ui/TodoCounter';
import { TodoSearch } from '../../Ui/TodoSearch';
import { TodoList } from '../../Ui/TodoList';
import { TodoItem } from '../../Ui/TodoItem';
import { TodosError } from '../../Ui/TodosError';
import { TodosLoading } from '../../Ui/TodosLoading';
import { EmptyTodos } from '../../Ui/EmptyTodos';
import { TodoForm } from '../../Ui/TodoForm';
import { CreateTodoButton } from '../../Ui/CreateTodoButton';
import { Modal } from '../../Modal';
import { ChangeAlert } from '../../ChangeAlert';
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const { state, stateUpdaters } = useTodos();
  const navigate = useNavigate()

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
  } = state;

  const {
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;
  
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
      >
        {todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() =>{ 
              navigate(
                '/edit/' + todo.id,
                 {
                  state: {todo}
                 })
            }} 
          />
        )}
      </TodoList>

     {/*  {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )} */}

      <CreateTodoButton
        onClick={() => navigate('/new')}
        //setOpenModal={setOpenModal}
      />

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}

export  {HomePage}

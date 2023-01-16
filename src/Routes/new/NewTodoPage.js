import React from "react";
import { TodoForm } from "../../Ui/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage(){
    const { stateUpdaters } = useTodos()
    const { addTodo } = stateUpdaters
    return(
        <TodoForm
        label='Escribe tu nuevo TODO'
        submitText='Añadir'
        submitEvent={(text) => addTodo(text)}
          />
    )
}

export {NewTodoPage}
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../Ui/TodoForm";
import { useTodos } from "../useTodos";

function EditTodoPage(){
    const location = useLocation()
    const params = useParams()
    const id = Number(params.id)

    const {state, stateUpdaters} = useTodos()
    const { editTodo } = stateUpdaters;
    const { getTodo, loading } = state

    let todoText;

    if(location.state?.todo){
        todoText = location.state.todo.text
    }else if(loading){
        return <p>loading...</p>
    }else{
        const todo = getTodo(id)
        todoText = todo.text      
    }

    return(
        <TodoForm
        label='Edita tu TODO'
        defaultTodoText={todoText}
        submitText='Editar'
        submitEvent={(newText) => editTodo(id, newText)}
        />
    )
}

export {EditTodoPage}
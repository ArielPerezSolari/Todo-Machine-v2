import { TodoIcon } from ".";


function EditIcon({onEdit}){

    return(
        <TodoIcon 
            type="edit"
            onClick={onEdit}
        />
    )
}

export { EditIcon}
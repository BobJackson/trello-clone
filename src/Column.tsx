import {
    ColumnContainer,
    ColumnTitle
} from "./style";
import {Card} from "./Card";
import {AddNewItem} from "./AddNewItem";
import {useAppState} from "./state/AppStateContext";
import {addTask} from "./state/actions";

type ColumnPros = {
    text: string
    id: string
}

export const Column = ({text, id}: ColumnPros) => {
    const {getTasksByListId, dispatch} = useAppState()
    const tasks = getTasksByListId(id)

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map((task) => (
                <Card text={task.text} id={task.id}/>
            ))}
            <AddNewItem
                toggleButtonText="+ Add another card"
                onAdd={(text) => dispatch(addTask(text, id))}
                dark
            />
        </ColumnContainer>
    )
}
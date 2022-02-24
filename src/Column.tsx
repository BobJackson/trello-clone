import {
    ColumnContainer,
    ColumnTitle
} from "./style";
import {Card} from "./Card";
import {AddNewItem} from "./AddNewItem";
import {useAppState} from "./state/AppStateContext";

type ColumnPros = {
    text: string
    id: string
}

export const Column = ({text, id}: ColumnPros) => {
    const {getTasksByListId} = useAppState()

    const tasks = getTasksByListId(id)

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map((task) => (
                <Card text={task.text} id={task.id}/>
            ))}
            <AddNewItem
                toggleButtonText="+ Add another card"
                onAdd={console.log}
                dark
            />
        </ColumnContainer>
    )
}
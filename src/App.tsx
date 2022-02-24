import {
    AppContainer
} from "./style";
import {Column} from "./Column";
import {AddNewItem} from "./AddNewItem";
import {useAppState} from "./state/AppStateContext";

export const App = () => {
    const {lists} = useAppState()

    return (
        <AppContainer>
            {lists.map((list) => (
                <Column text={list.text} id={list.id}/>
            ))}
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={console.log}
            />
        </AppContainer>
    )
};

import {
    AppContainer
} from "./style";
import {Column} from "./Column";
import {AddNewItem} from "./AddNewItem";
import {useAppState} from "./state/AppStateContext";
import {addList} from "./state/actions";
import {CustomDragLayer} from "./CustomDragLayer";

export const App = () => {
    const {lists, dispatch} = useAppState()

    return (
        <AppContainer>
            <CustomDragLayer/>
            {lists.map((list) => (
                <Column text={list.text} id={list.id}/>
            ))}
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={(text) => dispatch(addList(text))}
            />
        </AppContainer>
    )
};

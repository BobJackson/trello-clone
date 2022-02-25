import {useDragLayer} from "react-dnd";
import {Column} from "./Column";
import {CustomDragLayerContainer} from "./style";
import {useAppState} from "./state/AppStateContext";

export const CustomDragLayer = () => {
    const {draggedItem} = useAppState()
    const {currentOffset} = useDragLayer((monitor => ({
        currentOffset: monitor.getSourceClientOffset()
    })))

    return draggedItem && currentOffset ? (
        <CustomDragLayerContainer>
            <Column
                text={draggedItem.text}
                id={draggedItem.id}
            />
        </CustomDragLayerContainer>
    ) : null


}
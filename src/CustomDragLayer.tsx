import {useDragLayer} from "react-dnd";
import {Column} from "./Column";
import {CustomDragLayerContainer, DragPreviewWrapper} from "./style";
import {useAppState} from "./state/AppStateContext";
import {Card} from "./Card";

export const CustomDragLayer = () => {
    const {draggedItem} = useAppState()
    const {currentOffset} = useDragLayer((monitor => ({
        currentOffset: monitor.getSourceClientOffset()
    })))

    return draggedItem && currentOffset ? (
        <CustomDragLayerContainer>
            <DragPreviewWrapper position={currentOffset}>
                {draggedItem.type === "COLUMN" ? (
                    <Column
                        text={draggedItem.text}
                        id={draggedItem.id}
                        isPreview
                    />
                ) : (
                    <Card
                        columnId={draggedItem.columnId}
                        isPreview
                        text={draggedItem.text}
                        id={draggedItem.id}
                    />
                )}
            </DragPreviewWrapper>
        </CustomDragLayerContainer>
    ) : null


}
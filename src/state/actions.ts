interface AddListAction {
    type: "ADD_LIST"
    payload: string
}

interface AddTaskAction {
    type: "ADD_TASK"
    payload: { text: string, listId: string }
}

interface AddMoveListAction {
    type: "MOVE_LIST"
    payload: {
        draggedId: string
        hoverId: string
    }
}

export type Action = AddListAction | AddTaskAction | AddMoveListAction

export const addTask = (text: string, listId: string): Action => ({
    type: "ADD_TASK",
    payload: {
        text,
        listId
    }
})

export const addList = (text: string): Action => ({
    type: "ADD_LIST",
    payload: text
})

import {useState} from "react";
import {
    NewItemFormContainer,
    NewItemButton,
    NewItemInput
} from "./style";

type NewItemFormProps = {
    onAdd(text: string): void
}

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const [text, setText] = useState("")

    return (
        <NewItemFormContainer>
            <NewItemInput
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>

        </NewItemFormContainer>
    )
}
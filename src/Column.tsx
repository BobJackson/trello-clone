import {
    ColumnContainer,
    ColumnTitle,
    CardContainer
} from "./style";

type ColumnPros = {
    text: string
}

export const Column = ({text}: ColumnPros) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <CardContainer>Generate app scaffold</CardContainer>
            <CardContainer>Learn TypeScript</CardContainer>
            <CardContainer>Begin to use static typing</CardContainer>
        </ColumnContainer>
    )
}
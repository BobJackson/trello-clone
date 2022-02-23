import {
    ColumnContainer,
    ColumnTitle
} from "./style";
import {Card} from "./Card";

type ColumnPros = {
    text: string
}

export const Column = ({text}: ColumnPros) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <Card text="Generate app scaffold"/>
            <Card text="Learn TypeScript"/>
            <Card text="Begin to use static typing !"/>
        </ColumnContainer>
    )
}
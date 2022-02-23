import {
    ColumnContainer,
    ColumnTitle,
    CardContainer
} from "./style";
import React from "react";

type ColumnPros = {
    text: string
    children?: React.ReactNode
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
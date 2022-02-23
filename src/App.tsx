import {
    AppContainer,
    ColumnContainer,
    ColumnTitle,
    CardContainer
} from "./style";


export const App = () => {
    return (
        <AppContainer>
            <ColumnContainer>
                <ColumnTitle>Todo:</ColumnTitle>
                <CardContainer>FirstItem</CardContainer>
                <CardContainer>SecondItem</CardContainer>
                <CardContainer>ThirdItem</CardContainer>
            </ColumnContainer>
        </AppContainer>
    )
};

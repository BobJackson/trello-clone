import {CardContainer} from "./style";

type CardPros = {
    text: string
}

export const Card = ({text}: CardPros) => {
    return <CardContainer>{text}</CardContainer>
}
import {CardContainer} from "./style";

type CardPros = {
    text: string
    id: string
}

export const Card = ({text}: CardPros) => {
    return <CardContainer>{text}</CardContainer>
}
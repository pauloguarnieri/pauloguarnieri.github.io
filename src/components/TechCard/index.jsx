import { Children } from "react";
import { CardContainer } from "./styles"


const TechCard = (children) => {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
};

export default TechCard;
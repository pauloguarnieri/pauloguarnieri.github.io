import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: darkred;
    border-radius: 4px;
    width: 120px;
    height: 120px;
    margin: 15px 3px;
    a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-grey1);
        :hover {
            background-color: var(--color-grey1);
            color: red;
            cursor: pointer;
            border: 2px solid white;
        }
    }
`;
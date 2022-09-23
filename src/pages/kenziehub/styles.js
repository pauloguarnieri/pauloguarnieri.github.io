import styled from "styled-components";

export const FullProjectContainer = styled.div`
    width: 95%;
    max-width: 900px;
    background-color: #212529cb;
    display: flex;
    flex-direction: column;
    z-index:0;
    margin-top: 115px;
    border-radius:4px;
    padding: 20px;
`;

export const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 5px;
    border: 1px solid var(--color-grey1);
    border-radius: 4px;
    img {
        width: 100%;
        border-radius:4px;
    }
`;

export const TextTotalContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 780px) {
        flex-direction: row;
    }
`;

export const TextContainer1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0 15px 10px 15px;
    border: 1px solid var(--color-grey1);
    margin-top: 2px ;
    margin-bottom: hidden;
    border-radius: 4px;
    h2 {
        padding: 15px 0;
        margin: 0;
        color: red;
        font-size: 20px;
    }
    h3 {
        font-size: 16px;
        padding: 10px 0;
        margin: 0;
        color: red;
        font-weight: 600;
        a {
            color: var(--color-grey3);
            font-style: italic;
            font-weight: 500;
            :hover{
                cursor: pointer;
                color: white;
            }
        }
    }
    p {
        color: white;
        line-height: 20px;
    }
    @media (min-width: 780px) {
        margin-right: 2px;
    }
`;

export const TextContainer2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0 15px 10px 15px;
    border: 1px solid var(--color-grey1);
    margin-top: 2px ;
    margin-bottom: hidden;
    border-radius: 4px;
    h3 {
        font-size: 16px;
        padding: 10px 0;
        margin: 0;
        color: red;
        font-weight: 600;
    }
    a {
        color: white;
        font-style: italic;
        font-weight: 500;
        :hover {
            cursor: pointer;
            color: red;
        }
    }
    ol {
        li {
            color: white;
            line-height: 20px;
        }
    }
    p {
        color: white;
    }
    @media (min-width: 780px) {
        margin-left: 2px;
    }
`;
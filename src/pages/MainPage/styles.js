import styled from "styled-components";


export const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    /* padding-bottom: 15px; */
`

export const AboutContainer = styled.section`
    width: 95%;
    max-width: 900px;
    background-color: #212529cb;
    display: flex;
    flex-direction: column;
    z-index:0;
    margin-top: 115px;
    border-radius:4px;
    padding: 20px;
    h3 {
        padding: 0;
        margin: 30px 0;
        color: red;
        text-align: left;
        font-weight: 500;
    }
    img {
        width: 120px;
        height: 120px;
        border-radius: 60px;
        /* background-color:rgb(255, 0, 0, 30%); */
        background-color: rgb(255, 0, 0, 30%);;
        border: 1.5px solid white;
    }
    p {
        color: white;
        margin: 15px;
        text-align: left;
        line-height: 23px;
        font-size: 16px;
        margin: 15px 0;
    }
    h4 {
        padding: 0;
        margin: 20px 0 10px 0;
        color: red;
        text-align: left;
        font-weight: 400;
    }
    ul {
        color: white;
        text-align: left;
        line-height: 23px;
    }
    @media (min-width: 780px) {
        max-width: 900px;
        flex-direction: row;
        justify-content:space-between;
        .foto{
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                align-self: center;
                width: 329px;
                height: 325px;
                border-radius: 200px;

            }
        }
        .sobre {
            max-width: 50%;
            padding: 10px;
        }
    }
`

export const LinksContainer = styled.div`
    padding: 20px 0 0 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: right;
    a {
        color: var(--color-grey1);
        display:flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height:50px;
        border-radius: 30px;
        background-color: red;
        /* border: 2px solid white; */
        margin: 0 3px;
        :hover{
            cursor: pointer;
            border: 1px solid red;
            background-color: var(--color-grey1);
            color:white;
        }
    }
    @media (min-width: 780px) {
        padding: 0;
    }
`;

export const TechContainer = styled.section`
    width: 95%;
    margin-top: 15px;
    max-width: 900px;
    background-color: #212529cb;
    display: flex;
    flex-direction: column;
    z-index:0;
    border-radius:4px;
    padding: 20px;
    h3 {
        padding: 0;
        margin: 30px 0;
        color: white;
        text-align: left;
        font-weight: 500;
        margin: 10px 0 15px 0;
    }
    @media (min-width: 780px) {
        
    }
`;

export const TechCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
`

export const CardContainer = styled.div`
    background-color: red;
    border-radius: 4px;
    width: 120px;
    height: 120px;
    margin: 15px 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-grey1);
    h3{
        color: var(--color-grey1);
        text-align: center;
        margin: 3px 0 0 0;
        font-weight: 700;
        font-size: 14px;
    }
    :hover {
        background-color: transparent;
        border: 1px solid red;
        color: white;
        h3 {
            color: white;
        }
    }
`;

export const ProjectContainer = styled.section`
    width: 95%;
    margin-top: 15px;
    max-width: 900px;
    background-color: #212529cb;
    display: flex;
    flex-direction: column;
    z-index:0;
    border-radius:4px;
    padding: 20px;
    h3 {
        padding: 0;
        margin: 30px 0;
        color: white;
        text-align: left;
        font-weight: 500;
        margin: 10px 0 15px 0;
    }

    @media (min-width: 780px) {
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 900px;
    }
`;

export const ProjectCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    @media (min-width: 946px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

`;

export const ProjectCard = styled.div`
    padding: 1px;
    width: 100%;
    max-width: 276px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
    border-radius: 4px;
    margin: 5px 0;
    img {
        width: 100%;
        max-width: 300px;
        height: 190px;
        background-color: red;
        padding: 0;
    }
    h4 {
        margin: 0;
        background-color: var(--color-grey1);
        padding: 8px 0;
        width: 100%;
        max-width: 300px;
        text-align: center;
        max-width: 300px;
        color: white;
    }
    :hover{
        cursor: pointer;
        border: 2px solid white;
        h4{
            background-color: transparent;
        }
    }
    @media (min-width: 780px) {
        margin: 5px;
    }
`;

export const FooterContainer = styled.footer`
    width: 100%;
    margin-top: 15px;
    background-color: #212529cb;
    display: flex;
    flex-direction: column;
    z-index:1;
    padding: 12px;
    h2 {
        width: 100%;
        margin: 0;
        color: red;
    }
    @media (min-width: 780px) {
        flex-direction: column;
        h2 {
            width: 30%;
        }
    }
`;
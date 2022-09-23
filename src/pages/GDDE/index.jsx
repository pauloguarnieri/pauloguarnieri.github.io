import Particulas from "../../components/Particles";
import { PageContainer } from "../MainPage/styles";
import { FullProjectContainer, ImageContainer, TextContainer1, TextContainer2, TextTotalContainer } from "./styles";
import capstonem4 from "../../images/capstonem4.png"

const Capstonem4Page = () => {
    return (
        <PageContainer>
            <Particulas />
            <FullProjectContainer>
                <ImageContainer>
                    <img src={capstonem4} alt="print" />
                </ImageContainer>
                <TextTotalContainer>
                    <TextContainer1>
                        <h2>GDDE API</h2>

                        <h3>Description:</h3>
                        <p translate="true" >We developed the distribution and inventory management API to solve logistical, communication, productivity and organization problems. Integrating company procedures between sectors and distribution centers, avoiding human error, conflicts of incompatible systems in different areas of the same company, and streamlining processes.</p>
                        <h3>Project link: <a href="https://cap-fabio-9.herokuapp.com/" rel="noreferrer" target="_blank">GDDE API</a></h3>
                        <h3>Repository: <a href="https://github.com/diegoberselli/cap-fabio-9" rel="noreferrer" target="_blank">Github</a></h3>
                        <h3>Documentation: <a href="https://github.com/diegoberselli/cap-fabio-9#readme" rel='noreferrer' target="blank">ReadMe GDDE</a></h3>
                    </TextContainer1>
                    <TextContainer2>
                        <br />
                        <h3>Tools used:</h3>
                        <ol>
                            <li>- Typescript</li>
                            <li>- Node Js</li>
                            <li>- Express</li>
                            <li>- PostgreSQL</li>
                            <li>- Yup</li>
                            <li>- Bcrypt</li>
                            <li>- Json Web Token</li>
                            <li>- Jest</li>
                            <li>- TypeORM</li>
                            <li>- Heroku</li>
                            <li>- Docker</li>
                        </ol>
                        <h3>Developed by:</h3>
                        <ol>
                            <li><a href="https://github.com/pauloguarnieri" rel="noreferrer" target="_blank">Paulo Guarnieri</a></li>
                            <li><a href="https://github.com/diegoberselli" rel="noreferrer" target="_blank">Diego Berselli</a></li>
                            <li><a href="https://github.com/cah-suzuki" rel="noreferrer" target="_blank">Camila Suzuki</a></li>
                            <li><a href="https://github.com/renandcr" rel="noreferrer" target="_blank">Renan Ribeiro</a></li>
                        </ol>
                        <h3>Version:</h3>
                        <p>1.0</p>
                    </TextContainer2>
                </TextTotalContainer>
            </FullProjectContainer>
        </PageContainer>
    )
};

export default Capstonem4Page;
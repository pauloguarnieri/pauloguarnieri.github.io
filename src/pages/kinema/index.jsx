import Particulas from "../../components/Particles";
import { PageContainer } from "../MainPage/styles";
import { FullProjectContainer, ImageContainer, TextContainer1, TextContainer2, TextTotalContainer } from "./styles";
import kinema from "../../images/kinema.png"

const KinemaPage = () => {
    return (
        <PageContainer>
            <Particulas />
            <FullProjectContainer>
                <ImageContainer>
                    <img src={kinema} alt="print" />
                </ImageContainer>
                <TextTotalContainer>
                    <TextContainer1>
                        <h2>Kinema API</h2>

                        <h3>Description:</h3>
                        <p translate="true">Theater network management API, with support for persisting theaters, users, theaters, movies, sessions and tickets. Coordinating publicity and ticket sales.</p>
                        <h3>Project link: <a href="https://api-kinema.herokuapp.com/" rel="noreferrer" target="_blank">Kinema API</a></h3>
                        <h3>Repository: <a href="https://github.com/kenzie-academy-m5-t9-g14/cinema-api" rel="noreferrer" target="_blank">Github</a></h3>
                        <h3>Documentation: <a href="https://api-kinema.herokuapp.com/schema/swagger-ui/" rel='noreferrer' target="blank">Docs Kinema</a></h3>
                    </TextContainer1>
                    <TextContainer2>
                        <br />
                        <h3>Tools used:</h3>
                        <ol>
                            <li>- Python</li>
                            <li>- Django</li>
                            <li>- PostgreSQL</li>
                            <li>- Unit Test</li>
                            <li>- DRF Spetacular</li>
                            <li>- Docker</li>
                            <li>- Heroku</li>
                        </ol>
                        <h3>Developed by:</h3>
                        <ol>
                            <li><a href="https://github.com/pauloguarnieri" rel="noreferrer" target="_blank">Paulo Guarnieri</a></li>
                            <li><a href="https://github.com/diegoberselli" rel="noreferrer" target="_blank">Diego Berselli</a></li>
                            <li><a href="https://github.com/cah-suzuki" rel="noreferrer" target="_blank">Camila Suzuki</a></li>
                            <li><a href="https://github.com/renandcr" rel="noreferrer" target="_blank">Renan Ribeiro</a></li>
                            <li><a href="https://github.com/danielecalixto" rel="noreferrer" target="_blank">Daniele Calixto</a></li>
                        </ol>
                        <h3>Version:</h3>
                        <p>1.0</p>
                    </TextContainer2>
                </TextTotalContainer>
            </FullProjectContainer>
        </PageContainer>
    )
};

export default KinemaPage;
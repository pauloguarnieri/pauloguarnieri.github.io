import Particulas from "../../components/Particles";
import { PageContainer } from "../MainPage/styles";
import { FullProjectContainer, ImageContainer, TextContainer1, TextContainer2, TextTotalContainer } from "./styles";
import kinema from "../../images/kinema.png"
import HeaderTech from "../../components/HeaderTech";

const KinemaPage = () => {
    return (
        <PageContainer>
            <Particulas />
            <HeaderTech />
            <FullProjectContainer>
                <ImageContainer>
                    <img src={kinema} alt="print" />
                </ImageContainer>
                <TextTotalContainer>
                    <TextContainer1>
                        <h2>Kinema API</h2>
                        <h3>Descrição:</h3>
                        <p translate="true">API de gerenciamento de rede de cinemas, com suporte para usuários, cinemas, filmes, sessões e ingressos. Coordenação de publicidade e venda de ingressos.</p>
                        <a href="https://api-kinema.herokuapp.com/" rel="noreferrer" target="_blank">Link do projeto</a>
                        <a href="https://github.com/kenzie-academy-m5-t9-g14/cinema-api" rel="noreferrer" target="_blank">Repositorio</a>
                        <a href="https://api-kinema.herokuapp.com/schema/swagger-ui/" rel='noreferrer' target="blank">Documentação</a>
                    </TextContainer1>
                    <TextContainer2>
                        <h3>Ferramentas utilizadas:</h3>
                        <ol>
                            <li>- Python</li>
                            <li>- Django</li>
                            <li>- PostgreSQL</li>
                            <li>- Unit Test</li>
                            <li>- DRF Spetacular</li>
                            <li>- Docker</li>
                            <li>- Heroku</li>
                        </ol>
                        <h3>Desenvolvido por:</h3>
                        <ol>
                            <li><a href="https://github.com/pauloguarnieri" rel="noreferrer" target="_blank">Paulo Guarnieri</a></li>
                            <li><a href="https://github.com/diegoberselli" rel="noreferrer" target="_blank">Diego Berselli</a></li>
                            <li><a href="https://github.com/cah-suzuki" rel="noreferrer" target="_blank">Camila Suzuki</a></li>
                            <li><a href="https://github.com/renandcr" rel="noreferrer" target="_blank">Renan Ribeiro</a></li>
                            <li><a href="https://github.com/danielecalixto" rel="noreferrer" target="_blank">Daniele Calixto</a></li>
                        </ol>
                        <h3>Versão:</h3>
                        <p>1.0</p>
                    </TextContainer2>
                </TextTotalContainer>
            </FullProjectContainer>
        </PageContainer>
    )
};

export default KinemaPage;
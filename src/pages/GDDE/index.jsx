import Particulas from "../../components/Particles";
import { PageContainer } from "../MainPage/styles";
import { FullProjectContainer, ImageContainer, TextContainer1, TextContainer2, TextTotalContainer } from "./styles";
import capstonem4 from "../../images/capstonem4.png"
import HeaderTech from "../../components/HeaderTech";

const Capstonem4Page = () => {
    return (
        <PageContainer>
            <Particulas />
            <HeaderTech />
            <FullProjectContainer>
                <ImageContainer>
                    <img src={capstonem4} alt="print" />
                </ImageContainer>
                <TextTotalContainer>
                    <TextContainer1>
                        <h2>GDDE API</h2>
                        <h3>Descrição:</h3>
                        <p translate="true" >Desenvolvemos a API de distribuição e gestão de estoque para solucionar problemas de logística, comunicação, produtividade e organização. Integrando os procedimentos da empresa entre setores e centros de distribuição, evitando erros humanos, conflitos de sistemas incompatíveis em diferentes áreas de uma mesma empresa e agilizando processos.</p>
                        <a href="https://cap-fabio-9.herokuapp.com/" rel="noreferrer" target="_blank">Link do projeto</a>
                        <a href="https://github.com/diegoberselli/cap-fabio-9" rel="noreferrer" target="_blank">Repositório</a>
                        <a href="https://github.com/diegoberselli/cap-fabio-9#readme" rel='noreferrer' target="blank">Documentação</a>
                    </TextContainer1>
                    <TextContainer2>
                        <br />
                        <h3>Ferramentas utilizadas:</h3>
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
                        <h3>Desenvolvido por:</h3>
                        <ol>
                            <li><a href="https://github.com/pauloguarnieri" rel="noreferrer" target="_blank">Paulo Guarnieri</a></li>
                            <li><a href="https://github.com/diegoberselli" rel="noreferrer" target="_blank">Diego Berselli</a></li>
                            <li><a href="https://github.com/cah-suzuki" rel="noreferrer" target="_blank">Camila Suzuki</a></li>
                            <li><a href="https://github.com/renandcr" rel="noreferrer" target="_blank">Renan Ribeiro</a></li>
                        </ol>
                        <h3>Versão:</h3>
                        <p>1.0</p>
                    </TextContainer2>
                </TextTotalContainer>
            </FullProjectContainer>
        </PageContainer>
    )
};

export default Capstonem4Page;
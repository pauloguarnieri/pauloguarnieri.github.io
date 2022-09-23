import Particulas from "../../components/Particles";
import { PageContainer } from "../MainPage/styles";
import { FullProjectContainer, ImageContainer, TextContainer1, TextContainer2, TextTotalContainer } from "./styles";
import kenziehub from "../../images/kenziehub.png"
import HeaderTech from "../../components/HeaderTech";

const KenzieHubPage = () => {
    return (
        <PageContainer>
            <Particulas />
            <HeaderTech />
            <FullProjectContainer>
                <ImageContainer>
                    <img src={kenziehub} alt="print" />
                </ImageContainer>
                <TextTotalContainer>
                    <TextContainer1>
                        <h2>Kenzie Hub</h2>

                        <h3>Descrição:</h3>
                        <p translate="true">Kenziehub é um projeto que desenvolvi na Kenzie Academy BR que visa registrar tecnologias, editá-las e excluí-las, possui cadastro, login e permissões específicas. O principal objetivo deste projeto foi treinar o relacionamento do back-end com o front-end.</p>
                        <a href="https://react-entrega-s2-kenzie-hub-pauloguarnieri.vercel.app/" rel="noreferrer" target="_blank">Link do projeto</a>
                        <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-pauloguarnieri" rel="noreferrer" target="_blank">Repositório</a>
                    </TextContainer1>
                    <TextContainer2>
                        <br />
                        <h3>Ferramentas utilizadas:</h3>
                        <ol>
                            <li>- Javascript</li>
                            <li>- React Js</li>
                            <li>- React Router Dom</li>
                            <li>- React Hook Form / Yup</li>
                            <li>- Axios</li>
                            <li>- Toastify</li>
                            <li>- Json Web Token</li>
                            <li>- Vercel</li>
                        </ol>
                        <h3>Desenvolvido por:</h3>
                        <ol>
                            <li><a href="https://github.com/pauloguarnieri" rel="noreferrer" target="_blank">Paulo Guarnieri</a></li>
                        </ol>
                        <h3>Versão:</h3>
                        <p>1.0</p>
                    </TextContainer2>
                </TextTotalContainer>
            </FullProjectContainer>
        </PageContainer>
    )
};

export default KenzieHubPage;
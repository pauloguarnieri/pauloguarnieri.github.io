import Particulas from "../../components/Particles";
import { PageContainer } from "../MainPage/styles";
import { FullProjectContainer, ImageContainer, TextContainer1, TextContainer2, TextTotalContainer } from "./styles";
import kenziehub from "../../images/kenziehub.png"
const KenzieHubPage = () => {
    return (
        <PageContainer>
            <Particulas />
            <FullProjectContainer>
                <ImageContainer>
                    <img src={kenziehub} alt="print" />
                </ImageContainer>
                <TextTotalContainer>
                    <TextContainer1>
                        <h2>Kenzie Hub</h2>

                        <h3>Description:</h3>
                        <p translate="true">Kenziehub is a project I developed at Kenzie Academy BR that aims to register technologies, edit and delete them, has registration, login and specific permissions. The main objective was to develop the ability to connect the back end with the front end.</p>
                        <h3>Project link: <a href="https://react-entrega-s2-kenzie-hub-pauloguarnieri.vercel.app/" rel="noreferrer" target="_blank">KenzieHub</a></h3>
                        <h3>Repository: <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-pauloguarnieri" rel="noreferrer" target="_blank">KenzieHub</a></h3>
                    </TextContainer1>
                    <TextContainer2>
                        <br />
                        <h3>Tools used:</h3>
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
                        <h3>Developed by:</h3>
                        <ol>
                            <li><a href="https://github.com/pauloguarnieri" rel="noreferrer" target="_blank">Paulo Guarnieri</a></li>
                        </ol>
                        <h3>Version:</h3>
                        <p>1.0</p>
                    </TextContainer2>
                </TextTotalContainer>
            </FullProjectContainer>
        </PageContainer>
    )
};

export default KenzieHubPage;
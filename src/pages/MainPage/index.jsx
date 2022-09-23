import { SiJavascript, SiPython, SiDjango, SiPostgresql, SiTypescript, SiExpress, SiReact, SiRedux, SiDocker, SiGit, SiUbuntu, SiCss3, SiHtml5, SiWindows } from "react-icons/si";
//SiAmazonaws, SiRedis, SiSqlite, SiMaterialui, SiHeroku, SiMongodb, SiJira, SiTrello, SiSlack, SiVisualstudiocode
import { PageContainer, AboutContainer, LinksContainer, TechContainer, TechCardContainer, CardContainer, ProjectContainer, ProjectCard, ProjectCardContainer, FooterContainer } from "./styles";
import { TiSocialLinkedinCircular } from "react-icons/ti"; //TiSocialInstagramCircular
import { ImMail4 } from "react-icons/im";
import paulo2 from "../../images/paulo2.png";
import capstonem4 from "../../images/capstonem4.png";
import kinema from "../../images/kinema.png";
import kenziehub from "../../images/kenziehub.png";
import { VscGithub } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import Particulas from "../../components/Particles";
import Header from "../../components/Header";
import { useHistory } from 'react-router-dom';


const MainPage = () => {

    const history = useHistory();

    return (
        <main>
            <PageContainer>
                <Particulas />
                <Header id="top" />
                <AboutContainer id="about">
                    <div className="foto">
                        <img src={paulo2} alt="foto" />
                    </div>
                    <div className="sobre">
                        <h3>About me:</h3>
                        <p>Hi, I'm Paulo, I've been interested in everything related to computing since I can remember. At first I didn't think about making it a profession, but at some point in my life it came to me.
                            I've been investing in this path since 2020, I started with some basic courses and recently completed a Full Stack web development course. Now I'm finding my way as a backend developer by looking
                            expand my knowledge and consolidate myself in this area.</p>
                        <h4>Features:</h4>
                        <ul>
                            <li>- Organization</li>
                            <li>- Good mood</li>
                            <li>- Team work</li>
                            <li>- Objectivity</li>
                        </ul>
                        <LinksContainer id="techs">
                            <a href="https://www.github.com/pauloguarnieri" rel="noreferrer" target="_blank" title="GitHub"><VscGithub size={36} /></a>
                            <a href="https://www.linkedin.com/in/pauloguarnieri/" rel="noreferrer" target="_blank" title="LinkedIn" ><TiSocialLinkedinCircular size={50} /></a>
                            <a href="mailto:paulo.r.guarnieri@hotmail.com" rel="noreferrer" target="_blank" title="Email"><ImMail4 size={36} /></a>
                            {/* <a href="https://www.instagram.com/paulo.guarnieri/" rel="noreferrer" target="_blank" title="Instagram"><TiSocialInstagramCircular size={50} /></a> */}
                        </LinksContainer>
                    </div>
                </AboutContainer>
                <TechContainer >
                    <h3>Skills and tools:</h3>
                    <TechCardContainer id="tecnologias">
                        <CardContainer>
                            <SiJavascript size={70} title="Javascript" />
                            <h3>Javascript</h3>
                        </CardContainer>
                        <CardContainer>
                            <SiPython size={70} title="Python" />
                            <h3>Python</h3>
                        </CardContainer>
                        <CardContainer>
                            <SiTypescript size={70} title="Typescript" />
                            <h3>Typescript</h3>
                        </CardContainer>
                        <CardContainer>
                            <SiPostgresql title="PostgreSQL" size={70} />
                            <h3>PostgreSQL</h3>
                        </CardContainer>
                        <CardContainer>
                            <FaNodeJs size={70} title="Node JS" />
                            <h3>Node.JS</h3>
                        </CardContainer>
                        <CardContainer>
                            <SiDjango size={70} title="Django" />
                            <h3>Django</h3>
                        </CardContainer>
                        <CardContainer>
                            <SiExpress size={70} title="Express" />
                            <h3>Express</h3>
                        </CardContainer>
                        <CardContainer>
                            <SiReact size={70} title="React JS" />
                            <h3>React.JS</h3>
                        </CardContainer>
                        <CardContainer>
                            <SiRedux size={70} title="Redux" />
                            <h3>Redux</h3>
                        </CardContainer>
                        {/* <CardContainer>
                            <SiAmazonaws size={70} title="AWS" />
                            <h3>AWS</h3>
                        </CardContainer> */}
                        <CardContainer>
                            <SiCss3 size={70} title="CSS 3" />
                            <h3>CSS3</h3>
                        </CardContainer>
                        <CardContainer>
                            <SiHtml5 size={70} title="HTML 5" />
                            <h3>HTML5</h3>
                        </CardContainer>
                        <CardContainer>
                            <SiDocker size={70} title="Docker" />
                            <h3>Docker</h3>
                        </CardContainer>
                        <CardContainer>
                            <SiGit size={70} title="Git" />
                            <h3>Git</h3>
                        </CardContainer>
                        {/* <CardContainer>
                            <SiMongodb size={70} title="Mongodb" />
                            <h3>Mongo DB</h3>
                        </CardContainer> */}
                        {/* <CardContainer>
                            <SiRedis size={70} title="Redis" />
                            <h3>Redis</h3>
                        </CardContainer> */}
                        <CardContainer>
                            <SiUbuntu size={70} title="Linux - Ubuntu" />
                            <h3>Ubuntu</h3>
                        </CardContainer>
                        <CardContainer>
                            <SiWindows size={70} title="Windows" />
                            <h3>Windows</h3>
                        </CardContainer>
                    </TechCardContainer>
                </TechContainer >
                <ProjectContainer id="projects">
                    <h3>Projects:</h3>
                    <ProjectCardContainer>
                        <ProjectCard onClick={() => history.push('/project/kenziehub')}>
                            <img src={kenziehub} alt="Kenzie Hub" />
                            <h4>Kenzie Hub</h4>
                        </ProjectCard>
                        <ProjectCard onClick={() => history.push('/project/gdde')}>
                            <img src={capstonem4} alt="GDDE" />
                            <h4>GDDE - API</h4>
                        </ProjectCard>
                        <ProjectCard onClick={() => history.push('/project/kinema')}>
                            <img src={kinema} alt="Kinema" />
                            <h4>Kinema API</h4>
                        </ProjectCard>
                    </ProjectCardContainer>
                </ProjectContainer>
                <FooterContainer>
                    <h2>Contact Me:</h2>
                    <LinksContainer id="techs">
                        <a href="mailto:paulo.r.guarnieri@hotmail.com" rel="noreferrer" target="_blank" title="Email"><ImMail4 size={36} /></a>
                        <a href="https://www.github.com/pauloguarnieri" rel="noreferrer" target="_blank" title="GitHub"><VscGithub size={36} /></a>
                        <a href="https://www.linkedin.com/in/pauloguarnieri/" rel="noreferrer" target="_blank" title="LinkedIn" ><TiSocialLinkedinCircular size={50} /></a>
                        {/* <a href="https://www.instagram.com/paulo.guarnieri/" rel="noreferrer" target="_blank" title="Instagram"><TiSocialInstagramCircular size={50} /></a> */}
                    </LinksContainer>
                </FooterContainer>
            </PageContainer>
        </main>




    )
}

export default MainPage;
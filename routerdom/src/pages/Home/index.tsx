import Header from "../../components/Header";
import { Container, TextContent, Title, TitleHighLight } from "./styles";

import banner from '../../assets/banner.jpg'
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return(<>
        <Header autenticado={false}/>
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente <br/>
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title='Começar agora' variant="secondary" onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={banner} alt='Imagem principal' width='400px'/>
            </div>
        </Container>
    </>)
};
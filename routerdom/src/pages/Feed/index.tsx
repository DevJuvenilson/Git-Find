import Header from "../../components/Header";
import { Container, Column, TitleHighlight } from "./styles";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

export const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo nome={'Juvenilson Daniel'} imagem={'https://avatars.githubusercontent.com/u/109773063?v=4'} percentual={75} />
                <UserInfo nome={'Juvenilson Daniel'} imagem={'https://avatars.githubusercontent.com/u/109773063?v=4'} percentual={70} />
                <UserInfo nome={'Juvenilson Daniel'} imagem={'https://avatars.githubusercontent.com/u/109773063?v=4'} percentual={65} />
                <UserInfo nome={'Juvenilson Daniel'} imagem={'https://avatars.githubusercontent.com/u/109773063?v=4'} percentual={60} />
                <UserInfo nome={'Juvenilson Daniel'} imagem={'https://avatars.githubusercontent.com/u/109773063?v=4'} percentual={55} />
                <UserInfo nome={'Juvenilson Daniel'} imagem={'https://avatars.githubusercontent.com/u/109773063?v=4'} percentual={50} />
            </Column>
        </Container>
    </>)
};
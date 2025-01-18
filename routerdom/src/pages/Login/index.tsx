import Header from "../../components/Header";
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api";


const schema = yup.object({
    email: yup.string().email('email inválido').required('Campo obrigatório'),
    password: yup.number().min(5, 'No mínimo 5 caracteres').required('Campo obrigatório'),
  }).required();

export const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onCheange'
    });

    //Validar se usuário existe
    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            
            if (data.length === 1) {
                navigate('/feed')
            } else {
                alert('Email ou senha inválido kkkkkkkkkkkk')
            }
        } catch {
            alert('Houve um erro')
        }
    };

    return (<>
        <Header autenticado={false} />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name={'email'} errorMessage={errors?.email?.message} control={control} placeholder='E-mail' />
                        <Input name={'password'} errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password' />
                        <Button title='Entrar' variant="secondary" type='button' />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
};
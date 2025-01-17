import React from 'react'
import { BuscarInputContainer, Container, Menu, MenuRight, Row, Wrapper, Input, UserPicture } from './styles'
import { Button } from '../Button'
import logo from '../../assets/logo-dio.webp'

export default function Header({ autenticado }) {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="logo da DIO" width={'64px'} />
                    {autenticado ? (<>
                        <BuscarInputContainer>
                        <Input palceholder="Buscar..." />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/109773063?v=4' />
                    ) : 
                    (<>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title={"Entrar"} />
                        <Button title={"Cadastrar"} />
                    </>)}
                </Row>
            </Container>
        </Wrapper>
    )
}

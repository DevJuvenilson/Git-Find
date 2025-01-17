import React from 'react'
import { Container, NameText, Progress, UserPicture } from './styles'

export const UserInfo = ({ nome, imagem, percentual }) => {
  return (
    <Container>
        <UserPicture src={imagem} />
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}

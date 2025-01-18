import React from 'react';
import banner from '../../assets/banner-card.png'

import { 
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo,
  } from './styles'

export const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={banner} />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/109773063?v=4' />
                <div>
                    <h4>Juvenilson</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de HTML e CSS no bootcamp DIO do Global Avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    👍10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

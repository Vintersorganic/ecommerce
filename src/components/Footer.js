import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
 
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin: auto;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FUDOSHIN</Logo>
        <Description></Description>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links de interés</Title>
        <List>
          <ListItem>Inicio</ListItem>
          <ListItem>Carrito</ListItem>
          <ListItem>Ropa para Hombres</ListItem>
          <ListItem>Ropa para Mujeres</ListItem>
          <ListItem>Accesorios</ListItem>
          <ListItem>Mi Cuenta</ListItem>
          <ListItem>Mis Pedidos</ListItem>
          <ListItem>Lista de Deseos</ListItem>
          <ListItem>Condiciones</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px"}}/>Lorep Ipsum 425, CABA, Argentina.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px"}}/>(011) 45523-4444  
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px"}}/>contacto@fudoshin.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;

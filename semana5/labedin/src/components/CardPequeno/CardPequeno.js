import React from "react";
import styled from "styled-components";

const ParagrafoPequeno = styled.p`
  margin-left: 5px;
`;

const Imagem = styled.img`
  display: block;
  margin-right: 10px;
  width: 30px;
`;

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin: 10px auto;
`;

function CardPequeno(props) {
  return (
    <Container>
      <Imagem src={props.imagem} alt={props.desc} />
      <p>
        <strong>{props.item}</strong>
      </p>
      <ParagrafoPequeno>{props.conteudo}</ParagrafoPequeno>
    </Container>
  );
}

export default CardPequeno;

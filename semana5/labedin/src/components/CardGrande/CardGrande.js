import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
`;

const Imagem = styled.img`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`;

const H4 = styled.h4`
  margin-bottom: 15px;
`;

const DivFlex = styled.div`
  margin-bottom: 15px;
`;

function CardGrande(props) {
  return (
    <Container>
      <Imagem src={props.imagem} />
      <DivFlex>
        <h4>{props.nome}</h4>
        <p>{props.descricao}</p>
      </DivFlex>
    </Container>
  );
}

export default CardGrande;

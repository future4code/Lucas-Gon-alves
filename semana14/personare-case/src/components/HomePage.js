import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Container, Flex, SimpleGrid } from "@chakra-ui/layout";

import axios from "axios";
import Card from "./Card";

const HomePage = () => {
  const [imagesUrl, setImagesUrl] = useState("");
  const [imageBackCard, setImageBackCard] = useState("");
  const [cardsList, setCardsList] = useState([]);
  const [showCardGrid, setShowCardGrid] = useState(false);

  useEffect(() => {
    setShowCardGrid(false);
    getCards();
  }, []);

  const getCards = () => {
    axios
      .get("tarot.json")
      .then((res) => {
        setImagesUrl(res.data.imagesUrl);
        setImageBackCard(res.data.imageBackCard);
        setCardsList(res.data.cards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cardGrid = () => {
    cardsList.sort((a, b) => 0.5 - Math.random());
    setShowCardGrid(!showCardGrid);
  };

  return (
    <Container p="4" h="100vh" maxW="container.lg">
      <Flex
        display={showCardGrid ? "none" : "flex"}
        h="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          textTransform="uppercase"
          colorScheme="linkedin"
          size="lg"
          onClick={cardGrid}
        >
          Iniciar
        </Button>
      </Flex>

      <SimpleGrid
        className="gridCard"
        display={showCardGrid ? "grid" : "none"}
        columns={[2, 4, 6]}
        spacing="4"
      >
        {cardsList.map((card, index) => {
          return (
            <Card
              key={`card-${index}`}
              card={card}
              imageBackCard={imageBackCard}
              imagesUrl={imagesUrl}
            />
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default HomePage;

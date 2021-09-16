import { Button } from "@chakra-ui/button";
import { Container, Divider, Flex, SimpleGrid } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [imagesUrl, setImagesUrl] = useState("");
  const [imageBackCard, setImageBackCard] = useState("");
  const [cardsList, setCardsList] = useState([]);
  const [showCardGrid, setShowCardGrid] = useState(false);

  useEffect(() => {
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

  const shuffleAndFlipCards = () => {
    setShowCardGrid(!showCardGrid);
    cardsList.sort(() => 0.5 - Math.random());
  };

  const refreshPage = () => {
    document.location.reload();
  };

  return (
    <>
      <Flex justifyContent="center" p="4">
        <Button
          colorScheme="linkedin"
          variant="solid"
          textTransform="uppercase"
          onClick={showCardGrid ? refreshPage : shuffleAndFlipCards}
        >
          {showCardGrid ? "Reiniciar" : "Iniciar"}
        </Button>
      </Flex>
      <Divider />

      <Container p="6" h="100vh" maxW="container.lg">
        <SimpleGrid columns={[2, 4, 6]} spacing="4">
          {cardsList &&
            cardsList.map((card, index) => {
              return (
                <Card
                  key={`card-${index}`}
                  card={card}
                  imageBackCard={imageBackCard}
                  imagesUrl={imagesUrl}
                  showCardGrid={showCardGrid}
                />
              );
            })}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default App;

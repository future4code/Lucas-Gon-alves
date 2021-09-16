import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ card, imageBackCard, imagesUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip
      key={Number.toString()}
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <Box>
        <Image h="300px" src={`${imageBackCard}`} onClick={handleFlip} />
      </Box>

      <Box>
        <Image
          h="300px"
          src={`${imagesUrl}${card.image}`}
          onClick={handleFlip}
        />
        <Text textAlign="center" pt="1">
          {card.name}
        </Text>
        <Text textAlign="center" color="gray.500" fontSize="sm">
          Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis,
          bibendum egestas augue arcu ut est.
        </Text>
      </Box>
    </ReactCardFlip>
  );
};

export default Card;

import React, { useState } from "react";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import ReactCardFlip from "react-card-flip";
import Swal from "sweetalert2";

const Card = ({ card, imageBackCard, imagesUrl, showCardGrid }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    Swal.fire({
      title: `${card.name}`,
      imageUrl: `${imagesUrl}${card.image}`,
      imageHeight: 300,
      imageAlt: "Foto da carta",
      html: "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. ",
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  return (
    <ReactCardFlip
      key={Number.toString()}
      isFlipped={showCardGrid ? isFlipped : !isFlipped}
      flipDirection="horizontal"
    >
      <Box>
        <Image
          boxShadow="xl"
          h="300px"
          src={`${imageBackCard}`}
          onClick={handleFlip}
        />
      </Box>
      <Box>
        <Image boxShadow="xl" h="300px" src={`${imagesUrl}${card.image}`} />
      </Box>
    </ReactCardFlip>
  );
};

export default Card;

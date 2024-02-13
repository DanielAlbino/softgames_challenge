import { useEffect } from "react";
import { Container } from "@pixi/react";
import Card from "../../components/card/index";

export const CardsScene = () => {
  let cardStack1 = 0;
  let cardStack2 = 0;

  useEffect(() => {
    cardStack1 = 140;
  }, []);

  const moveStack = setInterval(() => {
    cardStack1--;
    cardStack2++;
  }, 2000);

  if (cardStack1 == 0) {
    clearInterval(moveStack);
  }

  return (
    <Container position={[300, 300]}>
      {cardStack1 > 0 ? <Card xPosition={100} yPosition={100} /> : <></>}
      {cardStack2 > 0 ? <Card xPosition={300} yPosition={100} /> : <></>}
    </Container>
  );
};

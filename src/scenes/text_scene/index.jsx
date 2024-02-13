import { useState } from "react";
import { Container, Sprite, Text } from "@pixi/react";
import pexel1 from "../../assets/images/pexels-1.jpg";
import pexel2 from "../../assets/images/pexels-2.jpg";
import pexel3 from "../../assets/images/pexels-3.jpg";
import pexel4 from "../../assets/images/pexels-4.jpg";

const randomText = ['Time to be happy ', 'Beleive in yourself ', 'No time to waist ', 'Be wierd ', 'Love everybody '];
const randomEmojis = [':)',';)', ':D', '!!', '<3']
const randomColors = ['#0B0A07','#BBCEA8','#E3D87E','#F0EC57', '#748067','#DBB3B1','#C89FA3','#A67F8E','#6C534E','#2C1A1D'];

export const TextScene = () => {
    const [rndText, setRndText] = useState('');

  const getRandomImage = () => {
    const images = [pexel1, pexel2, pexel3, pexel4];
    const rndNumber = getRandomNumber(3);
    return images[rndNumber];
  };

  const getRandomNumber = (max) => {
    return Math.round(Math.random() * max);
  };

  const randomObjects = setInterval(() =>{
    clearInterval(randomObjects);
    setRndText(`${randomText[getRandomNumber(4)]} ${randomEmojis[getRandomNumber(4)]}`);
  },2000)

  return (
    <Container position={[getRandomNumber(350), getRandomNumber(350)]}>
          <Sprite
            image={getRandomImage()}
            scale={{ x: 0.1, y: 0.1 }}
            anchor={0.5}
            x={getRandomNumber(200)}
            y={getRandomNumber(200)} 
          />
          <Text
            text={rndText}
            anchor={0.5}
            x={getRandomNumber(350)}
            y={getRandomNumber(350)}
            style={{
              align: "center",
              fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
              fontSize: getRandomNumber(50)+10,
              fontWeight: "400",
              fill: [randomColors[getRandomNumber(9)], randomColors[getRandomNumber(9)]], // gradient
              strokeThickness: 5,
              letterSpacing: 20,
              dropShadow: true,
              dropShadowColor: randomColors[getRandomNumber(9)],
              dropShadowBlur: 4,
              dropShadowAngle: Math.PI / 6,
              dropShadowDistance: 6,
              wordWrap: true,
              wordWrapWidth: 440,
            }}
          />
    </Container>
  );
};

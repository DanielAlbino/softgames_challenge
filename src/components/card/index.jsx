import MtgCard from '../../assets/images/mtg_card_back.jpg';
import { Sprite} from "@pixi/react";

 const Card = ({xPosition, yPosition}) => {
    return (
        <Sprite
          image={MtgCard}
          scale={{ x: 0.1, y: 0.1 }}
          anchor={0.5}
          x={xPosition}
          y={yPosition} 
        />
    );
}

export default Card;
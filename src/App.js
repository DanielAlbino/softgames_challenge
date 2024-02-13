import { Stage } from "@pixi/react";
//import { TextScene } from "./scenes/text_scene";
import { CardsScene } from "./scenes/cards_scene";
//import { FireParticleScene } from "./scenes/particles_scene";
function App() {
  return (
    <Stage options={{ backgroundColor: 0xeef1f5 }} style={{ marginLeft: 100 }}>
     <TextScene/>
    </Stage>
  );
}

export default App;

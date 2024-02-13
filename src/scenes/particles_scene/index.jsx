import * as particles from "@pixi/particle-emitter";
import { Container } from "@pixi/react";

export const FireParticleScene = () => {
  var emitter = new particles.Emitter(Container, {
    lifetime: {
      min: 0.5,
      max: 0.5,
    },
    frequency: 0.008,
    spawnChance: 1,
    particlesPerWave: 1,
    emitterLifetime: 0.31,
    maxParticles: 1000,
    pos: {
      x: 0,
      y: 0,
    },
    addAtBack: false,
    behaviors: [
      {
        type: "alpha",
        config: {
          alpha: {
            list: [
              {
                value: 0.8,
                time: 0,
              },
              {
                value: 0.1,
                time: 1,
              },
            ],
          },
        },
      },
      {
        type: "scale",
        config: {
          scale: {
            list: [
              {
                value: 1,
                time: 0,
              },
              {
                value: 0.3,
                time: 1,
              },
            ],
          },
        },
      },
      {
        type: "color",
        config: {
          color: {
            list: [
              {
                value: "fb1010",
                time: 0,
              },
              {
                value: "f5b830",
                time: 1,
              },
            ],
          },
        },
      },
      {
        type: "moveSpeed",
        config: {
          speed: {
            list: [
              {
                value: 200,
                time: 0,
              },
              {
                value: 100,
                time: 1,
              },
            ],
            isStepped: false,
          },
        },
      },
      {
        type: "rotationStatic",
        config: {
          min: 0,
          max: 360,
        },
      },
      {
        type: "spawnShape",
        config: {
          type: "torus",
          data: {
            x: 0,
            y: 0,
            radius: 10,
          },
        },
      },
    ],
  });

  // Calculate the current time
  var elapsed = Date.now();

  // Update function every frame
  var update = function () {
    // Update the next frame
    requestAnimationFrame(update);

    var now = Date.now();

    // The emitter requires the elapsed
    // number of seconds since the last update
    emitter.update((now - elapsed) * 0.001);
    elapsed = now;
  };

  // Start emitting
  emitter.emit = true;

  // Start the update
  update();
};

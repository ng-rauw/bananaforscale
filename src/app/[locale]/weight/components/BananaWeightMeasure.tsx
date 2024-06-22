"use client";
import BananaScaleIcon from "@/components/icons/BananaScale";
import { useItemMeasure } from "@/app/[locale]/height/hooks/UseItemMeasure";
import FormWide, { OptionScaleModel } from "@/components/FormWide";
import { Measures } from "@/settings/measures";
import React, { useEffect, useRef } from "react";
import Matter, {
  Bodies,
  Common,
  Composite,
  Engine,
  Render,
  Runner,
  Svg,
  Vertices,
  World,
} from "matter-js";

export default function BananaWeightMeasure() {
  const MAXIMUM_BANANAS = 15;
  const icon = <BananaScaleIcon></BananaScaleIcon>;
  const { itemText, item, scale, items, handleItemChange, handleScaleChange } =
    useItemMeasure({
      itemHeight: Measures.BANANA,
      icon,
    });
  const options: OptionScaleModel[] = [
    { value: 1, label: "g" },
    { value: 1000, label: "kg" },
    {
      value: 1000000,
      label: "T",
    },
  ];
  const scene = useRef();
  const engine = useRef(Engine.create());
  useEffect(() => {
    // mount
    const cw = document.body.clientWidth / 2;
    const ch = document.body.clientHeight * 0.8;
    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "transparent",
      },
    });

    // boundaries
    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    // run the engine
    // Engine.run(engine.current);
    Runner.run(engine.current);
    Render.run(render);

    // unmount
    return () => {
      // destroy Matter
      Render.stop(render);
      World.clear(engine.current.world, true);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);
  const isPressed = useRef(false);

  const handleDown = () => {
    isPressed.current = true;
  };

  const handleUp = () => {
    isPressed.current = false;
  };

  const handleAddCircle = (e: any) => {
    if (isPressed.current) {
      const ball = Bodies.circle(
        e.clientX,
        e.clientY,
        10 + Math.random() * 30,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: "#0000ff",
          },
        },
      );

      const arrow = Vertices.fromPath(
        "50 0 63 38 100 38 69 59 82 100 50 75 18 100 31 59 0 38 37 38",
      );
      const xd = Bodies.fromVertices(
        e.clientX,
        e.clientY,
        [arrow],
        {
          render: {
            fillStyle: "#f19648",
            strokeStyle: "#f5d259",
            lineWidth: 1,
          },
        },
        true,
      );
      World.add(engine.current.world, [xd]);
    }
  };
  return (
    // <section
    //   className={`flex w-full  ${item * scale > MAXIMUM_BANANAS ? "justify-items-start" : "justify-between"}  p-8`}
    // >
    //   <FormWide
    //     inputText={itemText}
    //     handleInputChange={handleItemChange}
    //     handleScaleChange={handleScaleChange}
    //     options={options}
    //     scale={scale}
    //   ></FormWide>
    // </section>
    <div
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseMove={handleAddCircle}
    >
      <div
        className={"border-2"}
        ref={scene}
        style={{ width: "50%", height: "80%" }}
      />
    </div>
  );
}

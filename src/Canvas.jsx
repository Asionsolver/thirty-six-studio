import { useEffect, useRef, useState } from "react";
import images from "./image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const Canvas = () => {
  const [index, setIndex] = useState({ value: 0 });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: 149,
      duration: 3,
      ease: "linear",
      repeat: -1,
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  }, [index]);

  useEffect(() => {
    // console.log(images);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = images[index.value];
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  }, [index]);
  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="w-[18rem] h-[18rem]"
    ></canvas>
  );
};

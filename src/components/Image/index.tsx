import styled from "@emotion/styled";
import "antd/dist/reset.css";
import { Image as AImage, ImageProps } from "antd";
import { useState } from "react";
import Tooltip from "@components/Tooltip";

interface ImageType {
  rotate?: number;
  rotateHover?: number;
  HoverScale?: number;
  isPicBorder?: boolean;
  isAnimate?: boolean;
  flip?: boolean; // เพิ่มสถานะการ flip
}

const StyledImage = styled(AImage)<ImageType>`
  transition: transform 0.3s ease;
  // ${({ rotate }) => `transform: rotate(${rotate || 0}deg);`}

  ${({ flip, rotate }) =>
    flip
      ? `transform: rotateY(180deg) rotate(${rotate || 0}deg);`
      : `transform: rotate(${rotate || 0}deg);`}

  :hover {
    ${({ rotateHover, HoverScale, flip }) =>
      !flip
        ? `transform: scale(${HoverScale || 1.05}) rotate(${
            rotateHover || 0
          }deg);`
        : `transform: scale(${HoverScale || 1.05}) rotate(${
            rotateHover || 0
          }deg) rotateY(180deg);`}
  }

  ${({ isPicBorder }) =>
    isPicBorder
      ? `border: 15px solid #fff;
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);`
      : null}
`;

interface Props extends ImageProps, ImageType {
  src: string;
  flipSrc?: string;
  canFlip?: boolean;
  tooltipText?: string;
  tooltipPosition?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
}

const Image = ({
  src,
  flipSrc,
  canFlip = false,
  rotate,
  isPicBorder = false,
  isAnimate = true,
  tooltipText,
  tooltipPosition,
  ...props
}: Props) => {
  const getRandomRotation = () => {
    // สุ่มค่า rotation ระหว่าง -8 ถึง 8 องศา
    return Math.floor(Math.random() * 17) - 8;
  };

  const [randRotation, setRandRotation] = useState(getRandomRotation());
  const [flip, setFlip] = useState(false);

  const handleMouseEnter = () => {
    // เมื่อ hover ให้สุ่มค่าใหม่
    setRandRotation(getRandomRotation());
  };

  const handleClick = () => {
    // สลับสถานะการ flip
    if (canFlip) setFlip((p) => !p);
  };

  return (
    <Tooltip text={tooltipText} position={tooltipPosition}>
      <StyledImage
        preview={false}
        src={flip ? flipSrc : src}
        flip={flip}
        rotate={rotate}
        isAnimate={isAnimate}
        onMouseEnter={handleMouseEnter}
        rotateHover={props.rotateHover || randRotation}
        isPicBorder={isPicBorder}
        onClick={handleClick}
        style={{ ...props.style }}
        {...props}
      />
    </Tooltip>
  );
};

export default Image;

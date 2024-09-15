import { Button as BNAntd } from "antd";
import styled from "@emotion/styled";
import Text from "../Text";
import { css } from "@emotion/react";
import Flex from "@components/Flex";
import { useState } from "react";

interface ButtonType {
  icon?: JSX.Element;
  iconRight?: JSX.Element;
  radius?: number;
  disabled?: boolean;
  className?: string;
  width?: string | number;
  height?: string | number;
  outline?: string;
  rotation?: number;
  isAnimate?: boolean;
}
interface Props extends ButtonType {
  onClick?: () => void;
  style?: React.CSSProperties;
  htmlType?: "button" | "submit" | "reset";
  children: JSX.Element | string;
  fontSize?: number | string;
  semiBold?: boolean;
  bold?: boolean;
  medium?: boolean;
  textColor?: string;
}

const AntButton = styled(BNAntd)<ButtonType>`
  > span {
    height: 24px;
  }
  outline: ${({ outline }) => (outline ? outline : "none")} !important;
  padding: 8px 16px !important;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) =>
    (typeof height === "number" ? `${height}px` : height) || `100%`};
  width: ${({ width }) =>
    (typeof width === "number" ? `${width}px` : width) || null};
  border-radius: ${({ radius }) =>
    (typeof radius === "number"
      ? `${radius}px !important`
      : `${radius} !important`) || "8px !important"};

  ${({ disabled }) => {
    if (disabled) {
      return css`
        opacity: 0.46;
        cursor: not-allowed;
      `;
    }
  }}
  ${({ isAnimate, rotation }) => {
    if (isAnimate) {
      return css`
        border: 15px solid #fff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
        transform: rotate(0deg); /* เอียงรูปภาพเล็กน้อย */

        :hover {
          transform: scale(1.05) rotate(${rotation}deg);
        }
      `;
    }
  }}
`;

export default function Button({
  onClick,
  children,
  fontSize = 16,
  className,
  icon,
  iconRight,
  style,
  medium,
  semiBold,
  bold,
  textColor,
  isAnimate = true,
  ...props
}: Props): JSX.Element {
  const getRandomRotation = () => {
    // สุ่มค่า rotation ระหว่าง -8 ถึง 8 องศา
    return Math.floor(Math.random() * 17) - 8;
  };

  const [randRotation, setRandRotation] = useState(getRandomRotation());

  const handleMouseEnter = () => {
    // เมื่อ hover ให้สุ่มค่าใหม่
    setRandRotation(getRandomRotation());
  };

  return (
    <AntButton
      onClick={onClick}
      htmlType={props.htmlType}
      className={className}
      onMouseEnter={handleMouseEnter}
      rotation={props.rotation || randRotation}
      isAnimate={isAnimate}
      style={{ ...style, cursor: props.disabled ? "" : "pointer" }}
      {...props}
    >
      <Flex row gap={5}>
        {icon && icon}
        <Text
          semiBold={semiBold}
          bold={bold}
          medium={medium}
          color={textColor}
          style={{ cursor: "pointer" }}
          fontSize={fontSize}
        >
          {children}
        </Text>
        {iconRight && iconRight}
      </Flex>
    </AntButton>
  );
}

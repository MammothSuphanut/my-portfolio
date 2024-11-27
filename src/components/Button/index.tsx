import { Button as BNAntd } from "antd";
import styled from "@emotion/styled";
import Text from "../Text";
import Flex from "@components/Flex";

interface ButtonType {
  disabled?: boolean;
  className?: string;
  outline?: string;
  rotation?: number;
  isAnimate?: boolean;
  isShadow?: boolean;
}
interface Props extends ButtonType {
  onClick?: () => void;
  prefix?: JSX.Element | string | number;
  suffix?: JSX.Element | string | number;
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  htmlType?: "button" | "submit" | "reset";
  children: JSX.Element | string;
  cursor?: string;
}

const AntButton = styled(BNAntd)<ButtonType>`
  > span {
    height: 24px;
  }
  height: 100%;
  outline: none;

  z-index: 2;
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;

  border: 15px solid #fff;
  border-radius: 8px;
  box-shadow: ${({ isShadow }) =>
    isShadow ? `0 4px 8px rgba(0, 0, 0, 0.2)` : `none`};

  ${({ disabled }) => {
    if (disabled) {
      return `
        opacity: 0.46;
        cursor: not-allowed;
      `;
    }
  }}

  ${({ isAnimate, rotation }) => {
    if (isAnimate) {
      return `
        transition: transform 0.3s ease;
        transform: rotate(0deg); /* เอียงรูปภาพเล็กน้อย */

        :hover {
          transform: scale(1.05) rotate(${rotation || 0}deg);
          border-color: transparent !important;
        }
      `;
    } else {
      return `
      :hover {
         border-color: transparent !important;
        }
      `;
    }
  }}
`;

export default function Button({
  onClick,
  children,
  className,
  style,
  isAnimate = false,
  textStyle,
  prefix,
  suffix,
  cursor,
  isShadow = true,
  ...props
}: Props): JSX.Element {
  return (
    <AntButton
      onClick={onClick}
      htmlType={props.htmlType}
      className={className}
      rotation={props.rotation}
      isAnimate={isAnimate}
      isShadow={isShadow}
      style={{ cursor: cursor || "pointer", ...style }}
      {...props}
    >
      <Flex style={{ gap: 10 }}>
        {prefix && prefix}
        <Text style={{ cursor: cursor || "pointer", ...textStyle }}>
          {children}
        </Text>
        {suffix && suffix}
      </Flex>
    </AntButton>
  );
}

/* eslint-disable @typescript-eslint/no-empty-object-type */
import styled from "@emotion/styled";
import React, { ReactNode } from "react";

interface CardType {}

interface Props extends CardType {
  onClick?: () => void;
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const CustomCard = styled.div<CardType>`
  background: #FFF
  padding:20px;
  border: 1.5px solid #CBD5E1;
  border-radius: 8px;
  opacity: 100%;
  padding: 60px 40px 40px 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
`;

function Card({
  onClick,
  children,
  style,
  className,
  ...props
}: Props): JSX.Element {
  return (
    <CustomCard
      onClick={onClick}
      style={style}
      className={className}
      {...props}
    >
      {children}
    </CustomCard>
  );
}

export default Card;

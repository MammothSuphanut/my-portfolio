import { ReactNode } from "react";
import { Tooltip as ATooltip, TooltipProps } from "antd";
import "./style.css"; // Import custom CSS file

interface TooltipType {
  text: string | undefined;
  children: ReactNode;
  position?:
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

const Tooltip = ({
  text,
  children,
  position = "top",
  ...props
}: TooltipType & TooltipProps) => {
  return (
    <ATooltip
      title={text}
      placement={position}
      {...props}
      overlayClassName="custom-tooltip"
    >
      {children}
    </ATooltip>
  );
};

export default Tooltip;

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { TextProps } from "antd/lib/typography/Text";
import { Typography } from "antd";
import theme from "theme/theme";
type TextType = {
  fontStyle?: string;
  profile?: boolean;
  projectDesc?: boolean;
  color?: string;
  cursor?: string;
};

interface Props extends TextProps, TextType {
  children: ReactNode;
  onClick?: () => void;
}

const TextComp = styled(Typography.Text)<TextType>`
  cursor: ${({ onClick, cursor }) => (onClick ? cursor || "pointer" : "")};
  ${({ profile, projectDesc }) => {
    if (profile) {
      return `
        font-size: 24px !important;
        font-weight: 500 !important;
        color: ${theme.color.black75} !important;
        white-space: break-spaces;
      `;
    }
    if (projectDesc) {
      return `
        font-size: 22px !important;
        font-weight: 400 !important;
        color: ${theme.color.black75} !important;
        white-space: break-spaces;
      `;
    }
    return ``;
  }}

  color: ${({ color }) => color || theme.color.black100};

  font-style: ${({ fontStyle }) => fontStyle || ""};
`;

const Text = ({ children, profile = false, color, ...props }: Props) => {
  return (
    <TextComp
      profile={profile}
      color={color}
      onClick={props?.onClick}
      {...props}
    >
      {children}
    </TextComp>
  );
};

export default Text;

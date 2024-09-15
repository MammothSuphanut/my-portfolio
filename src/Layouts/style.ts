import styled from "@emotion/styled";

interface contentProps {
  layoutBackgroundColor?: string;
  layoutBackgroundColorGradient?: string;
}

export const ContentLayout = styled.div<contentProps>`
  height: calc(100vh);
  padding: 40px;
  overflow-y: hidden;
  ${({ layoutBackgroundColor }) =>
    `background-color: ${layoutBackgroundColor};`}

  ${({ layoutBackgroundColorGradient }) =>
    `background: ${layoutBackgroundColorGradient};`}
`;

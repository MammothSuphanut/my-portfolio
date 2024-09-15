import { Switch as ASwitch, SwitchProps } from "antd";
import styled from "@emotion/styled";

const AntSwitch = styled(ASwitch)`
  :where(.css-dev-only-do-not-override-dypv6j).ant-switch.ant-switch-checked {
    background: #43d39e;
  }
  :where(.css-dev-only-do-not-override-dypv6j).ant-switch.ant-switch-checked: hover {
    background: #43d39e;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends SwitchProps {}

export default function Switch({ ...props }: Props) {
  return <AntSwitch {...props} />;
}

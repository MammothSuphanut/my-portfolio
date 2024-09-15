/* eslint-disable @typescript-eslint/no-explicit-any */

interface Props {
  width?: string | number;
  height?: string | number;
  color?: string;
}
export default function Line({
  width = "100%",
  height = "15px",
  color = "2B9EE5",
}: Props) {
  return (
    <div
      style={{ width: width, height: height, borderTop: `1px solid ${color}` }}
    />
  );
}

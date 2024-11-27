/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "@emotion/styled";
import Text from "@components/Text";
import {
  Timeline as AntTimeline,
  TimelineProps as ATimelineProps,
  TimelineItemProps as ATimelineItemProps,
} from "antd";
import { CSSProperties } from "react";

// interface TimelineProps extends ATimelineProps {

// }

interface Props extends ATimelineProps {
  items: ATimelineItemProps[];

  isPointerLabel?: boolean;
  onClickItemLabel?: (item: any, index: number) => void;
  labelStyle?: CSSProperties;

  isPointerChildren?: boolean;
  onClickItemChildren?: (item: any, index: number) => void;
  childrenStyle?: CSSProperties;
}

const TimelineStyles = styled(AntTimeline)<ATimelineProps>``;

const Timeline: React.FC<Props> = ({
  items,
  labelStyle,
  childrenStyle,
  onClickItemLabel,
  onClickItemChildren,
  isPointerLabel,
  isPointerChildren,
  ...props
}) => {
  return (
    <TimelineStyles {...props}>
      {items.map((item, index) => (
        <AntTimeline.Item
          key={index}
          {...item}
          label={
            <Text
              style={labelStyle}
              onClick={() => onClickItemLabel?.(item, index)}
              cursor={isPointerLabel ? "pointer" : "default"}
            >
              {item?.label}
            </Text>
          }
          children={
            <Text
              style={childrenStyle}
              onClick={() => onClickItemChildren?.(item, index)}
              cursor={isPointerChildren ? "pointer" : "default"}
            >
              {item?.children}
            </Text>
          }
        />
      ))}
    </TimelineStyles>
  );
};

export default Timeline;

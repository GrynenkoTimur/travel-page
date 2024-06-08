import { Timeline, TimelineDot, TimelineDotProps } from "@mui/lab";
import styled from "styled-components";

interface IStyledDotProps extends TimelineDotProps {
  isFirst: boolean;
}

export const StyledTimeline = styled(Timeline)`
  &.MuiTimeline-root {
    padding: 0;
    margin: 0;
  }
  & .MuiTimelineItem-root::before {
    flex: 0;
    padding: 0;
  }
`;

export const StyledDot = styled(TimelineDot)<IStyledDotProps>`
  background-color: ${({ isFirst }) => (isFirst ? "#714EFF" : "")};
  margin-top: ${({ isFirst }) => (isFirst ? "6px" : "")};
`;

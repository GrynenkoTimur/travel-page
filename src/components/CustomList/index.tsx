import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Collapse } from "@mui/material";
import { FC } from "react";
import { StyledDot, StyledTimeline } from "./CustomList.style";

export interface ICustomListItem {
  id: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  isHidden?: boolean;
}

interface ICustomListProps {
  items: ICustomListItem[];
}

export const CustomList: FC<ICustomListProps> = ({ items }) => {
  return (
    <StyledTimeline>
      {items.map(({ id, icon, content, isHidden }, i) => (
        <Collapse key={id} in={!isHidden}>
          <TimelineItem sx={!icon ? { marginLeft: "6px" } : {}}>
            <TimelineSeparator>
              <StyledDot isFirst={i === 0}>{icon}</StyledDot>
              {i !== items.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent
              sx={
                i === items.length - 1
                  ? { maxWidth: "100%" }
                  : { maxWidth: "100%", paddingBottom: "32px" }
              }
            >
              {content}
            </TimelineContent>
          </TimelineItem>
        </Collapse>
      ))}
    </StyledTimeline>
  );
};

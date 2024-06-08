import { FiberManualRecord, MoreHoriz, DragHandle } from "@mui/icons-material";
import { Box, Breadcrumbs, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import { IListItem } from "../../pages/LocationPage/sections/LocationVariants";
import { ListItemChip, ListItemImage } from "./LocationListItem.style";

export const LocationListItem: FC<IListItem> = ({
  img,
  title,
  isCuratorsPick,
  info,
}) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" alignItems="center">
        <ListItemImage src={img} />

        <Box ml="24px">
          <Typography
            fontSize={17}
            lineHeight="21px"
            fontWeight={600}
            marginBottom="8px"
          >
            {title}
          </Typography>

          {isCuratorsPick && <ListItemChip label="Curator’s pick" />}

          <Breadcrumbs
            separator={<FiberManualRecord sx={{ fontSize: "4px" }} />}
          >
            {info.map((infoItem) => (
              <Typography fontSize={15} lineHeight="21px" key={infoItem}>
                {infoItem}
              </Typography>
            ))}
          </Breadcrumbs>
        </Box>
      </Box>

      <Box display="flex" alignItems="center">
        <IconButton sx={{ marginRight: "8px" }}>
          <DragHandle />
        </IconButton>
        <IconButton>
          <MoreHoriz />
        </IconButton>
      </Box>
    </Box>
  );
};

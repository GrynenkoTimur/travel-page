import { Add, ExpandMore } from "@mui/icons-material";
import { Box, ButtonGroup, Menu, MenuItem } from "@mui/material";
import React, { FC } from "react";
import { CustomButton } from "../../../../components";

interface IHeaderProps {
  days: number;
  setDays(days: number): void;
}

export const Header: FC<IHeaderProps> = ({ days, setDays }) => {
  const daysVariants = [5, 6, 7, 8, 9, 10];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const setNewDays = (newDays?: number) => {
    setDays(newDays || days);
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <ButtonGroup
        style={{
          boxShadow: "0px 2px 3px 0px #00000008, 0px 0px 0px 0.5px #9797974d",
          borderRadius: "16px",
          borderColor: "#dfdfdf",
        }}
      >
        <CustomButton radius={16} padding={"0px 8px 0px 16px"}>
          Trips
        </CustomButton>
        <CustomButton radius={16} padding={"0px 8px 0px 16px"}>
          Iceland
        </CustomButton>
        <CustomButton
          radius={16}
          padding={"0px 8px 0px 16px"}
          endIcon={
            <ExpandMore
              htmlColor="#3C3C43"
              style={{ opacity: 0.5, fontSize: "24px" }}
            />
          }
          onClick={handleClick}
        >
          {days} days
        </CustomButton>
      </ButtonGroup>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => setNewDays()}
      >
        {daysVariants.map((daysVariant) => (
          <MenuItem key={daysVariant} onClick={() => setNewDays(daysVariant)}>
            {daysVariant} days
          </MenuItem>
        ))}
      </Menu>

      <CustomButton
        radius={16}
        startIcon={<Add style={{ fontSize: "24px" }} />}
      >
        Create
      </CustomButton>
    </Box>
  );
};

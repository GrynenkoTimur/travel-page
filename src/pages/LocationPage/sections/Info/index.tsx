import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { CustomLink } from "../../../../components";

interface IInfoProps {
  days: number;
}

export const Info: FC<IInfoProps> = ({ days }) => {
  const infoItems = [
    { title: "Trip duration", description: `${days} days` },
    { title: "Exploration", description: "4 regions" },
    { title: "Flight", description: "7h 20m from SFO" },
  ];

  return (
    <Box
      mt="28px"
      borderRadius="16px"
      p="24px"
      boxShadow={"0px 2px 3px 0px #00000008, 0px 0px 0px 0.5px #9797974D"}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        flexGrow={1}
        marginRight="97px"
      >
        {infoItems.map(({ title, description }) => (
          <Box key={title}>
            <Typography fontSize={15} color="rgba(60, 60, 67, 0.8)">
              {title}
            </Typography>
            <Typography fontWeight={600}>{description}</Typography>
          </Box>
        ))}
      </Box>

      <Box>
        <CustomLink href="#regions">View itinerary</CustomLink>
      </Box>
    </Box>
  );
};

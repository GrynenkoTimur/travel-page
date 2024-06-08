import { CalendarMonth, Flight, Person } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { FlightButton, FlightInner } from "./FlightDetails.style";

export const FlightDetails = () => {
  return (
    <Box>
      <Typography>Iceland itinerary</Typography>

      <FlightInner>
        <FlightButton sx={{ minWidth: "179px", justifyContent: "start" }}>
          Reykjavík, KEF
        </FlightButton>
        <Box sx={{ transform: "rotate(90deg)" }}>
          <Flight />
        </Box>
        <FlightButton sx={{ minWidth: "179px", justifyContent: "start" }}>
          San Francisco, SFO
        </FlightButton>
        <FlightButton startIcon={<CalendarMonth htmlColor="#000000" />}>
          Jul 03 – Jul 11
        </FlightButton>
        <FlightButton startIcon={<Person htmlColor="#000000" />}>
          2
        </FlightButton>
      </FlightInner>
    </Box>
  );
};

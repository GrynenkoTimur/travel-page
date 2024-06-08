import { Container } from "@mui/material";
import { useState } from "react";
import {
  About,
  Header,
  Gallery,
  Info,
  FlightDetails,
  LocationVariants,
} from "./sections";

export const LocationPage = () => {
  const [days, setDays] = useState(7);
  return (
    <Container style={{ padding: "20px 32px" }}>
      <Header days={days} setDays={setDays} />
      <Gallery />
      <Info days={days} />
      <About />
      <FlightDetails />
      <LocationVariants />
    </Container>
  );
};

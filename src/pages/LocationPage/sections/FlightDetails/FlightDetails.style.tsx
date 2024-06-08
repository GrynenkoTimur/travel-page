import { Box } from "@mui/material";
import styled from "styled-components";
import { CustomButton } from "../../../../components";

export const FlightInner = styled(Box)`
  background-color: #f0f4fd;
  padding: 24px 16px 24px 24px;
  border-radius: 16px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlightButton = styled(CustomButton)`
  &.MuiButtonBase-root {
    background-color: #ffffff;
    color: rgba(60, 60, 67, 0.8);
    text-transform: capitalize;
    font-size: 15px;
    line-height: 21px;
    font-weight: 400;
    border: 0.5px solid rgba(151, 151, 151, 0.3);
    padding: 12px 16px;
  }
`;

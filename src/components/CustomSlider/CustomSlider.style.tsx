import { Chip } from "@mui/material";
import styled from "styled-components";

export const SliderImage = styled.img`
  width: 100%;
  height: 292px;
  object-fit: cover;
  border-radius: 16px;
`;

export const SliderChip = styled(Chip)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.03);

  & .MuiChip-label {
    font-size: 13px;
    line-height: 18px;
    color: rgba(60, 60, 67, 0.8);
  }
`;

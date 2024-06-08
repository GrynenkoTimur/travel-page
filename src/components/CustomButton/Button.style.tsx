import { Button } from "@mui/material";
import styled from "styled-components";
import { ICustomButtonProps } from ".";

export const StyledButton = styled(Button)<ICustomButtonProps>`
  &.MuiButton-root {
    padding: ${({ padding }) => (padding ? padding : "0 12px 0 8px")};
  }
  &.MuiButtonBase-root {
    color: #000000;
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 600;
    border: 0.5px solid #dfdfdf;
    border-radius: ${({ radius }) => (radius ? `${radius}px` : "8px")};
    line-height: ${({ height }) => (height === "md" ? "40px" : "32px")};
    padding: ${({ padding }) => (padding ? padding : "0 12px 0 8px")};
  }
`;

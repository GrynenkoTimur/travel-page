import { FC } from "react";
import { ButtonProps } from "@mui/material";
import { StyledButton } from "./Button.style";

export interface ICustomButtonProps extends ButtonProps {
  height?: "sm" | "md";
  radius?: number;
  padding?: string;
}

export const CustomButton: FC<ICustomButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

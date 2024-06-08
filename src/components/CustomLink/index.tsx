import { LinkProps } from "@mui/material";
import { FC } from "react";
import { StyledLink } from "./CustomLink.style";

export const CustomLink: FC<LinkProps> = (props) => {
  return <StyledLink {...props} />;
};

import { BookmarkBorder, FiberManualRecord } from "@mui/icons-material";
import { Box, Breadcrumbs, SvgIcon, Typography } from "@mui/material";
import { FC } from "react";
import { SliderChip, SliderImage } from "./CustomSlider.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { IListItem } from "../../pages/LocationPage/sections/LocationVariants";

import "swiper/css";

interface ICustomSliderProps {
  items: IListItem[];
}

export const CustomSlider: FC<ICustomSliderProps> = ({ items }) => {
  return (
    <Box maxWidth="80vw">
      <Swiper slidesPerView={3} spaceBetween={16} className="mySwiper">
        {items.map(({ img, title, isCuratorsPick, info, rating }) => (
          <Box key={title} maxWidth="216px">
            <SwiperSlide key={title}>
              <Box maxWidth="216px" position="relative">
                <SliderImage src={img} />
                {isCuratorsPick && <SliderChip label="Curator’s pick" />}
                <Box
                  position="absolute"
                  top="25px"
                  right="20px"
                  color="#ffffff"
                >
                  <BookmarkBorder />
                </Box>
              </Box>

              <Typography fontWeight={600} fontSize={17} lineHeight="24px">
                {title}
              </Typography>

              {rating && (
                <Box display="flex" alignItems="center">
                  <Box
                    width="16px"
                    height="16px"
                    mr="5px"
                    display="flex"
                    alignItems="center"
                  >
                    <SvgIcon
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      sx={{ width: "16px", height: "16px" }}
                    >
                      <rect width="16" height="16" rx="3" fill="#FDDB32" />
                      <path
                        d="M4.88954 12.8887V11.3364C4.88954 11.21 4.79114 11.1117 4.66469 11.1117H3.11176C2.98528 11.1117 2.8869 11.21 2.8869 11.3364V12.8887C2.8869 13.0151 2.98528 13.1135 3.11176 13.1135H4.66469C4.79114 13.1135 4.88954 13.0151 4.88954 12.8887Z"
                        fill="#191E3B"
                      />
                      <path
                        d="M13.1196 11.5538V3.90501C13.1196 3.33605 12.6628 2.87952 12.0936 2.87952H4.44146C4.28687 2.87952 4.19553 2.93573 4.09716 3.03404L2.57235 4.57223C2.45992 4.68461 2.53721 4.85319 2.70586 4.85319H9.62726L5.33387 9.14466C5.25657 9.22192 5.22144 9.29918 5.22144 9.42562V10.5565C5.22144 10.6899 5.31281 10.7812 5.44629 10.7812H6.57762C6.71111 10.7812 6.7884 10.7461 6.85866 10.6688L11.1521 6.37732V13.2957C11.1521 13.4642 11.3207 13.5415 11.4331 13.4291L12.972 11.898C13.0633 11.7996 13.1196 11.7083 13.1196 11.5538Z"
                        fill="#191E3B"
                      />
                    </SvgIcon>
                  </Box>
                  <Typography fontWeight={600} fontSize={13} lineHeight="18px">
                    {rating}
                  </Typography>
                </Box>
              )}

              <Breadcrumbs
                separator={<FiberManualRecord sx={{ fontSize: "4px" }} />}
              >
                {info.map((infoItem) => (
                  <Typography fontSize={14} key={infoItem}>
                    {infoItem}
                  </Typography>
                ))}
              </Breadcrumbs>
            </SwiperSlide>
          </Box>
        ))}
      </Swiper>
    </Box>
  );
};

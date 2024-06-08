import { BookmarkBorder, IosShare } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import { CustomButton } from "../../../../components";
import Ava from "../../../../assets/img/Ava.png";

export const About = () => {
  return (
    <Box mt="60px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography
          variant="h1"
          fontFamily="SF Pro Display"
          fontSize={28}
          lineHeight="32px"
          fontWeight={600}
        >
          Iceland’s Highlights
        </Typography>

        <Box>
          <CustomButton
            startIcon={<BookmarkBorder />}
            padding="0px 12px 0px 14px"
            sx={{ marginRight: "10px" }}
          >
            Add to wishlist
          </CustomButton>
          <CustomButton startIcon={<IosShare />} padding="0px 12px 0px 14px">
            Share
          </CustomButton>
        </Box>
      </Box>

      <Box mt="16px" display="flex" alignItems="center">
        <Avatar src={Ava} sx={{ width: 32, height: 32 }} />
        <Box ml="16px">
          <Typography fontWeight={600} lineHeight="24px">
            Curated by Sandra
          </Typography>

          <Typography fontSize={15} color="rgba(60, 60, 67, 0.8)">
            Fyno expert
          </Typography>
        </Box>
      </Box>

      <Box mt="16px">
        <Typography lineHeight="24px">
          Welcome to Iceland, a land of breathtaking landscapes and unspoiled
          natural beauty. From its majestic waterfalls and geothermal wonders to
          the vibrant culture and rich history, Iceland promises an
          unforgettable adventure for every traveler.
        </Typography>
      </Box>
    </Box>
  );
};

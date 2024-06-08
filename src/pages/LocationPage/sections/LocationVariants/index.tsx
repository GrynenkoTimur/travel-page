import {
  AutoAwesome,
  BedOutlined,
  FormatListBulleted,
  MoreHoriz,
  Shortcut,
} from "@mui/icons-material";
import {
  Box,
  Collapse,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import {
  CustomButton,
  CustomList,
  CustomSlider,
  LocationListItem,
} from "../../../../components";
import slider1_img1 from "../../../../assets/img/slider1-1.png";
import slider1_img2 from "../../../../assets/img/slider1-2.png";
import slider1_img3 from "../../../../assets/img/slider1-3.png";
import slider1_img4 from "../../../../assets/img/slider1-4.png";
import slider2_img1 from "../../../../assets/img/slider2-1.png";
import slider2_img2 from "../../../../assets/img/slider2-2.png";
import slider2_img3 from "../../../../assets/img/slider2-3.png";
import slider3_img1 from "../../../../assets/img/slider3-1.png";
import slider3_img2 from "../../../../assets/img/slider3-2.png";
import slider3_img3 from "../../../../assets/img/slider3-3.png";
import slider4_img1 from "../../../../assets/img/slider4-1.png";
import slider4_img2 from "../../../../assets/img/slider4-2.png";
import slider4_img3 from "../../../../assets/img/slider4-3.png";
import { useState } from "react";

export interface IListItem {
  img: string;
  title: string;
  isCuratorsPick: boolean;
  info: string[];
  rating?: string;
}

export const LocationVariants = () => {
  const [isFirstDailyShown, setFirstDailyShown] = useState(false);
  const [isSecondDailyShown, setSecondDailyShown] = useState(false);

  const firstSliderItems: IListItem[] = [
    {
      img: slider1_img1,
      title: "Gullfoss Waterfall",
      isCuratorsPick: true,
      info: ["1h", "Waterfall"],
    },
    {
      img: slider1_img2,
      title: "Reykjadalur Valley",
      isCuratorsPick: true,
      info: ["1h", "Iconic hike, hot springs"],
    },
    {
      img: slider1_img3,
      title: "Geysir Thermal Field",
      isCuratorsPick: false,
      info: ["1h", "Geysers"],
    },
    {
      img: slider1_img4,
      title: "Thingvellir",
      isCuratorsPick: false,
      info: ["1h", "Iconic hike"],
    },
  ];

  const secondSliderItems: IListItem[] = [
    {
      img: slider2_img1,
      title: "Frost and Fire Hotel",
      isCuratorsPick: true,
      rating: "9.1/10",
      info: ["$180+", "Boutique hotel"],
    },
    {
      img: slider2_img2,
      title: "The Greenhouse Hotel",
      isCuratorsPick: true,
      rating: "9.1/10",
      info: ["$230+", "Luxury hotel"],
    },
    {
      img: slider2_img3,
      title: "INNI",
      isCuratorsPick: false,
      rating: "9.1/10",
      info: ["$130+", "Apart hotel"],
    },
    {
      img: slider2_img3,
      title: "INNI",
      isCuratorsPick: false,
      rating: "9.1/10",
      info: ["$130+", "Apart hotel"],
    },
  ];

  const thirdSliderItems: IListItem[] = [
    {
      img: slider3_img1,
      title: "Skógafoss Waterfall",
      isCuratorsPick: true,
      info: ["1h", "Iconic waterfall"],
    },
    {
      img: slider3_img2,
      title: "Katla Ice Cave",
      isCuratorsPick: true,
      info: ["1h", "Ice caves"],
    },
    {
      img: slider3_img3,
      title: "Fjaðrárgljúfur",
      isCuratorsPick: false,
      info: ["1h", "Geysers"],
    },
    {
      img: slider3_img3,
      title: "Fjaðrárgljúfur",
      isCuratorsPick: true,
      info: ["1h", "Geysers"],
    },
  ];

  const fourthSliderItems: IListItem[] = [
    {
      img: slider4_img1,
      title: "Magma Hotel",
      isCuratorsPick: true,
      rating: "9.1/10",
      info: ["$250+", "Boutique hotel"],
    },
    {
      img: slider4_img2,
      title: "Hotel Vík í Mýrdal",
      isCuratorsPick: false,
      rating: "9.1/10",
      info: ["$150+", "Luxury hotel"],
    },
    {
      img: slider4_img3,
      title: "Hótel Kría",
      isCuratorsPick: false,
      rating: "9.1/10",
      info: ["$130+", "Luxury hotel"],
    },
    {
      img: slider4_img3,
      title: "Hótel Kría",
      isCuratorsPick: false,
      rating: "9.1/10",
      info: ["$130+", "Luxury hotel"],
    },
  ];

  const locations = [
    {
      id: "firstList",
      items: [
        {
          id: "1",
          icon: (
            <Box
              fontSize={12}
              lineHeight="12px"
              width="12px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              A
            </Box>
          ),
          content: (
            <Box>
              <Typography
                variant="h3"
                fontFamily="SF Pro Display"
                fontSize={20}
                lineHeight="24px"
                fontWeight={600}
              >
                Golden Circle Region
              </Typography>
              <Box display="flex" mb="16px">
                {["Geysers", "Waterfalls", "Crater lakes"].map((feature, i) => (
                  <Typography
                    key={feature}
                    fontSize="15px"
                    lineHeight="21px"
                    color="rgba(60, 60, 67, 0.5)"
                    sx={{ marginLeft: i === 0 ? 0 : "20px" }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>
              <Typography color="rgba(60, 60, 67, 0.8)">
                {
                  "The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament."
                }
              </Typography>
            </Box>
          ),
        },
        {
          id: "2",
          icon: isFirstDailyShown ? (
            <FormatListBulleted sx={{ fontSize: "12px" }} />
          ) : (
            <AutoAwesome sx={{ fontSize: "12px" }} />
          ),
          content: (
            <Container style={{ padding: 0 }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontSize={17} lineHeight="21px" fontWeight={600}>
                  {isFirstDailyShown ? "2 days plan" : "Region highlights"}
                </Typography>
                <CustomButton
                  padding="0 12px 0 14px"
                  startIcon={
                    isFirstDailyShown ? <AutoAwesome /> : <FormatListBulleted />
                  }
                  onClick={() => setFirstDailyShown(!isFirstDailyShown)}
                >
                  {isFirstDailyShown ? "Show highlights" : "Show daily plan"}
                </CustomButton>
              </Box>

              <Collapse in={!isFirstDailyShown}>
                <Box mt="24px">
                  <CustomSlider items={firstSliderItems} />
                </Box>
              </Collapse>
            </Container>
          ),
        },
        {
          id: "3",
          content: (
            <Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb="12px"
              >
                <Typography fontSize={17} lineHeight="21px" fontWeight={600}>
                  Day 1
                </Typography>

                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center" ml="8px">
                    <Shortcut htmlColor="rgba(60, 60, 67, 0.8)" />{" "}
                    <Typography
                      color="rgba(60, 60, 67, 0.8)"
                      fontSize={13}
                      lineHeight="18px"
                    >
                      40m
                    </Typography>
                  </Box>
                  <IconButton>
                    <MoreHoriz htmlColor=" rgba(60, 60, 67, 0.5)" />
                  </IconButton>
                </Box>
              </Box>

              <LocationListItem {...firstSliderItems[0]} />
            </Box>
          ),
          isHidden: !isFirstDailyShown,
        },
        {
          id: "4",
          content: <LocationListItem {...firstSliderItems[1]} />,
          isHidden: !isFirstDailyShown,
        },
        {
          id: "5",
          content: (
            <Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb="12px"
              >
                <Typography fontSize={17} lineHeight="21px" fontWeight={600}>
                  Day 2
                </Typography>

                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center" ml="8px">
                    <Shortcut htmlColor="rgba(60, 60, 67, 0.8)" />{" "}
                    <Typography
                      color="rgba(60, 60, 67, 0.8)"
                      fontSize={13}
                      lineHeight="18px"
                    >
                      1h 40m
                    </Typography>
                  </Box>
                  <IconButton>
                    <MoreHoriz htmlColor=" rgba(60, 60, 67, 0.5)" />
                  </IconButton>
                </Box>
              </Box>
              <LocationListItem {...firstSliderItems[2]} />
            </Box>
          ),
          isHidden: !isFirstDailyShown,
        },
        {
          id: "6",
          content: <LocationListItem {...firstSliderItems[3]} />,
          isHidden: !isFirstDailyShown,
        },
        {
          id: "7",
          icon: <BedOutlined sx={{ fontSize: "12px" }} />,
          content: (
            <Container style={{ padding: 0 }}>
              <Box>
                <Typography fontSize={17} lineHeight="33px" fontWeight={600}>
                  Where to stay
                </Typography>
              </Box>
              <Box mt="24px">
                <CustomSlider items={secondSliderItems} />
              </Box>
            </Container>
          ),
        },
      ],
    },
    {
      id: "secondList",
      items: [
        {
          id: "1",
          icon: (
            <Box
              fontSize={12}
              lineHeight="12px"
              width="12px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              B
            </Box>
          ),
          content: (
            <Box>
              <Typography
                variant="h3"
                fontFamily="SF Pro Display"
                fontSize={20}
                lineHeight="24px"
                fontWeight={600}
              >
                {"South & Highlands"}
              </Typography>
              <Box display="flex" mb="16px">
                {["Geysers", "Waterfalls", "Crater lakes"].map((feature, i) => (
                  <Typography
                    key={feature}
                    fontSize="15px"
                    lineHeight="21px"
                    color="rgba(60, 60, 67, 0.5)"
                    sx={{ marginLeft: i === 0 ? 0 : "20px" }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>
              <Typography color="rgba(60, 60, 67, 0.8)">
                {
                  "The South & Highlands of Iceland offer a breathtaking landscape of diverse natural wonders, from expansive glaciers and active volcanoes to serene waterfalls and black sand beaches. This region is also a haven for adventurers, featuring numerous hiking trails, hidden hot springs, and vast lava fields waiting to be explored. Visitors will be captivated by the blend of tranquility and raw, untamed beauty that defines this unique part of Iceland."
                }
              </Typography>
            </Box>
          ),
        },
        {
          id: "2",
          icon: isSecondDailyShown ? (
            <FormatListBulleted sx={{ fontSize: "12px" }} />
          ) : (
            <AutoAwesome sx={{ fontSize: "12px" }} />
          ),
          content: (
            <Container style={{ padding: 0 }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontSize={17} lineHeight="21px" fontWeight={600}>
                  {isSecondDailyShown ? "2 days plan" : "Region highlights"}
                </Typography>
                <CustomButton
                  padding="0 12px 0 14px"
                  startIcon={
                    isSecondDailyShown ? (
                      <AutoAwesome />
                    ) : (
                      <FormatListBulleted />
                    )
                  }
                  onClick={() => setSecondDailyShown(!isSecondDailyShown)}
                >
                  {isSecondDailyShown ? "Show highlights" : "Show daily plan"}
                </CustomButton>
              </Box>
              <Collapse in={!isSecondDailyShown}>
                <Box mt="24px">
                  <CustomSlider items={thirdSliderItems} />
                </Box>
              </Collapse>
            </Container>
          ),
        },
        {
          id: "3",
          content: (
            <Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb="12px"
              >
                <Typography fontSize={17} lineHeight="21px" fontWeight={600}>
                  Day 1
                </Typography>

                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center" ml="8px">
                    <Shortcut htmlColor="rgba(60, 60, 67, 0.8)" />{" "}
                    <Typography
                      color="rgba(60, 60, 67, 0.8)"
                      fontSize={13}
                      lineHeight="18px"
                    >
                      40m
                    </Typography>
                  </Box>
                  <IconButton>
                    <MoreHoriz htmlColor=" rgba(60, 60, 67, 0.5)" />
                  </IconButton>
                </Box>
              </Box>

              <LocationListItem {...thirdSliderItems[0]} />
            </Box>
          ),
          isHidden: !isSecondDailyShown,
        },
        {
          id: "4",
          content: <LocationListItem {...thirdSliderItems[1]} />,
          isHidden: !isSecondDailyShown,
        },
        {
          id: "5",
          content: (
            <Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb="12px"
              >
                <Typography fontSize={17} lineHeight="21px" fontWeight={600}>
                  Day 2
                </Typography>

                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center" ml="8px">
                    <Shortcut htmlColor="rgba(60, 60, 67, 0.8)" />{" "}
                    <Typography
                      color="rgba(60, 60, 67, 0.8)"
                      fontSize={13}
                      lineHeight="18px"
                    >
                      1h 40m
                    </Typography>
                  </Box>
                  <IconButton>
                    <MoreHoriz htmlColor=" rgba(60, 60, 67, 0.5)" />
                  </IconButton>
                </Box>
              </Box>
              <LocationListItem {...thirdSliderItems[2]} />
            </Box>
          ),
          isHidden: !isSecondDailyShown,
        },
        {
          id: "6",
          content: <LocationListItem {...thirdSliderItems[3]} />,
          isHidden: !isSecondDailyShown,
        },
        {
          id: "7",
          icon: <BedOutlined sx={{ fontSize: "12px" }} />,
          content: (
            <Container style={{ padding: 0 }}>
              <Box>
                <Typography fontSize={17} lineHeight="33px" fontWeight={600}>
                  Where to stay
                </Typography>
              </Box>
              <Box mt="24px">
                <CustomSlider items={fourthSliderItems} />
              </Box>
            </Container>
          ),
        },
      ],
    },
  ];

  return (
    <Box mt="40px" id="regions">
      {locations.map(({ id, items }, i) => (
        <Box key={id} mt={i !== 0 ? "56px" : ""}>
          <CustomList items={items} />
        </Box>
      ))}
    </Box>
  );
};

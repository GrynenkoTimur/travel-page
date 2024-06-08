import { Box, Grid } from "@mui/material";
import img1 from "../../../../assets/img/1.png";
import img2 from "../../../../assets/img/2.png";
import img3 from "../../../../assets/img/3.png";
import img4 from "../../../../assets/img/4.png";
import img5 from "../../../../assets/img/5.png";
import { ImageContainer, Image } from "./Gallery.style";

export const Gallery = () => {
  return (
    <Box display="flex" justifyContent="center" mt="20px">
      <Grid container spacing={0.5} maxWidth="697px">
        <Grid item xs={6}>
          <Box maxWidth={"100%"}>
            <Image
              src={img1}
              style={{
                maxWidth: "100%",
                borderTopLeftRadius: "24px",
                borderBottomLeftRadius: "24px",
              }}
            />
          </Box>
        </Grid>
        <Grid item container spacing={0.5} xs={6}>
          <Grid item xs={6}>
            <ImageContainer>
              <Image src={img2} />
            </ImageContainer>
          </Grid>
          <Grid item xs={6}>
            <ImageContainer>
              <Image
                src={img4}
                style={{
                  borderTopRightRadius: "24px",
                }}
              />
            </ImageContainer>
          </Grid>
          <Grid item xs={6}>
            <ImageContainer>
              <Image src={img3} />
            </ImageContainer>
          </Grid>
          <Grid item xs={6}>
            <ImageContainer>
              <Image
                src={img5}
                style={{
                  borderBottomRightRadius: "24px",
                }}
              />
            </ImageContainer>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout";
import MyButton from "../../component/MyButton";
import MyTypography from "../../component/MyTypography";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { homeData } from "./../../constant/index";
const Home = () => {
  let navigate = useNavigate();

  return (
    <Layout>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "50vh" }}
      >
        <Grid item md={12}>
          {homeData.map((data, index) => (
            <MyTypography
              key={index}
              title={data.title}
              variant={data.variant}
              align={data.align}
              paragraph={data.paragraph}
            />
          ))}
          <MyButton
            icon={<AccountCircleRoundedIcon />}
            title="About Me"
            onClick={() => navigate("/about")}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;

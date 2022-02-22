import { Divider, Grid } from "@mui/material";
import React from "react";
import MyCard from "../../component/MyCard";
import MyDivider from "../../component/MyDivider";
import MyTypography from "../../component/MyTypography";
import TitleAndValue from "../../component/TitleAndValue";
import { cardInfo, myInfo } from "../../constant";

import Layout from "./../../component/Layout";
import MyButton from "./../../component/MyButton";

const About = () => {
  return (
    <Layout>
      <MyTypography title="About Me!" />
      <MyDivider />
      <Grid
        container
        md={12}
        // height="87vh"
        mt="1rem"
        style={
          {
            // background: `url(https://source.unsplash.com/random) 0 0`,
          }
        }
      >
        <Grid item md={6} mt="1rem">
          {myInfo.map((el, index) => (
            <TitleAndValue key={index} title={el.name} value={el.value} />
          ))}

          <MyButton title="DownLoad CV" />
        </Grid>
        <Grid item container md={6} justifyContent="space-evenly">
          {cardInfo.map((el, index) => (
            <>
              <Grid item md={6} style={{}}>
                <MyCard count={el.value} title={el.name} />
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;

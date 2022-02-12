import { Divider, Grid } from "@mui/material";
import React from "react";
import MyCard from "../../component/MyCard";
import MyDivider from "../../component/MyDivider";
import Title from "../../component/Title";
import TitleandValue from "../../component/TitleandValue";
import { cardInfo, myInfo } from "../../constant";

import Layout from "./../../component/Layout";
import MyButton from "./../../component/MyButton";

const About = () => {
  return (
    <Layout>
      <Title title="About Me!" />
      <MyDivider />
      <Grid container md={12} mt="1rem">
        <Grid item md={6} mt="1rem">
          {myInfo.map((el, index) => (
            <TitleandValue key={index} title={el.name} value={el.value} />
          ))}

          <MyButton title="DownLoad CV" />
        </Grid>
        <Grid item container md={6} justifyContent="space-evenly">
          {cardInfo.map((el, index) => (
            <>
              <Grid item md={6}>
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

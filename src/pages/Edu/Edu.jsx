import { Grid } from "@mui/material";
import React from "react";
import EducationCard from "../../component/EducationCard";
import Layout from "../../component/Layout";
import MyDivider from "../../component/MyDivider";
import MyTypography from "../../component/MyTypography";

const Edu = () => {
  return (
    <Layout>
      <MyTypography title="My Education" />
      <MyDivider />
      <Grid item container md={12} justifyContent="space-evenly">
        {[1, 2, 3, 4, 5, 6].map((el, index) => (
          <>
            <Grid item md={4} key={index}>
              <EducationCard />
            </Grid>
          </>
        ))}
      </Grid>
    </Layout>
  );
};

export default Edu;

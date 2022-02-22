import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout";
import MyButton from "../../component/MyButton";
import MyDivider from "../../component/MyDivider";
import MyTypography from "../../component/MyTypography";
import PortfolioCard from "../../component/PortfolioCard";

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <main>
        <MyTypography title="My Portfolio" />
        <MyDivider />

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          minima, voluptatibus esse recusandae nulla atque rem facilis voluptate
          quidem obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Perspiciatis asperiores nam perferendis numquam necessitatibus
          sed dolore. Minus dolor sint nulla. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Natus provident dolor quasi error cum
          voluptatem magni voluptatum fugit. Ipsum, asperiores!
        </p>
        {/* <MyButton title="About Me" onClick={() => navigate("/about")} /> */}
      </main>

      <Grid item container md={12} justifyContent="space-evenly">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <Grid item md={4}>
            <PortfolioCard
              key={index}
              icon=""
              title=""
              description=""
              onClick={() =>
                navigate("/single-portfolio", {
                  state: { portFolioData: "title here" },
                })
              }
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Portfolio;

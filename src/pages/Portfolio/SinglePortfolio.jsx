import React from "react";
import { useLocation } from "react-router-dom";
import MyDivider from "../../component/MyDivider";
import MyTypography from "../../component/MyTypography";
import Layout from "./../../component/Layout";

const SinglePortfolio = () => {
  const location = useLocation();
  return (
    <Layout>
      <MyTypography title="Single Portfolio" />
      <MyDivider />
      SinglePortfolio{location.state.portFolioData}
    </Layout>
  );
};

export default SinglePortfolio;

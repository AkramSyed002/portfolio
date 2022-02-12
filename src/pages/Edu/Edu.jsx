import React from "react";
import EducationCard from "../../component/EducationCard";
import Layout from "../../component/Layout";
import MyDivider from "../../component/MyDivider";
import Title from "./../../component/Title";

const Edu = () => {
  return (
    <Layout>
      <Title title="My Education" />
      <MyDivider />
      <EducationCard />
    </Layout>
  );
};

export default Edu;

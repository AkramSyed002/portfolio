import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout";
import MyButton from "../../component/MyButton";
const Home = () => {
  let navigate = useNavigate();
  return (
    <Layout>
      <main>
        <h1>HI There!</h1>
        <h2>I'M Akram syed</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          minima, voluptatibus esse recusandae nulla atque rem facilis voluptate
          quidem obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Perspiciatis asperiores nam perferendis numquam necessitatibus
          sed dolore. Minus dolor sint nulla. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Natus provident dolor quasi error cum
          voluptatem magni voluptatum fugit. Ipsum, asperiores!
        </p>
        <MyButton title="About Me" onClick={() => navigate("/about")} />
      </main>
    </Layout>
  );
};

export default Home;

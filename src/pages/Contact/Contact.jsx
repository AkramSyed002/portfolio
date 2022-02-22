import {
  Button,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MyButton from "../../component/MyButton";
import MyDivider from "../../component/MyDivider";
import Layout from "./../../component/Layout";
import MyTextFiled from "./../../component/MyTextFiled";
import { useContactLogic } from "./useContactLogic";
import MyTypography from "../../component/MyTypography";
import ReactWhatsapp from "react-whatsapp";
const contactInfo = [
  { value: "akramsyed002@gamil.com" },
  {
    value: "03465673700",
    onclick: () => {
      alert("hi");
    },
  },
  { value: "03159719113" },
  { value: "Swat,Matta 19040 Bara DrushKhela" },
];

const contactDetail = [
  {
    icon: "",
    title: "Whatsapp",
    value: "03465673700",
    onclick: () => {
      alert("hi");
    },
  },
];

const Contact = () => {
  const [contactData, setContactData] = useContactLogic();

  const handleInputChange = (target) => {
    setContactData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  return (
    <Layout>
      <MyTypography title="Contact Me!" />
      <MyDivider />
      <Grid container md={12} mt="2rem">
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          {/* <div
            style={{ height: "200px", width: "200px", backgroundColor: "red" }}
          > */}
          <ReactWhatsapp
            number="0092-346-567-3700"
            message="Hello World!!!"
            // element={<button>hi</button>}
          >
            <Button variant="outlined">Send</Button>
          </ReactWhatsapp>
          {/* </div> */}

          <MyTypography title="Contact" />
          {contactInfo.map((item, index) => (
            <Typography key={index} variant="body1" onClick={item.onclick}>
              {item.value}
            </Typography>
          ))}
        </Grid>
        {/* <Grid
          item
          md={5}
          display="flex"
          direction="column"
          alignItems="space-between"
          justifyContent="space-between"
          alignContent="space-between"
          height="40vh"
        >
          <MyTextFiled
            placeholder="Name"
            name="name"
            value={contactData.name}
            onChange={({ target }) =>
              setContactData({ ...contactData, name: target.value })
            }
          />
          <MyTextFiled
            placeholder="Email"
            value={contactData.email}
            type="email"
            onChange={({ target }) =>
              setContactData({ ...contactData, email: target.value })
            }
          />
          <MyTextFiled
            placeholder="Project Name"
            value={contactData.projectName}
            name="projectName"
            onChange={({ target }) =>
              setContactData({ ...contactData, projectName: target.value })
            }
          />
          <TextareaAutosize
            minRows={5}
            placeholder="Type Your Message"
            style={{ backgroundColor: "black", color: "white" }}
            value={contactData.message}
            onChange={({ target }) =>
              setContactData({ ...contactData, message: target.value })
            }
          />
          <MyButton title="Send" />
        </Grid> */}
        <Grid item md={1}></Grid>
      </Grid>
    </Layout>
  );
};

export default Contact;

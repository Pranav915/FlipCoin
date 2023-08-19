import { Box, Grid, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import CartCard from "./CartCard";
import HomeNavbar from "../home/HomeNavbar";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([{
    id: 1,
    name: "shirt",
    price: 10,
    tokens: 1,
    maxToken: 500,
    mapping: 5,
    image: "https://source.unsplash.com/random",
    count: 1
  }, {
    id: 2,
    name: "shirt",
    price: 10,
    tokens: 1,
    maxToken: 500,
    mapping: 4,
    image: "https://source.unsplash.com/random",
    count: 1
  }, {
    id: 3,
    name: "shirt",
    price: 10,
    tokens: 1,
    maxToken: 5,
    mapping: 5,
    image: "https://source.unsplash.com/random",
    count: 1
  },]);
  const changeCount = (id, type) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        if (type === "decrease" && item.count - 1 === 0) return null;
        return { ...item, count: (type === "decrease") ? item.count - 1 : item.count + 1 };
      }
      return item;
    });
    const filteredItems = updatedItems.filter(item => item !== null);
    setItems(filteredItems);
  }
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  }
  return (
    <div>
      <HomeNavbar />
      <Box sx={{ width: "100%", height: "100vh", display: "flex", mt: 9 }}>
        <Grid container>
          <Grid item sx={12} lg={8}>
            <Box sx={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              <h2 style={{ color: "#081b8c", marginLeft: "25px" }}>Your Cart</h2>
              <h3 style={{ display: (items.length !== 0) ? "none" : "flex", justifyContent: "center" }}>Cart is empty!</h3>
              {items.map((item, i) => (
                <Paper elevation={2} style={{padding: "10px 30px", margin: "5px 20px"}}><CartCard item={item} changeCount={changeCount} removeItem={removeItem} /></Paper>
              ))}
            </Box>
          </Grid>
          <Grid item sx={12} lg={4}>
            <Paper elevation={3} style={{margin: "5px 20px"}}>
              <Box sx={{padding: "10px 20px", fontFamily: "Arial, Helvetica, sans-serif" }}>
                <h2 style={{ color: "#081b8c" }}>Order Details</h2>
                <table style={{ width: "100%" }}>
                  <tr style={{ fontSize: "1.3em" }}>
                    <td align="center" style={{ padding: "10px 0" }}>Total Amount:</td>
                    <td align="center">{items.reduce((total, item) => total + item.price * item.count, 0)}</td>
                  </tr>
                  <tr style={{ fontSize: "1.3em" }}>
                    <td align="center" style={{ padding: "10px 0" }}>Total Tokens:</td>
                    <td align="center">
                      {
                        items.reduce(
                          (total, item) =>
                            total +
                            ((item.tokens * item.count > item.maxToken)
                              ? item.maxToken
                              : item.tokens * item.count),
                          0
                        )
                      }
                    </td>
                  </tr>
                  <tr style={{ fontSize: "1.3em" }}>
                    <td align="center" style={{ padding: "10px 0" }}>Token Reduction:</td>
                    <td align="center">-{
                      items.reduce(
                        (total, item) =>
                          total +
                          ((item.tokens * item.count > item.maxToken)
                            ? item.maxToken * item.mapping
                            : item.tokens * item.count * item.mapping),
                        0
                      )
                    }</td>
                  </tr>
                  <tr style={{ fontSize: "1.3em" }}>
                    <td align="center" style={{ padding: "10px 0" }}>Amount Payable:</td>
                    <td align="center">{
                      items.reduce(
                        (total, item) =>
                          total +
                          ((item.tokens * item.count > item.maxToken)
                            ? (item.price * item.count - item.maxToken * item.mapping)
                            : (item.price * item.count - item.tokens * item.count * item.mapping)), 0
                      )
                    }</td>
                  </tr>
                  <tr style={{ fontSize: "1.3em" }}>
                    <td align="center" style={{ padding: "10px 0" }}><Button onClick={() => navigate("/")} variant="outlined" color="success">Back</Button></td>
                    <td align="center"><Button variant="outlined">Pay Now</Button></td>
                  </tr>
                </table>
              </Box>
            </Paper>
          </Grid>
        </Grid>

      </Box>
    </div>
  );
};

export default Cart;

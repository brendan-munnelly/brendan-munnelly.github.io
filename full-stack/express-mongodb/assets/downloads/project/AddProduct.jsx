import React, { useState } from "react";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  // Use the useNavigate hook from react-router-dom to get the navigate function
  const navigate = useNavigate();

  // Use the useState hook from React to create a state variable for the product data
  // The initial state is an object with empty strings for all the product properties
  const [productData, setProductData] = useState({
    title: "",
    brand: "",
    category: "",
    description: "",
    discountPercentage: "",
    images: "",
    price: "",
    rating: "",
    stock: "",
    thumbnail: "",
  });

  // Define a function to handle changes to the input fields
  // This function will be called whenever the user types into one of the input fields
  const handleInputChanges = (event) => {
    const { name, value } = event.target;

    // Call setProductData to update the product data state
    // Use the spread operator to copy the existing product data, then overwrite the property that changed
    setProductData({ ...productData, [name]: value });
  };

  // Define a function to handle the save button click
  // This function will be called when the user clicks the save button
  const handleSave = async () => {
    // Log the current product data to the console
    console.log(productData);
    try {
      const response = await axios.put(
        "http://localhost:5000/create",
        productData
      );
      // If the server responds with "Product saved to the database!", navigate back to the home page
      if (response.data === "Product saved to the database!") {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <Grid
        container
        alignContent="center"
        justifyContent="center"
        style={{ paddingTop: "50px" }}
      >
        <Paper
          elevation={3}
          style={{
            width: 550,
          }}
        >
          <Grid
            //sx={gridStyle}
            container
            direction="column"
            alignItems="center"
            gap={3}
          >
            <br />
            <Grid item>
              <Typography variant="h5">Add product</Typography>
            </Grid>

            <Grid item>
              <Grid container direction="row" gap={3}>
                <Grid item>
                  <Grid container direction="column" gap={2}>
                    <Grid item>
                      <TextField
                        label="Title"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={productData.title}
                        name="title"
                        onChange={handleInputChanges}
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Brand"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={productData.brand}
                        name="brand"
                        onChange={handleInputChanges}
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Category"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={productData.category}
                        name="category"
                        onChange={handleInputChanges}
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Description"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={productData.description}
                        name="description"
                        onChange={handleInputChanges}
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Discount Percentage"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        type="number"
                        value={productData.discountPercentage}
                        name="discountPercentage"
                        onChange={handleInputChanges}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container direction="column" gap={2}>
                    <Grid item>
                      <TextField
                        label="Image link"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={productData.images}
                        name="images"
                        onChange={handleInputChanges}
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Price"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        type="number"
                        value={productData.price}
                        name="price"
                        onChange={handleInputChanges}
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Rating"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        type="number"
                        value={productData.rating}
                        name="rating"
                        onChange={handleInputChanges}
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Stock"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        type="number"
                        value={productData.stock}
                        name="stock"
                        onChange={handleInputChanges}
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Thumbnail"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={productData.thumbnail}
                        name="thumbnail"
                        onChange={handleInputChanges}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default AddProduct;

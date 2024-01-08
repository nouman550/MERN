import React, { Fragment, useEffect } from "react";
import { deleteProduct, getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../Loader";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Sidebars from "../../Component/Sidebar";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    deleteProduct: {
      fontSize: '24px',
      cursor: 'pointer',
      fill:'red'
      // Add any additional styles here
    },
    editProduct:{
        fontSize: '24px',
        cursor: 'pointer',
        fill:'green' 
    }
  });

const AllProducts = () => {
    const classes = useStyles();
  const Sidestyle = {
    marginTop: "20px",
    padding: "10px",
  };
  const dispatch = useDispatch();
  const alert = useAlert();
  const { products, error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch, error, alert]);


  function handleDeleteProduct(id) {
  
    dispatch(deleteProduct(id))
      .then(() => {
        // After the user is successfuslly deleted, fetch the updated user list
        
        dispatch(getProduct());
     
        alert.success("Product deleted successfully");
      })
      .catch((error) => {
        alert.error(`Failed to delete Product: ${error}`);
      });
  }

  const columns = [
    { field: "id", headerName: "User Id", minWidth: 300, headerClassName: 'custom-header' },
    { field: "name", headerName: "Name", minWidth: 200, headerClassName: 'custom-header' },
    { field: "price", headerName: "Price", minWidth: 200, headerClassName: 'custom-header' },
    { field: "category", headerName: "Category", minWidth: 250, headerClassName: 'custom-header' },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 200,
      sortable: false,
      headerClassName: 'custom-header',
      renderCell: (params) => (
        <div>
        <Link to={`/admin/update/${params.row.id}`}>
          <IconButton >
            <EditIcon className={classes.editProduct} />
          </IconButton>
        </Link>
      
        {/* Add margin or padding here for space */}
        <span style={{ margin: '0 10px' }} />
      
        <IconButton
          
         onClick={() => handleDeleteProduct(params.row.id)}
        >
          <DeleteIcon className={classes.deleteProduct}/>
        </IconButton>
      </div>
      
      ),
    },
  ];


  const rows = products
    ? products.map((item) => ({
      id: item._id,
      name: item.name,
      price: item.price,
      category: item.category,
    }))
    : [];

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    width: "100%",
    paddingLeft: "20px",
    paddingRight: "40px",
  };

  const headerStyle = {
    color: "white",
    backgroundColor: "#007bff", // Change to your desired header background color
    fontFamily: "Arial",
    fontWeight: 700,
    padding: "20px",
    textAlign: "center",
    width: "100%",
    boxSizing: "border-box",
  };

  const dataGridStyle = {
    height: "500px", // Adjust the height as needed
    width: "820px",
    overflowY: "auto",
    marginTop: '20px',
    
  };

  const columnsWithoutId = columns.filter(column => column.field !== 'id');

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid xs={3} sx={Sidestyle}>
            <Sidebars />
          </Grid>
          <Grid xs={9} sx={dataGridStyle}  >

            {loading ? (
              <LoadingSpinner />
            ) : (
              <div style={containerStyle}>
                <div style={headerStyle}>All Products</div>
                <DataGrid
                  rows={rows}
                  columns={columnsWithoutId}
                  style={dataGridStyle}
                  pageSize={10}
                  disableSelectOnClick
                />
              </div>
            )}

          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}

export default AllProducts;

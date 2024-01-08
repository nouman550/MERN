import React, { Fragment, useEffect} from "react";
import { showAdminUsers,deleteUser } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "./Loader";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Sidebars from "./Sidebar";
import './ShowUser.css'

const ShowUsers = () => {

  const Sidestyle={
   
    margingTop: '20px',
    padding: '10px'
}
  const dispatch = useDispatch();
  const alert = useAlert();
  const { users, error, loading } = useSelector((state) => state.adminUsers);


  useEffect(() => {
    dispatch(showAdminUsers());
  }, [dispatch, error, alert]);




  function handleDeleteUser(id) {
  
    dispatch(deleteUser(id))
      .then(() => {
        // After the user is successfuslly deleted, fetch the updated user list
        
        dispatch(showAdminUsers());
     
        alert.success("User deleted successfully");
      })
      .catch((error) => {
        alert.error(`Failed to delete user: ${error}`);
      });
  }
  
 

  const columns = [
    { field: "id", headerName: "User Id", minWidth: 250 ,headerClassName: 'custom-header' },
    { field: "name", headerName: "Name", minWidth: 150,headerClassName: 'custom-header' },
    { field: "email", headerName: "Email", minWidth: 350,headerClassName: 'custom-header' },
    { field: "role", headerName: "Role", minWidth: 150,headerClassName: 'custom-header' },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 200,
      sortable: false,
      headerClassName: 'custom-header',
      renderCell: (params) => (
        <div>
          <Link to={`/admin/update/${params.row.id}`}>
            <EditIcon />
          </Link>
          <DeleteIcon
            style={{ cursor: "pointer" }}
            onClick={() => handleDeleteUser(params.row.id)}
          />
        </div>
      ),
    },
  ];

  const mystyle = {
    color: "red",
    marginTop: "10px",
    fontFamily: "Arial",
    fontWeight: 700,
    textAlign: "center",
    paddingTop: "20px",
  };

  const rows = users
    ? users.map((item) => ({
        id: item._id,
        name: item.name,
        email: item.email,
        role: item.role,
      }))
    : [];

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        width: "100%",
        paddingLeft: "20px",
        paddingRight: "40px"
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
        height: "400px", // Adjust the height as needed
        width: "820px",
        overflowY: "auto",
        marginTop:'20px',
      };


      const columnsWithoutId = columns.filter(column => column.field !== 'id');

  return (
  
  
  <Fragment>
  <Box sx={{ flexGrow: 1 }}>
<Grid container spacing={1}>
 
  <Grid  xs={3} sx={Sidestyle}>
   <Sidebars />
  </Grid>
  <Grid  xs={9}  sx={dataGridStyle}  >
 {

loading ? (
  <LoadingSpinner />
) : (
  
  <div style={containerStyle}>

  <div style={headerStyle}>All Users</div>
  <DataGrid 
    rows={rows}
    columns={columnsWithoutId}
    style={dataGridStyle}
    pageSize={10}
    disableSelectOnClick
  />
  </div>
)

 } 


  </Grid>
</Grid>
</Box>
  </Fragment>

  );
}

export default ShowUsers;

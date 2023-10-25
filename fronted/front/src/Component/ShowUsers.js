import React, { Fragment, useEffect } from "react";
import { showAdminUsers } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "./Loader";
import { useAlert } from "react-alert";
import { clearErrors } from "../actions/productAction";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";

const ShowUsers = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { users, error, loading } = useSelector((state) => state.adminUsers);

  useEffect(() => {
    dispatch(showAdminUsers());
  }, [dispatch, error, alert]);

  const columns = [
    { field: "id", headerName: "User Id", minWidth: 350  },
    { field: "name", headerName: "Name", minWidth: 250 },
    { field: "email", headerName: "Email", minWidth: 250 },
    { field: "role", headerName: "Role", minWidth: 150 },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 200,
      sortable: false,
      renderCell: (params) => (
        <div>
          <Link to={`/edit-user/${params.row.id}`}>
            <EditIcon />
          </Link>
          <DeleteIcon
            style={{ cursor: "pointer" }}
            //onClick={() => handleDeleteUser(params.row.id)}
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
        width: "100%",
        paddingRight : "20px"
   
      };

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div style={containerStyle}>
      <div style={headerStyle}>All Users</div>
      <DataGrid
        rows={rows}
        columns={columns}
        style={dataGridStyle}
        pageSize={10}
        disableSelectOnClick
      />
    </div>
  );
};

export default ShowUsers;

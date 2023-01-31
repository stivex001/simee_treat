import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";

const Container = styled.div`
  flex: 4;
`;
const Users = styled.div`
display: flex;
align-items: center;
`;
const Image = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
object-fit: cover;
margin-right: 10px;
`;
const Button = styled.button`
border: none;
border-radius: 10px;
padding: 5px 10px;
background-color: #3bb077;
color: white;
cursor: pointer;
margin-right: 20px;
`;

const UserList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
            <Users>
                <Image src={params.row.avatar} alt='user' />
                {params.row.username}
            </Users>
        )
      }
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transactions",
      width: 160,
    },
    {
        field: 'action',
        headerName: "Action",
        width: 150,
        renderCell: (params) => (
            <>
            <Button>Edit</Button>
            <DeleteOutline style={{color: 'red', cursor: 'pointer'}} />
            
            </>
            
        )
    }
  ];

  const rows = [
    {
      id: 1,
      username: "baistevo",
      avatar: "https://avatars.githubusercontent.com/u/87942124?v=4",
      email: "baistevo@gmail.com",
      status: "active",
      transaction: "#7500",
    },
    {
        id: 2,
        username: "baistevo",
        avatar: "https://avatars.githubusercontent.com/u/87942124?v=4",
        email: "baistevo@gmail.com",
        status: "active",
        transaction: "#7500",
      },
      {
        id: 3,
        username: "baistevo",
        avatar: "https://avatars.githubusercontent.com/u/87942124?v=4",
        email: "baistevo@gmail.com",
        status: "active",
        transaction: "#7500",
      },
      {
        id: 4,
        username: "baistevo",
        avatar: "https://avatars.githubusercontent.com/u/87942124?v=4",
        email: "baistevo@gmail.com",
        status: "active",
        transaction: "#7500",
      },
      {
        id: 5,
        username: "baistevo",
        avatar: "https://avatars.githubusercontent.com/u/87942124?v=4",
        email: "baistevo@gmail.com",
        status: "active",
        transaction: "#7500",
      },
      {
        id: 6,
        username: "baistevo",
        avatar: "https://avatars.githubusercontent.com/u/87942124?v=4",
        email: "baistevo@gmail.com",
        status: "active",
        transaction: "#7500",
      },
      {
        id: 7,
        username: "baistevo",
        avatar: "https://avatars.githubusercontent.com/u/87942124?v=4",
        email: "baistevo@gmail.com",
        status: "active",
        transaction: "#7500",
      },
      {
        id: 8,
        username: "baistevo",
        avatar: "https://avatars.githubusercontent.com/u/87942124?v=4",
        email: "baistevo@gmail.com",
        status: "active",
        transaction: "#7500",
      },
      {
        id: 9,
        username: "baistevo",
        avatar: "https://avatars.githubusercontent.com/u/87942124?v=4",
        email: "baistevo@gmail.com",
        status: "active",
        transaction: "#7500",
      },
      {
        id: 10,
        username: "baistevo",
        avatar: "https://avatars.githubusercontent.com/u/87942124?v=4",
        email: "baistevo@gmail.com",
        status: "active",
        transaction: "#7500",
      },
  ];

  return (
    <Container>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Container>
  );
};

export default UserList;

import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import useStockCalls from "@/hooks/useStockCalls";

export default function PurchasesTable({
  purchases,
  data,
  setData,
  handleOpen,
}) {
  const { deleteStock } = useStockCalls();

  const handleEdit = (params) => {
    handleOpen();
    setData({
      ...data,
      _id: params?.id,
      firmId: params?.row?.firmId?._id,
      brandId: params?.row?.brandId?._id,
      productId: params?.row?.productId?._id,
      price: params?.row?.price,
      quantity: params?.row?.quantity,
    });
  };

  const getRowId = (row) => row._id;

  const columns = [
    {
      field: "_id",
      headerName: "#",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      sortable: false,
      valueGetter: (params) => params.slice(-8),
    },
    {
      field: "firmId",
      headerName: "Firm",
      flex: 1.5,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.name,
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1.5,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.name,
    },
    {
      field: "productId",
      headerName: "Product",
      flex: 1.5,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.name,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          onClick={() => handleEdit(params)}
          label="Edit"
        />,
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => deleteStock("purchases", params?.id)}
          label="Delete"
        />,
      ],
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={purchases}
        columns={columns}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}

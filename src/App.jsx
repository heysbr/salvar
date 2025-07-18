import { DataGrid } from "@mui/x-data-grid";
import Dropdown from "./components/Dropdown";
import TableStatus from "./components/TableStatus";
import { Box } from "@mui/material";

const columns = [
  {
    field: "buyer",
    headerName: "Buyer",
    flex: 5,
    renderCell: (params) => <>{params.value}</>,
  },
  {
    field: "offer_received",
    headerName: "Offer received",
    flex:2,
    renderCell: (params) => <>{params.value}</>,
  },
  {
    field: "status",
    headerName: "Status",
    flex:2,
    renderCell: (params) => <TableStatus status={params.value} />,
  },
  {
    field: "total_offer_value",
    headerName: "Total Offer value",
    flex:3,
    renderCell: (params) => <>{params.value}</>,
  },
  {
    field: "ask_price",
    headerName: "+/- to Ask Price",
    flex:2,
    renderCell: (params) => (
      <span
        className={`${
          parseFloat(params.value) > 0 ? "text-[#039855]" : "text-[#FA3527]"
        }`}
      >
        {params.value}
      </span>
    ),
  },
  {
    field: "avg_offer",
    headerName: "Avg. Offer (ea)",
    flex:2,
    renderCell: (params) => <>{params.value}</>,
  },
  {
    field: "offer_expiry",
    headerName: "Offer expiry",
    flex:3,
    renderCell: (params) => <>{params.value}</>,
  },
  {
    field: "action",
    headerName: "Action",
    flex:3,
    renderCell: () => <Dropdown />,
  },
];

const rows = [
  {
    id: 1,
    buyer: "Acme Corp",
    offer_received: "5",
    status: "Active",
    total_offer_value: "$15,000",
    ask_price: "+5%",
    avg_offer: "$3,000",
    offer_expiry: "2025-07-20",
    action: "View",
  },
  {
    id: 2,
    buyer: "Globex Inc",
    offer_received: "3",
    status: "Pending",
    total_offer_value: "$9,500",
    ask_price: "-2%",
    avg_offer: "$3,167",
    offer_expiry: "2025-07-25",
    action: "View",
  },
  {
    id: 3,
    buyer: "Soylent Ltd",
    offer_received: "7",
    status: "Completed",
    total_offer_value: "$21,000",
    ask_price: "+1%",
    avg_offer: "$3,000",
    offer_expiry: "2025-07-22",
    action: "View",
  },
  {
    id: 4,
    buyer: "Initech",
    offer_received: "2",
    status: "Cancelled",
    total_offer_value: "$4,000",
    ask_price: "-8%",
    avg_offer: "$2,000",
    offer_expiry: "2025-07-18",
    action: "View",
  },
  {
    id: 5,
    buyer: "Hooli",
    offer_received: "4",
    status: "Active",
    total_offer_value: "$12,500",
    ask_price: "+3%",
    avg_offer: "$3,125",
    offer_expiry: "2025-07-28",
    action: "View",
  },
];

export default function App() {
  return (
    <Box width={1} >
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter
        disableRowSelectionOnClick
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            color: "#475467",
            fontWeight: "500",
            fontSize: "12px",
            backgroundColor: "#F9FAFB",
          },
        }}
      />
    </Box>
  );
}

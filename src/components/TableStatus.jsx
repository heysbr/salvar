import { Chip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function TableStatus({ status }) {
  switch (status) {
    case "Pending":
      return (
        <Chip
          variant="outlined"
          color="warning"
          label={status}
          
          icon={
            <svg height="10" width="10" xmlns="http://www.w3.org/2000/svg">
              <circle r="5" cx="5" cy="5" fill="orange" />
            </svg>
          }
          sx={{ color: "black", py: 1, px: 0, scale: "0.8", borderWidth: "2px", borderRadius: "50px", fontSize: "18px" }} 
        />
      );
    default:
      return (
        <Chip
          variant="outlined"
          color="default"
          label={status}
          icon={
            <svg className="" height="10" width="10" xmlns="http://www.w3.org/2000/svg">
              <circle r="5" cx="5" cy="5" fill="black" />
            </svg>}
          sx={{ color: "black", py: 1, px: 0, scale: "0.8", borderWidth: "2px", borderRadius: "50px", fontSize: "18px" }} 
        />
      );
  }
}

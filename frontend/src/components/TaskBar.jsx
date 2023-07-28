import * as React from "react";
import { SnackbarContent, Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
const TaskBar = (props) => {
  const handleDeleteClick = () => {
    props.onTaskRemoval(props._id, props.updateList);
  };
  const handleUpdateClick = () => {
    props.updateMode(props.index, props.task);
  };
  return (
    <Stack direction="row">
      <SnackbarContent
        sx={{
          backgroundColor: "#f2e4ee",
          width: "200px" /* Set the desired width of the snackbar */,
          whiteSpace: "nowrap" /* Prevent text from wrapping to a new line */,
          overflow: "hidden" /* Hide any overflowed content */,
          textOverflow:
            "ellipsis" /* Display an ellipsis (...) to indicate text truncation */,
          padding: "8px" /* Add padding for better appearance */,
          overflowX: " auto",
          /* Add box-shadow styles for the button */
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          /* Add other button styles as needed */
          color: "gray",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        message={props.task}
      />
      <Button onClick={props.updateMode} color="primary" size="large">
        <SyncAltIcon color="secondary" />
      </Button>
      <Button onClick={handleDeleteClick} color="primary" size="large">
        <DeleteIcon color="secondary" />
      </Button>
    </Stack>
  );
};
export default TaskBar;

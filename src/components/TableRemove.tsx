import React from "react";
import { Button, Toolbar } from "@mui/material";

type TableRemoveType = {
  disabled: boolean;
  handleRemove: () => void;
};

const TableRemove: React.FC<TableRemoveType> = ({ disabled, handleRemove }) => {
  return (
    <Toolbar style={{ paddingLeft: 15 }}>
      <Button
        sx={{ borderRadius: 8 }}
        color={"error"}
        variant="contained"
        disabled={disabled}
        onClick={handleRemove}
      >
        Remove
      </Button>
    </Toolbar>
  );
};

export default TableRemove;

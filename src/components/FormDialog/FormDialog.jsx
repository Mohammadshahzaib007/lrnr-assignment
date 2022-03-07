import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog(props) {
  const {
    open,
    handleClose,
    title,
    dialogContentText,
    children,
    submitHandler,
  } = props;

  const sumbit = (e) => {
    e.preventDefault();
    typeof submitHandler === "function" && submitHandler(e);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        {title && <DialogTitle>{title}</DialogTitle>}
        <form onSubmit={sumbit}>
          <DialogContent>
            {dialogContentText && (
              <DialogContentText>{dialogContentText}</DialogContentText>
            )}

            {children}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

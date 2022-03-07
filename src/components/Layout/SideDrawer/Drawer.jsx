import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function CustomDrawer(props) {
  const { open, drawerCloseHandler } = props;

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List>
        {[
          { name: "WYSIWYG Editor", route: "/wysiwyg-editor" },
          { name: "Page 2", route: "/page-2" },
          { name: "Page 3", route: "/page-3" },
          { name: "Page 4", route: "/page-4" },
        ].map((item, index) => (
          <Link key={item.name} to={item.route}>
            <ListItem button onClick={drawerCloseHandler}>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={drawerCloseHandler}>
        {list()}
      </Drawer>
    </div>
  );
}

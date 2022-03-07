import * as React from "react";

import { useNavigate } from "react-router-dom";

import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Label(props) {
  const {
    labelText,
    isParent,
    addClickHandler,
    addToPhotoClickHandler,
    moreClickHandler,
    isRoot,
    nodeId,
  } = props;

  const clickHandler = (event, type) => {
    event.stopPropagation();

    if (type === "add") {
      typeof addClickHandler === "function" && addClickHandler(nodeId);
    } else if (type === "addToPhoto") {
      typeof addToPhotoClickHandler === "function" && addToPhotoClickHandler();
    } else {
      typeof moreClickHandler === "function" && moreClickHandler();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        // p: 1,
        pr: 0,
      }}
    >
      {isParent ? <strong>{labelText}</strong> : labelText}

      {isParent && !isRoot ? (
        <Box mr="10px">
          <IconButton onClick={(e) => clickHandler(e, "add")}>
            <AddIcon fontSize="small" style={{ fontSize: 12 }} />
          </IconButton>
          <IconButton onClick={(e) => clickHandler(e, "addToPhoto")}>
            <AddToPhotosIcon fontSize="small" style={{ fontSize: 12 }} />
          </IconButton>
          <IconButton onClick={(e) => clickHandler(e, "more")}>
            <MoreVertIcon fontSize="small" style={{ fontSize: 12 }} />
          </IconButton>
        </Box>
      ) : null}
    </Box>
  );
}

export default function TreeViewMenu(props) {
  const { data, addClickHandler } = props;

  const navigate = useNavigate();

  const renderTree = (nodes) => (
    <TreeItem
      onClick={() =>
        nodes.type !== "root" &&
        !Array.isArray(nodes.children) &&
        navigate(`/wysiwyg-editor/${nodes.contentType}`)
      }
      key={nodes.id}
      nodeId={nodes.id}
      label={
        <Label
          labelText={nodes.name}
          isParent={Array.isArray(nodes.children)}
          isRoot={nodes.type === "root"}
          contentType={nodes.contentType}
          addClickHandler={addClickHandler}
          nodeId={nodes.id}
        />
      }
      sx={{ my: "10px" }}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon fontSize="small" />}
      defaultExpandIcon={<ChevronRightIcon fontSize="small" />}
      sx={{ flexGrow: 1, maxWidth: 400, overflow: "hidden" }}
    >
      {renderTree(data)}
    </TreeView>
  );
}

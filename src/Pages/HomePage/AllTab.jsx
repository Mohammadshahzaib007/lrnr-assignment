import { useState } from "react";

import { Box } from "@mui/system";
import { v4 as uuidv4 } from "uuid";

import FormDialog from "../../components/FormDialog/FormDialog";
import TreeViewMenu from "../../components/TreeViewMenu/TreeViewMenu";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const data = [
  {
    id: uuidv4(),
    name: "collection.1",
    type: "root",
    children: [
      {
        id: uuidv4(),
        name: "collection.1.1",
        type: "root",
        children: [
          {
            id: uuidv4(),
            name: "collection.1.1.1",
            children: [
              {
                id: uuidv4(),
                name: "Content Page 1.1.1.1",
                contentType: "page",
              },
              {
                id: uuidv4(),
                name: "Quiz",
                contentType: "quiz",
              },
              {
                id: uuidv4(),
                name: "Videos",
                contentType: "videos",
              },
              {
                id: uuidv4(),
                name: "WYSIWYG Editor",
                contentType: "editor",
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: "collection 1.2",
        type: "root",
        children: [{ id: uuidv4() }],
      },
    ],
  },

  {
    id: uuidv4(),
    name: "collection.2",
    type: "root",
    children: [
      {
        id: uuidv4(),
        name: "collection.2.1",
        type: "root",
        children: [{ id: uuidv4() }],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "collection.3",
    type: "root",
    children: [{ id: uuidv4() }],
  },
  {
    id: uuidv4(),
    name: "collection.4",
    type: "root",
    children: [{ id: uuidv4() }],
  },
  {
    id: uuidv4(),
    name: "collection.5",
    type: "root",
    children: [{ id: uuidv4() }],
  },
];

function AllTab() {
  const [options, setOptions] = useLocalStorage("options", data);
  const [open, setOpen] = useState(false);
  const [currNodeId, setCurrNodeId] = useState(null);

  const addClickHandler = (nodeId) => {
    setOpen(true);
    setCurrNodeId(nodeId);
  };

  const search = (tree, target, newItem) => {
    if (tree.id === target) {
      tree.children = tree.children.concat(newItem);
      return tree;
    }

    if (Array.isArray(tree.children)) {
      for (const child of tree.children) {
        const found = search(child, target);

        if (found) return found;
      }
    }
  };

  const addItemHandler = (name, type, currNodeId) => {};
  const submitHandler = (e) => {
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const type = formData.get("type");
    addItemHandler(name, type, currNodeId);
  };
  return (
    <>
      {options.map((item, i) => (
        <TreeViewMenu key={i} data={item} addClickHandler={addClickHandler} />
      ))}

      <FormDialog
        open={open}
        handleClose={() => setOpen(false)}
        title={"Add Item"}
        submitHandler={submitHandler}
      >
        <Box width="350px">
          <TextField
            fullWidth
            name="name"
            label="Item Name"
            variant="standard"
            margin="normal"
            required
          />

          <FormControl margin="normal" variant="standard" fullWidth>
            <InputLabel id="simple-select-standard-label">
              Item Type *
            </InputLabel>
            <Select
              required
              name="type"
              labelId="simple-select-standard-label"
              id="simple-select-standard"
              label="Item Type"
            >
              <MenuItem value="page">Page</MenuItem>
              <MenuItem value="quiz">Quiz</MenuItem>
              <MenuItem value="videos">Videos</MenuItem>
              <MenuItem value="editor">WYSIWYG Editor</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </FormDialog>
    </>
  );
}

export default AllTab;

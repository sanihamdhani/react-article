import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import "./styles/styles.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 7,
  borderRadius: 4,
  maxWidth: "60vw",
  maxHeight: "100%",
  overflowY: "auto",
};

interface Props {
  title: string;
  desc: string;
  url: string;
  publish: string;
  content: string;
  author: string;
}

export default function ArticleModal(props: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Detail</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500 }} className="responsive-modal">
          <h2 id="child-modal-title">{props.title}</h2>
          <h4>{props.author}</h4>
          <h5>{props.publish}</h5>

          <p>
            {props.desc}
            <a href={props.url} style={{ textDecoration: "none" }}>
              Readmore
            </a>
          </p>

          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

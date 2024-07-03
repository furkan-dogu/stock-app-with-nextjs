import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { modalStyle } from "@/styles/globalStyle";
import useStockCalls from "@/hooks/useStockCalls";

export default function BrandModal({ open, handleClose, data, setData }) {
  const { addStock } = useStockCalls();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(data);
    addStock("brands", data);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle} component={"form"} onSubmit={handleSubmit}>
        <TextField
          required
          name="name"
          label="Brand Name"
          type="text"
          id="name"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          required
          name="image"
          label="Image"
          type="url"
          id="image"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <Button type="submit" fullWidth variant="contained">
          Add Brand
        </Button>
      </Box>
    </Modal>
  );
}

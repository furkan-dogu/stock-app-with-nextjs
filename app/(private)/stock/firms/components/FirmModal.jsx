import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { modalStyle } from "@/styles/globalStyle";
import useStockCalls from "@/hooks/useStockCalls";

export default function FirmModal({ open, handleClose, data, setData }) {
  const { addStock, updateStock } = useStockCalls();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(data);
    if (data._id) {
      updateStock("firms", data);
    } else {
      addStock("firms", data);
    }
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
          label="Firm Name"
          type="text"
          id="name"
          variant="outlined"
          fullWidth
          value={data.name}
          onChange={handleChange}
        />
        <TextField
          required
          name="phone"
          label="Phone"
          type="text"
          id="phone"
          variant="outlined"
          fullWidth
          value={data.phone}
          onChange={handleChange}
        />
        <TextField
          required
          name="address"
          label="Address"
          type="text"
          id="address"
          variant="outlined"
          fullWidth
          value={data.address}
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
          value={data.image}
          onChange={handleChange}
        />
        <Button type="submit" fullWidth variant="contained">
          {data._id ? "Update Firm" : "Add Firm"}
        </Button>
      </Box>
    </Modal>
  );
}

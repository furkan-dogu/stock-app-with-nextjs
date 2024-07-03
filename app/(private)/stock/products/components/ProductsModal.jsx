import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import { modalStyle } from "@/styles/globalStyle";
import { useSelector } from "react-redux";
import useStockCalls from "@/hooks/useStockCalls";

export default function ProductModal({ open, handleClose, data, setData }) {
  const { brands, categories } = useSelector((state) => state.stock);
  const { addStock } = useStockCalls()

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData(data)
    addStock("products", data)
    handleClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle} component={"form"} onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel id="category-label">Categories</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            name="categoryId"
            value={data.categoryId}
            label="Categories"
            onChange={handleChange}
          >
            {categories.map((category) => (
              <MenuItem key={category._id} value={category._id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="brand-label">Brands</InputLabel>
          <Select
            labelId="brand-label"
            id="brand"
            name="brandId"
            value={data.brandId}
            label="Brands"
            onChange={handleChange}
          >
            {brands.map((brand) => (
              <MenuItem key={brand._id} value={brand._id}>
                {brand.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          required
          name="name"
          label="Product Name"
          type="text"
          id="name"
          variant="outlined"
          fullWidth
          value={data.name}
          onChange={handleChange}
        />
        <Button type="submit" fullWidth variant="contained">
          Add Product
        </Button>
      </Box>
    </Modal>
  );
}

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
import { useRouter } from "next/navigation";

export default function SalesModal({ open, handleClose, data, setData }) {
  const { brands, products } = useSelector((state) => state.stock);
  const { addStock, updateStock } = useStockCalls()
  const router = useRouter()

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData(data)
    if(data._id) {
        updateStock("sales", data)
    } else {
        addStock("sales", data)
    }
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
          <InputLabel id="brand-label">Brands</InputLabel>
          <Select
            labelId="brand-label"
            id="brand"
            name="brandId"
            value={data.brandId}
            label="Brands"
            onChange={handleChange}
          >
            <MenuItem onClick={() => router.push("/stock/brands")}>Add New Brand</MenuItem>
            <hr />
            {brands.map((brand) => (
              <MenuItem key={brand._id} value={brand._id}>
                {brand.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="product-label">Products</InputLabel>
          <Select
            labelId="product-label"
            id="product"
            name="productId"
            value={data.productId}
            label="Products"
            onChange={handleChange}
          >
            <MenuItem onClick={() => router.push("/stock/products")}>Add New Product</MenuItem>
            <hr />
            {products.map((product) => (
              <MenuItem key={product._id} value={product._id}>
                {product.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          required
          name="quantity"
          label="Quantity"
          type="number"
          id="quantity"
          variant="outlined"
          fullWidth
          value={data.quantity}
          onChange={handleChange}
        />
        <TextField
          required
          name="price"
          label="Price"
          type="number"
          id="price"
          variant="outlined"
          fullWidth
          value={data.price}
          onChange={handleChange}
        />
        <Button type="submit" fullWidth variant="contained">
          {data._id ? "Update Sales" : "Add Sales"}
        </Button>
      </Box>
    </Modal>
  );
}

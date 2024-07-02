import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const icons = [
  {
    id: 1,
    icon: <SpaceDashboardIcon />,
    title: "Dashboard",
    url: "/stock",
  },
  {
    id: 2,
    title: "Purchases",
    icon: <ShoppingCartIcon />,
    url: "/stock/purchases",
  },
  {
    id: 3,
    title: "Sales",
    icon: <AttachMoneyIcon />,
    url: "/stock/sales",
  },
  {
    id: 4,
    title: "Firms",
    icon: <StoreIcon />,
    url: "/stock/firms",
  },
  {
    id: 5,
    title: "Brands",
    icon: <StarsIcon />,
    url: "/stock/brands",
  },
  {
    id: 6,
    title: "Products",
    icon: <InventoryIcon />,
    url: "/stock/products",
  },
];
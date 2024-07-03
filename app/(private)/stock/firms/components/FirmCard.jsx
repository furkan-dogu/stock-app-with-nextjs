import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { iconStyle } from '@/styles/globalStyle';
import useStockCalls from '@/hooks/useStockCalls';

export default function FirmCard({ firm, handleOpen, setData }) {
  const { deleteStock } = useStockCalls()

  const handleUpdateFirm = () => {
    handleOpen()
    setData(firm)
  }
    
  return (
    <Card sx={{
        width: 300,
        height: 400,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
    }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{height: 62, display: "flex", alignItems: "center"}}>
          {firm?.address}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={firm?.name}
        sx={{ objectFit: "contain", height: 140}}
        image={firm?.image}
      />
      <Typography variant="body2" color="text.secondary">
        {firm?.phone}
      </Typography>
      <CardActions>
        <EditIcon sx={iconStyle} onClick={handleUpdateFirm} />
        <DeleteOutlineIcon sx={iconStyle} onClick={() => deleteStock("firms", firm._id)} />
      </CardActions>
    </Card>
  );
}

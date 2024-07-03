import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { iconStyle } from '@/styles/globalStyle';

export default function BrandCard({ brand }) {
    
  return (
    <Card sx={{
        width: 300,
        height: 400,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
    }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brand?.name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={brand?.name}
        sx={{ objectFit: "contain", height: 200}}
        image={brand?.image}
      />
      <CardActions>
        <EditIcon sx={iconStyle} />
        <DeleteOutlineIcon sx={iconStyle} />
      </CardActions>
    </Card>
  );
}

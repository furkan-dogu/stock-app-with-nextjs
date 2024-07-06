import { Alert, Skeleton, Stack } from "@mui/material";
import { Box } from "@mui/material";
import spinner from "@/assets/loading.gif"
import Image from "next/image";

export const ErrorMsg = () => {
  return <Alert severity="error" sx={{my:3}}>Data can not be fetched</Alert>;
};

export const NoDataMsg = () => {
  return <Alert severity="warning" sx={{my:3}}>No data found to show.</Alert>;
};

export const Spinner = () => {
    return (
      <Box sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
        <Image src={spinner} alt="Loading..." width={200} height={200} />
      </Box>
    );
};

const TableSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width="100%" height={60} />
      <Skeleton variant="rectangular" width="100%" height={0} />
    </Stack>
  );
};

export default TableSkeleton;

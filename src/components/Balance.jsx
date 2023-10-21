import { Box, Typography } from "@mui/material";

export const Balance = ({money}) => {
  return (
    <>
      <Box sx={{ textAlign: "start", backgroundColor: "#ffffff87", padding:'1.5rem', borderRadius:'10px' }}>
        <Typography variant="h5">Balance</Typography>
        <Typography>Presupuesto: {money}</Typography>
        <Typography>Disponible: {money}</Typography>
        <Typography>Gastado: {money}</Typography>
      </Box>
    </>
  );
};

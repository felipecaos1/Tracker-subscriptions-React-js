import { Delete, Edit } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { moneyFormat } from "../helpers/MoneyFormat";

export const SubsList = ({ subs, setSubs, elimiarSubs, editarService }) => {
  const handleDelete = (id) => {
    elimiarSubs(id);
  };

  const handleEdit = (id) => {
    editarService(id);
  };

  return (
    <>
      <Typography variant="h4" sx={{ marginTop: "2rem", marginBottom: "1rem" }}>
        Suscripciones
      </Typography>
      {subs.map((sub) => (
        <Grid
          container
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "20px",
            marginY: "0.5rem",
            alignItems: "center",
          }}
          key={sub.id}
        >
          <Grid item sm={4} xs={12}>
            <img src={`/${sub.service}.png`} alt={sub.service} width="50%" />
          </Grid>
          <Grid item sm={4} xs={12}>
            <Typography>Precio: {moneyFormat(Number(sub.price))}</Typography>
          </Grid>
          <Grid item sm={4} xs={12} sx={{ textAlign: "end" }}>
            <IconButton
              arial-label="eliminar servicio"
              onClick={() => {
                handleDelete(sub.id);
              }}
            >
              <Delete />
            </IconButton>
            <IconButton
              arial-label="eliminar servicio"
              onClick={() => {
                handleEdit(sub.id);
              }}
            >
              <Edit />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

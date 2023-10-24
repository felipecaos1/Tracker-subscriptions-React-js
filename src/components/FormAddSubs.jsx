import { Add } from "@mui/icons-material";
import {
  Box,
  FormControl,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const FormAddSubs = ({
  service,
  setService,
  price,
  setPrice,
  setSubs,
  subs,
  isEditId,
  setIsEditId,
}) => {
  const [error, setError] = useState(false);

  const handleAddSubs = (e) => {
    e.preventDefault();

    if (service == "" || Number(price) < 0 || price == "") {
      setError(true);
      return;
    }
    setError(false);

    if (isEditId != "") {
      const newSubs = subs.map((item) => {
        if (item.id == isEditId) {
          item.service = service;
          item.price = price;
        }

        return item;
      });

      setIsEditId("");
      setSubs(newSubs);
    } else {
      // Modelo de servicio
      const data = {
        service: service,
        price: price,
        id: Date.now(),
      };
      setSubs([...subs, data]);
    }

    setPrice("");
    setService("");
  };

  return (
    <>
      <Box component="form" onSubmit={handleAddSubs}>
        <Typography>Agregar Suscripción</Typography>
        <div>
          <FormControl sx={{ mt: 3, width: "210px" }} size="small">
            <InputLabel id="demo-simple-select-label">Servicios</InputLabel>
            <Select
              sx={{ textAlign: "left" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={service}
              label="Servicios"
              onChange={(e) => setService(e.target.value)}
              error={error}
            >
              <MenuItem value="netflix">Netflix</MenuItem>
              <MenuItem value="hboMax">HBO Max</MenuItem>
              <MenuItem value="disneyPlus">Disney +</MenuItem>
              <MenuItem value="spotify">Spotify </MenuItem>
              <MenuItem value="primeVideo">Prime Video</MenuItem>
              <MenuItem value="starPlus">Star +</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField
            type="number"
            size="small"
            sx={{ marginTop: "1rem" }}
            label="Costo Mensual"
            title="costo mensual del servicio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            inputProps={{
              min: 0,
            }}
            error={error}
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            startIcon={<Add />}
            sx={{
              marginTop: "1rem",
              backgroundColor: "#000",
              "&:hover": {
                backgroundColor: "#000",
              },
            }}
          >
            {isEditId != "" ? "Actualizar" : "Agregar"}
          </Button>
        </div>
      </Box>
    </>
  );
};

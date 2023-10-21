import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const FormAddMoney = ({setMoney, setIsValid}) => {

    const [presu, setPresu] = useState('');
    const [error, setError] = useState(false);
    const [errorMessa, setErrorMessa] = useState('');

    const handleInput = (e) =>{
        setError(false)
        setErrorMessa('');

        setPresu(e.target.value);

    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        // Validaciones
        if(presu == ''){
            setError(true);
            setErrorMessa('Ingrese un valor');
            return;
        }

        setMoney(Number(presu));
        setIsValid(true);
    }
  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography sx={{marginBottom:'0.5rem'}}>Agregar presupuesto</Typography>
        <div>
          <TextField helperText={errorMessa} error={error} value={presu} onChange={handleInput} required label="Presupuesto" size="small" />
        </div>
        <Button
        type="submit"
          variant="contained"
          sx={{
            marginTop: "1rem",
            backgroundColor: "#000",
            border: "1px solid #000",
            "&:hover": {
              backgroundColor: "#000",
              border: "1px solid #67d6cd",
            },
          }}
        >
          Agregar
        </Button>
      </Box>
    </>
  );
};

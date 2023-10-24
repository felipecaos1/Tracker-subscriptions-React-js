import { Box, Typography } from "@mui/material";
import { moneyFormat } from "../helpers/MoneyFormat";
import { useEffect, useState } from "react";

export const Balance = ({money, subs}) => {

  const [spend, setSpend] =  useState(0);

  const updateBalance = () =>{
    const total_spend = subs.reduce((total , item) => total + Number(item.price), 0);
    setSpend(total_spend);
  };

  useEffect(() => {
    console.log(spend, money);
    updateBalance();
  }, [subs]);

  return (
    <>
      <Box sx={{ textAlign: "start", backgroundColor: "#ffffff87", padding:'1.5rem', borderRadius:'10px' }}>
        <Typography variant="h5">Balance</Typography>
        <Typography>Presupuesto: {moneyFormat(Number(money))}</Typography>
        <Typography>Disponible: {moneyFormat(Number(money)-spend)} </Typography>
        <Typography>Gastado: {moneyFormat(spend)}</Typography>
      </Box>
    </>
  );
};

import { Grid, Typography } from "@mui/material";
import { Balance } from "./Balance";
import { FormAddSubs } from "./FormAddSubs";
import { useState } from "react";
import { SubsList } from "./SubsList";

export const MainControl = ({ money }) => {
  const [subs, setSubs] =  useState([]);
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [isEditId, setIsEditId] = useState("");

  const elimiarSubs = (id) =>{
    const newSubs = subs.filter((item) => item.id != id);
    setSubs(newSubs);
  } 

  const editarService = (id) =>{
      subs.map(item =>{
         if(item.id == id){
            setService(item.service);
            setPrice(item.price);
            setIsEditId(id);
         }
        })
  }

  return (
    <>
      <Grid container>
        <Grid item sm="auto" sx={{ marginX: "auto" }}>
          <Balance money={money} subs={subs} />
        </Grid>
        <Grid item sm={6}>
          <FormAddSubs
            service={service}
            setService={setService}
            price={price}
            setPrice={setPrice}
            subs={subs}
            setSubs={setSubs}
            isEditId={isEditId}
            setIsEditId={setIsEditId}
          />
        </Grid>
      </Grid>
      <SubsList
        subs={subs}
        setSubs={setSubs}
        elimiarSubs={elimiarSubs}
        editarService={editarService}
      />
    </>
  );
};

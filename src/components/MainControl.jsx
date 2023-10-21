import { Grid, Typography } from "@mui/material";
import { Balance } from "./Balance";

export const MainControl = ({ money }) => {
  return (
    <>
      <Grid container>
        <Grid item sm='auto' sx={{marginX:'auto'}}>
          <Balance money={money} />
        </Grid>
        <Grid item sm={6}></Grid>
      </Grid>
    </>
  );
};

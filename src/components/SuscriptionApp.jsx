import { Container } from "@mui/material";
import { Header } from "./Header";
import { FormAddMoney } from "./FormAddMoney";
import { useState } from "react";
import { MainControl } from "./MainControl";

export const SuscriptionApp = () => {

    const [money, setMoney] = useState(0);
    const [isValid, setIsValid] =useState(false);

    const visibleConent = isValid ? (
      <MainControl money={money} />
    ) : (
      <FormAddMoney setMoney={setMoney} setIsValid={setIsValid} />
    );

  return (
    <>
      <Container
        className="wraper-main"
        maxWidth="md"
        sx={{ marginTop: "5rem", backgroundColor: "#ddd" }}
      >
        <Header />
        {visibleConent}
      </Container>
    </>
  );
};

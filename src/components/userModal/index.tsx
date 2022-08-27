import { Body, InputBox, Form, Title } from "./style";
import { TextField, Button } from "@mui/material";
import { useProvider } from "../../store/githubProvider";
import { useState } from "react";

const UserModal = () => {
  const { userError, errorMessage, getUser } = useProvider();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getUser(userName);
  };

  return (
    <Body>
      <Title>Procure um usuário</Title>
      <InputBox>
        <Form onSubmit={handleSubmit}>
          <TextField
            color="primary"
            sx={{
              width: "100%",
              maxWidth: "340px",
              height: "45px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
            label="Usuário"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            error={!!userError}
            helperText={errorMessage}
          />
          <Button
            color="primary"
            variant="contained"
            sx={{
              width: "100%",
              maxWidth: "340px",
              height: "45px",
              padding: "0",
              textTransform: "none",
              fontFamily: "Righteous, cursive",
              borderRadius: "8px",
            }}
            type="submit"
          >
            Procurar
          </Button>
        </Form>
      </InputBox>
    </Body>
  );
};

export default UserModal;

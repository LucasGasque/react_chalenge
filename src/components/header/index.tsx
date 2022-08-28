import { Button } from "@mui/material";
import { useProvider } from "../../store/githubProvider";
import { Body, Box, Fields, OtherFields, UserFields } from "./style";

const Header = () => {
  const { user, repo, branch, selectRender, changeUser } = useProvider();

  return (
    <Body>
      <Box>
        <Fields>
          <UserFields>
            <h3>Usuário: {user.login}</h3>
            <Button
              color="primary"
              variant="contained"
              sx={{
                width: "100px",
                maxWidth: "340px",
                height: "30px",
                padding: "0",
                textTransform: "none",
                fontFamily: "Righteous, cursive",
                borderRadius: "8px",
              }}
              type="button"
              onClick={() => changeUser()}
            >
              Novo Usuário
            </Button>
          </UserFields>
          <OtherFields>
            <p>Repositório: {repo}</p>
            <p>Branch: {branch.name}</p>
          </OtherFields>
        </Fields>
        <div>
          <Button
            color="primary"
            variant="contained"
            sx={{
              width: "90px",
              maxWidth: "340px",
              height: "30px",
              padding: "0",
              textTransform: "none",
              fontFamily: "Righteous, cursive",
              borderRadius: "8px",
            }}
            type="button"
            onClick={() => selectRender("repos")}
          >
            Repos
          </Button>
          <Button
            color="primary"
            variant="contained"
            sx={{
              width: "90px",
              maxWidth: "340px",
              height: "30px",
              padding: "0",
              textTransform: "none",
              fontFamily: "Righteous, cursive",
              borderRadius: "8px",
              margin: "0 10px",
            }}
            type="button"
            onClick={() => selectRender("branches")}
          >
            Branches
          </Button>
          <Button
            color="primary"
            variant="contained"
            sx={{
              width: "90px",
              maxWidth: "340px",
              height: "30px",
              padding: "0",
              textTransform: "none",
              fontFamily: "Righteous, cursive",
              borderRadius: "8px",
            }}
            type="button"
            onClick={() => selectRender("commits")}
          >
            Commits
          </Button>
        </div>
      </Box>
    </Body>
  );
};

export default Header;

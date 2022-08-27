import { Button } from "@mui/material";
import { useProvider } from "../../store/githubProvider";
import { Body, Box } from "./style";

const Header = () => {
  const { user, repo, branch, selectRender } = useProvider();

  return (
    <Body>
      <Box>
        <h3>Usuário: {user.login}</h3>
        <p>Repositório: {repo}</p>
        <p>Branch: {branch.name}</p>
        <div>
          <Button
            color="secondary"
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
            color="secondary"
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
            color="secondary"
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

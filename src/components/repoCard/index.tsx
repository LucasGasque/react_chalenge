import { Button } from "@mui/material";
import { useProvider } from "../../store/githubProvider";
import { ReposData } from "../../types";
import { Body, Box, Title } from "./style";

interface RepoCardProps {
  repo: ReposData;
}

const RepoCard = ({ repo }: RepoCardProps) => {
  const { getRepo } = useProvider();

  return (
    <Body>
      <Title>{repo.name}</Title>
      <Box>
        <p>{repo.url}</p>
        <p>{repo.language}</p>
        <p>{repo.created_at.substring(0, 10)}</p>
      </Box>
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
          position: "relative",
          right: "5px",
          bottom: "5px",
        }}
        type="button"
        onClick={() => getRepo(repo.name)}
      >
        Repo
      </Button>
    </Body>
  );
};

export default RepoCard;

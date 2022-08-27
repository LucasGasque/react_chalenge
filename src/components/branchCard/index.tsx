import { Button } from "@mui/material";
import { useProvider } from "../../store/githubProvider";
import { BranchesData } from "../../types";
import { Body, Title } from "./style";

interface BranchCardProps {
  branch: BranchesData;
}

const BranchCard = ({ branch }: BranchCardProps) => {
  const { getBranch } = useProvider();

  return (
    <Body>
      <Title>{branch.name}</Title>
      <Button
        color="secondary"
        variant="contained"
        sx={{
          width: "120px",
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
        onClick={() => getBranch(branch)}
      >
        Select Branch
      </Button>
    </Body>
  );
};

export default BranchCard;

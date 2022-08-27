import { CommitsData } from "../../types";
import { Body, Title } from "./style";

interface CommitCardProps {
  commit: CommitsData;
}

const CommitCard = ({ commit }: CommitCardProps) => {
  return (
    <Body>
      <Title>Autor: {commit.commit.author.name}</Title>
      <p>commit: {commit.commit.message}</p>
    </Body>
  );
};

export default CommitCard;

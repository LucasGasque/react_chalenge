import BranchCard from "../components/branchCard";
import CommitCard from "../components/commitCard";
import Header from "../components/header";
import RepoCard from "../components/repoCard";
import UserModal from "../components/userModal";
import { useProvider } from "../store/githubProvider";
import { Body, ReposList } from "./style";

const MainPage = () => {
  const { showModal, repos, branches, commits, render, getRepo } =
    useProvider();

  return (
    <Body>
      {showModal && <UserModal />}
      {!showModal && <Header />}

      <ReposList>
        {render === "repos" &&
          repos.map((repo, index) => <RepoCard key={index} repo={repo} />)}

        {render === "branches" &&
          branches.map((branch, index) => (
            <BranchCard key={index} branch={branch} />
          ))}

        {render === "commits" &&
          commits.map((commit, index) => (
            <CommitCard key={index} commit={commit} />
          ))}
      </ReposList>
    </Body>
  );
};

export default MainPage;

import { createContext, useContext, useEffect, useState } from "react";
import githubApi from "../../service";
import {
  StoreProps,
  StoreContextData,
  UserData,
  ReposData,
  BranchesData,
  CommitsData,
} from "../../types/index";

const StoreContext = createContext<StoreContextData>({} as StoreContextData);

export const GithubProvider = ({ children }: StoreProps) => {
  const [user, setUser] = useState<UserData>({} as UserData);
  const [repos, setRepos] = useState<ReposData[]>([]);
  const [branches, setBranches] = useState<BranchesData[]>([]);
  const [commits, setCommits] = useState<CommitsData[]>([]);
  const [userError, setUserError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [repo, setRepo] = useState<string>("");
  const [branch, setBranch] = useState<BranchesData>({} as BranchesData);
  const [render, setRender] = useState("repos");

  const getUser = (user: string) => {
    githubApi
      .get(`users/${user}`)
      .then((response) => {
        setUser(response.data);
        setUserError(false);
        setErrorMessage("");
        setShowModal(false);
        getRepos();
      })
      .catch((error) => {
        setUserError(true);
        setErrorMessage(error.response.data.message);
      });
  };

  const getRepos = () => {
    githubApi
      .get(`users/${user.login}/repos`)
      .then((response) => setRepos(response.data))
      .catch(() => setRepos([]));
  };

  const getBranches = () => {
    githubApi
      .get(`repos/${user.login}/${repo}/branches`)
      .then((response) => setBranches(response.data))
      .catch(() => setBranches([]));
  };

  const getCommits = () => {
    githubApi
      .get(
        `repos/${user.login}/${repo}/commits/${branch.sha}/branches-where-head`,
      )
      .then((response) => setCommits(response.data))
      .catch(() => setCommits([]));
  };

  const getRepo = (repo: string) => {
    setRepo(repo);
  };

  const getBranch = (branch: BranchesData) => {
    setBranch(branch);
  };

  const selectRender = (render: string) => {
    setRender(render);
  };

  useEffect(() => {
    getRepos();
  }, [user]);

  useEffect(() => {
    getBranches();
  }, [repo]);

  useEffect(() => {
    getCommits();
  }, [branch]);

  return (
    <StoreContext.Provider
      value={{
        user,
        userError,
        errorMessage,
        repos,
        branches,
        commits,
        getUser,
        showModal,
        repo,
        branch,
        getRepo,
        getBranch,
        render,
        selectRender,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useProvider = () => useContext(StoreContext);

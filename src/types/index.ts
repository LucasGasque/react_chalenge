import { ReactNode } from "react";

export interface StoreProps {
  children: ReactNode;
}

export interface UserData {
  id: number;
  login: string;
  avatar_url: string;
  public_repos: number;
}

export interface ReposData {
  name: string;
  url: string;
  language: string;
  created_at: string;
}

export interface BranchesData {
  name: string;
}

interface Author {
  name: string;
}

interface Commit {
  author: Author;
  message: string;
}

export interface CommitsData {
  commit: Commit;
}

export interface StoreContextData {
  user: UserData;
  userError: boolean;
  errorMessage: string;
  repos: ReposData[];
  branches: BranchesData[];
  commits: CommitsData[];
  getUser: (user: string) => void;
  showModal: boolean;
  repo: string;
  branch: BranchesData;
  getRepo: (repo: string) => void;
  getBranch: (branch: BranchesData) => void;
  render: string;
  selectRender: (render: string) => void;
  changeUser: () => void;
}

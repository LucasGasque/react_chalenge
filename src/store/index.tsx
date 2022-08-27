import { ReactNode } from "react";
import { GithubProvider } from "./githubProvider";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <GithubProvider>{children}</GithubProvider>;
};

export default Providers;

import { muiTheme } from "./styles/muiTheme";
import { ThemeProvider } from "@mui/material/styles";
import GlobalStyle from "./styles/global";
import Providers from "./store";
import MainPage from "./page";

const App = () => {
  return (
    <Providers>
      <ThemeProvider theme={muiTheme}>
        <GlobalStyle />
        <MainPage />
      </ThemeProvider>
    </Providers>
  );
};

export default App;

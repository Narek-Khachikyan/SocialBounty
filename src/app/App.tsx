import { AppProviders } from "./providers";
import { Routing } from "../pages";
const App = () => {
  return (
    <AppProviders>
      <Routing />
    </AppProviders>
  );
};

export default App;

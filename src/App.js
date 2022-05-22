import routes from "./routes";
import providers from "./providers";

function App() {
  return (
    <providers.AppProvider>
      <routes.Switch />
    </providers.AppProvider>
  );
}

export default App;

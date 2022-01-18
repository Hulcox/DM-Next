import { AppContextProvider } from "../components/appContext";
import ContentJournal from "../components/Content";
import HeaderBar from "../components/Header";

export default function Home() {
  return (
    <AppContextProvider>
      <HeaderBar />
      <div>
        <h1>Coucou</h1>
      </div>
    </AppContextProvider>
  );
}

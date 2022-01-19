import { AppContextProvider } from "../components/appContext";
import ContentJournal from "../components/Content";
import HeaderBar from "../components/Header";

export default function Home() {
  return (
    <AppContextProvider>
      <HeaderBar title={"Dashboard"} />
      <ContentJournal />
    </AppContextProvider>
  );
}

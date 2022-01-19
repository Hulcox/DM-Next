import { AppContextProvider } from "../components/appContext";
import ContentJournal from "../components/Content";
import FormAddEntry from "../components/FormAddEntry";
import HeaderBar from "../components/Header";

export default function Home() {
  return (
    <AppContextProvider>
      <HeaderBar title={"Add New Entry"} />
      <FormAddEntry />
    </AppContextProvider>
  );
}

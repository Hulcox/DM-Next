import { AppContextProvider } from "../components/appContext";
import FormAddEntry from "../components/form/FormAddEntry";
import HeaderBar from "../components/Header";

export default function Home() {
  return (
    <AppContextProvider>
      <HeaderBar title={"Add New Entry"} />
      <FormAddEntry />
    </AppContextProvider>
  );
}

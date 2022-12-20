import Complete from "./components/Modes/Complete";
import Insert from "./components/Modes/InsertMode";
import Edit from "./components/Modes/EditMode";
import { useModeContext } from "./Context/FormContext";

function App() {
  const { mode } = useModeContext();
  return (
    <>
      {mode === "complete" && <Complete />}
      {mode === "insert" && <Insert />}
      {mode === "edit" && <Edit />}
    </>
  );
}

export default App;

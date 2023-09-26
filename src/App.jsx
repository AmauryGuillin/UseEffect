import { useEffect, useState } from "react";
import { Checkbox } from "./components/forms/Checkbox";
import { Input } from "./components/forms/Input";

function App() {
  const [showInput, setShowInput] = useState(true);

  return (
    <>
      <div>
        <Checkbox
          checked={showInput}
          onChange={setShowInput}
          label="Afficher le champ titre"
          id="titleShow"
        />
        {showInput && <EditTitle />}
      </div>
      <div style={{ height: "300vh" }}></div>
    </>
  );
}

function EditTitle() {
  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");
  const [y, setY] = useState(0);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const handler = () => {
      setY(window.scrollY);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <>
      <div>
        <Input
          placeholder="Modifier le titre"
          value={title}
          onChange={setTitle}
        />
      </div>
      <div>
        <Input
          placeholder="Modifier le prénom"
          value={firstname}
          onChange={setFirstname}
        />
      </div>
      <div>{y}</div>
    </>
  );
}

export default App;

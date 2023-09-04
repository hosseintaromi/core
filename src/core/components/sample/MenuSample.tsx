import { useState } from "react";
import { useView } from "../../hooks/useView";

function MenuSample() {
  const [selected, setSelected] = useState(-1);
  const { close } = useView();

  return (
    <div style={{ backgroundColor: "red" }}>
      <ul>
        <li
          onClick={() => setSelected(0)}
          style={{ color: selected === 0 ? "green" : "blue" }}
        >
          Option1
        </li>
        <li
          onClick={() => {
            close(1);
          }}
          style={{ color: selected === 1 ? "green" : "blue" }}
        >
          Option2
        </li>
        <li
          onClick={() => setSelected(2)}
          style={{ color: selected === 2 ? "green" : "blue" }}
        >
          Option3
        </li>
        <li
          onClick={() => setSelected(3)}
          style={{ color: selected === 3 ? "green" : "blue" }}
        >
          Option4
        </li>
      </ul>
    </div>
  );
}

export default MenuSample;

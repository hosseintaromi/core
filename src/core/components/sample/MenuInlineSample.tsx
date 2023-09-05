import { useState } from "react";
import { useView } from "../../hooks/useView";

function MenuInlineSample() {
  const [selected, setSelected] = useState(-1);
  const { close } = useView();

  function onSelect(index: number) {
    setSelected(index);
    close();
  }

  return (
    <div style={{ backgroundColor: "red", width: "200px" }}>
      <ul>
        <li
          onClick={() => onSelect(0)}
          style={{ color: selected === 0 ? "green" : "blue" }}
        >
          Option1
        </li>
        <li
          onClick={() => onSelect(1)}
          style={{ color: selected === 1 ? "green" : "blue" }}
        >
          Option2
        </li>
        <li
          onClick={() => onSelect(2)}
          style={{ color: selected === 2 ? "green" : "blue" }}
        >
          Option3
        </li>
        <li
          onClick={() => onSelect(3)}
          style={{ color: selected === 3 ? "green" : "blue" }}
        >
          Option4
        </li>
      </ul>
    </div>
  );
}

export default MenuInlineSample;

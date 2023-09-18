import { useCallback, useRef, useState } from "react";
import { useView } from "../../hooks/useView";
import { EventType, useEvent } from "../../hooks/useEvent";

function MenuInlineSample() {
  const [selected, setSelected] = useState(-1);
  const [counter, setCounter] = useState(0);
  const { close } = useView();

  const onSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <div style={{ backgroundColor: "red", width: "200px", height: "150px" }}>
      {
        <div
          onClick={() => onSelect(0)}
          style={{
            color: selected === 0 ? "green" : "blue",
            width: "100px",
            height: "100px",
            backgroundColor: "green",
            marginLeft: "20px",
          }}
        >
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            {counter}
          </button>
        </div>
      }
    </div>
  );
}

export default MenuInlineSample;

import { useCallback, useRef, useState } from "react";
import { useView } from "../../hooks/useView";
import { EventType, useEvent } from "../../hooks/useEvent";

function MenuInlineSample() {
  const elRef = useRef<any>();
  const isHoverRef = useRef<boolean>();
  const hoverTimerRef = useRef<NodeJS.Timeout>();
  const [hide, setHide] = useState<boolean>(true);
  const [selected, setSelected] = useState(-1);
  const { close } = useView();

  const onSelect = (index: number) => {
    setSelected(index);
    close();
  };

  useEvent(elRef, EventType.Hover, {
    onMouseover: () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    },
    onMouseout: () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
      hoverTimerRef.current = setTimeout(() => {
        isHoverRef.current = false;
        close();
      }, 800);
    },
  });

  return (
    <div
      ref={elRef}
      style={{ backgroundColor: "red", width: "200px", height: "150px" }}
    >
      {/* <ul>
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
      </ul> */}
    </div>
  );
}

export default MenuInlineSample;

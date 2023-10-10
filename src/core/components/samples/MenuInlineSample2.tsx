import { useView } from "../../hooks/useView";

function MenuInlineSample2() {
  const { close } = useView();
  const closeAll = () => {
    close({
      type: "All",
    });
  };
  return (
    <div>
      <ul>
        <li
          onClick={() => {
            close();
          }}
        >
          Back
        </li>
        <li onClick={closeAll}>1.5</li>
        <li>2.0</li>
        <li>2.5</li>
        <li>3.5</li>
        <li>4.5</li>
      </ul>
    </div>
  );
}

export default MenuInlineSample2;

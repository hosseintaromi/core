import { useView } from "../../hooks/useView";
import MenuInlineSample2 from "./MenuInlineSample2";

function MenuInlineSample() {
  const { close, openView } = useView();

  return (
    <div>
      <ul>
        <li
          onClick={() => {
            openView({
              id: "idSample2",
              component: MenuInlineSample2,
              className: "slide-menu",
            });
          }}
        >
          Ambient mode
        </li>
        <li>Subtitles</li>
        <li>closed</li>
        <li>Subtitles/closed</li>
        <li>Subtitles/closed</li>
        <li>Subtitles/closed</li>
        <li>Subtitles/closed</li>
        <li>Subtitles/closed</li>
        <li>Subtitles/closed</li>
        <li onClick={() => close()} style={{ color: "red" }}>
          Close
        </li>
      </ul>
    </div>
  );
}

export default MenuInlineSample;

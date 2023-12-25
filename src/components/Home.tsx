import React from "react";
import { useRef } from "react";
import { useLocale } from "../hooks/useLocale";
import { LocaleKeyChat, LocaleKeyUser } from "../@types/locale";
import useInit from "../hooks/useInit";

function Home() {
  const elRef = useRef<HTMLElement | undefined>();
  const lang = useLocale<LocaleKeyUser | LocaleKeyChat>();

  useInit(() => {
  });

  return <div></div>;
}

export default Home;

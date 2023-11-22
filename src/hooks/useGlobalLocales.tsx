import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ConvertLocaleType } from "../@types/UseGlobalLocales.model";
import { globalLocales } from "../locale/global";

export const convertLocale = ({ key, params }: ConvertLocaleType) => {
  const locale = globalLocales[key] || key;
  let newLocale = locale;
  if (params) {
    Object.entries(params).forEach(([paramKey, paramValue]) => {
      const shapedKey = `{{${paramKey}}}`;
      const stringParamValue = renderToStaticMarkup(<>{paramValue}</>);
      newLocale = newLocale.replace(shapedKey, `${stringParamValue}` || "");
    });
  }
  const element = createElement("span", {
    dangerouslySetInnerHTML: {
      __html: newLocale,
    },
    style: {
      display: "inline-block",
    },
  });

  return { element, text: newLocale };
};
export const useGlobalLocales = () => ({ convertLocale });

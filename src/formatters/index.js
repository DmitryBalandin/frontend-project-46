import formatterStylich from "./formatter-stylish.js";
import formatterPlain from "./formatter-plain.js";

export default function formatter(json, formatter = "stylish") {
  switch(formatter){
  case "stylish":
    return formatterStylich(json);
  case "plain":
    return formatterPlain(json);
  }
}
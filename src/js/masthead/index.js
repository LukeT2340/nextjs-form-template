import masthead from "powered-immersive-header";
import "powered-immersive-header/dist/style.css";

export default function setupMasthead() {
  masthead({
    headerConfig: {
      bgColor: "white",
      textColor: "black",
    },
    footerConfig: {
      bgColor: "white",
      textColor: "black",
    },
  });
}

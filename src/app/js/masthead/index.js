import masthead from "powered-immersive-header"
import "powered-immersive-header/dist/style.css"

export default function setupMasthead() {
  masthead({
    headerConfig: {
      bgColor: "black",
      textColor: "#3698e9",
    },
    footerConfig: {
      bgColor: "black",
      textColor: "#3698e9",
    },
  })
}

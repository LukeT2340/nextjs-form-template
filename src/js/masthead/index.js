import masthead from "powered-immersive-header"
import "powered-immersive-header/dist/style.css"

export default function setupMasthead() {
  masthead({
    headerConfig: {
      bgColor: "black",
      textColor: "white",
      logoColor: "white",
    },
    footerConfig: {
      bgColor: "black",
      textColor: "white",
      logoColor: "white",
    },
  })
}

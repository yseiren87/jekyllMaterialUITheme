import {variables} from "../libs/variables";
import {windowScrollToTop} from "../libs/utils";

const func = {
    scrollListener: (elem) => {
        const startYOffset = 200;

        if (window.pageYOffset >= startYOffset) {
            elem.style.display = "block";

        } else {
            elem.style.display = "none";

        }
    },
}

const scrollUpInitialize = () => {
    const element = variables.scrollUpButton;

    element.addEventListener("click", windowScrollToTop);
    window.addEventListener("scroll", () => func.scrollListener(element));
}

export default scrollUpInitialize;
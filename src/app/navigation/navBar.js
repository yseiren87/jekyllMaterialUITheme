import {variables} from "../libs/variables";
import sf from "sf";

const func = {
    navElevationEffectHandler: (elem) => {
        const elevationClass = "mdc-elevation--z5", width = 920;

        if (elem !== null) {
            if (window.matchMedia(sf("(max-width: {0}px)", width)).matches) {
                elem.classList.add(elevationClass);

            } else if (window.matchMedia(sf("(min-width: {0}px)", width + 1)).matches) {
                elem.classList.remove(elevationClass);
            }
        }
    },

    navItemEffect: (items) => {
        const activeClass = "mut-top-app-bar__tab-item--active",
            indicatorClass = "mut-top-app-bar__tab-indicator",
            indicatorScale = "scaleY(2)";

        items.forEach(item => {
            if (location.pathname.indexOf(item.dataset.link) !== -1) {

                // remove activeClass and indicator from all of customTab
                document.querySelectorAll(sf(".{0}", activeClass)).forEach(activeItem => {
                    activeItem.classList.remove(activeClass);
                    const indicator = activeItem.querySelector(sf(".{0}", indicatorClass));
                    if (indicator !== null) {
                        activeItem.removeChild(indicator);
                    }
                });

                // add activeClass and indicator
                const indicator = document.createElement("span");
                indicator.classList.add(indicatorClass);
                requestAnimationFrame(() => {
                    indicator.style.transform = indicatorScale;
                })

                item.classList.add(activeClass);
                item.appendChild(indicator);
            }
        });
    }
}

const navBarInitialize = () => {
    const navTab = variables.navigation.navBarTab,
        navTabItem = variables.navigation.navBarTabItem;

    func.navElevationEffectHandler(navTab);
    window.addEventListener("resize", () => func.navElevationEffectHandler(navTab));

    func.navItemEffect(navTabItem);
}

export default navBarInitialize;
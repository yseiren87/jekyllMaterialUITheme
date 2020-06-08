import sf from "sf";

const scrollToElement = (scrollElem, targetElem, fromTop = 0) => {
    if (scrollElem !== null && targetElem !== null) {
        scrollElem.scrollTo({
            top: targetElem.offsetTop - fromTop,
            behavior: "smooth"
        });
    }
};

const windowScrollToElement = (elem, fromTop = 0) => {
    scrollToElement(window, elem, fromTop);
}

const windowScrollToElementById = (elemId, fromTop = 0) => {
    const elem = document.querySelector(sf("#{0}", elemId));
    windowScrollToElement(elem, fromTop);
}

const windowScrollToTop = (fromTop = 0) => {
    window.scrollTo({
        top: fromTop,
        behavior: "smooth"
    })
}

export {
    windowScrollToElementById,
    windowScrollToElement,
    windowScrollToTop,

    scrollToElement
}
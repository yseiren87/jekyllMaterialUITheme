import {variables, metaChangeEvent} from "../libs/variables";
import {windowScrollToElementById} from "../libs/utils";
import sf from "sf";

const pageInitialize = () => {
    // disable scrolling
    if ("scrollRestoration" in history) {
        window.history.scrollRestoration = "manual";
    }

    // clicking content item
    const contentPostList = variables.page.contentPostList,
        contentPostListItem = variables.page.contentPostListItem;

    if (contentPostList !== null) {
        contentPostListItem.forEach(item => {
            item.addEventListener("click", () => location.href = item.dataset.link);
        });
    }

    // scroll to element
    const meta = variables.page.meta;
    if (meta !== null) {
        meta.addEventListener("metaChange", () => {
            windowScrollToElementById(meta.dataset.target);
        });
    }

    window.onload = () => {
        if (meta !== null) {
            const target = location.hash.split("#")[1];
            if (target !== undefined) {
                meta.dataset.target = target;
            }

            if(meta.dataset.target !== ""){
                meta.dispatchEvent(metaChangeEvent);
            }
        }
    }
}

export default pageInitialize;
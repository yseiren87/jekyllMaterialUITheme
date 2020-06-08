import {variables, drawerClickType, metaChangeEvent} from "../libs/variables";
import {scrollToElement} from "../libs/utils";
import sf from "sf";

const func = {
    itemClickListener: ({item, relatedItem, pageMeta, selectedClass}) => {
        item.addEventListener("click", e => {
            relatedItem.forEach(iItem => iItem.classList.remove(selectedClass));
            item.classList.add(selectedClass);

            if (pageMeta.dataset.drawerclick === drawerClickType.scrolling) {
                e.preventDefault();

                history.pushState("", "", item.getAttribute("href"))

                pageMeta.dataset.target = item.dataset.target;
                pageMeta.dispatchEvent(metaChangeEvent);
            }
        });
    },

    metaChangeListener: ({item, pageMeta, selectedClass, sideBarContent}) => {
        if (item.dataset.target === pageMeta.dataset.target) {
            item.classList.add(selectedClass);

            scrollToElement(sideBarContent, item, 133);
        }
    },
}

const sideBarInitialize = () => {

    const dropdownToggle = variables.navigation.sideBarDropdownToggle,
        dropdownItem = variables.navigation.sideBarDropdownItem,
        normalItem = variables.navigation.sideBarItem,
        pageMeta = variables.page.meta,
        sideBarContent = variables.navigation.sideBarContent,

        expandedClass = "mut-sidebar-dropdown--expanded",
        selectedClass = "mdc-list-item--activated"
    ;

    // dropdown toggle
    dropdownToggle.forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();

            let parent = item.parentElement;

            if (parent.classList.contains(expandedClass) === false) {
                parent.classList.add(expandedClass);
                item.querySelector("i").innerText = "remove";

            } else {
                parent.classList.remove(expandedClass);
                item.querySelector("i").innerText = "add";

            }
        });
    });

    // dropdown item
    dropdownItem.forEach(item => func.itemClickListener({
        item,
        relatedItem: dropdownItem,
        pageMeta,
        selectedClass
    }));

    // sideBar item
    normalItem.forEach(item => func.itemClickListener({
        item,
        relatedItem: normalItem,
        pageMeta,
        selectedClass
    }));

    // meta change event
    if (pageMeta !== null) {
        pageMeta.addEventListener("metaChange", () => {

            dropdownItem.forEach(item => func.metaChangeListener({
                item, pageMeta, selectedClass, sideBarContent
            }));

            normalItem.forEach(item => func.metaChangeListener({
                item, pageMeta, selectedClass, sideBarContent
            }));
        });
    }
}

export default sideBarInitialize;
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCList} from "@material/list";
import {MDCDrawer} from "@material/drawer";
import {MDCRipple} from '@material/ripple';
import {MDCChipSet, MDCChip} from '@material/chips';

import {variables, options} from "../libs/variables";
import sf from "sf";

const func = {
    modalDrawer: (drawerElem, listElem, topAppBar) => {
        drawerElem.classList.add("mdc-drawer--modal");

        const drawer = MDCDrawer.attachTo(drawerElem);
        drawer.open = false;

        topAppBar.listen("MDCTopAppBar:nav", () => {
            drawer.open = !drawer.open;
        });

        listElem.forEach(item => item.addEventListener("click", () => {
            drawer.open = false;
        }));

        return drawer;
    },

    permanentDrawer: (drawerElem, listElem) => {
        drawerElem.classList.remove("mdc-drawer--modal");

        const drawer = MDCList.attachTo(listElem);
        drawer.wrapFocus = true;

        return drawer;
    },
}

const mdcInitialize = () => {
    const mdcList = variables.mdc.list,
        mdcListItem = variables.mdc.listItem,
        mdcFab = variables.mdc.fab,
        mdcTopAppBar = variables.mdc.topAppBar,
        mdcDrawer = variables.mdc.drawer,
        mdcDrawerList = variables.mdc.drawerList,

        sideBarDropdownMenu = variables.navigation.sideBarDropdownMenu,

        optionWidthShowingDrawer = options.widthShowingDrawer
    ;

    let topAppBar = null;
    if (mdcTopAppBar !== null) {
        topAppBar = MDCTopAppBar.attachTo(mdcTopAppBar);
    }

    if (topAppBar !== null && mdcDrawer !== null) {
        let drawer = window.matchMedia(sf("(max-width: {0}px)", optionWidthShowingDrawer)).matches ?
            func.modalDrawer(mdcDrawer, sideBarDropdownMenu, topAppBar) : func.permanentDrawer(mdcDrawer, mdcDrawerList);

        window.addEventListener("resize", () => {
            if (window.matchMedia(sf("(max-width: {0}px)", optionWidthShowingDrawer)).matches && drawer instanceof MDCList) {
                drawer.destroy();
                drawer = func.modalDrawer(mdcDrawer, sideBarDropdownMenu, topAppBar);

            } else if (window.matchMedia(sf("(min-width: {0}px)", optionWidthShowingDrawer + 1)).matches && drawer instanceof MDCDrawer) {
                drawer.destroy();
                drawer = func.permanentDrawer(mdcDrawer, mdcDrawerList);
            }
        });
    }

    if (mdcList !== null) {
        mdcList.forEach(item => MDCList.attachTo(item));
        mdcListItem.forEach(item => MDCRipple.attachTo(item));
    }

    if (mdcFab !== null) {
        mdcFab.forEach(item => MDCRipple.attachTo(item));
    }
};

export default mdcInitialize;
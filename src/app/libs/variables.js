const variables = {
    mdc: {
        list: document.querySelectorAll(".mdc-list"),
        listItem: document.querySelectorAll(".mdc-list-item"),
        fab: document.querySelectorAll(".mdc-fab"),
        topAppBar: document.querySelector(".mdc-top-app-bar"),
        drawer: document.querySelector(".mdc-drawer"),
        drawerList: document.querySelector(".mdc-drawer nav.mdc-list"),
    },

    scrollUpButton: document.querySelector('#scroll-up-button'),

    navigation: {
        navBarTab: document.querySelector(".mut-top-app-bar__tab"),
        navBarTabItem: document.querySelectorAll(".mut-top-app-bar__tab-item"),

        sideBarContent: document.querySelector(".mdc-drawer__content"),
        sideBarItem: document.querySelectorAll(".mut-sidebar-item"),
        sideBarDropdownToggle: document.querySelectorAll(".mut-sidebar-dropdown__toggle"),
        sideBarDropdownMenu: document.querySelectorAll(".mut-sidebar-dropdown__menu"),
        sideBarDropdownItem: document.querySelectorAll(".mut-sidebar-dropdown__item"),

    },

    page: {
        meta: document.querySelector("#page-meta"),

        contentPostList: document.querySelectorAll(".mut-content__post-list"),
        contentPostListItem: document.querySelectorAll(".mut-content__post-list-item"),
    }
}

const options = {
    widthShowingDrawer: 1024,
}

const drawerClickType = {
    scrolling: "scrolling",
    paging: "paging"
}

const events = {
    metaChange: () => {
        const event = document.createEvent("HTMLEvents");
        event.initEvent("metaChange", false, true);

        return event;
    }
}

const metaChangeEvent = events.metaChange();

export
{
    variables,
    options,
    drawerClickType,

    metaChangeEvent
}

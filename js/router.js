const routes = {
    "/": homePage,
    "/dashboard": dashboardPage,
    "/analytics": analyticsPage,
    "/settings": settingsPage,
    "/about": aboutPage
};

function router() {

    const hash = window.location.hash || "#/";

    const path = hash.replace("#", "");

    const page = routes[path] || homePage;

    document.getElementById("app").innerHTML = page();
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
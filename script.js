(function () {
  var tabs = {
    "tab-about": "panel-about",
    "tab-model": "panel-model"
  };

  function activate(tabId) {
    Object.keys(tabs).forEach(function (id) {
      var btn = document.getElementById(id);
      var panel = document.getElementById(tabs[id]);
      var isActive = id === tabId;
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
      panel.classList.toggle("is-active", isActive);
    });
    if (history.replaceState) {
      history.replaceState(null, "", "#" + tabId.replace("tab-", ""));
    }
  }

  Object.keys(tabs).forEach(function (id) {
    document.getElementById(id).addEventListener("click", function () {
      activate(id);
    });
  });

  // Deep-link support: #model or #about
  var hash = window.location.hash.replace("#", "");
  if (hash === "model") activate("tab-model");
})();

if (window.location.href.indexOf('/app/kibana') !== -1) {
    window.addEventListener("load", function() {
        let hideUnwantedMenu = function(hideUnwantedMenu) {
            setTimeout(function(hideUnwantedMenu) {
                if (document.getElementsByClassName('euiListGroupItem__label').length === 0) {
                    hideUnwantedMenu(hideUnwantedMenu);
                } else {
                    [...document.getElementsByClassName('euiListGroupItem__label')]
                        .filter(i => ['Maps', 'Machine Learning', 'Infrastructure', 'APM', 'Uptime', 'Graph', 'Logs', 'Canvas'].indexOf(i.getAttribute('title')) !== -1)
                        .forEach(i => i.parentNode.parentNode.parentNode.classList.add('hide'))
                    ;
                }
            }, 250, hideUnwantedMenu);
        };

        hideUnwantedMenu(hideUnwantedMenu);
    }, true);
}

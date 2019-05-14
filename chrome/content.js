if (window.location.href.indexOf('/app/kibana') !== -1 || window.location.href.indexOf('/app/monitoring') !== -1) {
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

                    [...document.getElementsByClassName('euiNavDrawer')]
                        .forEach(function(i) {
                            if (i.classList.contains('euiNavDrawer-isCollapsed') === true) {
                                i.classList.remove('euiNavDrawer-isCollapsed');
                            }

                            if (i.classList.contains('euiNavDrawer-isExpanded') === false) {
                                i.classList.add('euiNavDrawer-isExpanded');
                            }
                        });

                    [...document.getElementsByClassName('app-wrapper')]
                        .forEach(i => i.style.left = '240px')
                    ;

                    [...document.getElementsByClassName('euiNavDrawer__expandButton')]
                        .forEach(i => i.classList.add('hide'))
                    ;
                }
            }, 250, hideUnwantedMenu);
        };

        // Kibana seems to be used
        if (document.getElementsByClassName('kibanaWelcomeView').length > 0) {
            hideUnwantedMenu(hideUnwantedMenu);
        }
    }, true);
}

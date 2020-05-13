// ==UserScript==
// @name		steam_link_regular
// @namespace	https://github.com/desc70865/Steam_SChinese_Mark/
// @icon		https://keylol.com/favicon.ico
// @version		0.5
// @description	regular links with end /[appid]/ & print at console
// @author		desc_inno
// @match		https://keylol.com/*
// @updateURL   https://raw.githubusercontent.com/desc70865/team_link_regular/master/script.js
// @require		https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var table = [];
    document.querySelectorAll('.steam-info-link').forEach(function(x){
        if (x.href.match(/(\/\?l)/g) == null && x.href.match(/(\/\?cc)/g) == null){
            x.setAttribute("href", "https://store.steampowered.com/app/" + x.href.match(/(?<=\/app\/)(\d{3,7})/g) + "/");
        }
        table.push(x.href)
    })
    console.log(table.join('\n'))
})();

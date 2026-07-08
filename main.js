// @namespace    https://github.com/exstrict-c
// @version      0.1.0
// @description  Learn Userscript
// @author       Exstrict
// @match        https://lms.sysu.edu.cn/*
// @grant        none
// ==/UserScript==

function goToNextPage(button_next) {
    if(button_next.innerText==="修读指引 ►") {
            return;
        }else {
            button_next.click();
        }
}

(function () {
    'use strict';
    
    let button_play = document.querySelector('[title="播放"]');
    let button_next = document.querySelector('[id="next-activity-link"]');
    let video = document.querySelector("video");
    
    if(button_play) {
        button_play.click(button_next);
        video.addEventListener("ended",goToNextPage)
    }else {
        goToNextPage(button_next);
    }
    
})();
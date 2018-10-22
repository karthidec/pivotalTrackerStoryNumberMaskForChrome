var storyNumberToDisplay_Last_N_Digits = 4; // max 9 digits
var regChecker = /^\d{4}\s-\s/; // update N in d{N} - as per above storyNumberToDisplay value

function appendStoryNumberWithStoryName_Current_Backlog_Icebox() {
    var totalStoryCount = document.getElementsByClassName("story model item").length;
    if (totalStoryCount) {
        for (var i = 0; i < totalStoryCount; i++) {
            var storyNumber = document.getElementsByClassName("story model item")[i].getAttribute('data-id');
            if (storyNumber) {
                var storyNumberToDisplay = storyNumber.slice(-storyNumberToDisplay_Last_N_Digits);
                if (document.getElementsByClassName("story model item")[i].getElementsByTagName('span')[3].getElementsByClassName("tracker_markup")[0]) {
                    var storyName = document.getElementsByClassName("story model item")[i].getElementsByTagName('span')[3].getElementsByClassName("tracker_markup")[0].innerText;
                    if (!regChecker.test(storyName)) {
                        document.getElementsByClassName("story model item")[i].getElementsByTagName('span')[3].getElementsByClassName("tracker_markup")[0].innerText = storyNumberToDisplay + ' - ' + storyName;
                    }
                }
            }
        }
    }
}

function appendStoryNumberWithStoryName_Blocked() {
    if (document.querySelectorAll("[id^='panel_blockers']")[0]) {
        var totalBlockedStoryCount = document.querySelectorAll("[id^='panel_blockers']")[0].getElementsByClassName("story model item").length;
        if (totalBlockedStoryCount) {
            for (var i = 0; i < totalBlockedStoryCount; i++) {
                var blockedStoryNumber = document.querySelectorAll("[id^='panel_blockers']")[0].getElementsByClassName("story model item")[i].getAttribute('data-id');
                if (blockedStoryNumber) {
                    var blockedStoryNumberToDisplay = blockedStoryNumber.slice(-storyNumberToDisplay_Last_N_Digits);
                    if (document.querySelectorAll("[id^='panel_blockers']")[0].getElementsByClassName("story model item")[i].getElementsByTagName('span')[5].getElementsByClassName("tracker_markup")[0]) {
                        var blockedStoryName = document.querySelectorAll("[id^='panel_blockers']")[0].getElementsByClassName("story model item")[i].getElementsByTagName('span')[5].getElementsByClassName("tracker_markup")[0].innerText;
                        if (!regChecker.test(blockedStoryName)) {
                            document.querySelectorAll("[id^='panel_blockers']")[0].getElementsByClassName("story model item")[i].getElementsByTagName('span')[5].getElementsByClassName("tracker_markup")[0].innerText = blockedStoryNumberToDisplay + ' - ' + blockedStoryName;
                        }
                    }
                }
            }
        }
    }
}

function appendStoryNumberWithStoryName_MyWork() {
    if (document.querySelectorAll("[id^='panel_my_work']")[0]) {
        var totalMyWorkStoryCount = document.querySelectorAll("[id^='panel_my_work']")[0].getElementsByClassName("story model item").length
        if (totalMyWorkStoryCount) {
            for (var i = 0; i < totalMyWorkStoryCount; i++) {
                var myWorkStoryNumber = document.querySelectorAll("[id^='panel_my_work']")[0].getElementsByClassName("story model item")[i].getAttribute('data-id');
                if (myWorkStoryNumber) {
                    var myWorkStoryNumberToDisplay = myWorkStoryNumber.slice(-storyNumberToDisplay_Last_N_Digits);
                    if (document.querySelectorAll("[id^='panel_my_work']")[0].getElementsByClassName("story model item")[i].getElementsByTagName('span')[4].getElementsByClassName("tracker_markup")[0]) {
                        var myWorkStoryName = document.querySelectorAll("[id^='panel_my_work']")[0].getElementsByClassName("story model item")[i].getElementsByTagName('span')[4].getElementsByClassName("tracker_markup")[0].innerText;
                        if (!regChecker.test(myWorkStoryName)) {
                            document.querySelectorAll("[id^='panel_my_work']")[0].getElementsByClassName("story model item")[i].getElementsByTagName('span')[4].getElementsByClassName("tracker_markup")[0].innerText = myWorkStoryNumberToDisplay + ' - ' + myWorkStoryName;
                        }
                    }
                }
            }
        }
    }
}


function appendStoryNumberWithStoryName_Epic() {
    if (document.querySelectorAll("[id^='panel_epic']")[0]) {
        var totalEpicStoryCount = document.querySelectorAll("[id^='panel_epic']")[0].getElementsByClassName("epic model item").length
        if (totalEpicStoryCount) {
            for (var i = 0; i < totalEpicStoryCount; i++) {
                var epicStoryNumber = document.querySelectorAll("[id^='panel_epic']")[0].getElementsByClassName("epic model item")[i].getAttribute('data-id');
                if (epicStoryNumber) {
                    var epicStoryNumberToDisplay = epicStoryNumber.slice(-storyNumberToDisplay_Last_N_Digits);
                    if (document.querySelectorAll("[id^='panel_epic']")[0].getElementsByClassName("epic model item")[i].getElementsByTagName('span')[1].getElementsByClassName("tracker_markup")[0]) {
                        var epicStoryName = document.querySelectorAll("[id^='panel_epic']")[0].getElementsByClassName("epic model item")[i].getElementsByTagName('span')[1].getElementsByClassName("tracker_markup")[0].innerText;
                        if (!regChecker.test(epicStoryName)) {
                            document.querySelectorAll("[id^='panel_epic']")[0].getElementsByClassName("epic model item")[i].getElementsByTagName('span')[1].getElementsByClassName("tracker_markup")[0].innerText = epicStoryNumberToDisplay + ' - ' + epicStoryName;
                        }
                    }
                }
            }
        }
    }
}

function appendStoryNumberWithStoryName_Epic_Story() {
    var epicPanelCount = document.querySelectorAll("[id^='panel_epic']").length;
    if (document.querySelectorAll("[id^='panel_epic']")[1]) {
        for (j = 1; j <= epicPanelCount - 1; j++) {
            var totalEpicStoriesCount = document.querySelectorAll("[id^='panel_epic']")[j].getElementsByClassName("story model item").length;
            if (totalEpicStoriesCount) {
                for (var i = 0; i < totalEpicStoriesCount; i++) {
                    var epicStoriesNumber = document.querySelectorAll("[id^='panel_epic']")[j].getElementsByClassName("story model item")[i].getAttribute('data-id');
                    if (epicStoriesNumber) {
                        var epicStoriesNumberToDisplay = epicStoriesNumber.slice(-storyNumberToDisplay_Last_N_Digits);
                        if (document.querySelectorAll("[id^='panel_epic']")[j].getElementsByClassName("story model item")[i].getElementsByTagName('span')[4].getElementsByClassName("tracker_markup")[0]) {
                            var epicStoriesName = document.querySelectorAll("[id^='panel_epic']")[j].getElementsByClassName("story model item")[i].getElementsByTagName('span')[4].getElementsByClassName("tracker_markup")[0].innerText;
                            if (!regChecker.test(epicStoriesName)) {
                                document.querySelectorAll("[id^='panel_epic']")[j].getElementsByClassName("story model item")[i].getElementsByTagName('span')[4].getElementsByClassName("tracker_markup")[0].innerText = epicStoriesNumberToDisplay + ' - ' + epicStoriesName;
                            }
                        }
                    }
                }
            }
        }
    }
}

function appendStoryNumberWithStoryName_Search_Label() {
    if (document.querySelectorAll("[id^='panel_search']")[0]) {
        var totalSearchStoryCount = document.querySelectorAll("[id^='panel_search']")[0].getElementsByClassName("story model item").length
        if (totalSearchStoryCount) {
            for (var i = 0; i < totalSearchStoryCount; i++) {
                var searchStoryNumber = document.querySelectorAll("[id^='panel_search']")[0].getElementsByClassName("story model item")[i].getAttribute('data-id');
                if (searchStoryNumber) {
                    var searchStoryNumberToDisplay = searchStoryNumber.slice(-storyNumberToDisplay_Last_N_Digits);
                    if (document.querySelectorAll("[id^='panel_search']")[0].getElementsByClassName("story model item")[i].getElementsByTagName('span')[4].getElementsByClassName("tracker_markup")[0]) {
                        var searchStoryName = document.querySelectorAll("[id^='panel_search']")[0].getElementsByClassName("story model item")[i].getElementsByTagName('span')[4].getElementsByClassName("tracker_markup")[0].innerText;
                        if (!regChecker.test(searchStoryName)) {
                            document.querySelectorAll("[id^='panel_search']")[0].getElementsByClassName("story model item")[i].getElementsByTagName('span')[4].getElementsByClassName("tracker_markup")[0].innerText = searchStoryNumberToDisplay + ' - ' + searchStoryName;
                        }
                    }
                }
            }
        }
    }
}

setInterval(appendStoryNumberWithStoryName_Current_Backlog_Icebox, 1000);
setInterval(appendStoryNumberWithStoryName_Blocked, 1000);
setInterval(appendStoryNumberWithStoryName_MyWork, 1000);
setInterval(appendStoryNumberWithStoryName_Epic, 1000);
setInterval(appendStoryNumberWithStoryName_Epic_Story, 1000);
setInterval(appendStoryNumberWithStoryName_Search_Label, 1000);

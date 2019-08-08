var storyNumberToDisplay_Last_N_Digits = 4; // max 9 digits
var regChecker = /^\d{4}\s-\s/; // update N in d{N} - as per above storyNumberToDisplay value

function genericAppendStoryNumber(rootStoryElements, nthSpanToSelect) {
    const totalStoryCount = rootStoryElements.length;
    const selectStoryElement = n =>
        rootStoryElements[n]
            .getElementsByTagName("span")
            [nthSpanToSelect].getElementsByClassName("tracker_markup")[0];
    for (let i = 0; i < totalStoryCount; i++) {
        const storyElement = selectStoryElement(i);
        const storyNumber = rootStoryElements[i].getAttribute("data-id");
        if (storyNumber) {
            const storyNumberToDisplay = storyNumber.slice(
                -storyNumberToDisplay_Last_N_Digits
            );
            if (storyElement) {
                const storyName = storyElement.textContent;

                if (!regChecker.test(storyName)) {
                    storyElement.textContent = storyNumberToDisplay + " - " + storyName;
                }
            }
        }
    }
}

function panelAppendStoryNumber(
    panelSelector,
    elementsClassName,
    nthSpanToSelect
) {
    const panel = panelSelector;

    if (panel) {
        genericAppendStoryNumber(
            panel.getElementsByClassName(elementsClassName),
            nthSpanToSelect
        );
    }
}

function appendStoryNumberWithStoryName_Current_Backlog_Icebox() {
    genericAppendStoryNumber(
        document.getElementsByClassName("story model item"),
        3
    );
}

function appendStoryNumberWithStoryName_Blocked() {
    panelAppendStoryNumber(
        document.querySelectorAll("[id^='panel_blockers']")[0],
        "story model item",
        5
    );
}

function appendStoryNumberWithStoryName_MyWork() {
    panelAppendStoryNumber(
        document.querySelectorAll("[id^='panel_my_work']")[0],
        "story model item",
        4
    );
}

function appendStoryNumberWithStoryName_Epic() {
    panelAppendStoryNumber(
        document.querySelectorAll("[id^='panel_epic']")[0],
        "epic model item",
        1
    );
}

function appendStoryNumberWithStoryName_Epic_Story() {
    panelAppendStoryNumber(
        document.querySelectorAll("[id^='panel_epic']")[0],
        "story model item",
        4
    );
}

function appendStoryNumberWithStoryName_Search_Label() {
    panelAppendStoryNumber(
        document.querySelectorAll("[id^='panel_search']")[0],
        "story model item",
        4
    );
}

setInterval(appendStoryNumberWithStoryName_Current_Backlog_Icebox, 1000);
setInterval(appendStoryNumberWithStoryName_Blocked, 1000);
setInterval(appendStoryNumberWithStoryName_MyWork, 1000);
setInterval(appendStoryNumberWithStoryName_Epic, 1000);
setInterval(appendStoryNumberWithStoryName_Epic_Story, 1000);
setInterval(appendStoryNumberWithStoryName_Search_Label, 1000);

// Export code for testing.  Suppress module not found ReferenceErrors
// in the browser.
try {
    module.exports = {
        appendStoryNumberWithStoryName_Current_Backlog_Icebox,
        appendStoryNumberWithStoryName_Blocked,
        appendStoryNumberWithStoryName_MyWork,
        appendStoryNumberWithStoryName_Epic,
        appendStoryNumberWithStoryName_Epic_Story,
        appendStoryNumberWithStoryName_Search_Label
    };
} catch (e) {}
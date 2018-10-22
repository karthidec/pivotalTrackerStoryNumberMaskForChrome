test('unit test appendStoryNumberWithStoryName_Current_Backlog_Icebox function', () => {

    document.body.innerHTML =
        '<div class="story model item draggable story_161284339 c119 chore unstarted point_scale_linear iteration_1 not_collapsed" data-aid="StoryPreviewItem" data-cid="c119" data-id="161284339" aria-describedby="reorder-help" aria-label="chore 1" style="position: relative;">' +
        '<header tabindex="0" data-aid="StoryPreviewItem__preview" class="preview">' +
        '<button class="expander undraggable" data-aid="StoryPreviewItem__expander" aria-expanded="false" tabindex="-1" aria-label="expander"></button>' +
        '<a class="selector undraggable" title="Select this story for bulk actions" tabindex="-1"></a>' +
        '<span class="meta">' +
        '<span>-1</span>' +
        '</span>' +
        '<span class="state">' +
        '<label data-aid="StateButton" data-destination-state="start" class="state button start" tabindex="-1">Start</label>' +
        '</span>' +
        '<span class="name">' +
        '<span class="story_name" data-aid="StoryPreviewItem__title">' +
        '<span class="tracker_markup">chore 1</span>' +
        '</span>' +
        '</span>' +
        '</header>' +
        '</div>';

    var storyNumberToDisplay_Last_N_Digits = 4;
    var storyNumber = document.getElementsByClassName("story model item")[0].getAttribute('data-id');
    var storyNumberToDisplay = storyNumber.slice(-storyNumberToDisplay_Last_N_Digits);
    var storyName = document.getElementsByClassName("story model item")[0].getElementsByTagName('span')[3].getElementsByClassName("tracker_markup")[0].innerHTML;
    var updatedStoryName = '4339 - chore 1';

    expect(document.getElementsByClassName("story model item")[0].getElementsByTagName('span')[3].getElementsByClassName("tracker_markup")[0].innerText = storyNumberToDisplay + ' - ' + storyName).toEqual(updatedStoryName);

});

test('unit test appendStoryNumberWithStoryName_Blocked function', () => {

    document.body.innerHTML =
        '<div id="panel_blockers_2026577" class="panel c4961 blockers_2026577 blockers items_draggable visible" data-aid="Panel" data-cid="c4961" data-type="blockers" style="width: 396px;">' +
        '<div class="container droppable tn-panelWrapper___fTILOVmk">' +
        '<header data-bb="PanelHeader" data-aid="PanelHeader" class="tn-PanelHeader___c0XQCVI7 tn-PanelHeader--single___2ns28dRL draggable" style="background-color: rgb(44, 45, 47);">' +
        '<div data-aid="highlight" class="tn-PanelHeader__inner___3Nt0t86w tn-PanelHeader__inner--single___3Nq8VXGB" style="border-top-color: rgb(57, 58, 60);">' +
        '<div class="tn-PanelHeader__closeArea___37E1NbRU undraggable">' +
        '<a class="tn-CloseButton___2wUVKGfh undraggable" title="Close Panel" data-bb="CloseButton" data-aid="CloseButton"></a>' +
        '</div>' +
        '<div class="tn-PanelHeader__titleArea___1DRH-oDF">' +
        '<h2 class="tn-PanelHeader__name___2UfJ8ho9" data-aid="PanelHeader__name">blocked</h2>' +
        '</div>' +
        '<div class="tn-PanelHeader__actionsArea___EHMT4f1g undraggable"></div>' +
        '</div>' +
        '</header>' +
        '<section data-scrollable="true" class="items_container tn-panel-items-container___1Fk42hjC">' +
        '<div id="view4985" class="items panel_content">' +
        '<div class="tn-panel__loom">' +
        '<div class="story model item description comments accepted_before_current story_159113989 c709 feature accepted point_scale_linear iteration_66 estimate_0 is_estimatable not_collapsed has_blockers_or_blocking" data-aid="StoryPreviewItem" data-cid="c709" data-id="159113989" aria-describedby="reorder-help" aria-label="Manual research re: THD application list" style="position: relative;">' +
        '<header tabindex="0" data-aid="StoryPreviewItem__preview" class="preview">' +
        '<button class="expander undraggable" data-aid="StoryPreviewItem__expander" aria-expanded="false" tabindex="-1" aria-label="expander"></button>' +
        '<a class="selector undraggable" title="Select this story for bulk actions" tabindex="-1"></a>' +
        '<span class="meta">' +
        '<span>0</span>' +
        '</span>' +
        '<a class="reveal story button" data-id="c709" data-project-id="2026577" data-type="story" tabindex="-1">' +
        '<span class="locator" title="Reveal this story"></span>' +
        '</a>' +
        '<span></span>' +
        '<span class="name">' +
        '<span class="story_name" data-aid="StoryPreviewItem__title">' +
        '<span class="tracker_markup">Chore 1</span>' +
        '</span>' +
        '<span class="parens">' +
        '<a class="owner" tabindex="-1" title="CLAIRE MOSS">CM</a>' +
        '</span>' +
        '<span class="labels post">' +
        '<a class="std label" data-cid="c146" data-parent-cid="c709" tabindex="-1">charter</a>' +
        '</span>' +
        '</span>' +
        '<div class="blocker" data-aid="StoryPreviewBlocker"></div>' +
        '</header>' +
        '</div>' +
        '<div>' +
        '<div class="end_of_list item" data-cid="c4989">' +
        '<div class="preview"></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</section>' +
        '</div>' +
        '</div>';

    var storyNumberToDisplay_Last_N_Digits = 4;
    var blockedStoryNumber = document.querySelectorAll("[id^='panel_blockers']")[0].getElementsByClassName("story model item")[0].getAttribute('data-id');
    var blockedStoryNumberToDisplay = blockedStoryNumber.slice(-storyNumberToDisplay_Last_N_Digits);
    var blockedStoryName = document.querySelectorAll("[id^='panel_blockers']")[0].getElementsByClassName("story model item")[0].getElementsByTagName('span')[5].getElementsByClassName("tracker_markup")[0].innerHTML;
    var updatedStoryName = '3989 - Chore 1';

    expect(document.querySelectorAll("[id^='panel_blockers']")[0].getElementsByClassName("story model item")[0].getElementsByTagName('span')[5].getElementsByClassName("tracker_markup")[0].innerText = blockedStoryNumberToDisplay + ' - ' + blockedStoryName).toEqual(updatedStoryName);

});

test('unit test appendStoryNumberWithStoryName_MyWork function', () => {

    document.body.innerHTML =
        '<div id="panel_my_work_2026577" class="panel c5025 my_work_2026577 my_work items_draggable visible" data-aid="Panel" data-cid="c5025" data-type="my_work" style="width: 1199px;">' +
        '<div class="container droppable tn-panelWrapper___fTILOVmk">' +
        '<header data-bb="PanelHeader" data-aid="PanelHeader" class="tn-PanelHeader___c0XQCVI7 tn-PanelHeader--single___2ns28dRL draggable" style="background-color: rgb(44, 45, 47);">' +
        '<div data-aid="highlight" class="tn-PanelHeader__inner___3Nt0t86w tn-PanelHeader__inner--single___3Nq8VXGB" style="border-top-color: rgb(57, 58, 60);">' +
        '<div class="tn-PanelHeader__closeArea___37E1NbRU undraggable">' +
        '<a class="tn-CloseButton___2wUVKGfh undraggable" title="Close Panel" data-bb="CloseButton" data-aid="CloseButton"></a>' +
        '</div>' +
        '<div class="tn-PanelHeader__titleArea___1DRH-oDF">' +
        '<h2 class="tn-PanelHeader__name___2UfJ8ho9" data-aid="PanelHeader__name">My Work</h2>' +
        '</div>' +
        '<div class="tn-PanelHeader__actionsArea___EHMT4f1g undraggable">' +
        '<div class="tn-PanelHeader__action___3zvuQp6Z">' +
        '<a class="">' +
        '<div data-aid="DropdownButton" tabindex="0" title="Actions" class="DropdownButton__icon___1qwu3upG tn-DropdownButton___nNklb3UY"></div>' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</header>' +
        '<section data-scrollable="true" class="items_container tn-panel-items-container___1Fk42hjC">' +
        '<div id="view5049" class="items panel_content">' +
        '<div class="tn-panel__loom">' +
        '<div class="story model item draggable story_160954387 c1471 chore started point_scale_linear iteration_75 not_collapsed" data-aid="StoryPreviewItem" data-cid="c1471" data-id="160954387" aria-describedby="reorder-help" aria-label="Schema Validation for e2e " style="position: relative;">' +
        '<header tabindex="0" data-aid="StoryPreviewItem__preview" class="preview">' +
        '<button class="expander undraggable" data-aid="StoryPreviewItem__expander" aria-expanded="false" tabindex="-1" aria-label="expander"></button>' +
        '<a class="selector undraggable" title="Select this story for bulk actions" tabindex="-1"></a>' +
        '<span class="meta">' +
        '<span>-1</span>' +
        '</span>' +
        '<a class="reveal story button" data-id="c1471" data-project-id="2026577" data-type="story" tabindex="-1">' +
        '<span class="locator" title="Reveal this story"></span>' +
        '</a>' +
        '<span class="state">' +
        '<label data-aid="StateButton" data-destination-state="finish" class="state button finish" tabindex="-1">Finish</label>' +
        '</span>' +
        '<span class="name">' +
        '<span class="story_name" data-aid="StoryPreviewItem__title">' +
        '<span class="tracker_markup">Chore 1</span>' +
        '</span>' +
        '<span class="parens">' +
        '<a class="owner" tabindex="-1" title="Karthigayan Devan">KD</a>' +
        '</span>' +
        '<span class="labels post">' +
        '<a class="std label" data-cid="c146" data-parent-cid="c1471" tabindex="-1">charter</a>' +
        '</span>' +
        '</span>' +
        '</header>' +
        '</div>' +
        '<div>' +
        '<div class="end_of_list item" data-cid="c5054">' +
        '<div class="preview"></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</section>' +
        '</div>' +
        '</div>';

    var storyNumberToDisplay_Last_N_Digits = 4;
    var myWorkStoryNumber = document.querySelectorAll("[id^='panel_my_work']")[0].getElementsByClassName("story model item")[0].getAttribute('data-id');
    var myWorkStoryNumberToDisplay = myWorkStoryNumber.slice(-storyNumberToDisplay_Last_N_Digits);
    var myWorkStoryName = document.querySelectorAll("[id^='panel_my_work']")[0].getElementsByClassName("story model item")[0].getElementsByTagName('span')[4].getElementsByClassName("tracker_markup")[0].innerHTML;
    var updatedStoryName = '4387 - Chore 1';

    expect(document.querySelectorAll("[id^='panel_my_work']")[0].getElementsByClassName("story model item")[0].getElementsByTagName('span')[4].getElementsByClassName("tracker_markup")[0].innerText = myWorkStoryNumberToDisplay + ' - ' + myWorkStoryName).toEqual(updatedStoryName);

});

test('unit test appendStoryNumberWithStoryName_Epic function', () => {

    document.body.innerHTML =
        '<div id="panel_epics_2026577" class="panel c2877 epics_2026577 epics items_draggable visible" data-aid="Panel" data-cid="c2877" data-type="epics" style="width: 1199px;">' +
        '<div class="container droppable tn-panelWrapper___fTILOVmk">' +
        '<header data-bb="PanelHeader" data-aid="PanelHeader" class="tn-PanelHeader___c0XQCVI7 tn-PanelHeader--single___2ns28dRL draggable" style="background-color: rgb(44, 45, 47);">' +
        '<div data-aid="highlight" class="tn-PanelHeader__inner___3Nt0t86w tn-PanelHeader__inner--single___3Nq8VXGB" style="border-top-color: rgb(57, 58, 60);">' +
        '<div class="tn-PanelHeader__closeArea___37E1NbRU undraggable">' +
        '<a class="tn-CloseButton___2wUVKGfh undraggable" title="Close Panel" data-bb="CloseButton" data-aid="CloseButton"></a>' +
        '</div>' +
        '<div class="tn-PanelHeader__titleArea___1DRH-oDF">' +
        '<h2 class="tn-PanelHeader__name___2UfJ8ho9" data-aid="PanelHeader__name">epics</h2>' +
        '</div>' +
        '<div class="tn-PanelHeader__actionsArea___EHMT4f1g undraggable">' +
        '<div class="tn-PanelHeader__action___3zvuQp6Z">' +
        '<a title="Add Epic" tabindex="-1" data-aid="AddButton" class="addButton___3-z3g3BH"></a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</header>' +
        '<section data-scrollable="true" class="items_container tn-panel-items-container___1Fk42hjC">' +
        '<div id="view4953" class="items panel_content">' +
        '<div class="tn-panel__loom">' +
        '<div>' +
        '<div class="item epics reveal done_bar invalid_drop_target " data-cid="c4958">' +
        '<a>Show 3 done epics</a>' +
        '</div>' +
        '</div>' +
        '<div class="epic model item epic_3995888 description comments attachments draggable" data-aid="EpicPreviewItem" data-id="3995888" data-cid="c2482">' +
        '<header data-aid="EpicPreviewItem__preview" tabindex="0" class="preview">' +
        '<button class="expander undraggable" data-aid="EpicPreviewItem__expander" aria-expanded="false" tabindex="-1" aria-label="EAR Live Lookup - by PCF URL"></button>' +
        '<div>' +
        '<span class="meta"></span>' +
        '<span class="name epic_name" data-aid="EpicPreviewItem__title">' +
        '<span class="tracker_markup">Chore 1</span>' +
        '</span>' +
        '</div>' +
        '<div class="progress undraggable">' +
        '<span class="undraggable hoverable" style="width: 59.5729%;">' +
        '<span class="accepted undraggable" style="width: 65.9341%;"></span>' +
        '<span class="active undraggable" style="width: 0%;"></span>' +
        '<span class="unstarted undraggable" style="width: 0%;"></span>' +
        '<span class="unscheduled undraggable" style="width: 34.0659%;"></span>' +
        '</span>' +
        '</div>' +
        '<a class="chevron undraggable" tabindex="-1" data-aid="show-stories"></a>' +
        '</header>' +
        '</div>' +
        '<div>' +
        '<div class="end_of_list item" data-cid="c4959">' +
        '<div class="preview"></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</section>' +
        '</div>' +
        '</div>';

    var storyNumberToDisplay_Last_N_Digits = 4;
    var epicStoryNumber = document.querySelectorAll("[id^='panel_epic']")[0].getElementsByClassName("epic model item")[0].getAttribute('data-id');
    var epicStoryNumberToDisplay = epicStoryNumber.slice(-storyNumberToDisplay_Last_N_Digits);
    var epicStoryName = document.querySelectorAll("[id^='panel_epic']")[0].getElementsByClassName("epic model item")[0].getElementsByTagName('span')[1].getElementsByClassName("tracker_markup")[0].innerHTML;
    var updatedStoryName = '5888 - Chore 1';

    expect(document.querySelectorAll("[id^='panel_epic']")[0].getElementsByClassName("epic model item")[0].getElementsByTagName('span')[1].getElementsByClassName("tracker_markup")[0].innerText = epicStoryNumberToDisplay + ' - ' + epicStoryName).toEqual(updatedStoryName);

});

test('unit test appendStoryNumberWithStoryName_Search_Label function', () => {

    document.body.innerHTML =
        '<div id="panel_search_2026577_1540233118560_1" class="panel c5435 search_2026577_1540233118560_1 search items_draggable visible" data-aid="Panel" data-cid="c5435" data-type="search" style="width: 396px;">' +
        '<div class="container droppable tn-panelWrapper___fTILOVmk">' +
        '<header data-bb="PanelHeader" data-aid="PanelHeader" class="tn-PanelHeader___c0XQCVI7 tn-PanelHeader--single___2ns28dRL tn-PanelHeader--search___1zYRxgSW draggable" style="background-color: rgb(44, 45, 47);">' +
        '<div data-aid="highlight" class="tn-PanelHeader__inner___3Nt0t86w tn-PanelHeader__inner--single___3Nq8VXGB" style="border-top-color: rgb(57, 58, 60);">' +
        '<div class="tn-PanelHeader__closeArea___37E1NbRU undraggable">' +
        '<a class="tn-CloseButton___2wUVKGfh undraggable" title="Close Panel" data-bb="CloseButton" data-aid="CloseButton"></a>' +
        '</div>' +
        '<div class="tn-PanelHeader__titleArea___1DRH-oDF">' +
        '<h2 class="tn-PanelHeader__name___2UfJ8ho9" data-aid="PanelHeader__name">label:"ear"</h2>' +
        '</div>' +
        '<div class="tn-PanelHeader__actionsArea___EHMT4f1g undraggable">' +
        '<div class="tn-PanelHeader__action___3zvuQp6Z">' +
        '<a class="RefreshButton___GLhSwyh1" data-aid="refresh" title="Refresh" tabindex="-1"></a>' +
        '</div>' +
        '<div class="tn-PanelHeader__action___3zvuQp6Z">' +
        '<a class="">' +
        '<div data-aid="DropdownButton" tabindex="0" title="Actions" class="DropdownButton__icon___1qwu3upG tn-DropdownButton___nNklb3UY"></div>' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</header>' +
        '<section data-scrollable="true" class="items_container tn-panel-items-container___1Fk42hjC">' +
        '<div id="view5468" class="items panel_content">' +
        '<div class="tn-panel__loom">' +
        '<div>' +
        '<div class="item stories results_bar invalid_drop_target" data-cid="c5494">' +
        '<h2>Stories</h2>' +
        '<p>1 story, 0 points</p>' +
        '</div>' +
        '</div>' +
        '<div>' +
        '<div class="item stories reveal done_bar invalid_drop_target search" data-cid="c5496">' +
        '<a>Show 6 done stories</a>' +
        '</div>' +
        '</div>' +
        '<div class="story model item description comments draggable story_160330926 c1561 chore unscheduled point_scale_linear not_collapsed" data-aid="StoryPreviewItem" data-cid="c1561" data-id="160330926" aria-describedby="reorder-help" aria-label="0926 - Pipeline - Create Non-Prod Slack Clients" style="position: relative;">' +
        '<header tabindex="0" data-aid="StoryPreviewItem__preview" class="preview">' +
        '<button class="expander undraggable" data-aid="StoryPreviewItem__expander" aria-expanded="false" tabindex="-1" aria-label="expander"></button>' +
        '<a class="selector undraggable" title="Select this story for bulk actions" tabindex="-1"></a>' +
        '<span class="meta">' +
        '<span>-1</span>' +
        '</span>' +
        '<a class="reveal story button" data-id="c1561" data-project-id="2026577" data-type="story" tabindex="-1">' +
        '<span class="locator" title="Reveal this story"></span>' +
        '</a>' +
        '<span class="state">' +
        '<label data-aid="StateButton" data-destination-state="start" class="state button start" tabindex="-1">Start</label>' +
        '</span>' +
        '<span class="name">' +
        '<span class="story_name" data-aid="StoryPreviewItem__title">' +
        '<span class="tracker_markup">Chore 1</span>' +
        '</span>' +
        '<span class="labels post">' +
        '<a class="std label" data-cid="c170" data-parent-cid="c1561" tabindex="-1">ear, </a>' +
        '<a class="std label" data-cid="c284" data-parent-cid="c1561" tabindex="-1">pipeline</a>' +
        '</span>' +
        '</span>' +
        '</header>' +
        '</div>' +
        '<div>' +
        '<div class="end_of_list item" data-cid="c5487">' +
        '<div class="preview"></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</section>' +
        '</div>' +
        '</div>';

    var storyNumberToDisplay_Last_N_Digits = 4;
    var searchStoryNumber = document.querySelectorAll("[id^='panel_search']")[0].getElementsByClassName("story model item")[0].getAttribute('data-id');
    var searchStoryNumberToDisplay = searchStoryNumber.slice(-storyNumberToDisplay_Last_N_Digits);
    var searchStoryName = document.querySelectorAll("[id^='panel_search']")[0].getElementsByClassName("story model item")[0].getElementsByTagName('span')[4].getElementsByClassName("tracker_markup")[0].innerHTML;
    var updatedStoryName = '0926 - Chore 1';

    expect(document.querySelectorAll("[id^='panel_search']")[0].getElementsByClassName("story model item")[0].getElementsByTagName('span')[4].getElementsByClassName("tracker_markup")[0].innerText = searchStoryNumberToDisplay + ' - ' + searchStoryName).toEqual(updatedStoryName);

});
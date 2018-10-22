# pivotalTrackerStoryNumberMaskForChrome

This google chrome plugin helps to display last 4 digits of story number in story name field in collapse field. This provides a display mask to Users and do not dirty existing data's. By default, Pivotal Tracker do not display story number in story name field in collapse mode.

Example:

 Default:
   - Story name in collapse mode: `This is sample story`

 With this plugin:
   - Story name in collapse mode: `1234 - This is sample story`  
       - 1234 - last 4 digits of story number

-----

Unit testing - jest framework
  - `./node_modules/.bin/jest`    

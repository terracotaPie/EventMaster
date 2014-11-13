# Code Reviews

The table below indicates which team member reviewed which other team member's code.

| Reviewer | Coder |
| -------- | ----- |
| MartinPetkov |  inve1 |
| g2huda |  Kitsunemimi |
| talesgames |  g2huda |
| inve1 |  MartinPetkov |
| terracotaPie |  cadz7 |
| cadz7 |   terracotaPie |
| Kitsunemimi |   talesGames |


-----

## Reviewer : MartinPetkov

* I discovered that the backend code did not create debug logs (https://github.com/csc301-fall2014/Proj-Evening-Team12-repo/issues/28) so I added them and had the server save them in a local file (https://github.com/csc301-fall2014/Proj-Evening-Team12-repo/pull/42)
* I found that the API endpoints he wrote were very elegant, especially the validation decorator for GET requests (https://github.com/csc301-fall2014/Proj-Evening-Team12-repo/commit/3aeeeaa3c40988ffc70b1d06df0eb2766414ab7d), but I also found that there wasn't much error handling, so I added it (https://github.com/csc301-fall2014/Proj-Evening-Team12-repo/pull/17)
* I thought his code for handling repeated events in the notifications was good; it's simple and easy to understand ().

-----

## Reviewer : terracotaPie

-----

## Reviewer : cadz7
* I noticed a hotfix for user logout in the code base.  
https://github.com/csc301-fall2014/Proj-Evening-Team12-repo/commit/fdf156d648c5ce7bf05a859c93f075ba1ffe5150    
I added correct method in the authentication service to deal with logout.  
https://github.com/csc301-fall2014/Proj-Evening-Team12-repo/commit/ffe0618718a04b67048fb3d3d7b25b8163c88b05  
* I thought implementation of adding custom events was done correctly and he made it functional  
https://github.com/csc301-fall2014/Proj-Evening-Team12-repo/commit/b26b7b2e6f9921fc360425b94803e35424e7012en  
* He also implemented the coloring feature on the calender which worked intuitively  
https://github.com/csc301-fall2014/Proj-Evening-Team12-repo/commit/f6d1b13201e9cd50ed92fb1ade4a29e7df20cc71

-----

## Reviewer : inve1

-----

## Reviewer : talesgames

* I design the layout for the create_event page and g2huda implemented it to the frontend(https://github.com/csc301-fall2014/Proj-Evening-Team12-repo/commit/b56e87d5d416d6af499f4be728b9af1e030df6e4)
* A bug was found where the event whould have distict color each time the page reloaded. the bug was fixed later (https://github.com/csc301-fall2014/Proj-Evening-Team12-repo/commit/aca9400d4cdc450ce55050409ed7e76e547cd2bf)
* The first page for create event had some messy fields, so I asked for g2huda to align then (https://github.com/csc301-fall2014/Proj-Evening-Team12-repo/commit/a226c439bffaffce00d91ae72b63fa3f5a6f7413)

-----

## Reviewer : g2huda

-----

## Reviewer : Kitsunemimi

 * I found that the design prototypes that talesgames drafts are helpful for keeping the design of our project on track (drafts located on slack)
 * I would recommend that talesgames tries to contribute more to the codebase for our project.

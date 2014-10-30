**Summary of Planning and Review Meetings**  
Dates and locations of meetings:
 * Meeting #1 - Oct. 9th, BA3200
 * Meeting #2 - Oct. 20th, BA3200
 * Meeting #3 - Oct. 23rd, BA3200
 * Meeting #4 - oCT. 27th, BA2270

Meeting #1 (Planning Meeting) - We met with Jeff and he helped us finalize our phase 2 release plan. We also created issues on GitHub based on our user stories, so we have a plan for what to implement. Furthermore, we decided on the technologies to use and the high-level architecture of the app. There are more details are in the file "Sprint #1 Planning Meeting".  

Meeting #2 - We talked more about our workflow and how to divide up the duties (i.e. who is on the backend, who is on the frontend, etc.). We also made sure everyone had the right code installed (i.e. Flask, Bower, Grunt, node.js, Jasmine, SQLAlchemy) and was able to run the code. Had a mini-lecture on how to use Bower and Grunt.  

Meeting #3 - We talked more about how the components fit together (i.e. the API endpoints, the format of the JSON files, etc.) and we discussed the work we had done so far and made sure everyone is on the same page regarding the codebase, how the components work, and how to follow the workflow.  

Meeting #4 - Met up to finish the remaining issues and functionality from our release plan and make sure everything works. Also produced final functional dist version of the product, with minified CSS and Javascript, and pushed the code to the server that we are using to host it (pls.oggettone.com). We ran the test cases that we had.  

Meeting #5 (Review Meeting) - Main target of this meeting was to finalize on some the parts of the documentation and show some numbers. Analyzing frontend commit graph we can see that all the features planned for sprint 1 were finished in about 33 commits (16+15+2). Having 4 features implemented we have about 8 commits per feature(talking only about frontend). For the forking system we had 5 productive forks which tighly cointegrated through pull system(3 for frontend,2 backend). Looking at backend commits we see 19(6+13) in total - so around 5 commits per feature. We completed three tasks of priority 1 and one task of priority 2, with one optional priority 1 task moved to the next phase.

**Summary of "Daily" Scrum Meetings**  
Our scrum meetings were held in our Slack chatrooms, and they were semi-regular. The slack chat can be found here: [csc301team12slack](https://csc301team12.slack.com/messages)  

We did not have the meetings at specific intervals or times, but rather updated the team when we were going to have a meeting, when important code was committed, or when important decisions needed to be made. In practice, this ended being several updates every 2-3 days, on average.  

Summary of updates by member:
 * Tim - Updated us when meetings were coming up, updated us on frontend code was checked in, provided tutorial on how to set up code for the frontend (i.e. Bower, Grunt, node.js, etc.).
 * Rick - Updated us about expected requests and JSON format, updated us when the backend and frontend could connect to each other, wrote appropriate tests.
 * Marco - Updated us when the backend was implemented (first version), described the API endpoints, provided tutorial for installing and running the Flask server.
 * Martin - Made sure that code is stable and failsafe on the backend, took notes during planning meeting, wrote appropriate documentation.
 * Tales - Updated us on the design and the UX, helped describe how the app would be used, provided photoshopped sketches of how the app should look.
 * Harris - Helped others with the design and implementation of the views.
 * Huda - Implemented the login form, helped implement the views, designed some of the other POST form views.

**Usage of GitHub Issue Management System**  
We used the issues we created as a roadmap for what has to be implemented. The issues gave us something to link pull requests to, and to refer some commits to. Our naming convention included "[F]" for frontend-related tasks and "[B]" for backend-related tasks. People were pre-assigned to issues during the planning meeting, to make sure that the workload was more-or-less distributed evenly among all team members. We did not use labels, because everyone on the team was clear about the purpose of each task. We underused the GitHub Issue Management system because the small scale of the project made it easier for us to just discuss issues on Slack instead.

**Miscellaneous Decisions and Conventions**  
We decided early on to use a model where each team member forks the main repo, works on that separately, then creates a pull request to the main repo. In this, Marco was the repo master, so he was the only one who merged pull requests, to avoid commits that might break the code. We chose this model to make sure that the code in the master repo is 100% working and ready to ship, to keep commits small and tidy, and to make sure that code integrates well before any commits are made. Marco understood how to connect the components together well, which is why he was the repo master.  

We decided early on that Martin would be the scrum master, responsible for documenting meetings, distributing roles, mediating major decisions (i.e. should we allow professors or not) and documenting the process. Tim also helped by organizing meetings and checking in with people when we hadn't had updates from them for several dates. We made these decisions to help us all stay on track, stay organized, and communicate well. Also, having one or two people be responsible for these things allowed the rest of the team members to focus on their own work.  

We used Slack extensively as our main method of communication, to make sure that our development process was continuous. We found it to be the easiest way to stay organized and communicative because it allows us to create focused chats (next-meeting, frontend, search-engine, general), allowed us to tag people, it has a great search, it divides messages by date, it's easily accessible from anywhere and it integrated with GitHub (i.e. commits showed up in the slack and we could discuss them). Since this was a small-scale project, we found it easier to have all communication in one place and keeping it separate from other services (like email or facebook).

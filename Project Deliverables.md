## Choosing the Project
We chose the option of making a time management tool for university students.

We chose this project because it is something that can be personally useful to us and because it is easier to do it well since it is simpler. Several members had ideas on how to extend it and make it proactive instead of just a static calendar, so that gave us some room for creativity. Some members were against it and preferred to do the first project idea, as they found it more interesting. We asked everyone for their reasons for and against each project and eventually decided to compromise and go with what the majority of the team wanted to work on. Most members also wanted to work on a web app instead of an Android project, so the third app was not a feasible choice.

## Two Personas
* Jane Doe
  * Jane Doe is a first year student new to UofT: She needs a convenient course management tool that contains her time table, shared study resources and best places to study on campus. She is used to the regular schedule of high school and would like a tool to help her adapt to her irregular timetable in university. She is worried about forgetting to go to classes or tutorials that she only has once a week per class, and she is afraid she might miss deadlines that are far away and aren't mentioned by the profs in class. She lives on residence, so traveling isn't a time-consuming thing.
* Sam Smith
  * Sam Smith is a fourth year student at UofT: He needs a time management tool that integrates with this courses to remind him of upcoming deadlines. He is used to the irregular schedule but is busy with a part-time job, a research project and several clubs that he's part of. He would like a time management tool to help him remember all his deadlines and assignments, since he has a lot on his mind most of the time and would have a hard time remembering himself. He lives close to campus with friends, so commuting takes him some time. He wants the tool to also help him prioritize which assignments to work on, to make sure he doesn't fall behind.

## User Stories
Priority: in []; 1 - High, 2 - Medium, 3 - Low, same as the handout
Difficulty: in {}; E - Easy, M - Medium, X - Xtreme

* [1]{M} Sam wants to be able to see lecture times, tutorial times and all due dates in one place.
* [1]{E} Jane wants to be able to add custom times and due dates in case her professors do not post these times online.
* [2]{M} Jane should be able to see tips from other users, such as a list of study spots at UofT.
* *[3]{M} Profs should be able to update assignment deadlines and exam times and the app should update and display this information to all students.
* [1]{M} Sam wants to be reminded by the app when something is due so that he won't forget to do it. (part of the unified notification system [UNS])
* [2]{X} Jane wants to be sure which events are verified and which are not.
* [3]{X} Sam should get notifications when any information has been created or updated for courses he's subscribed to (part of the unified notification system [UNS]). 
* [2]{M} Sam wants to specify time for his notifications. e.g. in one week, one week before deadline, hour before.
* [1]{M} Jane wants to be able to find times, due dates and tutorials for a specific course.
* [3]{M} Sam should have an option to receive notifications via email or SMS.
* [2]{E} Jane should have an option to unsubscribe from notifications.
* [2]{M} Sam should get reminders of the time and location of exam rooms (part of the unified notification system [UNS]).
* [3]{E} Jane should be able to edit their bios and avatar.
* [2]{E} Sam should be able to sign up through his utoronto mail, to make sure only students can access the app. (unique feature)
* [3]{E} Jane should be able to colour code her courses
* [3]{M} Sam wants to be able to see a mark estimation; he could input marks that he's received on submitted assignments and their respective weights, and calculate the application would current mark in a course. Also, he could estimate mark required to achieve a certain final goal.
* [3]{E} Jane wants to be able to assign priorities and weights to assignments and exams
* [3]{E} Sam could include links to online course syllabuses attached to courses for the convenience of others
* *[3]{X} Professors want to be able to override all user-agreed dates and times


## MVP
Our app gives the user the convenience and flexibility needed to make every student’s life easier. With our Time Management Tool, all the necessary times and dates will be available in one place; saving student time by eliminating the need to screen-hop throughout the day. Each student can also gain the flexibility advantage, by customizing their calendar; in case of a missing entry.

For those who have trouble remembering, our app will solve this issue for them. By sending out notifications, through e-mail and SMS, the student will not need to remember to visit the app often to check their calendar. We believe that every second saved is a win for everyone.

Another crucial feature is to have a system that verifies events and assigns statuses to them, so users can see how reliable data is, and possible play a role in verifying this data depending of their rights(student,TA,professor).E.g - Having the most basic voting system for students, but TAs and Professors will be able to change status of the data immediately(changing status to officialy verified) voiding votes.


## Release & Iteration Planning
**Which user stories are you planning to implement for your first release? That is, the features you will implement in Phase 2 (3 weeks long) of the project.**  
We plan to implement all user stories with priorities of [1] or [2] from above.

**Mention 3 user-stories/features/components that you decided to exclude from your first release, and explain why you decided to postpone implementing them.**  
*Professors want to be able to override all user-agreed dates and times*  
* We excluded this user story because we couldn't reach a conclusive decision on how much we want professors to be involved in our application, so we decided to leave it for later. We feel that once we've developed the project further, we'll have a better idea of whether this user story is a good idea.  

*Sam should get notifications when any information has been created or updated for courses he's subscribed to (part of the unified notification system [UNS])*  
* We decided to exclude this user story because we felt that it was too complicated for a first release, and that it fit into a bigger part of the project (the UNS). We decided to implement this later, as a useful feature on top of more important ones.  

*Sam wants to be able to see a mark estimation; he could input marks that he's received on submitted assignments and their respective weights, and calculate the application would current mark in a course. Also, he could estimate mark required to achieve a certain final goal.*  
* We felt that this was a feature that was only 'nice to have', not integral to our product. It's certainly something that would make the application more helpful, but not something that we really need to have in our first release.


**Which user stories are you planning to implement in the first iteration? (Iteration = 1 week of work)**  
We feel that the following user stories are the first things that need to be done before the others, so they will be implemented in the first week:  
1. *Sam wants to be able to see lecture times, tutorial times and all due dates in one place.*  
2. *Jane wants to be able to add custom times and due dates in case her professors do not post these times online.*  
3. *Sam wants to be reminded by the app when something is due so that he won't forget to do it. (part of the unified notification system [UNS])*

## CRC Cards

#### User
1.Knows username/password and knows its type(student,prof,ta,alumni)
2.Knows his courses
3.Knows what events he is subscribed to(event id)
4. Able to vote for specific event (upvoting, downvoting)

#### Event
1. knows its event id,name,description,group id it belongs
2. knows its type(regular class,assignment,study session,exam)
3. knows its time and repetitivness
4. knows its status(approved,not approved,official)
5. Knows its voting data

#### Group
1. knows its group id,name,description
2. knows its type(course offered by university,community,club)
3. contains all events that belong to this group

#### DAO
1. can search for users(filter them)
2. create events,groups
3. get id's of groups,users(search for them)
4. get all events user is subscribed to

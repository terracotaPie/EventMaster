# Feedback

* You should move all Phase-1-related files to the Phase1 directory that this file is in.

* As we discussed in our meeting, different classes of persona (e.g., prof/student) would be better than two students, as the goals of a first-year and fourth-year student aren't different enough to change your feature set. For the purposes of this assignment, though, the two you chose are fine.

* [-1 mark] The adjustments you made to deprioritize some user stories from P1 to P2 are good. You may need more detail for ones that will form your first release -- e.g., you need a better idea of what it means to "verify" an event, beyond the detail about "most basic voting system" you mention in your MVP section.

* [-2 marks] In your MVP section, you should be clearer about who "the user" is in your first sentence -- is she a student? a prof? a university administrator? Your word budget was large enough that you could have gone into more detail about what makes your system unique. For example, you could emphasize *why* your voting system is better than other approaches. To do so, you could talk briefly about how you don't want students duplicating effort by entering schedules for the same classes over and over, so you could let users enter data to be reused by others in the same class. To establish trustworthiness, you allow voting, so that only "good" data (e.g., with >= x number of upvotes and <= y number of downvotes) propagates. To ensure reliability, you let profs/TAs override data.

* You could also consider promoting users who consistently enter good data to become trusted users whose entries automatically propagate.

* The one general criticism I will level is that, in your current system, users don't have an incentive to vote. Writing comments on Hacker News or Reddit lets you gain points by saying interesting things. Here, though you could track a user's points and display them to other users, I'm not sure people would value them -- data entry like this is woefully boring next to writing witty things. I don't think you need to change your project idea for this course, but we could perhaps discuss this point for a few minutes when we meet during Phase II.

* Your P1 and P2 features look like they will make a good first release.

* [-1 mark] You should talk a bit more about the UNS. Why is it interesting? How will notifications be delivered -- e-mail? Text message? Via a popover on the web site? Since this is part of your first iteration, you should be more explicit about how notifications will be done by the end of the first iteration.

* [-3 marks] The CRC cards look good. You should have chosen three user stories and showed how your CRC cards will help you play out this scenario. Example: Student wants to list events. Student logs in via DAO, which returns User. User knows courses, so Events associated with those courses in the current month are returned. Listing of events is rendered in month-view calendar.

* You may want to establish separate DAOs for User/Group/Event to keep the responsibilities of each clear, rather than in one massive DAO.

* Overall: You have an excellent start on the project. You are well-prepared to enter Phase 2.

# Mark

* Team introduction: 5/5
* Choosing project: 5/5
* Personas: 5/5
* User stories: 19/20
* MVP: 13/15
* Release & iteration planning: 10/10
* CRC cards: 12/15
* Total: 68/75

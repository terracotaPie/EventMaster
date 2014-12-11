## Phase 4, Team 12

Total mark: 70 / 80

## Live Presentation

| Component | Mark | Out of |
| --------- | ---- | ------ |
| Logical flow of the demo                                  | 5 | 6 |
| Using good slides, diagrams and/or any other visual aids  | 3 | 4 |
| Answering questions clearly                               | 3 | 4 |
| Overall quality of presentation                           | 5 | 6 |
| __Total__                                                 | 16 | 20 |

 * Good intro, and nice looking presentation.
 * Cool/useful features: Filtering (explained very well), and event score.
 * The flow of the presentation could be smoother - It felt more like describing a list of features, as opposed to telling a story where one section naturally leads to the next.
 * The answer to the question regarding conflicting events was a bit unclear.
 * Good description of the process - Basic usage of fork + pull-requests, using Slack (with good supporting argument), and a very good description of your Kanban/Scrum hibrid process.
 * Diagram was OK, and the description of the tools/technologies was very good.
 * Felt like there were too many members who were very quiet during the presentation.


## Product.md

| Component | Mark | Out of |
| --------- | ---- | ------ |
| Product quality | | 7 |
| Supporting arguments for decisions, and clear explanations | 8 | 8 |
| Overall presentation | 5 | 5 |
| __Total__ | 20 | 20 |

* Altogether well-organized and written. I liked your honesty in listing the
  many features you decided to remove -- you instead focused on delivering a
  good experience for the user with a more basic feature set.

## Process.md

| Component | Mark | Out of |
| --------- | ---- | ------ |
| Mentioning things that worked well | 2 |  2 |
| Mentioning things that didn't work well |  1 | 2 |
| Describing the team's ideal process | 5 | 5 |
| Supporting arguments for decisions, and clear explanations | 6 | 7 |
| Overall presentation | 4 | 4 |
| __Total__ | 18 | 20 |

* How did you "look at specific commits"? Did everyone examine all commits? If
  not, how did you break it down?

* [-2 marks] You gave me lots of detail on what you used and how it worked. You
  should have told me more about what didn't work, though -- you told me about
  what you rejected out of hand as not working, but didn't say much about what
  you tried only to find that it didn't work. In short, I want to hear more
  about what you learned was a bad idea by trying it, rather than what you
  rejected because you thought it wouldn't fit your process.

* Everything was well-written and presented. Well done!

## Architecture.md

| Component | Mark | Out of |
| --------- | ---- | ------ |
| Clear high level description | 5 |  8 |
| Describing significant decision(s) | 5 | 6 |
| Overall presentation | 6 | 6 |
| __Total__ | 16 | 20 |

* [-3 marks] You didn't give me enough suporting detail in your overall architecture.

   * You should have given me a high-level overview, describing that you chose
     a "fat client" approach that consumes JSON. You too quickly descended into
     the particulars of which components you chose.

   * Why is Flask more suited as an API endpoint than Django?

   * You say Angular did everything you needed to do. What specifically was this?

   * You speak of Bootstrap providing functionalities users expect. What were
     these? E.g., users don't *expect* a grid layout or coloured buttons; it's not
     clear how Bootstrap directly benefited your users.

   * Tell me more about the interactions between components. Why was JSON a
     suitable exchange format? Why did you choose this "fat client" approach
     instead of a "fat server" that generates markup itself? (This would have been
     a good "significant architecture decision" to discuss.)


* [-1 mark] There were some minor issues with your significant decisions.

   * You say a web app could be more full-feaetured than a desktop or console
     application. What features are you speaking of?

   * You say MVC is "extremely popular right now", implying it's a recent
     development. It goes back to the Gang of Four book, however, which was
     published twenty years ago. And, of course, a design pattern's popularity is
     not a good reason to choose it; you could say, however, that its popularity
     suggests that it's good, then go on to list more concrete reasons for why
     developers (and you) like it.


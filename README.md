# Rotisserie-MTG
A companion web app for the Rotisserie MTG format

## What Is Rotisserie MTG?

Rotisserie MTG is a fan made turn-based Magic: The Gathering draft format.
- Players draft cards in a snaking fashion (so if there are 6 players drafting, it will go from 1 to 6 and then from 6 to 1, which means the players at the edges get to draft twice in a row).
- Players may draft any card that is legal in the Vintage MTG format.
- There can only be one copy of a card drafted amongst all players (so if Timmy drafted Black Lotus, no one else can).
- Because of that, all drafted cards will be publicly known to all players.
- Players draft until everyone has drafted 35 cards.
- After drafting 35 cards, each player will begin constructing their final decks, adding any number of basic lands to reach a minimum of 40 cards.
- After locking their decks, players will decide on up to 5 cards to act as their "sideboard" to swap between turns, and will not be allowed to change their decks or sideboard after that decision is made.
  - This is done to prevent sideboarding against a specific matchup due to all cards and decks being publicly known.
- The next step is to shuffle up and play!

### In this README I will keep a changelog of the app as it goes along and improves over time

# Latest Update:

## _May 17th:_ New Design For the Website!
This update focused on adding new flavor and styling to the website and let me tell ya - the new design looks FANTASTIC! I am loving it so much and hopefully you will too!

### Update Highlights:

### The Stash

- _**NEW**_ The Stash is now a paginated carousel!
- _**NEW**_ Stash collapse button is now a lip above The Stash

### Miscellaneous Changes & Bug Fixes

- Fixed a bug where floating card image persisted after removing all text from the search bar and the search results disappeared
- Draft Carousel buttons are now disabled when there is only one player connected
- Added "player name placeholder" instead of the socketID due to user confusion during testing


## In Conclusion

So first of all some general thoughts:

I think that at this point, the draft page is basically done functionality-wise. So what's next? Well there's still the issue of responsiveness looming over that page, which is an issue I need to address at some point, but it's also something I need to really sit down and think about and design, which might not be what I'm looking for at this very moment. Right now I'd like to focus on this being a portfolio piece and something I can really display, so I'd like to focus on perhaps other things first

### My Next Move

I think the next move is gonna be as follows:

- create a landing page and a log in / sign up page to the website, as well as an about page for inquiring minds looking to understand what the Rotisserie MTG format is all about!
- This all means that I'd like to also incorporate routing, probably via ReactRouter to add to the experience while still keeping the website as a SPA


##### That's All For Now - More Updates To Come Soon! ![pixilart-drawing](https://user-images.githubusercontent.com/7985557/117416092-e0eba380-aecd-11eb-8783-bac3c9c5e094.png)


##### Teva


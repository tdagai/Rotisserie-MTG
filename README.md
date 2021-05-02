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

## _May 2nd:_ App Redesign - Part 2!
This update mainly focused on creating *The Stash* feature, as well as some QOL touch ups and some big performance upgrades.

### Update Highlights:

#### _New Feature_ The Stash

- When it's not a player's turn, they are no longer able to add cards to their draft pile.
- Instead, cards will be added to *The Stash*.
- Cards in *The Stash* are unique both with themselves and with cards in **all** player's draft piles.
- Even though *The Stash* is only client side (only the player who owns it can see it), whenever any player adds a card to their their draft pile, it will be removed from **all** players' *Stashes*.
- Once a player's turn comes around, they'll be able to click on a card in their *Stash* to add it to their draft pile and remove it from their *Stash*.
- Cards in *The Stash* can be hovered over to show a preview of the card.
- *The Stash* is collapsible, giving users more space if needed.

#### Miscellaneous Changes

- Fixed a massive rerendering issue that used hurt performance tremendously.
- Search results now disappear once the search bar is no longer in focus.
- Added a border around the preview card to separate it from the background (especially useful for white bordered cards).
- Added a ChangeLog that will contain all updates to the app that will be updated with each merged pull request.
  - Going forward, The README will only contain the latest update.

## In Conclusion

### My Next Move

So first of all some general thoughts:

I am happy with the progrress I've made on the app so far, and think that the main part of the app (the draft page) is mostly complete.
HOWEVER, while it is mostly complete in functionality, it is nowhere near complete in accessibility and presentation.

#### Because of that, I have a few things I'd like to work on for the next update:
- One of the main things I'd like to have worked out by the next update is ***accessibility***, both in the sense of adding names aria-labels to tags to make it more screen-reader accessible, but also using introducing elements of responsive design to make sure it is also device friendly.

#### Functionality-wise, the two areas that lack the most as of right now are the draft areas and the card preview.
- The card preview has very poor support for Magic cards right now and was just kinda thrown together for testing purposes (for example, you can't look at double-faced cards right now and the formatting for the oracle text is really off).
  - Another main focus for the next update will be to add test cases that will aid me in increasing the support for Magic cards and making sure any card can be drafted and viewed without a hitch.

- The draft area is a mess right now. Whenever more than one player join the draft, all draft piles are smooshed together and it really does not look great right now. Some thoughts I have on that are as follows:
  - I would like to turn the draft area into a carousel, where a user will be able to click through and see all players' draft piles.
  - This is also something that will be affected by responsive design and I'll have to put some thought and consideration into how I'd like to implement that for smaller screens.
  - One of the biggest issues with the draft area I foresee right now is the lack of persistance in data that I have right now. Since players aren't maintained once they leave, things could get complicated very quickly, and so I think this part might have to wait for a future update, perhaps after a room system is added.

##### Despite having a lot of hard work ahead of me, I am really happy with how the app is turning out so far!

##### More Updates To Come Soon!

##### Teva

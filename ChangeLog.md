# Rotisserie MTG ChangeLog

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

---

## Apr 28th: App Redesign - Part 1!

<img width="1680" alt="Screen Shot 2021-04-27 at 9 41 58 PM" src="https://user-images.githubusercontent.com/7985557/116493230-1c91c800-a853-11eb-8aa6-1b463f94cbe2.png">

In this part of the redesign, I began subdividing the draft page.

### Here is a list of the features that have been added in this update:

#### Top Banner

- Moved the app's title to the top left of the banner
- Moved the search bar to the left side of the banner
- When all text is deleted from the search bar, any search results that were previously shown will disappear
- Reoriented the search results and on-hover images to fit with the search bar's new location
- Added shadow to the search bar on focus to increase focus clarity
- Added shadow to the search results and on-hover images to separate them from anything below them and increase the app's clarity and readability

#### App Body

- Added subdivisions to the app's body to clearly separate the draft pile from the rest of the page and to illustrate the space that will be given to other features

#### Draft Pile(s)

<img width="1680" alt="Draft Pile" src="https://user-images.githubusercontent.com/7985557/116494508-cd996200-a855-11eb-9f40-52411ad70e99.png">

- Draft pile(s) will now be located at the left side of the page
- More work on draft pile(s) to come in future updates

#### Card Display/Preview

<img width="1680" alt="Card Display/Preview" src="https://user-images.githubusercontent.com/7985557/116494576-e99d0380-a855-11eb-9a9f-00d89d4d6d1b.png">

- Upon hovering over a drafted card from the draft pile, the card, as well as any relevant information about it, will appear on the left side of the app
- Some data for the displayed card is conditionally rendered since not all cards will share that data
  - (Oracle Text, Flavor Text, P/T, Loyalty)

### My Next Move

My plan for the next update is to incorporate the turn system and the "Stash" (seen at the bottom of the redesign wireframe).
With the Stash, players will be able to search for and save cards even when it's not their turn, and they will be notified when someone drafted a card that's in their Stash. When a player's turn comes around, they'll be able to draft cards straight from their Stash rather than having to search for it.

I really like the Stash because it helps solve to big issues that a turn-based draft format has: long turns and player focus.

By giving players the ability to think ahead of time of what cards they would like to draft and letting them search and save them, turns can go much faster since the oh-so-common situation of a player taking excessively long turns delibirating which cards to draft will be solved before their turn is reached. This also plays into and helps alleviate the second issue of player focus.

During turn-based games, it's easy to lose a player's focus when it's not their turn, and who can blame them? Keeping the players involved even when it's not their turn will allow them not only to stay a few steps ahead in terms of strategy and planning, but will also help them keep track of that strategy and will test their adaptability in case a card they planned to draft was taken from them, thereby keeping them on their toes and invested even when it's not their turn.

By taking these measures, I am hoping to - at least to a degree - address and relieve these problems before they even arise.

## In Conclusion

**All things considered, I am really happy with how the app is turning out so far!**

**More Updates To Come Soon!**

**Teva**

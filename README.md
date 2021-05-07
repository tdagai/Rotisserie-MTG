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

## _May 6th:_ Deployment, Renovated Search Bar, and more!
This update focused on overall app QOL upgrades, and on making sure things look good and work even better.

### Update Highlights:

#### Search Bar

The search bar has been completely renovated and redesigned and is now looking much much better. While the old search bar design was... serviceable... it was far from ideal in the way that it looked, what with its blocky, disjointed, and fairly basic and honestly pretty bad look.
But the old design is no more!
Say hello to the new and improved design of the search bar: 
<p align="center">
<img width="505" alt="Screen Shot 2021-05-06 at 11 13 20 PM" src="https://user-images.githubusercontent.com/7985557/117405787-0625e500-aec1-11eb-908e-65255b4d4a52.png">
<img width="497" alt="Screen Shot 2021-05-06 at 11 13 36 PM" src="https://user-images.githubusercontent.com/7985557/117405788-06be7b80-aec1-11eb-94d3-98f54c8677df.png">
<img width="494" alt="Screen Shot 2021-05-06 at 11 14 00 PM" src="https://user-images.githubusercontent.com/7985557/117405790-07571200-aec1-11eb-9af5-27a64a8b311c.png">
</p>
Look at that gorgeous roundness it has and how slickly the search results connect to the search bar! Ah I love it!

Another feature that was added is the button that you can see on the left side of the search bar which will clear it of any text it has.

The one downside that comes with this redesign is that it caused a bug I have yet to solve where the images no longer show up on search result hover; however, I will attempt to solve this issue before the next big update, and I've already got a few ideas in mind so stay tuned for that!

#### Card Preview

While before only cards with the "Normal" layout were able to be displayed, The Card Preview is now able to display cards with any layout that's legal in Vintage, with the exception of "Meld" which is being a pain in the butt and is currently disabled until I figure out how to wrangle the API to give me the data I want.

- All cards with more than one "face" now have their names properly displayed in the search bar
<p align="center">
<img width="484" alt="Screen Shot 2021-05-06 at 11 56 20 PM" src="https://user-images.githubusercontent.com/7985557/117411321-4c327700-aec8-11eb-8cba-aef104f506ab.png">
</p>

- Cards that have the layout "Transform" have a button underneath them that says "Transform" and lets you see their back side (with a cool animation!) and display the text for the appropriate side
<p align="center">
<img width="787" alt="Screen Shot 2021-05-06 at 11 56 39 PM" src="https://user-images.githubusercontent.com/7985557/117411371-58b6cf80-aec8-11eb-9cd6-98b738881242.png">
<img width="716" alt="Screen Shot 2021-05-06 at 11 56 59 PM" src="https://user-images.githubusercontent.com/7985557/117411382-5b192980-aec8-11eb-937f-77544dec2d95.png">
</p>

- Cards that have the layout "Modal DFC" have a button underneath them that says "Turn Over" and lets you see their back side (with a cool animation!) and display the text for the appropriate side
<p align="center">
<img width="712" alt="Screen Shot 2021-05-06 at 11 57 53 PM" src="https://user-images.githubusercontent.com/7985557/117411436-6704eb80-aec8-11eb-8b4b-ffe5a1de0950.png">
<img width="725" alt="Screen Shot 2021-05-07 at 12 09 10 AM" src="https://user-images.githubusercontent.com/7985557/117411500-797f2500-aec8-11eb-83ff-28616587630e.png">
</p>

- Cards that have the layout "Split" have a button underneath them that says "Rotate" and turns the card 90&deg; sideways (CCW if it's an "Aftermath" card, CW if it's any other split card) so you can read them easily (with a cool animation!) and display both side's text properly
<p align="center">
<img width="728" alt="Screen Shot 2021-05-06 at 11 59 05 PM" src="https://user-images.githubusercontent.com/7985557/117411592-961b5d00-aec8-11eb-8d86-ba24762994de.png">
<img width="736" alt="Screen Shot 2021-05-06 at 11 59 11 PM" src="https://user-images.githubusercontent.com/7985557/117411597-974c8a00-aec8-11eb-88bb-09697e31580f.png">
<img width="707" alt="Screen Shot 2021-05-06 at 11 58 10 PM" src="https://user-images.githubusercontent.com/7985557/117411580-93206c80-aec8-11eb-8ac2-c32691b4016b.png">
<img width="735" alt="Screen Shot 2021-05-06 at 11 58 16 PM" src="https://user-images.githubusercontent.com/7985557/117411588-9582c680-aec8-11eb-998e-6a0801ee3deb.png">
</p>

- Cards that have the layout "Flip" have a button underneath them that says "Rotate" and turns the card 180&deg; so you can read them upside down (with a cool animation!) and display both side's text properly
<p align="center">
<img width="705" alt="Screen Shot 2021-05-07 at 12 00 54 AM" src="https://user-images.githubusercontent.com/7985557/117411798-d8449e80-aec8-11eb-99ad-91338a4b35b8.png">
<img width="711" alt="Screen Shot 2021-05-07 at 12 01 00 AM" src="https://user-images.githubusercontent.com/7985557/117411807-da0e6200-aec8-11eb-875b-050f9ffdc180.png">
</p>

- Cards that have the "Saga", "Adventure", and "Leveler" layouts now properly display all of their text
<p align="center">
<img width="708" alt="Screen Shot 2021-05-07 at 12 01 22 AM" src="https://user-images.githubusercontent.com/7985557/117411896-f7433080-aec8-11eb-8c6c-417395b52d20.png">
<img width="715" alt="Screen Shot 2021-05-07 at 12 12 37 AM" src="https://user-images.githubusercontent.com/7985557/117411903-fad6b780-aec8-11eb-92eb-1063cccddea2.png">
<img width="718" alt="Screen Shot 2021-05-07 at 12 01 55 AM" src="https://user-images.githubusercontent.com/7985557/117411901-f9a58a80-aec8-11eb-83e9-5b58e16ce987.png">
</p>

Another upgrade made to the Card Preview is that mana symbols can now displayed for the mana cost, however symbols are not yet able to be displayed for the card text.

#### The Stash
After giving it some thought, the potential for missclicks and accidental additions during a player's turn were too big a risk to take, and to remedy that, I took the following approach:

- When a card in The Stash is clicked, a set of buttons will pop up
  - One button will add this card to the draft pile and will only be available during the player's turn
  -  The other to remove the card from The Stash, which was not an option before and will give the player better control over the card's they'd like to draft and allow them to change strategies when needed.
<p align="center">
<img width="246" alt="Screen Shot 2021-05-07 at 12 20 05 AM" src="https://user-images.githubusercontent.com/7985557/117413567-fb704d80-aeca-11eb-9084-950f3b6b1d79.png">
</p>

#### Miscellaneous Changes

- Improved website's Largest Contentful Paint from 3.6s --> 1.6s (That's a 55.56% improvement!!)
- Improved the website's accessibility to 100 score from lighthouse
<p align="center">
<img width="208" alt="Screen Shot 2021-05-06 at 4 40 30 PM" src="https://user-images.githubusercontent.com/7985557/117414156-ac76e800-aecb-11eb-9bcc-0f18c0244259.png">
</p>

- Added a Favicon to the website that I made myself!
![pixilart-drawing](https://user-images.githubusercontent.com/7985557/117414265-c9abb680-aecb-11eb-82d2-bcf512f5bbc6.png)


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


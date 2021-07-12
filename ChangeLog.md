# Rotisserie MTG ChangeLog
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

### This file will keep a changelog of the app as it goes along and improves over time

# Latest Update:

## _July 10th:_ Front Page and Early Alpha!
This update focused on adding a front page to the website, adding several other pages, setting up for the future, and launching the website in early access!
This update took a little while to come out because I needed a bit of a mental health break - those are important!

### Update Highlights:

- _**NEW**_ Front Page
  - The Landing Page of the website. allows the user to navigate the website, track the website's development on github, join the community discord, and sign up to the website's newsletter.
- _**NEW**_ Sign In Page
  - Will let the user sign into their account. Currently has no back-end support.
- _**NEW**_ Sign Up Page
  - Will let the user sign up to the website. Currently has no back-end support.
- _**NEW**_ Sandbox
  - What used to be the whole website before this update.
  - Can be accessed by non-registered users to check out the website or practice.
- _**NEW**_ Under Constructions Page
  - A temporary placeholder page for pages that I have yet to add to the website. Those pages include
  - _**NEW**_ Create/Join Room: Will only be available to registered users and will allow them to draft with their friends.
  - _**NEW**_ Contact: Will be a page that will allow users to approach the engineering team (AKA me) with inqueries/requests/bug reports.
  - _**NEW**_ About: Will be a page that will include information about the rules of the game and some information about myself.
- _**NEW**_ Page Unavailable Page
  - A default page for any path that doesn't exist

## In Conclusion

A few general thoughts:

I am very happy with the website's front page, with only very few changes I might make to it in the near future in mind. I've hit all the major marks I've wanted to have by the next update and so I believe that it is overall mostly done.


### My Next Move

I think the next move is gonna be as follows:

- Create the About and Contact pages.
- Add mobile design to the Sandbox page

##### ![pixilart-drawing](https://user-images.githubusercontent.com/7985557/117416092-e0eba380-aecd-11eb-8783-bac3c9c5e094.png) That's All For Now - More Updates To Come Soon! ![pixilart-drawing](https://user-images.githubusercontent.com/7985557/117416092-e0eba380-aecd-11eb-8783-bac3c9c5e094.png)


##### Teva

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

## _May 11th:_ Draft Carousel and Deployment!
This update focused mainly on turning the draft piles into a carousel and adding some browser support.

This update was a much smaller than the others, though it was definitely a necessary one because it added the last features I wanted to have in the draft page before deploying the website!

The website will be deployed later on today and the address will be added here so you can check it out!

### Update Highlights:

### Draft Piles

- _**NEW**_ Draft piles are now a carousel!
- The Player who's draft pile is being viewed has their name showing at the top left
- Clicking on the 'next' button when viewing the last pile will send the user to the start
- Clicking on the 'back' button when viewing the first pile will send the user to the end

### Miscellaneous Changes

- Floating images of search results now properly appear when the search result is hovered
- Added more browser support
- Fixed a bug where floating card images appeared behind double faced cards
- Fixed a bug where the back side of double faced cards was not visible on Safari


## In Conclusion

So first of all some general thoughts:

I'm really happy with the current state of the website and the fact that the general features of the draft page are complete and ready to be put out there in the world!
However, the website doesn't look good, like, at all. it's all gray and ugly and if you look at it in any smaller screen it doesn't work.

### My Next Move

I have two main things I'd like to do after deployment:

- The first one is going to be the styling and overall look for the draft page. Though I still need come up with the new style for the draft page, this will most definitely be done by the next update.
- The next thing I'd like to get done after deployment is making the website responsive to different screen sizes. This will most likely take longer and not be ready by the next update because it's something I've never done before, but I think it's relevant and important both that I learn how to do it and so that the website can be viewed and enjoyed by as many people as possible!



##### More Updates To Come Soon! ![pixilart-drawing](https://user-images.githubusercontent.com/7985557/117416092-e0eba380-aecd-11eb-8783-bac3c9c5e094.png)


##### Teva

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

So first of all some general thoughts:

I've come such a long way from the basic square and a search bar I started with to what the app looks like today! I've been able to stay on top of schedule and complete all the features I had planned for the app and that makes me really happy!

### My Next Move

I have two main things I'd like to get done by the next update:

- The first one is going to be turning the draft area into a carrousel. I've already began preparing for that by making some internal changes to the way the code for the draft pile was laid out and I will begin taking care of that tomorrow.
- The next thing I'd like to get done is deployment! I am really excited about being able to share the Rotisserie MTG format with the world and I can't wait to have people try it out on a live and deployed website!

##### Last Wednesday, I set myself the goal of making the app "presentable" by this Friday (tomorrow, May 7th), and I put some gas and worked really hard and I feel that while it may never look "perfect" to me because I'm always looking forward and thinking of what features I can add next, I do feel like at the very least after adding the carrousel feature I will be about there and be ready to deploy - and that makes me not only really happy, but also really proud of both myself and the work I do, which is a very rare feat for me.

##### More Updates To Come Soon! ![pixilart-drawing](https://user-images.githubusercontent.com/7985557/117416092-e0eba380-aecd-11eb-8783-bac3c9c5e094.png)


##### Teva


---

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

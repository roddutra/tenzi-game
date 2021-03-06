# Tenzi Game

The Tenzi Game, inspired by the [IRL dice game](https://ilovetenzi.com/product/tenzi-dice-game/), is a super simple app in React where the player needs to roll the dice until all 10 die are of the same number. Try and get all 10 in the least amount of dice rolled as possible.

I built this app just to refresh my knowledge in React and give [Tailwind](https://tailwindcss.com) CSS a try.

## Screenshot

![Tenzi Game Screenshot](src/images/demo-screenshot.png)

## Live Demo

You can give it a try on a demo deployed to Vercel: [live demo](https://tenzi-game-roddutra.vercel.app)

## Running the project

In the project directory, you can run:

```
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Tools used

This project was created with React using [`create-react-app`](https://create-react-app.dev) and uses the following packages:

- [Tailwind CSS](https://tailwindcss.com): utility-first CSS framework to make the UI look nice without having to reinvent the (CSS) wheel
- [Nano ID](https://github.com/ai/nanoid): to generate a unique ID for each die to be able to use it as the element's key
- [React-Icons](https://react-icons.github.io/react-icons/): to use icons from a ton of different icon libraries
- [React Confetti](https://github.com/alampros/react-confetti): for the confetti animation at the end of the game 🎉

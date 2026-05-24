# React.js

This section covers everything I learned about React, starting from what a component is and ending with a fully routed multi-page app. Each folder corresponds to a module in the curriculum.

## 15.1 Introduction to React

The very first React exercises. This is where I learned what JSX is, how React renders to the DOM using ReactDOM, and how to write a basic component. There are a few small components here like a movie list, a random number generator, and some dog breed components I made just to get the syntax down.

## 15.2 JSX and Props

This module is about how components communicate with each other. Props let a parent pass data down to a child. Exercises here include a Blackjack game where each card is a component receiving props, and a Pokédex that renders Pokémon data passed from a parent.

## 15.3 Creating React Apps with Vite

This is where I set up my first real React project using Vite instead of the older Create React App. The project includes a Header component and a ShoppingList to get familiar with the Vite dev environment and project structure.

## 15.4 Component Design

A space mission app focused on thinking about how to break a UI into the right components. The main skill here is figuring out which components should own which data and how to keep things clean and reusable.

## 15.6 State Management with useState

useState is how React handles data that changes over time. This module has three exercises: a dice roller, a space battle simulation, and a practice file where I experimented with counters, user objects, and derived state using useEffect.

## 15.7 Advanced Component Logic with useEffect and useRef

useEffect handles side effects like fetching data or syncing with external systems. useRef gives you a way to hold a mutable value or directly reference a DOM element. Exercises here include a card drawing app that fetches from an API, a star rating component, and a GitHub profile viewer that searches users by username.

## 15.8 Advanced State Management with useContext and useReducer

useContext lets you share state across the component tree without passing props at every level. useReducer is a cleaner way to manage complex state logic. There are two demos here: one for context and one for reducer, with a mock login flow to tie it together.

## 15.9 Building Forms and Handling User Input

This module covers controlled forms in React, where form inputs are tied to state. The exercises cover how to handle change events, validate input, and manage form submission cleanly.

## 15.10 Routing with React Router

This is the most complete project in the section. It is a job board app built with React Router, covering client side navigation, nested routes, layouts, breadcrumbs, error pages, a contact form with form actions, and a 404 not found page. The app uses a local JSON file as a mock database.

## What I learned

This section gave me a real foundation in React. By the end I understood how to build component trees, manage state at different levels, fetch data asynchronously, handle user input, and build a multi-page app with client side routing.

# Forms Demo

A React app built to practice controlled forms and user input handling. It has two separate form demos running on the same page so you can see different patterns side by side.

## What it does

The first demo is a shopping list. There is a form where you enter a product name and a quantity, and when you submit it the item gets added to the list below. Each item gets a unique ID generated with uuid so React can track them cleanly.

The second demo is a user signup form with username, email, and password fields. The email field has inline validation. If you click into it and leave it blank, a red error message appears below the field. The form only submits if the email is not empty, and on success it shows an alert with the entered details and resets all fields back to blank.

## What I practiced

The main focus was controlled components, where every input is tied to React state through a value prop and an onChange handler. Both forms use a single handleChange function that reads the input name attribute to know which state key to update, which keeps the code clean instead of writing a separate handler for every field. The forms also cover how to reset state after submission and how to track whether a field has been touched before showing a validation error.

## Tech used

React, Vite, and uuid for generating unique item IDs.

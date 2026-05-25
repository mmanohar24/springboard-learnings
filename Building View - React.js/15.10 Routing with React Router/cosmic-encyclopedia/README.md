# Cosmic Encyclopedia

A React app built to practice client side routing with React Router v6. The idea is simple: a space encyclopedia where users can browse different celestial objects, each on its own page, without a full browser reload.

## What it does

There is a navigation bar at the top with links to each celestial object. Clicking one takes you to a dedicated page with a description and an image pulled from Wikipedia. A back button lets you return to the previous page. If you navigate to an ID that does not exist in the dataset, it shows a not found message.

## What I practiced

The main point of this project was dynamic routing. Instead of building a separate page component for each celestial object, there is a single Content component that reads the ID from the URL using the useParams hook, finds the matching object in a dataset, and renders it. This means adding a new celestial object is as simple as adding one entry to the data file.

It also covers nested routes with a shared layout, NavLink with active state styling, and programmatic navigation using useNavigate for the back button.

## Structure

The app is organized into four folders inside src. Pages holds the Home component. Components holds the Content page and the BreadCrumbs back button. Layouts holds the RouteLayout that wraps every page with the nav and renders child routes through an Outlet. Data holds the celestial objects dataset.

## Celestial objects included

Mars, Venus, Orion Nebula, and Andromeda Galaxy.

## Tech used

React, React Router v6, and Vite.

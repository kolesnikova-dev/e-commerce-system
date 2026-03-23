# E‑Commerce System

## Introduction

For this assignment, I have mostly followed the instructions while aiming for clean, maintainable code.
The project simulates core e‑commerce logic: fetching product data, calculating tax and discounted prices, and presenting the results in a structured console output.

## Project Structure

- models / Product – Contains the Product class along with supporting interfaces (Dimensions, Review, Meta).
Interfaces help ensure proper object structure and improve type safety across the application.

- services / api.service – Handles asynchronous data fetching.
This layer isolates network logic.

- utils – Houses helper functions like greenConsoleLog and capitalize.
Keeping utilities in a separate file improves modularity and readability.

- main – Main point of entry of the program: fetch products, apply tax, and display the final list.

## Implementation Details
#### Tax & Discount Calculations
I followed the instructions to calculate tax based on product category and to apply discount percentages.
Constants are used wherever possible. This reduces hard‑coded values, minimises typing effort, and keeps logic dynamic.

#### Data Display
Products are displayed in the console using the built‑in <code>console.table</code> method.
The chalk library adds a green header "Products with Tax" to make the output more readable.

#### TypeScript Usage
The entire codebase is written in TypeScript for type safety and to reflect current standards in web development.

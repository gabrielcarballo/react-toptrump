# Top Trump Card Game Project

This project is a challenge to create a card game in Top Trump style using React. The application allows users to create a deck with a custom theme, add and remove cards, view all the added cards, and play with the created deck.

## Project Overview

The project is developed in React with class component state management. It simulates a Top Trump card game, from creating the deck to playing with it.

### Prototype

You can access a prototype at the following link: [Top Trump Prototype](https://www.figma.com/file/psAYBgwjQ1pQqBe3wJvljt/Tryunfo)

## Development

The application includes the following components:

1. **Form Component (src/components/Form):**
   - Responsible for creating cards for the deck.
   - Rendered within the main App component.
   - Contains input fields for card information.

   ![Form Component](link-to-image-example)

2. **Card Component (src/components/Card):**
   - Receives props to render card information.
   - Rendered within the main App component.
   - Displays a preview of the card being created in real-time.

   ![Card Component](link-to-image-example)

3. **Save Button Validation:**
   - The "Save" button is enabled only if all form fields are correctly filled.
   
4. **Save Button Functionality:**
   - Adds a new card to the deck when clicked.
   - Maintains a state to store the list of existing cards in the deck.

5. **Top Trump Validation:**
   - Only allows one Top Trump card to be saved in the deck.

6. **Display Deck:**
   - Renders a list of all saved cards in the application state.
   - Automatically updates when a new card is added.

7. **Delete Button:**
   - Adds a "Delete" button to each rendered card in the deck.
   - Allows removing a card from the deck.

### Bonus Features

8. **Name Filter:**
   - Adds a text field with the attribute data-testid="name-filter" for filtering cards by name.

9. **Rarity Filter:**
   - Adds a select field with the attribute data-testid="rare-filter" for filtering cards by rarity.

10. **Top Trump Filter:**
    - Adds a checkbox field with the label "Top Trump" and the attribute data-testid="trunfo-filter" for filtering Top Trump cards.

## Feedback

I would appreciate your feedback on my project! Feel free to share your thoughts and suggestions.

## Portfolio

Check out my [portfolio](my-folio-weld.vercel.app/) for more of my work!

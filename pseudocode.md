# Tic-Tac-Toe Game

1. Constants
    1. Divs
1. Variables
    1. Arrays for storing positions
1. Functions
    1. Init.
    1. Check Win Conditions.
    1. Score.
    1. Opponent Move.

There are 138 possible states of the game.  For this reason, it won't be efficient to create at case for each combo.

The spots are numbered:

---

| 1 | 2 | 3 |
|:-:|:-:|:-:|
| 4 | 5 | 6 |
| 7 | 8 | 9 |

---


These will held in an object.  a zero value will denote empty, 1 for X and -1 for O.  That way we can use 3 and -3 to check for winning conditions.  If array value is != 0 you will not be able to click/assign it.

## AI

Using switch or an If/Esle If tree, the computer will follow the following strategy from [Wikipedia:](https://en.wikipedia.org/wiki/Tic-tac-toe)


1. Win: If the player has two in a row, they can place a third to get three in a row.

1. Block: If the opponent has two in a row, the player must play the third themselves to block the opponent.

1. Fork: Create an opportunity where the player has two ways to win (two non-blocked lines of 2).

1. Blocking an opponent's fork: If there is only one possible fork for the opponent, the player should block it. Otherwise, the player should block all forks in any way that simultaneously allows them to create two in a row. Otherwise, the player should create a two in a row to force the opponent into defending, as long as it doesn't result in them creating a fork. For example, if "X" has two opposite corners and "O" has the center, "O" must not play a corner move in order to win. (Playing a corner move in this scenario creates a fork for "X" to win.)

1. Center: A player marks the center. (If it is the first move of the game, playing a corner move gives the second player more opportunities to make a mistake and may therefore be the better choice; however, it makes no difference between perfect players.)

1. Opposite corner: If the opponent is in the corner, the player plays the opposite corner.

1. Empty corner: The player plays in a corner square.

1. Empty side: The player plays in a middle square on any of the 4 sides.

---

## Functions

#### Init

Init will draw the game board dynamically.  It will create all the const and variables needed, and set up the initial state.  This function **WILL** reset the game count, so it should not be run for each  new game.

#### Check win conditions

After each move (click) this function will run to see if a winning game condition has been met.  If so it will lock game play.  Show the win, increment the winner's score, and allow for a new game.

If game board is full, and no win condition has been met, the result is a Cat.  The game will lock, there is no winner, CAT score is incriminated.

If no winner, and no cat, game continues and moves to other players turn.

#### Score

Score will increment winner or Cat's value by 1 each time a end game condition is met.

#### Opponent move

This is the AI function that will play agaisnt the human player.
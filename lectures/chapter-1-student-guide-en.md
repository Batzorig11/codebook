# Chapter 1: Getting Started with Python

> Learn the secrets of how programs work, move your player with code, and print information on screen.

---

# Step 1: What is Code? (Top to Bottom)

A computer reads our code just like reading the pages of a book — from top to bottom, line by line, in order. This is called **Sequence** in programming, and it is the first foundational structure of algorithms.

```python
import player

player.move_forward(4)
player.turn_left()
```

**How does Python understand this?**

- **Line 1:** The `import player` command brings in a collection of code prepared by other developers — called a **Library** — into your program. This makes the tools to control the player available.
- **Line 2:** Then it runs the function that moves the player forward 4 blocks.
- **Line 3:** Finally, it executes the function that turns left.

**Why is sequence important?**

If you write the turn command before the move command, the player will turn first and then walk in the wrong direction. A program never skips a line or reads from the bottom up.

---

# Step 2: What is a Function? (Ready-Made Commands)

In programming, a **Function** is a reusable block of code designed to perform a specific action. You don't have to write that action from scratch every time — just call its name.

```python
player.collect_item()
player.push()
```

**How does this code work?**

- `player.collect_item()` — A function with the job: "Pick up whatever is on the ground and put it in your bag."
- `player.push()` — A function with the job: "Push the box in front of you."

**Why are the `()` parentheses necessary?**

You always put `()` after a function name. In programming this is called a **Function Call** — it's a signal telling the computer: "Run this command right now!"

> **⚠️ Warning:** If you write `player.push` without parentheses, the computer will recognize "there is a function called push here" but will not execute it as an action.

---

# Step 3: Using Arguments (Extra Information)

An **Argument** is an extra piece of information — a value — that a function takes in when it runs. For example, you can pass the number of steps as an argument to the `move_forward()` function.

```python
player.move_forward(3)
```

This command moves the character three steps forward. The `3` here is the argument being passed inside the parentheses.

| Command | What does it do? | Notes |
| --- | --- | --- |
| `player.move_forward()` | Moves the player one step forward. | Call without argument. |
| `player.move_forward(3)` | Moves the player 3 steps forward. | `3` is a number argument. |
| `player.turn_left()` | Turns the player to the left. | Call without argument. |
| `player.turn_right()` | Turns the player to the right. | Call without argument. |
| `player.push()` | Pushes the rock in front of the player. | Call without argument. |
| `player.speak('Hello')` | Displays `Hello` on screen. | `'Hello'` is a text argument. |
| `player.build('bridge')` | Builds a bridge using collected wood. | `'bridge'` is a text argument. |

---

# Step 4: Applying It in Game Levels

In this step we'll see how to apply the theory we learned in Steps 1–3 to each game level.

**Level 1: Starting Out**

Write your first Python command and put the theory of function calls into practice.

```python
player.move_forward()
```

- The `()` parentheses are required at the end of the command because we're calling a function.
- Write your code and press `Run` to execute your program.

**Level 2: Movement with Functions**

Use **Sequence** to guide the player through the forest to the exit.

```python
player.move_forward()
player.turn_left()
player.turn_right()
```

Before writing code, study the map:
- Which direction is the player facing? (Starting point)
- Where is the star or exit? (Target point)

**Level 3: Collecting Items**

Instead of writing the same function multiple times in a row, use an argument to shorten your code.

```python
player.move_forward(3)
```

This produces exactly the same result as:

```python
player.move_forward()
player.move_forward()
player.move_forward()
```

Using arguments makes code shorter and more readable.

**Level 4: Pushing Objects**

When a rock is blocking the path, call the `push()` function to push it.

```python
player.push()
```

- The player must be facing the rock.
- Follow the sequence: first move to the right position, then check you're facing the right direction.

**Level 5: Printing on Screen**

Go to the X mark and make the player say `Hello`. In programming, outputting information to the screen is called **Printing**. In Python this is done with the built-in `print()` function; in our game it's done with `player.speak()`.

```python
player.speak('Hello')
```

`Hello` is **String data** (text), so it must always be written inside `' '` quotes.

> **⚠️ Warning:** Writing `player.speak(Hello)` without quotes will cause an error. The computer mistakes unquoted words for code or variables, so text must always be in quotes.

**Level 6: Building Objects**

Collect wood and build a bridge.

```python
player.build('bridge')
```

- Walking over wood makes the player collect it automatically.
- `bridge` is text data, so it is also written inside quotes.

**Level 7: Apply What You've Learned**

This level combines all the theory from before.

- Calculate the correct **Sequence**
- Call the right **Functions**
- Use **number** and **text** arguments correctly

Plan your algorithm like this before writing code:
1. Which direction and how many steps do I go first?
2. Is there a rock in the way? Do I push it?
3. Is the sequence for collecting wood correct before building the bridge?

---

# Step 5: Common Mistakes (Things to Watch Out For)

When a **Bug** appears in your code, don't delete everything right away. Finding and fixing bugs is called **Debugging**. First check the table below.

| Error | Why is it wrong? (Theory) | Correct form |
| --- | --- | --- |
| `player.move_forward` | Missing `()` parentheses to call the function. | `player.move_forward()` |
| `player.moveforward()` | Wrong spelling of the function name (**Syntax Error**). | `player.move_forward()` |
| `player.turnright()` | Missing underscore — the computer can't recognize the function. | `player.turn_right()` |
| `player.speak(Hello)` | Text data has no quotes (**String Error**). | `player.speak('Hello')` |
| `player.build(bridge)` | `bridge` is text, so quotes are required. | `player.build('bridge')` |

**Debugging checklist:**

1. Is the function name spelled correctly?
2. Are the `()` parentheses there to call the function?
3. Is text data written inside `' '` quotes?
4. Is the player facing the right direction?
5. Is the program **Sequence** correct?

---

# Quiz: Test Yourself

## Question 1
In programming theory, what is the name for executing code from top to bottom, line by line, in order?

- A) Library
- B) Function
- C) Sequence
- D) Argument

**Correct answer:** C
**Explanation:** Reading code from top to bottom line by line in order is called **Sequence** in programming.

## Question 2
What is the `4` in the code `player.move_forward(4)` called in theory?

- A) Function
- B) Argument
- C) Library
- D) Algorithm

**Correct answer:** B
**Explanation:** A value passed inside a function's parentheses that influences how the function runs is called an **Argument**.

## Question 3
What is the role of the `()` parentheses after a function name?

- A) Write a comment
- B) Call and run the function (Function Call)
- C) Stop the program
- D) Change the data type

**Correct answer:** B
**Explanation:** The `()` parentheses tell the computer "Run this function right now" — this is the form of calling a function.

## Question 4
Why is `Hello` inside quotes in `player.speak('Hello')`?

- A) To make it look nice
- B) Because it is number data
- C) To tell the computer it is text data (String)
- D) To run the program faster

**Correct answer:** C
**Explanation:** Without quotes the computer mistakes the word for some kind of code command, causing a **Syntax Error** — so text must always be in quotes.

## Question 5
What result does the following Sequence produce?

```python
player.move_forward()
player.turn_right()
player.move_forward()
```

- A) Turn first, then move forward, then move forward again
- B) Move forward first, then turn right, then move forward again
- C) Move forward first, then turn left, then move forward
- D) Run multiple functions at the same time

**Correct answer:** B
**Explanation:** Code runs line by line from top to bottom, so the player moves forward first, then turns right, and finally moves forward again.

## Question 6
What text argument do you pass to the `build` function to build a bridge?

- A) `player.bridge()`
- B) `player.build('bridge')`
- C) `player.make_bridge()`
- D) `player.build(bridge)`

**Correct answer:** B
**Explanation:** Call the `build()` function and pass the text argument `'bridge'` in quotes inside the parentheses.

---

# Conclusion

Always remember the core programming concepts covered in this chapter:

- **Sequence:** The computer never skips a line — it always reads from top to bottom, line by line.
- **Library:** Use `import` to bring ready-made code from others into your program.
- **Function Call:** Put `()` after a function name to make the command execute.
- **Argument:** Extra information given inside the function's parentheses. Numbers go directly; text must always be in `' '` quotes.

---

# Key Points

- Code runs top to bottom in sequence (**Sequence**)
- import = bring in a ready-made **Library**
- () parentheses = call and run the function (**Function Call**)
- Argument = extra information inside the function's parentheses
- Text is written in ' ' quotes (**String**)

---

# Homework

## Task 1: Escape the Maze

Using the theory of Sequence, make the player:
- Move forward 5 steps
- Turn left
- Move forward 2 steps

Write the code in the correct order.

```python
# Write your code here
import player

player.move_forward(5)
player.turn_left()
player.move_forward(2)
```

## Task 2: Print Text

Use Python's built-in `print()` function to print text data on screen.

```python
# Write your code here
print("I now know the secrets of code!")
```

## Task 3: Write Short Code

Apply the theory of arguments to write the code for moving the player 3 steps forward in just a single line.

```python
# Write your code here
player.move_forward(3)
```

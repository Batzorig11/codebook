# Chapter 2: Variables and Data Types

> Learn in depth how to name and store information in computer memory, and understand the theoretical differences between data types.

---

# Step 1: What is a Variable? (Storing Values)

In programming, a **Variable** is a "named box" opened in the computer's fast memory (RAM) to store information. We give it a name we understand so we don't have to memorize the difficult memory addresses.

```python
planks = 4
bricks = 3
```

**Why do we use the `=` sign?**

In programming this is called the **Assignment Operator**. It is not the mathematical concept of "equals" — it is a command that says: take the value on the right (4) and store it under the variable name on the left (planks).

**Using a variable:**

```python
player.place(planks)
```

**Why do we need variables?**

This code works exactly the same as writing `player.place(4)`. But if the number 4 appears directly in the code, it's unclear "what exactly is being placed, and where?" Using a variable makes it very clear to both the reader and the computer: "4 planks are being placed."

| Concept | Theory term | Role | Example |
| --- | --- | --- | --- |
| Variable | Variable | A named box for storing information in memory. | `planks = 4` |
| Number data | Integer (int) | A type for storing whole number values. | `bricks = 3` |
| Text data | String (str) | A collection of characters — words, sentences. | `bag1 = "Pumpkin"` |

---

# Step 2: Number vs. Text Values (Understanding the Difference)

To process information in memory correctly, the computer distinguishes it by its characteristics. This is called **Data Types**.

**Number data (Integer or Int):** Whole numbers without decimals. The computer can use these directly in mathematical calculations.

```python
apples = 5
pears = 3
total = apples + pears  # Math operation — result is 8
player.speak(total)
```

**Text data (String or Str):** A collection of letters, characters, and sentences.

```python
bag1 = "Pumpkin"
player.speak(bag1)
```

**Why can't we write `planks = four`?**

`four` is written without quotes, so the computer thinks it is another variable name, not a number. But if no variable named `four` was created in memory beforehand, the computer can't find it and throws a **NameError**.

**Why must text be inside quotes?**

A computer is a machine — it can't tell on its own whether the word `Pumpkin` you wrote is a code command or just a text word. If you use `""` or `''` quotes, the computer immediately recognizes: "Ah, this is not a code command — it's just text data (a String)."

```python
# Correct: The computer recognizes this as a String (text)
bag1 = "Pumpkin"

# Wrong: The computer looks for a variable named Pumpkin
bag1 = Pumpkin  # Error! No variable called Pumpkin found in memory
```

---

# Step 3: Using Comments (Writing Explanations)

A **Comment** is a way to write notes inside code that are meant for humans, not for the computer.

```python
# The computer skips this line without reading it
# player.move_forward()

# The computer reads and runs this line
player.turn_left()
```

**Why do we need comments?**

When Python's Interpreter reads code from top to bottom and encounters a `#` symbol, it completely excludes everything on that line from the execution process. In theory this is called **Deactivating code** or **Leaving a note**.

> **💡 Theory tip:**
> To become a good developer, you need to learn to explain your code logic with comments. On large projects this helps you quickly understand the structure and purpose of the code.

---

# Step 4: Game Commands (Combining with Variables)

You can pass data stored in variables as **Arguments** inside function parentheses to make your program more flexible.

| Code | What does it do? (Theory explanation) |
| --- | --- |
| `player.water()` | A function that waters a trough or crop. |
| `player.collect("water")` | A function that collects water from a well (takes a String argument `"water"`). |
| `player.open()` | A function that opens objects like doors and chests. |
| `player.close()` | A function that closes an opened object. |
| `player.place(wheat)` | A function that places the data stored in the variable `wheat`. |

**Theoretical breakdown of example code:**

```python
planks = 4           # 1. Variable storing Number data (Integer)
bricks = 3           # 2. Variable storing Number data (Integer)
wheat = 5            # 3. Variable storing Number data (Integer)
bag1 = "Pumpkin"     # 4. Variable storing Text data (String)

player.place(bag1)       # 5. Passing the value of 'bag1' — which is "Pumpkin"
player.collect("water")  # 6. Passing the String "water" directly, not a variable
```

**Level-by-level explanation:**

- **Level 1:** Create the sequence to pick up a bucket and water 3 troughs.
- **Level 2:** Learn the theory of deactivating code using comments.
- **Level 3:** Call the water-collecting function, then implement the sequence to water plants.
- **Level 4:** Use the `open()` and `close()` functions to change the state of an object.
- **Level 5:** Practice assigning different values to variables.
- **Level 6:** Apply the theory of passing a variable as a function argument.
- **Level 7:** Store text data in a variable and call it back for use.

---

# Step 5: Common Mistakes (Things to Watch Out For)

To debug errors in programming, you need a solid understanding of data types and variable theory.

| Error | Why is it wrong? (Theory) | Correct form |
| --- | --- | --- |
| `planks = four` | `four` has no quotes, so the computer mistakes it for a variable and can't find it. | `planks = 4` |
| `bag1 = Pumpkin` | Text value has no quotes (causes NameError). | `bag1 = "Pumpkin"` |
| `player.place("wheat")` | Passing the word `"wheat"` as text instead of the value stored in the variable. | `player.place(wheat)` |
| `player.collect(water)` | The text `"water"` has no quotes, so it's mistaken for a variable. | `player.collect("water")` |

**Debugging checklist:**

1. Is the variable name on the left of `=` and the value on the right placed correctly?
2. Is text data (String) written inside `""` or `''` quotes?
3. When passing a variable as an argument, is it written WITHOUT quotes?
4. Are you calling a variable name that was never created?

---

# Quiz: Test Yourself

## Question 1
In programming theory, what is a Variable?

- A) The name of the computer screen
- B) A named address/box in memory for storing information
- C) A command that makes code run faster
- D) The character used to enclose text

**Correct answer:** B
**Explanation:** A variable lets you store a specific value in memory under a name, then call it by that name multiple times throughout your code.

## Question 2
What is the main theoretical difference between Number data (Integer) and Text data (String)?

- A) Number data can be used in math calculations; text cannot
- B) Text data is written without quotes; numbers are written with quotes
- C) There is no difference — the computer reads them the same way
- D) Number data is only used in long code

**Correct answer:** A
**Explanation:** The computer can feed Integer types directly into mathematical algorithms (+, -), while it treats String types purely as a collection of characters.

## Question 3
What theoretical role does the `#` symbol play in Python?

- A) It automatically fixes all errors in the code
- B) It removes that line from the computer's reading process, creating a comment
- C) It signals the creation of a new variable
- D) It increases the speed of the program

**Correct answer:** B
**Explanation:** The `#` symbol creates a comment. Python's Interpreter skips the text after it without counting it as code.

## Question 4
What is the role of `wheat` in the code `player.place(wheat)`?

- A) The name of a function being newly created
- B) A String text that should have been written in quotes
- C) The name of a variable being passed as an argument to the function
- D) A comment pausing the code

**Correct answer:** C
**Explanation:** `wheat` is the name of a variable created earlier, and the value it stores in memory is being passed as an argument to the place function.

## Question 5
Why does writing `bag1 = Pumpkin` cause a NameError?

- A) Because the name `bag1` is not allowed
- B) Because `Pumpkin` is text and must be in quotes to become String data
- C) Because `==` must be used instead of `=` between two words
- D) Because the player must move forward before a variable can be created

**Correct answer:** B
**Explanation:** Words written without quotes are treated as variables. Since no variable named `Pumpkin` exists in memory, the computer can't find it and throws an error.

## Question 6
What will be printed on screen by the following code?

```python
apples = 5
pears = 3
player.speak(apples + pears)
```

- A) The text "apples + pears"
- B) The number 53
- C) The result 8
- D) An error — nothing is printed

**Correct answer:** C
**Explanation:** The variables `apples` and `pears` store Integer (number) values, so the computer adds them together: 5 + 3 = 8.

---

# Conclusion

Always remember the core programming concepts covered in this chapter:

- **Variable:** A named box for storing information in memory.
- **Assignment (=):** The `=` operator stores the value on the right into the variable on the left.
- **Data Types:** The computer views and processes numbers (Integer) and text (String) differently.
- **String:** Text is always written inside `""` or `''` quotes to distinguish it from code commands.
- **Comment:** Write explanations for humans (not the computer) using the `#` symbol, which deactivates that line.
- **Passing a variable:** When giving a variable as an argument to a function, write it WITHOUT quotes.

---

# Key Points

- **Variable:** A named box for storing information in memory.
- **Assignment (=):** Stores the value on the right into the variable on the left.
- **Integer:** A whole number used directly in math calculations.
- **String:** A collection of characters — always written inside `""` or `''` quotes.
- **Comment:** Use `#` to write notes for humans, not the computer.
- **Passing arguments:** Variables are passed without quotes; text is passed with quotes.

---

# Homework

## Task 1: Create a Variable

Create a variable named `logs`, assign it the Integer (number) value 4, and use that variable as an argument in the `player.place()` function.

```python
# Write your code here
logs = 4
player.place(logs)
```

## Task 2: Text Variable

Create a variable named `fruit`, store your favorite fruit's name as String (text) data, and have the player say it using `player.speak()`.

```python
# Write your code here
fruit = "Apple"
player.speak(fruit)
```

## Task 3: Using Comments

Add comments to the code below, marking in theory which line creates a variable and which line uses it.

```python
# Write your code here
# Assigning the Integer value 5 to a variable named items
items = 5

# Passing the items variable as an argument to the place function
player.place(items)
```

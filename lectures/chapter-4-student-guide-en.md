# Chapter 4: Loops

> Learn to use `while` and `for` loops to repeat the same action multiple times.

---

# Step 1: What is a Loop? (Same Code Many Times)

A loop is a structure that runs the same code multiple times.

Imagine you want to do something 5 times:

```python
# Wrong approach (5 lines of code)
player.move_forward()
player.move_forward()
player.move_forward()
player.move_forward()
player.move_forward()
```

```python
# Right approach (2 lines of code)
for x in range(5):
    player.move_forward()
```

> **🎯 Key point:**
> Using loops makes code shorter, cleaner, and less error-prone.

---

# Step 2: While Loop (While a Condition is True)

A `while` loop repeats as long as a condition is true.

```python
count = 0
while count < 3:
    player.move_forward()
    count += 1
```

**How does it work?**

1. `count = 0` — initialize the counter
2. `count < 3` — check the condition (0 < 3 = true)
3. `player.move_forward()` — move the player forward
4. `count += 1` — add 1 to the counter (now 1)
5. Check the condition again... (1 < 3 = true)
6. When the loop ends (3 < 3 = false)

| Code | What does it do? |
| --- | --- |
| `count = 0` | Initialize the counter. |
| `while count < 4:` | Repeat while the condition is true. |
| `count += 1` | Add one to the counter. |

> **⚠️ Warning:**
> Writing `while count < 3` without a colon will cause an error. The `:` is always required.

---

# Step 3: For Loop (A Fixed Number of Times)

A `for` loop repeats a fixed number of times.

```python
for x in range(3):
    player.move_forward()
```

**What `range(3)` means:**
- Gives the numbers 0, 1, 2
- Repeats 3 times

**Using the loop number:**

```python
for x in range(4):
    player.move_forward(x + 1)
```

| Iteration | x value | Steps |
| --- | --- | --- |
| 1st | 0 | 1 step |
| 2nd | 1 | 2 steps |
| 3rd | 2 | 3 steps |
| 4th | 3 | 4 steps |

> **💡 Tip:**
> `range(4)` means repeat 4 times. Starts at 0, goes up to 3.

**Indentation:**

Code inside a loop must be indented. This is how Python knows "this code is inside the loop."

```python
for x in range(3):
    player.move_forward()      # ✅ Indented — inside the loop
    player.turn_left()         # ✅ Indented — inside the loop

player.speak("Done!")          # ❌ Not indented — outside the loop
```

**Wrong example:**

```python
for x in range(3):
player.move_forward()          # ❌ Error! No indentation
```

**Correct example:**

```python
for x in range(3):
    player.move_forward()      # ✅ 4 spaces or 1 Tab
```

---

# Step 4: Applying It in Game Levels

**Level 1: While Loops**

Use a while loop to shorten the repeated action of collecting eggs.

```python
count = 0
while count < 6:
    player.collect_item()
    count += 1
```

**Level 2: For Loop**

Use a for loop to write the repeated movement through a maze.

```python
for x in range(4):
    player.move_forward()
    player.turn_right()
```

**Level 3: More Complex Looping**

Place movement, turning, and watering commands in the correct order inside a loop.

```python
for x in range(3):
    player.move_forward()
    player.water()
    player.turn_left()
```

**Level 4: For Loop Sequence**

When the `range()` value changes, you can use a different number on each iteration.

```python
for x in range(4):
    player.move_forward(x + 1)
```

---

# Step 5: Common Mistakes (Things to Watch Out For)

| Error | Why is it wrong? | Correct form |
| --- | --- | --- |
| `while count < 3` | Missing `:` symbol. | `while count < 3:` |
| `count =+ 1` | Wrong form for incrementing counter. | `count += 1` |
| `for x in range(3)` | Missing `:` symbol. | `for x in range(3):` |
| `player.move_forward()` without indent | Wrong indentation. | `    player.move_forward()` |

---

# Quiz: Test Yourself

## Question 1
What is the difference between `while` and `for` loops?

- A) No difference — they are the same
- B) `while` = while condition is true, `for` = a fixed number of times
- C) `while` = for text, `for` = for numbers
- D) `while` = faster, `for` = slower

**Correct answer:** B
**Explanation:** `while` repeats while a condition is true; `for` repeats a fixed number of times.

## Question 2
How many times does `range(4)` repeat?

- A) 3 times
- B) 4 times
- C) 5 times
- D) 0 times

**Correct answer:** B
**Explanation:** `range(4)` gives 0, 1, 2, 3 — four values — and repeats 4 times.

## Question 3
Why is `count += 1` needed?

- A) To decrease the counter
- B) To increase the counter
- C) To stop the loop
- D) It does nothing

**Correct answer:** B
**Explanation:** `count += 1` adds 1 to the counter. Without it the loop runs forever.

## Question 4
What happens if indentation is wrong?

- A) The code runs faster
- B) An `IndentationError` occurs
- C) The code runs correctly
- D) The computer won't read it

**Correct answer:** B
**Explanation:** Indentation must be correct in Python. If it's wrong, an `IndentationError` occurs.

## Question 5
What is the main advantage of using loops?

- A) The code gets longer
- B) The code becomes shorter and cleaner
- C) The code runs slower
- D) More errors occur

**Correct answer:** B
**Explanation:** With loops you don't have to write the same code many times — the code becomes shorter.

## Question 6
What result does the following code produce?

```python
for x in range(3):
    player.move_forward()
```

- A) Moves forward 1 time
- B) Moves forward 2 times
- C) Moves forward 3 times
- D) An error occurs

**Correct answer:** C
**Explanation:** `range(3)` repeats 3 times. The player moves forward 3 times.

---

# Conclusion

In this chapter you:

1. Understood what a loop is
2. Learned the `while` loop
3. Learned the `for` loop
4. Understood the importance of indentation
5. Learned how to update a counter
6. Learned to use loops in game levels

Loops help you write repeated actions in a shorter, cleaner, and less error-prone way.

---

# Key Points

- Loop = run the same code multiple times
- `while` = repeat while a condition is true
- `for` = repeat a fixed number of times
- `range(3)` = repeat 3 times
- Indentation must always be correct
- `count += 1` = increment the counter

---

# Homework

## Task 1: For Loop

Write code to move the player forward 4 times.

```python
# Write your code here
for x in range(4):
    player.move_forward()
```

## Task 2: While Loop

Use a while loop to move the player forward 3 times.

```python
# Write your code here
count = 0
while count < 3:
    player.move_forward()
    count += 1
```

## Task 3: Loop with Turn

Write code to make the player go in a circle (move forward then turn right, 4 times).

```python
# Write your code here
for x in range(4):
    player.move_forward()
    player.turn_right()
```

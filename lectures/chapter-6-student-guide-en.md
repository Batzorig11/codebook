# Chapter 6: Conditions

> Learn to use `if` so that code performs different actions depending on a certain condition.

---

# Step 1: If Condition (If... Then)

An `if` condition makes code smarter — it runs a specific action only when needed.

```python
x = 5

if x == 5:
    player.speak("x is 5")
```

**How does it work?**

1. `x == 5` — check the condition (5 == 5 = true)
2. Because the condition is true, the code inside runs
3. `player.speak("x is 5")` — displays "x is 5" on screen

| Operator | Operation | Example |
| --- | --- | --- |
| `==` | Equal to | `x == 5` |
| `!=` | Not equal to | `x != 5` |
| `<` | Less than | `x < 10` |
| `>` | Greater than | `x > 3` |

---

# Step 2: Comparison Operator (== vs =)

**The difference between `=` and `==`:**

| Operator | Name | Example | Meaning |
| --- | --- | --- | --- |
| `=` | Assignment | `x = 5` | Store the value 5 in x |
| `==` | Comparison | `x == 5` | Check whether x equals 5 |

**Example:**

```python
# Assignment
x = 5

# Comparison
if x == 5:
    player.speak("Yes!")
```

**Wrong example:**

```python
if x = 5:  # ❌ Error! Assignment instead of comparison
    player.speak("Yes!")
```

> **⚠️ Warning:**
> Use `==` in conditions, not `=`. `=` is assignment; `==` is comparison.

---

# Step 3: Checking a List (len)

Check the length and values of a list.

```python
items = ["apple", "banana"]

if len(items) < 5:
    player.speak("Not enough items")
```

**The `len()` function:**

| Code | Output |
| --- | --- |
| `len([1, 2, 3])` | 3 |
| `len([])` | 0 |
| `len(["a", "b"])` | 2 |

**Checking whether list values are the same:**

```python
if basket[0] != basket[1]:
    player.speak("Different eggs")
```

> **⚠️ Warning:**
> Writing `len[items]` will cause an error. `len` is a function so `()` is required.

---

# Step 4: Conditions Inside Loops

Check a condition during a loop's progress.

```python
for x in range(3):
    if x == 0:
        player.place(bag)
    else:
        player.move_forward()
```

**How does it work?**

| Iteration | x value | Condition | Action |
| --- | --- | --- | --- |
| 1 | 0 | x == 0 (true) | `player.place(bag)` |
| 2 | 1 | x == 0 (false) | `player.move_forward()` |
| 3 | 2 | x == 0 (false) | `player.move_forward()` |

**Break and Continue:**

```python
for x in range(10):
    if x == 5:
        break  # Stop the loop
    player.move_forward()
```

---

# Step 5: Applying It in Game Levels

**Level 1: Basic If Statement**

Compare eggs and check whether the condition is true or false.

```python
basket = ["blue egg", "red egg"]
if basket[0] == basket[1]:
    player.speak("Same eggs")
```

**Level 2-3: Complex Conditions**

Collect several items and use a condition to decide what action to take.

```python
if len(items) < 5:
    player.collect("water")
else:
    player.place(items)
```

**Level 4-6: Loop Conditions**

Use the loop index to place different amounts at different steps.

```python
for x in range(3):
    if x == 0:
        player.place(bag)
    player.move_forward()
```

**Common Mistakes (Things to Watch Out For):**

| Error | Why is it wrong? | Correct form |
| --- | --- | --- |
| `if x = 1:` | `=` is assignment, not comparison. | `if x == 1:` |
| `if x == 1` | Missing `:` symbol. | `if x == 1:` |
| `if basket[0] = basket[1]:` | Use `==` for comparison. | `if basket[0] == basket[1]:` |
| `len[items]` | `len` is a function — `()` is required. | `len(items)` |

---

# Quiz: Test Yourself

## Question 1
When does `if` run?

- A) Always
- B) When the condition is true
- C) When the condition is false
- D) Never

**Correct answer:** B
**Explanation:** An `if` condition only runs the code inside when the condition is true.

## Question 2
What is the difference between `=` and `==`?

- A) No difference
- B) `=` = assignment, `==` = comparison
- C) `=` = comparison, `==` = assignment
- D) `==` = add

**Correct answer:** B
**Explanation:** `=` assigns a value; `==` compares two values.

## Question 3
What does `!=` check?

- A) Whether they are equal
- B) Whether they are not equal
- C) Whether one is greater
- D) Whether one is less

**Correct answer:** B
**Explanation:** `!=` means "not equal." It checks whether two values are different.

## Question 4
What does `len(items)` return?

- A) The first value
- B) The length of the list
- C) The last value
- D) An empty value

**Correct answer:** B
**Explanation:** The `len()` function returns the length (number of elements) of a list or text.

## Question 5
What is the advantage of using conditions inside loops?

- A) The code runs slower
- B) You can perform different actions at specific steps
- C) More errors occur
- D) The code gets longer

**Correct answer:** B
**Explanation:** It allows you to perform a different action at a specific step in the loop.

## Question 6
What result does the following code produce?

```python
x = 3
if x == 3:
    player.speak("Yes")
else:
    player.speak("No")
```

- A) No
- B) Yes
- C) An error occurs
- D) Nothing is printed

**Correct answer:** B
**Explanation:** x is 3, so the condition `x == 3` is true. "Yes" is printed.

---

# Conclusion

In this chapter you:

1. Learned the `if` condition
2. Learned the `==` and `!=` operators
3. Learned the `len()` function
4. Learned to use conditions inside loops
5. Learned to perform different actions with conditions
6. Understood the concept of `break` and `continue`

Conditions make code smarter — they run a specific action only when it is needed.

---

# Key Points

- `if` = run code when the condition is true
- `==` = check whether values are equal
- `!=` = check whether values are not equal
- `len()` = find the length of a list
- Use `==` in conditions (not `=`)
- You can use conditions inside loops

---

# Homework

## Task 1: If Condition

If x = 5, say "x is 5".

```python
# Write your code here
x = 5
if x == 5:
    player.speak("x is 5")
```

## Task 2: Check Whether Values Are Different

Check whether two values are different.

```python
# Write your code here
a = 3
b = 5
if a != b:
    player.speak("Different")
```

## Task 3: Check List Length

Check whether the list length is less than 3.

```python
# Write your code here
items = [1, 2]
if len(items) < 3:
    player.speak("Not enough")
```

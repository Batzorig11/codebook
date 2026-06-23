# Chapter 3: Basic Operators

> Learn to add, subtract, multiply, divide number values, and format text.

---

# Step 1: Basic Operators (+, -, *, /)

An operator is a symbol that performs calculations on values.

| Operator | Operation | Example |
| --- | --- | --- |
| `+` | Add | `total = cows + goats` |
| `-` | Subtract | `eggs = eggs - 4` |
| `*` | Multiply | `red_eggs *= 2` |
| `/` | Divide | `half = total / 2` |

**Example code:**

```python
cows = 3
goats = 2
pigs = 4

# Calculate the total and say it
player.speak(cows + goats + pigs)
```

**Output:**
```
9
```

> **🎯 Key point:**
> You cannot write calculations inside quotes. `player.speak("cows + goats")` will say the text, not do the math.

---

# Step 2: Updating Variable Values (+=, -=, *=)

You can use shorthand notation to update a variable's value.

| Long form | Short form | Result |
| --- | --- | --- |
| `eggs = eggs - 2` | `eggs -= 2` | Subtracts 2 from the value |
| `eggs = eggs * 2` | `eggs *= 2` | Doubles the value |
| `eggs = eggs + 5` | `eggs += 5` | Adds 5 to the value |

**Example:**

```python
white_eggs = 10
white_eggs -= 4  # Now 6

red_eggs = 3
red_eggs *= 2    # Now 6
```

> **⚠️ Warning:**
> Writing `white_eggs =- 2` will cause an error. The correct form is `white_eggs -= 2`.

---

# Step 3: Text Formatting (%d, %s)

Use formatting to insert numbers and words inside text.

| Format | Value type | Example |
| --- | --- | --- |
| `%d` | Number | `"%d eggs" % eggs` |
| `%s` | Text | `"Hello %s" % name` |

**Example:**

```python
apples = 5
player.speak("there are %d apples" % apples)
```

**Output:**
```
there are 5 apples
```

**Inserting text:**

```python
name = "Alice"
player.speak("Hello %s" % name)
```

**Output:**
```
Hello Alice
```

> **⚠️ Warning:**
> `%d` is for numbers, `%s` is for text. Giving text to `%d` will cause an error.

---

# Step 4: Applying It in Game Levels

**Level 1: Counting with code**

Store animal counts in variables and find the total with the `+` operator.

```python
cows = 3
goats = 2
player.speak(cows + goats)
```

**Level 2: Add and Subtract**

Add new eggs and subtract spoiled ones.

```python
eggs = 10
eggs -= 2  # Subtract spoiled eggs
```

**Level 3: String Formats**

Record the number of chickens around each pen.

```python
chickens = 7
player.speak("There are %d chickens" % chickens)
```

**Level 4: Constants and Practice**

Use constant and variable values in calculations.

```python
price = 5
quantity = 3
total = price * quantity
player.speak(total)
```

---

# Step 5: Common Mistakes (Things to Watch Out For)

| Error | Why is it wrong? | Correct form |
| --- | --- | --- |
| `player.speak("cows + goats")` | Says the text, doesn't calculate. | `player.speak(cows + goats)` |
| `white_eggs =- 2` | Wrong operator order. | `white_eggs -= 2` |
| `red_eggs =* 2` | Wrong operator order. | `red_eggs *= 2` |
| `"%d eggs" % (name)` | `%d` is for numbers. | `"%s" % name` |

---

# Quiz: Test Yourself

## Question 1
What does the `+` operator do?

- A) Subtract
- B) Add
- C) Multiply
- D) Divide

**Correct answer:** B
**Explanation:** The `+` operator adds numbers together. Example: `3 + 2 = 5`.

## Question 2
When is the `-=` operator needed?

- A) When adding a value
- B) When subtracting a value
- C) When multiplying a value
- D) When dividing a value

**Correct answer:** B
**Explanation:** `-=` is shorthand for subtracting a number from a variable. Example: `eggs -= 2`.

## Question 3
How does a value change after `red_eggs *= 2`?

- A) 2 is subtracted
- B) It doubles
- C) It is divided by 2
- D) It always becomes 2

**Correct answer:** B
**Explanation:** `*=` multiplies the variable's value. Example: `3 *= 2` becomes `6`.

## Question 4
What is the difference between `%d` and `%s`?

- A) No difference — they are the same
- B) `%d` = number, `%s` = text
- C) `%d` = text, `%s` = number
- D) `%d` = divide, `%s` = add

**Correct answer:** B
**Explanation:** `%d` is a format for numbers (digit), `%s` is a format for text (string).

## Question 5
Why can't you write a calculation inside quotes?

- A) Python doesn't allow it
- B) It becomes text
- C) It causes an error
- D) It speeds things up

**Correct answer:** B
**Explanation:** Everything inside quotes becomes text. `"3 + 2"` shows the text "3 + 2", not the result of a calculation.

## Question 6
Find the output of the following code.

```python
apples = 5
pears = 3
player.speak(apples + pears)
```

- A) "apples + pears"
- B) 8
- C) 53
- D) An error occurs

**Correct answer:** B
**Explanation:** Without quotes the calculation is performed. `5 + 3 = 8`.

---

# Conclusion

In this chapter you:

1. Learned the `+`, `-`, `*`, `/` operators
2. Learned shorthand for updating variables (`+=`, `-=`, `*=`)
3. Learned text formatting (`%d`, `%s`)
4. Understood why you can't write calculations inside quotes
5. Learned to write operators in the correct order

Operators are used to compute values from variables and produce new results.

---

# Key Points

- `+` = add, `-` = subtract, `*` = multiply, `/` = divide
- `-=` = subtract, `*=` = multiply (shorthand)
- `%d` = format a number, `%s` = format text
- You cannot write calculations inside quotes
- `=+` is wrong, `+=` is correct

---

# Homework

## Task 1: Calculate a Total

Add fruit counts and say the total.

```python
# Write your code here
apples = 5
pears = 3
total = apples + pears
player.speak(total)
```

## Task 2: Subtract a Value

Subtract 4 from `eggs = 10` using `-=`.

```python
# Write your code here
eggs = 10
eggs -= 4
player.speak(eggs)
```

## Task 3: Format Text

Use `player.speak()` to say "there are 7 eggs".

```python
# Write your code here
eggs = 7
player.speak("there are %d eggs" % eggs)
```

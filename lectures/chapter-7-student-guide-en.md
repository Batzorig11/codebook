# Chapter 7: Creating Your Own Functions

> Learn to write repeated actions as your own named function and reuse it.

---

# Step 1: What Is a Function? (Your Own Command)

A function is a piece of code that performs a specific action. If you create your own function, you can write repeated code once and use it many times.

**Creating a function:**

```python
def say_hello():
    player.speak("Hello!")
```

**Calling a function:**

```python
say_hello()
```

**Output:**
```
Hello!
```

| Concept | Explanation | Example |
| --- | --- | --- |
| `def` | Keyword to define a function. | `def say_hello():` |
| Function body | The code inside the function. | `    player.speak("Hello!")` |
| Calling | Running the function. | `say_hello()` |

> **⚠️ Key idea:**
> `def` = define. You can choose the function's name yourself.

---

# Step 2: Using Arguments (Passing Information)

Pass values into a function from outside to make it more flexible.

```python
def greet(name):
    player.speak("Hello " + name)

greet("Alice")
greet("Bob")
```

**Output:**
```
Hello Alice
Hello Bob
```

**Multiple arguments:**

```python
def add_numbers(a, b):
    result = a + b
    player.speak(result)

add_numbers(3, 5)
```

**Output:**
```
8
```

| Code | What does it do? |
| --- | --- |
| `def greet(name):` | Accepts the argument `name`. |
| `greet("Alice")` | Passes the value "Alice". |
| `def add(a, b):` | Accepts two arguments. |

---

# Step 3: Using Return (Returning a Result)

Return a result from a function so it can be used later.

```python
def add_numbers(num1, num2):
    return(num1 + num2)

result = add_numbers(3, 5)
player.speak(result)
```

**Output:**
```
8
```

**Why is return needed?**

- To get a computed result from a function and use it later
- To process data and produce a new value

```python
def calculate_area(width, height):
    return(width * height)

area = calculate_area(4, 5)
player.speak(area)  # 20
```

> **⚠️ Warning:**
> `return` is written inside the function. Writing it outside causes an error.

---

# Step 4: Loops and Conditions Inside a Function

You can combine everything inside a function.

**Using a loop:**

```python
def move_forward_times(count):
    for x in range(count):
        player.move_forward()

move_forward_times(3)
```

**Using a condition:**

```python
def check_door(action):
    if action == "open":
        player.open()
    else:
        player.close()

check_door("open")
```

**Using a list:**

```python
def process_items(items):
    for item in items:
        player.place(item)

fruits = ["apple", "banana"]
process_items(fruits)
```

---

# Step 5: Applying It in Game Levels

**Level 1: Creating a Function**

Turn the repeated action of pushing a rock and moving forward into a `repeat_push()` function.

```python
def repeat_push():
    player.push()
    player.move_forward()

repeat_push()
repeat_push()
```

**Level 2: Function Arguments**

Use an argument to pass how many times to repeat into the function.

```python
def water_crops(count):
    for x in range(count):
        player.water()

water_crops(5)
```

**Level 3: Return**

Use `return` to return a computed result.

```python
def count_items(items):
    return(len(items))

total = count_items(["a", "b", "c"])
player.speak(total)  # 3
```

**Level 4-6: Complex Functions**

Combine lists, conditions, and operators inside a function.

```python
def process_fruits(fruits):
    if len(fruits) >= 5:
        player.speak("Enough fruits")
        return(True)
    else:
        player.speak("Need more")
        return(False)
```

**Common Mistakes (Things to Watch Out For):**

| Error | Why is it wrong? | Correct form |
| --- | --- | --- |
| `def repeat_push()` | Missing `:` symbol. | `def repeat_push():` |
| `repeat_push` | Calling a function requires `()`. | `repeat_push()` |
| `def water_crops(count)` | Missing `:` symbol. | `def water_crops(count):` |
| Writing `return` outside | `return` must be inside the function. | `    return(num1 + num2)` |

---

# Quiz: Test Yourself

## Question 1
What is the role of `def`?

- A) Deletes a function
- B) Defines a function
- C) Creates a variable
- D) Creates a list

**Correct answer:** B
**Explanation:** `def` means "define" and is used to define a new function.

## Question 2
What does calling a function mean?

- A) Deleting a function
- B) Running a function
- C) Renaming a function
- D) Writing a function

**Correct answer:** B
**Explanation:** Calling a function means running the code inside that function.

## Question 3
Why are arguments needed?

- A) To delete a function
- B) To pass information into a function
- C) To slow down the code
- D) To cause an error

**Correct answer:** B
**Explanation:** An argument passes a value into a function from outside, making it more flexible.

## Question 4
When is `return` used?

- A) When calling a function
- B) When returning a result from a function
- C) When deleting a function
- D) When writing code

**Correct answer:** B
**Explanation:** `return` returns a computed result from a function so it can be used afterward.

## Question 5
How does using functions shorten code?

- A) The code becomes longer
- B) You write repeated code once and call it many times
- C) The code runs slower
- D) There are more errors

**Correct answer:** B
**Explanation:** If you define a function once and call it many times, you don't need to write repeated code.

## Question 6
Find the output of the following code.

```python
def greet(name):
    player.speak("Hi " + name)

greet("Tom")
```

- A) Hi
- B) Hi Tom
- C) name
- D) An error occurs

**Correct answer:** B
**Explanation:** When `greet("Tom")` is called, the argument `name` gets the value "Tom". It prints "Hi Tom".

---

# Conclusion

In this chapter you:

1. Learned to create your own function using `def`
2. Learned to pass arguments into a function
3. Learned to return a result using `return`
4. Learned to use loops and conditions inside a function
5. Learned to pass a list into a function
6. Understood the benefit of reusing functions

Your own function turns repeated logic into a single named block that you can reuse reliably many times.

---

# Key Points

- `def` = define a function
- Argument = pass information into a function
- `return` = return a result
- You can combine everything inside a function
- Write once, call many times
- `()` is required when calling a function

---

# Homework

## Task 1: Creating a Function

Write a function that says "Hello".

```python
# Write your code here
def say_hello():
    player.speak("Hello")

say_hello()
```

## Task 2: Using Arguments

Write a function that accepts a name and greets it.

```python
# Write your code here
def greet(name):
    player.speak("Hi " + name)

greet("Alice")
```

## Task 3: Using Return

Write a function that adds two numbers and returns the result.

```python
# Write your code here
def add(a, b):
    return(a + b)

result = add(3, 5)
player.speak(result)
```

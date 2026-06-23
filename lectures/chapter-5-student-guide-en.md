# Chapter 5: Creating Lists

> Learn to use lists to store multiple values under a single name.

---

# Step 1: What is a List? (Many Values Under One Name)

A list is a structure that stores multiple values in order.

**Creating an empty list:**

```python
eggs = []
```

**Adding a value to a list:**

```python
blue_eggs = 5
eggs.append(blue_eggs)
```

**Output:**
```
[5]
```

| Concept | Explanation | Example |
| --- | --- | --- |
| List | Stores multiple values in order. | `eggs = []` |
| `append()` | Adds a value to the end of the list. | `eggs.append(5)` |
| Index | Position in the list. Starts from 0. | `basket[0]` |

---

# Step 2: Adding Values to a List (append)

Use `append()` to add a new value to the end of a list.

```python
numbers = []
numbers.append(10)
numbers.append(20)
numbers.append(30)

player.speak(numbers)
```

**Output:**
```
[10, 20, 30]
```

**Text list:**

```python
names = []
names.append("Alice")
names.append("Bob")

player.speak(names)
```

**Output:**
```
['Alice', 'Bob']
```

> **⚠️ Warning:**
> Writing `eggs.append[blue_eggs]` will cause an error. `append` is a function so `()` is required.

---

# Step 3: List Index (Starts from 0)

Access a position in the list by its index. In Python, indexes **start from 0**.

```python
fruits = ["Apple", "Banana", "Cherry"]

# First value (index 0)
player.speak(fruits[0])  # Apple

# Second value (index 1)
player.speak(fruits[1])  # Banana

# Third value (index 2)
player.speak(fruits[2])  # Cherry
```

| Index | 0 | 1 | 2 |
| --- | --- | --- | --- |
| Value | Apple | Banana | Cherry |

**Changing a value:**

```python
fruits[1] = "Blueberry"
# Now: ["Apple", "Blueberry", "Cherry"]
```

> **🎯 Key point:**
> In Python the first value is `[0]`, the second is `[1]`, and so on. This is related to how computers count.

---

# Step 4: Combining Lists (+)

Use `+` to combine two lists.

```python
liquids = ["water", "milk"]
vegetables = ["carrot", "potato"]

mixture = liquids + vegetables
player.speak(mixture)
```

**Output:**
```
['water', 'milk', 'carrot', 'potato']
```

**Passing a list to a function:**

```python
items = ["planks", "bricks"]
player.place(items)
```

> **⚠️ Warning:**
> Writing `[liquids + vegetables]` creates an extra nested list. The correct form is `liquids + vegetables`.

---

# Step 5: Applying It in Game Levels

**Level 1: Numeric Lists**

Store egg counts in a list and place them in a container.

```python
eggs = []
eggs.append(5)
eggs.append(3)
player.place(eggs)
```

**Level 2: Combining Lists**

Combine a list of liquids and vegetables to create a new product.

```python
liquids = ["water", "milk"]
vegetables = ["carrot"]

soup = liquids + vegetables
```

**Level 3: String Lists**

Store pig names in a text list and call each name.

```python
names = ["Peggle", "Peter", "Piper"]
player.speak("Come here %s" % names[0])
```

**Level 4-6: Using Index**

Use list indexes to place the correct value in the correct container.

```python
basket = [5, 3, 7]
player.speak(basket[0])  # 5
player.speak(basket[1])  # 3
```

**Common Mistakes (Things to Watch Out For):**

| Error | Why is it wrong? | Correct form |
| --- | --- | --- |
| `eggs.append[blue_eggs]` | `append` is a function — `()` is required. | `eggs.append(blue_eggs)` |
| `basket[1]` for first value | Python indexes start at 0. | `basket[0]` |
| `names = Peggle, Peter` | List is missing brackets and quotes. | `names = ["Peggle", "Peter"]` |
| `mixture = [liquids + vegetables]` | Creates an extra nested list. | `mixture = liquids + vegetables` |

---

# Quiz: Test Yourself

## Question 1
When is a list needed?

- A) To store only one value
- B) To store multiple related values under one name
- C) Only for calculations
- D) Only for storing text

**Correct answer:** B
**Explanation:** A list stores multiple related values under one name and lets you access them by index.

## Question 2
What does `append()` do?

- A) Adds a value to the beginning of the list
- B) Adds a value to the end of the list
- C) Removes a value from the list
- D) Empties the list

**Correct answer:** B
**Explanation:** The `append()` function adds a new value to the end of the list.

## Question 3
What is the first index in a Python list?

- A) 1
- B) 0
- C) -1
- D) The variable name

**Correct answer:** B
**Explanation:** In Python, the index of the first value in a list is always 0.

## Question 4
How do you combine two lists?

- A) With the `-` operator
- B) With the `*` operator
- C) With the `+` operator
- D) With the `/` operator

**Correct answer:** C
**Explanation:** The `+` operator combines two lists into a new list.

## Question 5
Find the output of the following code.

```python
items = ["A", "B", "C"]
player.speak(items[1])
```

- A) A
- B) B
- C) C
- D) An error occurs

**Correct answer:** B
**Explanation:** Index 1 points to the second value. First value is [0], second is [1].

## Question 6
What result does the following code produce?

```python
nums = []
nums.append(10)
nums.append(20)
player.speak(nums)
```

- A) 10
- B) 20
- C) [10, 20]
- D) []

**Correct answer:** C
**Explanation:** `append()` adds to the end of the list. The result is [10, 20].

---

# Conclusion

In this chapter you:

1. Understood what a list is
2. Learned to add values with `append()`
3. Understood that list indexes start from 0
4. Learned to combine lists with `+`
5. Learned to change a list's values
6. Learned to use lists in the game

A list lets you store multiple related values under one name and access them by index.

---

# Key Points

- `[]` — creates an empty list
- `append()` — adds a value to the end
- `[0]` — first value (index starts from 0)
- `+` — combines lists
- You can change a list's values by index

---

# Homework

## Task 1: Create a List

Create an empty list and add 3 numbers.

```python
# Write your code here
numbers = []
numbers.append(10)
numbers.append(20)
numbers.append(30)
player.speak(numbers)
```

## Task 2: Use an Index

Say the first value in the list.

```python
# Write your code here
names = ["A", "B", "C"]
player.speak(names[0])
```

## Task 3: Combine Lists

Create two lists and combine them.

```python
# Write your code here
list1 = [1, 2]
list2 = [3, 4]
combined = list1 + list2
player.speak(combined)
```

# Chapter 8: Using Dictionaries

> Learn to store and manage information (name, age, grade) smartly using a special "tag" or key, instead of just a plain list.

---

# Step 1: What Is a Dictionary? (Creating & Adding)

A list just collects information, but a dictionary attaches a **tag** to each piece of information.

## What Is a Key (Tag)?

Think of it like **drawers** in real life. Each drawer has a name (tag), and something is stored inside it.

| Tag (Key) | Contents (Value) |
| --- | --- |
| "name" | "Alice" |
| "age" | 15 |
| "grade" | 95 |

## Creating a Dictionary

```python
student = {}
```

This creates an empty dictionary.

## Adding Information (Attaching a Tag)

```python
student["name"] = "Alice"
student["age"] = 15
student["grade"] = 95
```

> 💡 **Tip:** Use `[]` brackets to add information to a dictionary. `"name"` is the tag (key), `"Alice"` is the value.

## Example Code

```python
import player

student = {}
student["name"] = "Alice"
student["age"] = 15

player.speak(student)
```

**Output:**
```
{'name': 'Alice', 'age': 15}
```

---

# Step 2: Getting Information and Checking Safely

To get stored information, you call it by the tag you attached, not by an index number.

## Getting Information

```python
player.speak(student["name"])
player.speak(student["age"])
```

**Output:**
```
Alice
15
```

## Getting a Missing Tag (Error!)

```python
# ❌ Error! There is no "subject" tag
player.speak(student["subject"])
```

**Result:** A `KeyError` occurs.

## Checking Safely (if)

```python
if "age" in student:
    player.speak(student["age"])
else:
    player.speak("No age")
```

> ⚠️ **Warning:** It's safer to first check whether a tag exists, then get it!

---

# Step 3: Changing and Deleting Information

It's very easy to update old information in a dictionary, or delete it if it's no longer needed.

## Changing a Value

```python
student["grade"] = 95
student["grade"] = 98  # Updates it!

player.speak(student["grade"])
```

**Output:**
```
98
```

## Deleting Information

```python
del student["grade"]

player.speak(student)
```

**Output:**
```
{'name': 'Alice', 'age': 15}
```

> 🎯 **Key idea:** `del` means "delete." It removes the tag together with its value.

---

# Step 4: Going Further (Storing Lists & Functions)

A dictionary can also store an entire list. You can also pass it directly into a function to use it.

## Storing a List Inside a Dictionary

```python
student = {
    "name": "Alice",
    "subjects": ["Math", "Science", "Literature"]
}

# Show the first subject in the list
player.speak(student["subjects"][0])
```

**Output:**
```
Math
```

## Using It Inside a Function

```python
def show_info(student):
    player.speak("Name: " + student["name"])
    player.speak("Age: " + str(student["age"]))

student = {"name": "Alice", "age": 15}
show_info(student)
```

**Output:**
```
Name: Alice
Age: 15
```

> 💡 **Tip:** When you pass a dictionary into a function, you can send all the information at once. Much tidier!

---

# Step 5: Looping Through All Values with items()

To read out every one of a student's grades one by one, the `items()` loop comes in handy.

## What Is items()?

`items()` gives you **all the tags and values together** from a dictionary.

```python
scores = {"Math": 95, "Science": 88, "Literature": 92}

for subject, grade in scores.items():
    player.speak(subject + ": " + str(grade))
```

**Output:**
```
Math: 95
Science: 88
Literature: 92
```

## How Does the Loop Work?

| Iteration | subject (Key) | grade (Value) |
| --- | --- | --- |
| 1st | "Math" | 95 |
| 2nd | "Science" | 88 |
| 3rd | "Literature" | 92 |

> 🎯 **Key idea:** When using `items()`, you use 2 variables. The first is the tag, the second is the value.

---

# Choosing: List or Dictionary?

Which one should you use, and when?

| Consideration | List [] | Dictionary {} |
| --- | --- | --- |
| **What it stores** | An ordered sequence (first, middle, last) | Named information (name: Alice) |
| **How to access it** | `list[0]` (index) | `dict["name"]` (tag) |
| **Example** | `[95, 88, 92]` | `{"Math": 95}` |
| **When to use it** | When order matters | When you look things up by name |

## Examples

**Example 1:** A list of school grades
```python
# ❌ List (which subject is which? we don't know)
grades = [95, 88, 92]

# ✅ Dictionary (with subject names)
grades = {"Math": 95, "Science": 88}
```

**Example 2:** An ordered sequence
```python
# ✅ List (order matters)
order = ["Bat", "Saraa", "Bold"]

# ❌ Dictionary (not needed)
```

---

# 🎯 Quiz: Test Yourself

## Question 1
What is a dictionary?

- A) A list
- B) A key → value structure
- C) Only numbers
- D) Only strings

**Correct answer:** B
**Explanation:** A dictionary stores information as key-value pairs.

## Question 2
What is the correct way to create a dictionary?

- A) []
- B) {}
- C) ()
- D) ""

**Correct answer:** B
**Explanation:** A dictionary is created with `{}` braces.

## Question 3
What is the correct code to add information?

- A) student("age") = 15
- B) student["age"] = 15
- C) student.age = 15
- D) student{"age"} = 15

**Correct answer:** B
**Explanation:** Use square brackets `[]` to assign a value to a key.

## Question 4
How do you get a value from a dictionary?

- A) student["name"]
- B) student.name
- C) student->name
- D) student(name)

**Correct answer:** A
**Explanation:** Use square brackets `[]` to get a value by its key.

## Question 5
What happens if you try to get a key that doesn't exist?

- A) None
- B) 0
- C) KeyError
- D) False

**Correct answer:** C
**Explanation:** Getting a key that doesn't exist causes a `KeyError`.

## Question 6
What does `items()` give you?

- A) keys
- B) values
- C) key-value pairs
- D) list

**Correct answer:** C
**Explanation:** `items()` gives you all the key-value pairs.

---

# 📝 Homework

## Task 1: Your Own Information
Store your own information in a dictionary.

```python
# Write your code here
student = {}
student["name"] = ""
student["age"] = 
student["hobby"] = ""

player.speak(student)
```

## Task 2: A Friend's Information
Add your friend's information and show both.

```python
# Write your code here
friend = {}
# ...
```

## Task 3: Grade Record
Store 3 subjects' grades in a dictionary and show them using `items()`.

```python
# Write your code here
scores = {}
# ...
```

---

# Conclusion

In this chapter you learned:

1. Creating a dictionary
2. Using keys/values
3. Adding, getting, and deleting information
4. Combining lists + dictionaries
5. Using dictionaries inside functions
6. Looping with `items()`

Now you can store data in a much tidier and smarter way.

---

# Key Points

- Dictionary = key-value pairs
- bag = {} — creates an empty one
- bag['key'] = value — stores a value
- del bag['key'] — deletes a value
- items() — loops through everything

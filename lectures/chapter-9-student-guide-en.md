# Chapter 9: Classes and Objects

> Learn the basics of using a class to create your own type of object, and how to use attributes and methods.

---

# Step 1: What Is a Class? (A Blueprint)

A class is a blueprint for creating objects of the same type. For example, a "Road" class is a blueprint for creating road objects.

**Creating a class:**

```python
class road:
    def __init__(self, material):
        self.material = material
```

**Creating an object:**

```python
wood_road = road("wood")
stone_road = road("stone")
```

| Concept | Explanation | Example |
| --- | --- | --- |
| Class | A blueprint for creating objects. | `class road:` |
| Object | A concrete instance created from a class. | `wood_road = road("wood")` |
| Member | An attribute inside an object. | `self.material` |

> **⚠️ Key idea:**
> Class = blueprint, Object = a concrete thing created from the blueprint.

---

# Step 2: Using __init__() (Initializing an Object)

`__init__()` is a function that runs automatically when an object is created. This is where you set the object's initial values.

```python
class road:
    def __init__(self, material):
        self.material = material

# Creating an object
wood_road = road("wood")
```

**How does it work?**

1. `road("wood")` — creates an object
2. `__init__()` is called automatically
3. `self.material = "wood"` — stores the attribute

**Multiple attributes:**

```python
class house:
    def __init__(self, color, size):
        self.color = color
        self.size = size

my_house = house("red", "big")
player.speak(my_house.color)  # red
```

> **⚠️ Warning:**
> The `__init__` function must have a `self` parameter. `self` refers to the object itself.

---

# Step 3: What Is self? (Referring to the Object)

`self` is a special parameter that refers to the object itself. Inside a class, use `self` to access the object's attributes and methods.

```python
class pump:
    def __init__(self, item_type):
        self.item_type = item_type
    
    def refill(self, amount):
        player.speak("Refilling " + self.item_type)
        # Fill code goes here

water_pump = pump("water")
water_pump.refill(5)
```

**Output:**
```
Refilling water
```

| Code | Meaning |
| --- | --- |
| `self.item_type` | This object's `item_type` attribute |
| `water_pump.refill(5)` | Calls the `refill` method of the `water_pump` object |

> **⚠️ Warning:**
> Writing `self.material == material` performs a comparison. Use `=` to assign a value.

---

# Step 4: Using Methods (An Object's Functions)

A method is a function defined inside a class. Each object can have its own methods.

```python
class animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        player.speak("My name is " + self.name)
    
    def feed(self, food):
        player.speak(self.name + " is eating " + food)

# Creating an object
cow = animal("Bessie")

# Calling a method
cow.speak()           # My name is Bessie
cow.feed("grass")     # Bessie is eating grass
```

**Method vs Function:**

| Method | Function |
| --- | --- |
| Defined inside a class | Defined outside |
| Belongs to an object | Runs independently |
| Called as `object.method()` | Called as `function()` |

---

# Step 5: Applying It in Game Levels

**Level 1: Creating a Class**

Use a class to create a haystack object and pass it to the `build()` function.

```python
class haystack:
    def __init__(self, size):
        self.size = size

small_hay = haystack("small")
player.build(small_hay)
```

**Level 2: Class Members**

Use `__init__()` to store attributes such as a road's material in an object.

```python
class road:
    def __init__(self, material, length):
        self.material = material
        self.length = length

wood_road = road("wood", 10)
player.speak(wood_road.material)  # wood
```

**Level 3-4: Class Methods**

Use a condition inside an object's method to fill food or water.

```python
class pump:
    def __init__(self, item_type):
        self.item_type = item_type
        self.amount = 0
    
    def refill(self, amount):
        self.amount += amount
        player.speak("Refilled " + str(amount) + " " + self.item_type)

water_pump = pump("water")
water_pump.refill(5)
```

**Common Mistakes (Things to Watch Out For):**

| Error | Why is it wrong? | Correct form |
| --- | --- | --- |
| `class road` | Missing `:` symbol. | `class road:` |
| `def __init__(material):` | Missing `self` parameter. | `def __init__(self, material):` |
| `self.material == material` | Use `=` to assign a value. | `self.material = material` |
| `pump.refill` | Calling a method requires `()`. | `pump.refill("food")` |

---

# Quiz: Test Yourself

## Question 1
What is a class?

- A) A blueprint for creating objects
- B) The name of a function
- C) A type of variable
- D) The name of a list

**Correct answer:** A
**Explanation:** A class is a blueprint for creating objects, and each object can have its own attributes and methods.

## Question 2
What is an object?

- A) A concrete instance created from a class
- B) A function's argument
- C) A variable's value
- D) A list's index

**Correct answer:** A
**Explanation:** An object is a concrete instance created from a class, with its own attributes and methods.

## Question 3
When does `__init__()` run?

- A) When an object is deleted
- B) When an object is created
- C) When a method is called
- D) When the program runs

**Correct answer:** B
**Explanation:** `__init__()` is an initializer function that runs automatically when an object is created.

## Question 4
What is the role of `self`?

- A) It refers to the object
- B) It deletes a function
- C) It creates a list
- D) It speeds up the code

**Correct answer:** A
**Explanation:** `self` is a special parameter that refers to the object itself. It's used inside a class.

## Question 5
What is the difference between a method and a regular function?

- A) No difference
- B) Method = inside a class, Function = outside
- C) Method = outside, Function = inside a class
- D) Method = slow, Function = fast

**Correct answer:** B
**Explanation:** A method is defined inside a class and belongs to an object. A function runs independently.

## Question 6
Find the output of the following code.

```python
class road:
    def __init__(self, material):
        self.material = material

wood_road = road("wood")
player.speak(wood_road.material)
```

- A) road
- B) wood
- C) material
- D) An error occurs

**Correct answer:** B
**Explanation:** Creating `wood_road = road("wood")` sets `self.material = "wood"`.

---

# Conclusion

In this chapter you:

1. Understood what a class is
2. Learned how to create an object
3. Learned the `__init__()` function
4. Understood the importance of the `self` parameter
5. Learned what a method is
6. Learned to pass an object to a function

A class is a blueprint for creating objects, and each object can have its own attributes and methods.

---

# Key Points

- Class = a blueprint for creating objects
- `__init__()` = runs when an object is created
- `self` = refers to the object
- Method = a function inside a class
- Object = a concrete instance created from a class
- `self.material = value` = stores an attribute

---

# Homework

## Task 1: Creating a Class

Create a "box" class and store one attribute.

```python
# Write your code here
class box:
    def __init__(self, color):
        self.color = color

red_box = box("red")
player.speak(red_box.color)
```

## Task 2: Creating an Object

Create an object from an "animal" class and say its name.

```python
# Write your code here
class animal:
    def __init__(self, name):
        self.name = name

cat = animal("Kitty")
player.speak(cat.name)
```

## Task 3: Writing a Method

Write an example of calling an object's method.

```python
# Write your code here
class pump:
    def __init__(self, item):
        self.item = item
    
    def refill(self):
        player.speak("Refilling " + self.item)

water_pump = pump("water")
water_pump.refill()
```

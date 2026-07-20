# Chapter 9: Classes & Objects

> Game goal: In this chapter we'll build our own new "things" (roads, houses, pumps) and make them work however we want! 🚀

---

# Step 1: What Is a Class? (The LEGO Instructions)

A class is a blueprint or set of instructions used to make many things of the same kind. For example, the instruction booklet for building a LEGO car.

An object is the real, finished toy you actually build on your table by following those instructions.

**📐 Preparing the blueprint (Class):**

```python
class road:
    def __init__(self, material):
        self.material = material
```

**🏎️ Getting a real thing (Object) from the blueprint:**

```python
wood_road = road("wood")   # A wooden road
stone_road = road("stone") # A stone road
```

| Concept | In game terms | Example code |
| --- | --- | --- |
| Class | The LEGO instructions for building things | `class road:` |
| Object | The real toy built from the instructions | `wood_road = road("wood")` |
| Attribute | The toy's color, size, material | `self.material` |

> **💡 Key idea:**
> Class = the instruction booklet, Object = the actual road or house you see on the field.

---

# Step 2: Using __init__() (The Material Preparer)

`__init__()` is a special function that runs automatically the moment an object is created. It's like deciding "what material should this road use?" right as the LEGO build begins.

```python
class road:
    def __init__(self, material):
        self.material = material # Stores the road's material here

# Bring the object to life
wood_road = road("wood")
```

**⚙️ How does it work behind the scenes?**

1. You write `road("wood")` in your code.
2. The `__init__` function runs automatically.
3. It attaches the material `"wood"` to that road.

**🏠 Giving multiple attributes:**

You can specify a house's color and size at the same time.

```python
class house:
    def __init__(self, color, size):
        self.color = color
        self.size = size

my_house = house("red", "big") # A big red house
player.speak(my_house.color)   # The player says "red"!
```

> **⚠️ Watch out:**
> You must always write `self` first inside the `__init__` function!

---

# Step 3: What Is self? (Mine / My Own)

`self` is a word that means "mine" or "my own" for that object. Every object uses `self` to hold on to its own attributes, saying "this is my material" or "this is my color."

```python
class pump:
    def __init__(self, item_type):
        self.item_type = item_type # My type
    
    def refill(self, amount):
        player.speak("Refilling: " + self.item_type)

water_pump = pump("water")
water_pump.refill(5)
```

**🖥️ What shows up on the screen:**

```
Refilling: water
```

| Code | What does it actually mean? |
| --- | --- |
| `self.item_type` | This pump's own type (water or food) |
| `water_pump.refill(5)` | Calls the `water_pump` pump's refill ability |

> **⚠️ Reminder:**
> `self.material = material` (one equals sign) assigns a value. Only use `==` (two equals signs) to check an `if` condition.

---

# Step 4: Using Methods (An Object's Abilities)

A method is a function written inside a class — an action the object is able to perform. If we create an animal, that animal can have abilities like "speak" or "eat food."

```python
class animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        player.speak("My name is " + self.name + "!")
    
    def feed(self, food):
        player.speak(self.name + " is eating " + food + " 😋")

# Create a cow
cow = animal("Bessie")

# Run the cow's abilities (call a method)
cow.speak()           # My name is Bessie!
cow.feed("grass")     # Bessie is eating grass 😋
```

**Method vs. Regular Function:**

| Method | Regular Function |
| --- | --- |
| Hides inside a class | Sits out in the open, outside a class |
| Always belongs to an object | Can run on its own |
| Called with a dot, like `cow.speak()` | Called like `player.move_forward()` |

---

# Step 5: Using It at the Game Level

**Level 1: Creating a Haystack**

Used a class to create a haystack object and passed it to the player's `build()` function to place it on the field.

```python
class haystack:
    def __init__(self, size):
        self.size = size

small_hay = haystack("small")
player.build(small_hay)
```

**Level 2: Storing a Road's Material**

Used `__init__()` to store a material like wood or stone in the road, then placed the road at the X marker.

**Level 3-4: Running the Automatic Pump**

Called the pump's `refill()` ability to fill food and water for the cows.

```python
pump = machine()
pump.refill("food") # Fill food at the dark X
```

---

# 🛑 Common Mistakes (Watch Out!)

| Wrong code | Why is it wrong? | Correct code |
| --- | --- | --- |
| `class road` | Don't forget the colon after the class name! | `class road:` |
| `def __init__(material):` | Forgot to write `self` first. | `def __init__(self, material):` |
| `self.material == material` | Use just one equals sign (=) to assign a value. | `self.material = material` |
| `pump.refill` | You need parentheses `()` after it to run the pump. | `pump.refill("food")` |

---

# 🎮 Quiz Time

## Question 1
What is a class?

- A) A button that deletes a program
- B) A LEGO instruction booklet (blueprint) for making objects of the same kind
- C) A container that only stores numbers

**Correct answer:** B

## Question 2
What is an object?

- A) The real toy built by following the instructions (like a wooden road or a green house)
- B) A single map location in the game
- C) A black screen where you write code

**Correct answer:** A

## Question 3
When does the `__init__()` function run?

- A) When the game ends and you lose
- B) Automatically, the moment an object is created
- C) Every time the player moves forward

**Correct answer:** B

## Question 4
What is the role of `self`?

- A) It marks the object as "mine/my own" and helps it hold on to its own attributes
- B) It makes the code run extremely fast
- C) It mutes the game's sound

**Correct answer:** A

## Question 5
What code fills a cow's trough with water using the pump?

- A) `pump.refill`
- B) `pump.refill("water")`
- C) `refill("water")`

**Correct answer:** B (It needs parentheses and must state what to fill)

---

# 📝 Conclusion

By finishing this chapter, you learned to write your own Instructions (Class) for new things, build countless Real toys (Objects) from them, and command them to work! You now think like a real programmer! 🥳

---

# 🏠 Homework (Try It Yourself)

## Task 1: Build a New Box

Create a "box" blueprint, store the color red in it, and have the player say it.

```python
class box:
    def __init__(self, color):
        self.color = color

red_box = box("red")
player.speak(red_box.color)
```

## Task 2: Bring a Game Cat to Life

Create an animal class and build a cat object named "Kitty."

```python
class animal:
    def __init__(self, name):
        self.name = name

cat = animal("Kitty")
player.speak(cat.name)
```

## Task 3: Call the Pump's Ability

Create a pump, then finish the code that makes it run.

```python
class pump:
    def __init__(self, item):
        self.item = item
    
    def refill(self):
        player.speak("Refilling: " + self.item)

# Create your object here and call its ability
water_pump = pump("water")
water_pump.refill()
```

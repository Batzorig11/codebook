# Бүлэг 9: Class ба object

> Class ашиглан өөрийн төрлийн объект үүсгэх, шинж чанар болон method ашиглах үндсийг сурна.

---

# Алхам 1: Class гэж юу вэ? (Загвар)

Class гэдэг нь ижил төрлийн object үүсгэх загвар юм. Жишээ нь, "Road" class нь замын object үүсгэх загвар болно.

**Class үүсгэх:**

```python
class road:
    def __init__(self, material):
        self.material = material
```

**Object үүсгэх:**

```python
wood_road = road("wood")
stone_road = road("stone")
```

| Ойлголт | Тайлбар | Жишээ |
| --- | --- | --- |
| Class | Object үүсгэх загвар. | `class road:` |
| Object | Class-аас үүссэн бодит нэгж. | `wood_road = road("wood")` |
| Member | Object доторх шинж чанар. | `self.material` |

> **Гол санаа:**
> Class = загвар, Object = загвараас үүссэн бодит зүйл.

---

# Алхам 2: __init__() ашиглах (Object эхлүүлэх)

`__init__()` нь object үүсэх үед автоматаар ажилладаг функц. Энд object-ийн эхлэл утгуудыг тохируулна.

```python
class road:
    def __init__(self, material):
        self.material = material

# Object үүсгэх
wood_road = road("wood")
```

**Яаж ажилладаг вэ?**

1. `road("wood")` — object үүсгэх
2. `__init__()` автоматаар дуудагдана
3. `self.material = "wood"` — шинж чанар хадгална

**Олон шинж чанар:**

```python
class house:
    def __init__(self, color, size):
        self.color = color
        self.size = size

my_house = house("red", "big")
player.speak(my_house.color)  # red
```

> **Анхаарах:**
> `__init__` функцэд `self` параметр заавал хэрэгтэй. `self` нь object-ийг өөрөө заана.

---

# Алхам 3: self гэж юу вэ? (Object-ийг заах)

`self` нь object-ийг өөрөө заах тусгай параметр. Class дотор `self` ашиглан object-ийн шинж чанар, method-д хандаж болно.

```python
class pump:
    def __init__(self, item_type):
        self.item_type = item_type
    
    def refill(self, amount):
        player.speak("Refilling " + self.item_type)
        # Дүүргэх код энд

water_pump = pump("water")
water_pump.refill(5)
```

**Гаралт:**
```
Refilling water
```

| Код | Утга |
| --- | --- |
| `self.item_type` | Энэ object-ийн item_type шинж чанар |
| `water_pump.refill(5)` | water_pump object-ийн refill method дуудна |

> **Анхаарах:**
> `self.material == material` гэвэл харьцуулалт хийгдэнэ. Утга оноохдоо `=` ашиглана.

---

# Алхам 4: Method ашиглах (Object-ийн функц)

Method гэдэг нь class дотор тодорхойлсон функц. Object бүр өөрийн method-той байж болно.

```python
class animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        player.speak("My name is " + self.name)
    
    def feed(self, food):
        player.speak(self.name + " is eating " + food)

# Object үүсгэх
cow = animal("Bessie")

# Method дуудах
cow.speak()           # My name is Bessie
cow.feed("grass")     # Bessie is eating grass
```

**Method vs Функц:**

| Method | Функц |
| --- | --- |
| Class дотор тодорхойлсон | Гадна тодорхойлсон |
| Object-д харьяалагдана | Бие даана ажиллана |
| `object.method()` хэлбэрэд дуудна | `function()` хэлбэрээр дуудна |

---

# Алхам 5: Тоглоомын түвшинд хэрэглэх

**Level 1: Creating a Class**

Class ашиглан өвсний овооны object үүсгэж `build()` функцэд дамжуулна.

```python
class haystack:
    def __init__(self, size):
        self.size = size

small_hay = haystack("small")
player.build(small_hay)
```

**Level 2: Class Members**

`__init__()` ашиглан замын материал гэх мэт шинж чанарыг object-д хадгална.

```python
class road:
    def __init__(self, material, length):
        self.material = material
        self.length = length

wood_road = road("wood", 10)
player.speak(wood_road.material)  # wood
```

**Level 3-4: Class Methods**

Object-ийн method дотор нөхцөл ашиглан хоол эсвэл ус дүүргэнэ.

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

**Нийтлэг алдаа (Анхаарах зүйлс):**

| Алдаа | Яагаад буруу вэ? | Зөв хэлбэр |
| --- | --- | --- |
| `class road` | `:` тэмдэг дутуу. | `class road:` |
| `def __init__(material):` | `self` параметр дутуу. | `def __init__(self, material):` |
| `self.material == material` | Утга оноохдоо `=` ашиглана. | `self.material = material` |
| `pump.refill` | Method дуудахад `()` хэрэгтэй. | `pump.refill("food")` |

---

# Quiz: Өөрийгөө шалгаарай

## Асуулт 1
Class гэж юу вэ?

- А) Object үүсгэх загвар
- Б) Функцийн нэр
- В) Хувьсагчийн төрөл
- Г) Жагсаалтын нэр

**Зөв хариулт:** А
**Тайлбар:** Class нь object үүсгэх загвар бөгөөд object бүр өөрийн шинж чанар, method-той байж чадна.

## Асуулт 2
Object гэж юу вэ?

- А) Class-аас үүссэн бодит нэгж
- Б) Функцийн аргумент
- В) Хувьсагчийн утга
- Г) Жагсаалтын индекс

**Зөв хариулт:** А
**Тайлбар:** Object нь class-аас үүссэн бодит нэгж бөгөөд өөрийн шинж чанар, method-той.

## Асуулт 3
`__init__()` хэзээ ажилладаг вэ?

- А) Object устгах үед
- Б) Object үүсэх үед
- В) Method дуудах үед
- Г) Программ ажиллах үед

**Зөв хариулт:** Б
**Тайлбар:** `__init__()` нь object үүсэх үед автоматаар ажилладаг эхлүүлэх функц.

## Асуулт 4
`self` ямар үүрэгтэй вэ?

- А) Object-ийг заах
- Б) Функцийг устгах
- В) Жагсаалт үүсгэх
- Г) Кодыг хурдасгах

**Зөв хариулт:** А
**Тайлбар:** `self` нь object-ийг өөрөө заах тусгай параметр. Class дотор ашиглана.

## Асуулт 5
Method ба энгийн функцийн ялгаа юу вэ?

- А) Ялгаагүй
- Б) Method = class дотор, Функц = гадна
- В) Method = гадна, Функц = class дотор
- Г) Method = удаан, Функц = хурдан

**Зөв хариулт:** Б
**Тайлбар:** Method нь class дотор тодорхойлсон бөгөөд object-д харьяалагдана. Функц нь бие даана байна.

## Асуулт 6
Дараах кодны гаралтыг ол.

```python
class road:
    def __init__(self, material):
        self.material = material

wood_road = road("wood")
player.speak(wood_road.material)
```

- А) road
- Б) wood
- В) material
- Г) Алдаа гарна

**Зөв хариулт:** Б
**Тайлбар:** `wood_road = road("wood")` object үүсгэхэд `self.material = "wood"` болно.

---

# Дүгнэлт

Энэ бүлэгт чи:

1. Class гэж юу болохыг ойлголоо
2. Object үүсгэх аргыг сурлаа
3. `__init__()` функцийг сурлаа
4. `self` параметрийн ач холбогдлыг ойлголоо
5. Method гэж юу болохыг сурлаа
6. Object-ийг функцэд дамжуулахыг сурлаа

Class нь object үүсгэх загвар бөгөөд object бүр өөрийн шинж чанар, method-той байж чадна.

---

# Гол санаа

- Class = object үүсгэх загвар
- `__init__()` = object үүсэх үед ажиллана
- `self` = object-ийг заана
- Method = class доторх функц
- Object = class-аас үүссэн бодит нэгж
- `self.material = value` = шинж чанар хадгална

---

# Гэрийн даалгавар

## Даалгавар 1: Class үүсгэх

"box" class үүсгээд нэг шинж чанар хадгал.

```python
# Энд кодоо бич
class box:
    def __init__(self, color):
        self.color = color

red_box = box("red")
player.speak(red_box.color)
```

## Даалгавар 2: Object үүсгэх

"animal" class-аас object үүсгэж, нэрийг нь хэлүүл.

```python
# Энд кодоо бич
class animal:
    def __init__(self, name):
        self.name = name

cat = animal("Kitty")
player.speak(cat.name)
```

## Даалгавар 3: Method бичих

Object-ийн method дуудах жишээ бич.

```python
# Энд кодоо бич
class pump:
    def __init__(self, item):
        self.item = item
    
    def refill(self):
        player.speak("Refilling " + self.item)

water_pump = pump("water")
water_pump.refill()
```

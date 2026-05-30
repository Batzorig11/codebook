# Бүлэг 7: Өөрийн функц үүсгэх

## Хичээлийн сэдэв
**Python функц гэж юу вэ?**

## Зорилго
Энэ хичээлийн дараа сурагчид:

- Функц гэж юу болохыг ойлгоно
- `def` ашиглан функц үүсгэнэ
- Функцийг дуудаж ажиллуулна
- Давтагдсан кодыг функц болгож богиносгоно
- Parameter буюу оролттой функц бичиж сурна

---

## 1. Function гэж юу вэ?

**Function** гэдэг нь тодорхой нэг үйлдлийг хийхээр хадгалсан кодын хэсэг юм.

Жишээ нь:

```python
def say_hello():
    print("Hello!")
```

Энэ код `say_hello` гэдэг нэртэй функц үүсгэж байна.

Функцийг ажиллуулахын тулд нэрийг нь дуудаж бичнэ:

```python
say_hello()
```

---

## 2. Яагаад функц ашигладаг вэ?

Функц ашигласнаар:

- Код давтагдахгүй
- Код илүү цэвэрхэн болно
- Алдаа засахад амар болно
- Нэг үйлдлийг олон удаа ашиглаж болно

Жишээ:

```python
print("Move forward")
print("Turn left")
print("Move forward")
print("Turn left")
print("Move forward")
print("Turn left")
print("Move forward")
print("Turn left")
```

Үүнийг функцээр илүү цэвэрхэн бичиж болно:

```python
def make_square():
    print("Move forward")
    print("Turn left")
    print("Move forward")
    print("Turn left")
    print("Move forward")
    print("Turn left")
    print("Move forward")
    print("Turn left")

make_square()
```

---

## 3. Function бичих бүтэц

Функц бичих үндсэн бүтэц:

```python
def function_name():
    # энд хийх үйлдлүүд бичигдэнэ
```

Анхаарах зүйлс:

- `def` гэдэг нь function үүсгэх түлхүүр үг
- Function нэрний дараа `()` бичнэ
- Мөрийн төгсгөлд `:` тавина
- Доторх код заавал зайтай буюу indentation-тэй байна

---

## 4. Энгийн жишээ

```python
def greet():
    print("Сайн байна уу?")
    print("Python хичээлдээ тавтай морил!")

greet()
```

Гаралт:

```text
Сайн байна уу?
Python хичээлдээ тавтай морил!
```

---

## 5. Function-г олон удаа дуудах

```python
def jump():
    print("Jump!")

jump()
jump()
jump()
```

Гаралт:

```text
Jump!
Jump!
Jump!
```

---

## 6. Parameter-тэй function

Заримдаа функцэд мэдээлэл дамжуулж болно. Үүнийг **parameter** гэдэг.

```python
def greet_name(name):
    print("Сайн уу, " + name)

greet_name("Болд")
greet_name("Саруул")
```

Гаралт:

```text
Сайн уу, Болд
Сайн уу, Саруул
```

---

## 7. Тоо ашигласан жишээ

```python
def add_numbers(a, b):
    print(a + b)

add_numbers(5, 3)
add_numbers(10, 20)
```

Гаралт:

```text
8
30
```

---

## 8. Return гэж юу вэ?

`return` нь функцээс хариу утга буцаахад ашиглагдана.

```python
def add(a, b):
    return a + b

result = add(4, 6)
print(result)
```

Гаралт:

```text
10
```

`print()` нь зөвхөн дэлгэц дээр харуулна.  
`return` нь утгыг буцааж өгдөг тул дараа нь дахин ашиглаж болно.

---

## 9. Game-based coding жишээ

Доорх жишээ нь тоглоомын дүрийг хөдөлгөж байна гэж төсөөлье.

```python
import player

def move_two_steps():
    player.move_forward()
    player.move_forward()

move_two_steps()
```

---

## 10. Давтагдсан хөдөлгөөнийг function болгох

Function ашиглаагүй хувилбар:

```python
import player

player.move_forward()
player.turn_left()
player.move_forward()
player.turn_left()
player.move_forward()
player.turn_left()
player.move_forward()
player.turn_left()
```

Function ашигласан хувилбар:

```python
import player

def make_square():
    player.move_forward()
    player.turn_left()
    player.move_forward()
    player.turn_left()
    player.move_forward()
    player.turn_left()
    player.move_forward()
    player.turn_left()

make_square()
```

---

## 11. Дасгал 1

Доорх функц юу хийх вэ?

```python
def say_python():
    print("I love Python!")

say_python()
say_python()
```

### Хариулт

```text
I love Python!
I love Python!
```

---

## 12. Дасгал 2

`move_three_steps()` нэртэй функц үүсгээд дүрийг 3 алхам урагш явуул.

### Жишээ хариу

```python
import player

def move_three_steps():
    player.move_forward()
    player.move_forward()
    player.move_forward()

move_three_steps()
```

---

## 13. Дасгал 3

`turn_around()` нэртэй функц үүсгээд дүрийг 180 градус эргүүл.

### Жишээ хариу

```python
import player

def turn_around():
    player.turn_left()
    player.turn_left()

turn_around()
```

---

## 14. Дасгал 4

Parameter ашиглан сурагчийн нэрээр мэндчилдэг функц бич.

### Жишээ хариу

```python
def hello_student(name):
    print("Сайн уу, " + name)

hello_student("Тэмүүлэн")
hello_student("Ану")
```

---

## 15. Дасгал 5

Хоёр тоог үржүүлээд хариуг буцаадаг функц бич.

### Жишээ хариу

```python
def multiply(a, b):
    return a * b

answer = multiply(6, 7)
print(answer)
```

Гаралт:

```text
42
```

---

## 16. Mini Project

### Даалгавар
Тоглоомын дүрд зориулж дараах функцуудыг бич:

- `move_two_steps()`
- `turn_around()`
- `make_square()`

### Жишээ код

```python
import player

def move_two_steps():
    player.move_forward()
    player.move_forward()

def turn_around():
    player.turn_left()
    player.turn_left()

def make_square():
    for i in range(4):
        player.move_forward()
        player.turn_left()

move_two_steps()
turn_around()
make_square()
```

---

## 17. Түгээмэл алдаа

### Алдаа 1: `:` мартах

Буруу:

```python
def hello()
    print("Hello")
```

Зөв:

```python
def hello():
    print("Hello")
```

---

### Алдаа 2: Indentation хийхгүй байх

Буруу:

```python
def hello():
print("Hello")
```

Зөв:

```python
def hello():
    print("Hello")
```

---

### Алдаа 3: Function-г дуудахгүй байх

```python
def hello():
    print("Hello")
```

Энэ код функц үүсгэсэн боловч ажиллуулахгүй.  
Ажиллуулахын тулд ингэж дуудна:

```python
hello()
```

---

## 18. Богино Quiz

### 1. Function үүсгэхэд ямар түлхүүр үг ашигладаг вэ?

A. function  
B. def  
C. make  
D. start  

**Хариулт: B. def**

---

### 2. Function-г ажиллуулахыг юу гэж хэлдэг вэ?

A. Дуудах  
B. Устгах  
C. Хадгалах  
D. Зурах  

**Хариулт: A. Дуудах**

---

### 3. Доорх код хэдэн удаа `Hello` хэвлэх вэ?

```python
def hello():
    print("Hello")

hello()
hello()
hello()
```

A. 1  
B. 2  
C. 3  
D. 0  

**Хариулт: C. 3**

---

## 19. Дүгнэлт

Өнөөдрийн хичээлээр бид:

- Function гэж юу болохыг сурлаа
- `def` ашиглан function үүсгэлээ
- Function-г дуудаж ажиллууллаа
- Parameter болон return-ийн үндсийг үзлээ
- Давтагдсан кодыг function болгож цэвэрхэн бичиж сурлаа

---

## Гэрийн даалгавар

Дараах 3 function-г өөрөө бич:

1. `say_my_name(name)`
2. `add_three_numbers(a, b, c)`
3. `move_and_turn()`

Жишээ:

```python
def say_my_name(name):
    print("My name is " + name)
```

## Түвшин бүрийн тайлбар

### Level 1: Creating a Function

Зорилго: 22-оос илүүгүй мөр код бичиж, чулуунуудыг түлхэж гарц руу хүр.

Гол санаа: Чулуу түлхэж урагшлах давтагдсан үйлдлийг `repeat_push()` функц болгоно.

### Level 2: Function Arguments

Зорилго: 13-аас илүүгүй мөр кодоор захиалгат функц ашиглан талбайн бүх ургацыг усал.

Гол санаа: Аргумент ашиглан хэдэн удаа давтахыг функцэд дамжуулна.

### Level 3: Passing Functions as Arguments

Зорилго: Функц ашиглан намгийн mandrake болон мөөгнүүдийг тоол.

Гол санаа: `return` ашиглан өгүүлбэр эсвэл тооцооны үр дүн буцаана.

### Level 4: Using Lists in Functions

Зорилго: Талбайн бүх ногоог цуглуулж, захиалгат функц ашиглан даршилж хадгал.

Гол санаа: Жагсаалтуудыг функцэд дамжуулж, олон төрлийн ногоог боловсруулахад ашиглана.

### Level 5: Using Conditions in Functions

Зорилго: Нэг захиалгат функцэд нөхцөлүүдийг ашиглан хаалгыг нээж, гүүрнүүдийг засаарай.

Гол санаа: Функц дотор `if` ашиглан `open` эсвэл `build` үйлдлийг сонгоно.

### Level 6: Using Operators in Functions

Зорилго: Бүх жимсийг цуглуулж, захиалгат функц дотор операторуудыг ашиглан хангалттай жимс байгаа эсэхийг шалга.

Гол санаа: Оператор ашиглан хангалттай жимс байгаа эсэхийг функц дотор шалгана.

## Дасгал

1. `def move_twice():` функц үүсгээд хоёр удаа урагшлуул.
2. `def say_word(word):` функц үүсгээд `player.speak(word)` ажиллуул.
3. `def add(a, b):` функцээс нийлбэр буцаа.
4. Функц дотор `if action == "open":` нөхцөл бичиж турш.

## Өөрийгөө шалгах асуултууд

1. `def` ямар үүрэгтэй вэ?
2. Функц дуудна гэдэг юу гэсэн үг вэ?
3. Аргумент яагаад хэрэгтэй вэ?
4. `return` ямар үед ашиглагддаг вэ?
5. Функц ашиглах нь кодыг яаж богиносгодог вэ?

## Санах гол санаа

Өөрийн функц нь давтагдсан логикийг нэг нэртэй болгож, олон удаа найдвартай ашиглах боломж өгдөг.

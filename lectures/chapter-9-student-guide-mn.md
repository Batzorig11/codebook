# Бүлэг 9: Class ба object

## Хичээлийн сэдэв
**Class ашиглан өөрийн object-ийг хэрхэн үүсгэх вэ?**

## Зорилго
Энэ хичээлийн дараа сурагчид:

- Class гэж юу болохыг ойлгоно
- Class-аас object үүсгэнэ
- Object-ийн шинж чанар буюу member хадгална
- `__init__()` ашиглан object эхлүүлнэ
- Class method тодорхойлж дуудаж сурна
- `self` параметрийн үндсэн үүргийг ойлгоно
- Object-ийг function-д дамжуулж тоглоомын үйлдэл хийнэ

---

## 1. Class гэж юу вэ?

**Class** гэдэг нь ижил төрлийн object үүсгэх загвар юм.

Жишээ:

```python
class road:
    pass
```

Энэ код `road` нэртэй class үүсгэж байна.

Class нь object үүсгэх хэв загвар гэж ойлгож болно.

---

## 2. Object гэж юу вэ?

**Object** гэдэг нь class-аас үүссэн бодит нэгж юм.

```python
class road:
    pass

wood_road = road()
```

Энд `wood_road` нь `road` class-аас үүссэн object юм.

---

## 3. __init__() гэж юу вэ?

`__init__()` нь object үүсэх үед автоматаар ажилладаг эхлүүлэх function юм.

```python
class road:
    def __init__(self, material):
        self.material = material
```

Энэ code object үүсэх үед `material` утгыг object дотор хадгална.

---

## 4. Member буюу шинж чанар

Object дотор хадгалагдсан мэдээллийг member буюу шинж чанар гэж ойлгож болно.

```python
class road:
    def __init__(self, material):
        self.material = material

wood_road = road("wood")
player.speak(wood_road.material)
```

Гаралт:

```text
wood
```

---

## 5. Method гэж юу вэ?

**Method** гэдэг нь class дотор тодорхойлсон function юм.

```python
class pump:
    def refill(self, item):
        player.speak("refill " + item)

water_pump = pump()
water_pump.refill("water")
```

Method дуудахад object-ийн нэр, цэг, method-ийн нэрийг бичнэ.

---

## 6. self ямар үүрэгтэй вэ?

`self` нь тухайн object өөрийгөө зааж байгаа параметр юм.

```python
class road:
    def __init__(self, material):
        self.material = material
```

Энд `self.material` нь object дотор хадгалагдах шинж чанар.

`material` нь `__init__()` function-д орж ирсэн argument юм.

---

## 7. Object-ийг тоглоомын command-д ашиглах

Object-ийг function-д argument болгон дамжуулж болно.

```python
class road:
    def __init__(self, material):
        self.material = material

wood_road = road("wood")
player.build(wood_road)
```

Энэ жишээнд `wood_road` object-ийг `player.build()` function-д дамжуулж байна.

---

## 8. Game-based coding жишээ

Доорх код замын object үүсгээд тоглоомын дүрээр бариулж байна.

```python
import player

class road:
    def __init__(self, material):
        self.material = material

wood_road = road("wood")
player.build(wood_road)
```

---

## 9. Түвшин бүрийн тайлбар

### Level 1: Creating a Class

Зорилго: Талбайн бүх үр тариаг цуглуулж, class ашиглан өвсний овоог бүтээ.

Гол санаа: Class ашиглан өвсний овооны object үүсгэж `build()` function-д дамжуулна.

### Level 2: Class Members

Зорилго: Талбайн материалуудыг цуглуулж, замуудыг бүтээ.

Гол санаа: `__init__()` ашиглан замын материал гэх мэт шинж чанарыг object-д хадгална.

### Level 3: Class Methods

Зорилго: Талбайн материалуудыг цуглуулж тахиануудад шинэ байшингууд барь.

Гол санаа: Тахианы байшинд өнгө, хэмжээ зэрэг шинж чанар оноож барина.

### Level 4: Class Functions

Зорилго: Үхрүүдийн тэвшнүүдийн хажууд байрлах насосны object-ийн function-уудыг идэвхжүүлж ус, хоолыг нь дахин дүүргэ.

Гол санаа: Object-ийн method дотор нөхцөл ашиглан хоол эсвэл ус дүүргэнэ.

---

## 10. Дасгал 1

`class box:` гэж class үүсгээд нэг шинж чанар хадгал.

### Жишээ хариу

```python
class box:
    def __init__(self, color):
        self.color = color

red_box = box("red")
```

---

## 11. Дасгал 2

`wood_road = road("wood")` мөр object хэрхэн үүсгэж байгааг тайлбарла.

### Жишээ хариу

```text
road("wood") нь road class-аас шинэ object үүсгэнэ. "wood" утга __init__() рүү дамжиж material шинж чанарт хадгалагдана.
```

---

## 12. Дасгал 3

Object-ийн method дуудах жишээ бич.

### Жишээ хариу

```python
class pump:
    def refill(self, item):
        player.speak(item)

pump1 = pump()
pump1.refill("food")
```

---

## 13. Түгээмэл алдаа

### Алдаа 1: Class-ийн дараа `:` мартах

Буруу:

```python
class road
```

Зөв:

```python
class road:
```

---

### Алдаа 2: `self` параметр мартах

Буруу:

```python
def __init__(material):
    self.material = material
```

Зөв:

```python
def __init__(self, material):
    self.material = material
```

---

### Алдаа 3: Утга оноохдоо `==` ашиглах

Буруу:

```python
self.material == material
```

Зөв:

```python
self.material = material
```

---

### Алдаа 4: Method дуудахад `()` мартах

Буруу:

```python
pump.refill
```

Зөв:

```python
pump.refill("food")
```

---

## 14. Богино Quiz

### 1. Class гэж юу вэ?

A. Object үүсгэх загвар
B. Зөвхөн тоо хадгалдаг хувьсагч
C. Comment эхлүүлэх тэмдэг
D. Давталтын тоолуур

**Хариулт: A. Object үүсгэх загвар**

---

### 2. `__init__()` хэзээ ажилладаг вэ?

A. Object үүсэх үед
B. Comment бичих үед
C. List хоосон үед
D. Код дууссаны дараа л

**Хариулт: A. Object үүсэх үед**

---

### 3. Method гэж юу вэ?

A. Class доторх function
B. Dictionary-ийн key
C. Текстийн хашилт
D. Давталтын index

**Хариулт: A. Class доторх function**

---

## 15. Дүгнэлт

Өнөөдрийн хичээлээр бид:

- Class гэж юу болохыг ойлголоо
- Class-аас object үүсгэлээ
- `__init__()` ашиглан object эхлүүллээ
- `self` ашиглан object-ийн шинж чанар хадгаллаа
- Method тодорхойлж дуудаж сурлаа
- Object-ийг тоглоомын function-д дамжууллаа

---

## Гэрийн даалгавар

Дараах 3 даалгаврыг өөрөө бич:

1. `class animal:` үүсгээд `name` шинж чанар хадгал
2. `animal` object үүсгээд `name` утгыг хэлүүл
3. `class tool:` дотор `use()` method үүсгээд дуудаж турш

# Бүлэг 8: Dictionary ашиглах

## Хичээлийн сэдэв
**Dictionary ашиглан мэдээллийг key-value хосоор хэрхэн хадгалах вэ?**

## Зорилго
Энэ хичээлийн дараа сурагчид:

- Хоосон dictionary үүсгэнэ
- Key болон value гэж юу болохыг ойлгоно
- Key ашиглан value хадгалж, буцааж авна
- Dictionary-ээс утга устгана
- `items()` ашиглан dictionary дээгүүр давтана
- Dictionary-г өөрийн function-тэй хамт ашиглана
- Dictionary ашиглан объект байрлуулах, тарих, услах дадлага хийнэ

---

## 1. Dictionary гэж юу вэ?

**Dictionary** гэдэг нь мэдээллийг key-value хосоор хадгалдаг бүтэц юм.

Жишээ:

```python
bag = {}
bag["Apples"] = 5
```

Энэ код `bag` dictionary-д `"Apples"` гэсэн key дээр `5` гэсэн value хадгалж байна.

---

## 2. Key ба value

**Key** нь утгыг олох нэр юм.

**Value** нь тухайн key дээр хадгалагдсан мэдээлэл юм.

```python
bag = {}
bag["Apples"] = 5
bag["Oranges"] = 3
```

Энд:

- `"Apples"` болон `"Oranges"` нь key
- `5` болон `3` нь value

---

## 3. Dictionary үүсгэх ба утга хадгалах

Хоосон dictionary үүсгэхдээ `{}` ашиглана.

```python
bag = {}
bag["Apples"] = 4
bag["Oranges"] = 3
```

Dictionary-д key ашиглан хандана.

```python
player.speak(bag["Apples"])
```

Гаралт:

```text
4
```

---

## 4. Dictionary-ээс утга устгах

`del` ашиглан dictionary-ээс key болон түүнд хадгалсан value-г устгаж болно.

```python
crate = {}
crate["Pipes"] = 2
crate["Trash"] = 1

del crate["Trash"]
```

Энэ код `crate` dictionary-ээс `"Trash"` key-г устгана.

---

## 5. items() ашиглан давтах

`items()` нь dictionary-ийн key болон value-г хамтад нь давтах боломж өгнө.

```python
materials = {}
materials["Wood"] = 4
materials["Stone"] = 2

for name, number in materials.items():
    player.speak("%s: %d" % (name, number))
```

Энэ код материал бүрийн нэр ба тоог хэлүүлнэ.

---

## 6. Dictionary-г function-тэй ашиглах

Dictionary-ийн утгыг function-д argument болгон дамжуулж болно.

```python
seeds = {}
seeds["Pumpkin"] = 3
seeds["Carrot"] = 2

def plant_seed(name, number):
    player.speak("Planting %d %s" % (number, name))

for seed_name, seed_count in seeds.items():
    plant_seed(seed_name, seed_count)
```

---

## 7. Game-based coding жишээ

Доорх код цуглуулсан жимсийг dictionary-д тоолж хадгалж байна.

```python
import player

bag = {}
bag["Apples"] = 4
bag["Oranges"] = 3

player.speak(bag)

for name, number in bag.items():
    player.speak("%s: %d" % (name, number))
```

---

## 8. Түвшин бүрийн тайлбар

### Level 1: Creating a Dictionary

Зорилго: Бүх жимсийг цуглуулж dictionary-д хадгалаад хэдийг авснаа тоол.

Гол санаа: Жимсний тоог dictionary-д key ашиглан хадгална.

### Level 2: Using a Dictionary

Зорилго: Dictionary ашиглан талбайд үрийг суулга.

Гол санаа: Үрийн мэдээллийг dictionary-ээс авч талбайд тарина.

### Level 3: More Complex Operations

Зорилго: Агуулахын бүх хайрцгийг шалгаж, хайрцаг бүрээс хог хаягдлыг устга.

Гол санаа: Агуулахын хайрцаг доторх хэрэггүй зүйлсийг `del` ашиглан устгана.

### Level 4: Placing Objects Using Dictionaries

Зорилго: Талбайн бүх ургацыг хурааж, dictionary ашиглан агуулахад хадгал.

Гол санаа: Ургацын тоог dictionary-д хадгалаад агуулахад байрлуулна.

### Level 5: Custom Functions Using Dictionaries

Зорилго: Талбайг туулж мод тарих, услах захиалгат function ашигла.

Гол санаа: Dictionary утгуудыг өөрийн function-ийн argument болгон ашиглаж талбайг боловсруулна.

### Level 6: Iterating Over Dictionaries

Зорилго: Талбайн бүх материалыг олоод цуглуулсан эд зүйлсээ тоолсны дараа тухайн саванд нь хадгал.

Гол санаа: `items()` ашиглан цуглуулсан материал бүрийн нэр ба тоог давталтаар хэлүүлнэ.

---

## 9. Дасгал 1

`bag = {}` dictionary үүсгээд `"Apples"` key дээр `5` утга хадгал.

### Жишээ хариу

```python
bag = {}
bag["Apples"] = 5
```

---

## 10. Дасгал 2

`bag["Apples"]` утгыг `player.speak()` ашиглан хэлүүл.

### Жишээ хариу

```python
bag = {}
bag["Apples"] = 5
player.speak(bag["Apples"])
```

---

## 11. Дасгал 3

`crate` dictionary-ээс `"Pipes"` key-г устга.

### Жишээ хариу

```python
crate = {}
crate["Pipes"] = 2
del crate["Pipes"]
```

---

## 12. Дасгал 4

`items()` ашиглан dictionary-ийн бүх key-value хосыг хэлүүл.

### Жишээ хариу

```python
materials = {}
materials["Wood"] = 4
materials["Stone"] = 2

for name, number in materials.items():
    player.speak("%s: %d" % (name, number))
```

---

## 13. Түгээмэл алдаа

### Алдаа 1: List болон dictionary-г андуурах

Буруу:

```python
bag = []
```

Зөв:

```python
bag = {}
```

---

### Алдаа 2: Текст key-г хашилтгүй бичих

Буруу:

```python
bag[Apples] = 5
```

Зөв:

```python
bag["Apples"] = 5
```

---

### Алдаа 3: Dictionary-д `()` ашиглаж хандах

Буруу:

```python
bag("Apples")
```

Зөв:

```python
bag["Apples"]
```

---

### Алдаа 4: items()-ийн хоёр утгыг салгаж авахгүй байх

Буруу:

```python
for name in materials.items():
    player.speak(name)
```

Зөв:

```python
for name, number in materials.items():
    player.speak("%s: %d" % (name, number))
```

---

## 14. Богино Quiz

### 1. Dictionary ямар бүтэцтэй вэ?

A. Key-value хос
B. Зөвхөн нэг тоо
C. Зөвхөн comment
D. Зөвхөн function нэр

**Хариулт: A. Key-value хос**

---

### 2. Dictionary үүсгэхэд ямар хаалт ашиглах вэ?

A. `[]`
B. `{}`
C. `()`
D. `<>`

**Хариулт: B. `{}`**

---

### 3. `items()` ямар үед хэрэгтэй вэ?

A. Key ба value-г хамтад нь давтах үед
B. Dictionary-г устгах үед л
C. Function нэр солих үед
D. Текстийг хашилтгүй болгох үед

**Хариулт: A. Key ба value-г хамтад нь давтах үед**

---

## 15. Дүгнэлт

Өнөөдрийн хичээлээр бид:

- Dictionary гэж юу болохыг ойлголоо
- Key болон value ялгаж сурлаа
- `{}` ашиглан dictionary үүсгэлээ
- `del` ашиглан утга устгалаа
- `items()` ашиглан key-value хосоор давтлаа
- Dictionary-г function-тэй хамт ашиглалаа

---

## Гэрийн даалгавар

Дараах 3 даалгаврыг өөрөө бич:

1. `inventory = {}` dictionary үүсгээд 3 төрлийн item хадгал
2. Нэг key-г `del` ашиглан устга
3. `items()` ашиглан бүх item-ийн нэр ба тоог хэлүүл

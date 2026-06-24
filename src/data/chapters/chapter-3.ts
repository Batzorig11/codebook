import type { Chapter } from "./types";

export const chapter3: Chapter = {
  chapter: "CHAPTER 3",
  title: "BASIC OPERATORS",
  levels: [
    {
      subtitle: "Counting with code",
      level: "Level 1",
      instructionsEn: [
        [
          { text: "Did you know you can add " }, { text: "(+)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ", subtract " }, { text: "(-)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ", multiply " }, { text: "( * )", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " and divide " }, { text: "( / )", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " while coding? In this chapter we're going to teach you how to use these operators in cool ways!" },
        ],
        [
          { text: "Let's start by counting all the animals in the stable using the " },
          { text: "speak()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function and adding up their quantities." },
        ],
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Determine how many animals there are in each stable and add them up to complete the level.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "In this stable you will find cows, goats and pigs. Determine how many of each animal are in each pen and create a variable for each:" }],
        [{ text: "cows = [Number of Cows]", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "goats = [Number of Goats]", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "pigs = [Number of Pigs]", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [
          { text: "Walk to the X mark in front of each pen and use the " },
          { text: "speak()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function to call out the variable for that pen. For cows: " },
          { text: "player.speak(cows)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: "." },
        ],
        [
          { text: "Once you've done all three pens, head for the X mark in front of the desk and use " },
          { text: "speak()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " to add all three variables: " },
          { text: "player.speak(cows + goats + pigs)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ". Now you can add up animals using basic operators!" },
        ],
      ],
      instructions: [
        [
          {
            text: "Мэдэж байсан уу? Код бичихдээ ",
          },
          {
            text: "(+)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэмэх, ",
          },
          {
            text: "(-)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " хасах, ",
          },
          {
            text: "( * )",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " үржүүлэх, ",
          },
          {
            text: "( / )",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " хуваах зэргийг хийж болдог юм шүү! Энэ бүлэгт бид үүнийг хэрхэн ашиглахыг хамтдаа сурна! Маш хөгжилтэй шүү!",
          },
        ],
        [
          {
            text: "Эхлээд ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээ ашиглан жүчээн дэх амьтдыг тоолоод тоонуудаа нийлүүлж үзье!",
          },
        ],
        [
          {
            text: "Зорилго",
            className: "uppercase font-bold text-3xl",
          },
        ],
        [
          {
            text: "Жүчээ бүрт хэдэн амьтан байгааг олж, нийлбэрийг нь тооцоод түвшнийг дуусга!",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Энэ жүчээнд үхэр, ямаа, гахай байна. Хашаа бүрт хэдэн амьтан байгааг тоолж, хувьсагчид хадгалъя. Иймэрхүү байдлаар:",
          },
        ],
        [
          {
            text: "cows = [Үхрийн тоо]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "goats = [Ямааны тоо]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "pigs = [Гахайн тоо]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Хашаа бүрийн өмнөх X тэмдэг рүү алхаад ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр тухайн хашаанд байгаа амьтны тоог дуудаарай. Жишээ нь үхрийн хувьд: ",
          },
          {
            text: "player.speak(cows)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "3 хашааг бүгдийг нь тоолж дууссаны дараа ширээний өмнөх X тэмдэг рүү очоод ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг дахин ашиглаад энэ удаад 3 хувьсагчаа нэмээрэй, иймэрхүү: ",
          },
          {
            text: "player.speak(cows + goats + pigs)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Үзсэн үү? Үйлдлийн тэмдгүүдээр жүчээн дэх бүх амьтнаа амархан нэмчих боллоо!",
          },
        ],
      ],
    },
    {
      subtitle: "Add and Subtract",
      level: "Level 2",
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Collect eggs and balance the books by adding and subtracting their quantities.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "Walk over all the eggs to collect them, then make three (3) variables: " },
          { text: "white_eggs", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ", " },
          { text: "dark_eggs", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ", " },
          { text: "red_eggs", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ". Store the count of each type in these variables." },
        ],
        [
          { text: "Walk to the dark X mark and document all the good eggs. Use " },
          { text: "speak()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " to announce the total, adding the three variables and subtracting the 4 bad eggs: " },
          { text: "player.speak(white_eggs + dark_eggs + red_eggs - 4)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: "." },
        ],
        [{ text: "Now subtract the bad eggs from each variable — 2 bad white, 1 bad dark, 1 bad red:" }],
        [{ text: "white_eggs -= 2", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "dark_eggs -= 1", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "red_eggs -= 1", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [
          { text: "Red eggs have double the nutritional value, so multiply by 2 using " },
          { text: "*=", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ": " },
          { text: "red_eggs *= 2", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: "." },
        ],
        [
          { text: "Finally, walk to the light X mark and add all three variables with their new values using the " },
          { text: "speak()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function to complete the level." },
        ],
      ],
      instructions: [
        [
          {
            text: "Зорилго",
            className: "uppercase font-bold text-3xl",
          },
        ],
        [
          {
            text: "Өндөгнүүдээ цуглуулаад тоонуудыг нь нэмж хасч тооцоогоо хөтөлцгөөе!",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Талбай дээр 3 өнгийн өндөг тарсан байна — цагаан, бараан ба улаан. Өндөг болгоныг түүхдээ тоог нь бичиж үлдээх хэрэгтэй. 4 муудсан өндөг байгаа ч бүү санаа зов, яаж хасахыг бид чамд зааж өгнө!",
          },
        ],
        [
          {
            text: "Эхлээд талбай дунд очоод бүх өндгөө цуглуул. Үүний дараа 3 хувьсагчаа үүсгээрэй: ",
          },
          {
            text: "white_eggs",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "dark_eggs",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "red_eggs",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Эдгээр нь өнгө тус бүрийн өндөгний тоог хадгална.",
          },
        ],
        [
          {
            text: "Сайн өндөгнүүдээ бүртгэсэн үү? Одоо эхний X тэмдэг рүү очоод ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр нийт сайн өндгийн тоог хэл. Бүх өндгийг нэмээд, муудсан 4-ийг хасахыг бүү мартаарай: ",
          },
          {
            text: "player.speak(white_eggs + dark_eggs + red_eggs - 4)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Гайхалтай! Одоо шимт чанараа тоолъё. Өнгө тус бүрээс муудсан өндгөө хасъя — ",
          },
          {
            text: "-=",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " оператор ашиглавал амархан. Үүнийг иймэрхүү ашиглана:",
          },
        ],
        [
          {
            text: "white_eggs -= 2",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "dark_eggs -= 1",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "red_eggs -= 1",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Улаан өндөг бол 2 дахин илүү шимт чанартай! Тиймээс ",
          },
          {
            text: "*=",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " операторыг ашиглаад 2 дахин үржүүлье: ",
          },
          {
            text: "red_eggs *= 2",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Эцэст нь 2 дахь X тэмдэг рүү алхаад нийт шимт чанарыг хэл. 3 хувьсагчаа нэмээд ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр дуудаарай. Чи чаднаа!",
          },
        ],
      ],
    },
    {
      subtitle: "String Formats",
      level: "Level 3",
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Call out the chickens and count how many are around each coop using strings.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [
          { text: "Walk to the darker X mark on the right side of the field and call out the chickens using " },
          { text: "speak()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ". Multiply " },
          { text: "\"Chirp\"", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " by 10 to chirp 10 times: " },
          { text: "player.speak(\"Chirp\" * 10)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ". This will make sure no chickens are left inside the coops." },
        ],
        [
          { text: "Count the chickens around each coop and store the numbers in variables named " },
          { text: "left_coup", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " and " },
          { text: "right_coup", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: "." },
        ],
        [
          { text: "Head to each X mark in front of the coops and call out the count. Write the string " },
          { text: "\"Right Coup has %d Chickens\"", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " — the " },
          { text: "%d", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " is where the number is inserted. Then pass the variable using " },
          { text: "% (right_coup)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ". Example:" },
        ],
        [{ text: "right_coup = 2", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "player.speak(\"Right Coup has %d Chickens\" % (right_coup))", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "# This will print on screen \"Right Coup has 2 Chickens\"", className: "text-white/50 italic" }],
        [
          { text: "Letters placed in " },
          { text: "\" \"", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " marks are called " },
          { text: "strings", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ". The " },
          { text: "%", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " inside a string inserts an outside value. " },
          { text: "%d", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " means the inserted value is a number." },
        ],
        [
          { text: "Count the correct number of chickens around each coop, store them in " },
          { text: "left_coup", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " and " },
          { text: "right_coup", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ", then use " },
          { text: "speak()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " at each X mark to complete the level." },
        ],
      ],
      instructions: [
        [
          {
            text: "Зорилго",
            className: "uppercase font-bold text-3xl",
          },
        ],
        [
          {
            text: "Тахиануудыг дуудаад торгоолон бүрийн эргэн тойрон дахь тахианы тоог тэмдэглэцгээе!",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Баруун талын бараан X тэмдэг рүү очоод ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр тахиануудаа дууд. ",
          },
          {
            text: "“Chirp”",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " гэх үгийг 10 дахин үржүүлбэл 10 удаа жиргэж байгаа мэт сонсогдоно, иймэрхүү: ",
          },
          {
            text: "player.speak(“Chirp” * 10)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Ингэж дуудвал торгоолон дотор нэг ч тахиа үлдэхгүй, бүгд гараад ирнэ шүү!",
          },
        ],
        [
          {
            text: "Одоо торгоолон бүрийн эргэн тойрон дахь тахиануудыг тоолоод, тоонуудыг нь ",
          },
          {
            text: "left_coup",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: "right_coup",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " гэсэн хувьсагчдад хадгал.",
          },
        ],
        [
          {
            text: "Хувьсагчдаа үүсгэсэн үү? Дараа нь торгоолон бүрийн өмнөх X тэмдэг рүү алхаад хувьсагчаа ашиглан тахианы тоогоо зарлана. ",
          },
          {
            text: "“Right Coup has %d Chickens”",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " гэсэн мөрийг бичнэ — ",
          },
          {
            text: "%d",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " хэсэгт тоо орлоно. Ингээд ард нь ямар хувьсагчийг оруулахыг зааж өгнө: ",
          },
          {
            text: "% (right_coup)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Жишээ нь:",
          },
        ],
        [
          {
            text: "right_coup = 2",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: 'player.speak("Right Coup has %d Chickens" % (right_coup))',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "# Энэ нь дэлгэцэнд “Right Coup has 2 Chickens” гэж гарна",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "Тайлбарлая — ",
          },
          {
            text: "“ ”",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " хашилтанд бичсэн үсгүүдийг ",
          },
          {
            text: "strings",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " гэдэг. Тэр ",
          },
          {
            text: "%",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " тэмдэг нь гадны утгыг string дотор оруулж байгааг заадаг — энэ нь кодын нэг хэсэг. ",
          },
          {
            text: "%d",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нь тоон утга орно гэсэн үг.",
          },
        ],
        [
          {
            text: "Зүүн ба баруун торгоолон дахь тахианы тоог зөв тоолоод ",
          },
          {
            text: "left_coup",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: "right_coup",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " хувьсагчдад хадгал. Дараа нь X тэмдгүүд рүү алхаад ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр зөв тоогоо зарлаад түвшнийг дуусга. Амжилт хүсье!",
          },
        ],
      ],
    },
    {
      subtitle: "Constants and Practice",
      level: "Level 4",
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Take the basket of eggs, store them in containers, then address how many eggs you stored.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [
          { text: "Constants are similar to variables except they have a pre-assigned value that cannot be changed. In this exercise you'll use a constant named " },
          { text: "egg_basket", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " which holds an unknown number of eggs." },
        ],
        [
          { text: "Create two variables: " },
          { text: "bag1", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " and " },
          { text: "bag2", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ". Store half the eggs in each bag using division: " },
          { text: "bag1 = egg_basket/2", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: "." },
        ],
        [
          { text: "Head to the dark X marks in front of the containers and use the " },
          { text: "place()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function to put the bags in each container: " },
          { text: "player.place(bag1)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: "." },
        ],
        [
          { text: "Then head to the light X marks in front of the tables and use the " },
          { text: "speak()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function to report the egg counts." },
        ],
        [
          { text: "At the first light X mark say the total: " },
          { text: "player.speak(\"there are %d eggs\" % (egg_basket))", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ". At the next, report each container: " },
          { text: "player.speak(\"there are %d eggs in bag 1 and %d in bag 2\" % (bag1, bag2))", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: "." },
        ],
      ],
      instructions: [
        [
          {
            text: "Зорилго",
            className: "uppercase font-bold text-3xl",
          },
        ],
        [
          {
            text: "Сагс дүүрэн өндгөө авчраад савнуудад хадгалж, хэдэн өндөг байгааг хэлцгээе!",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Константууд нь хувьсагчтай маш төстэй, гэхдээ эхэндээ л утга өгөгддөг бөгөөд дараа нь өөрчлөгдөх боломжгүй юм. Энэ даалгаварт ",
          },
          {
            text: "egg_basket",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " гэсэн константтай ажиллана — сагсан дахь өндгийн тоог илэрхийлэх боловч нарийн тоо нь нууц хэвээр!",
          },
        ],
        [
          {
            text: "Савнуудад зориулж 2 хувьсагч үүсгэ: ",
          },
          {
            text: "bag1",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "bag2",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Операторыг ашиглан өндгөө тэн хагасаар нь хуваагаад уут болгонд хий, иймэрхүү: ",
          },
          {
            text: "bag1 = egg_basket/2",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Уутуудаа бэлдсэн үү? Одоо савнуудын өмнөх бараан X тэмдгүүд рүү алхаад ",
          },
          {
            text: "place()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр уут бүрээ тус тусын саванд нь хий, иймэрхүү: ",
          },
          {
            text: "player.place(bag1)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Үүний дараа ширээнүүдийн өмнөх цайвар X тэмдгүүд рүү очоод ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр хэдэн өндөгтэй байгаагаа тайлагна.",
          },
        ],
        [
          {
            text: "Эхний цайвар X тэмдгээс нийт хэдэн өндөгтэй болохоо хэл: ",
          },
          {
            text: 'player.speak("there are %d eggs" % (egg_basket))',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Дараагийн цайвар X тэмдгээс уут тус бүрд хэдэн өндөг байгааг хэл, иймэрхүү: ",
          },
          {
            text: 'player.speak("there are %d eggs in bag 1 and %d in bag 2" % (bag1, bag2))',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Бүгдийг амжилттай дуусгавал чи үйлдлийн тэмдгүүдийн жинхэнэ мастер боллоо шүү!",
          },
        ],
      ],
    },
  ],
};

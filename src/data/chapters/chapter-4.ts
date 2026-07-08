import type { Chapter } from "./types";

export const chapter4: Chapter = {
  chapter: "CHAPTER 4",
  title: "LEARNING LOOPS",
  levels: [
    {
      subtitle: "While Loops",
      level: "Level 1",
      instructionsEn: [
        [
          { text: "Loops are sequences you can use to repeat the same code. This makes it easier for you to complete tasks in the game without having to write long lists of codes. There are two types of loops: " },
          { text: "while", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loops and " },
          { text: "for", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loops which we will be exploring in the following levels." },
        ],
        [
          { text: "There are five (5) eggs in this map, you can pick them up with only a few lines of code using a " },
          { text: "while", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loop. Try to grab all the eggs by repeating the same two lines of code four times." },
        ],
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Grab all the eggs in the barn by only writing six (6) lines of code, using the while loop.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "The chickens laid their eggs everywhere! Walk through the barn and collect all the eggs quick!" }],
        [{ text: "In order to reduce the amount of code you need to write and make coding a lot less tedious you can use loops! These are sequences that allow you to repeat the same code eliminating the necessity for writing the same code over and over again." }],
        [
          { text: "A " },
          { text: "while", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loop is one such loop where you can set code to repeat while a certain condition is present. Set up a variable named " },
          { text: "count", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " to determine how many times you wish for code to loop then set it as a condition for the loop." },
        ],
        [{ text: "count = 0", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "while count < 4:", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "    [Code you wish to loop four times]", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "    count += 1", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [
          { text: "In this example the " },
          { text: "while", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loop checks if " },
          { text: "count", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " is less " },
          { text: "<", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " than 4. " },
          { text: "count", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " starts off as 0 and increases +1 each cycle until it reaches 4. Any code you insert indented under the " },
          { text: "while", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loop will be repeated, in this case four times. Be warned, loops can run forever if not stopped, so be sure to not delete or comment the variable " },
          { text: "count", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ", otherwise it may trigger an error." },
        ],
        [{ text: "Try it out! Collect all five (5) eggs and complete the level by only having six (6) lines of code total written in the code editor." }],
      ],
      instructions: [
        [
          {
            text: "Давталтууд (loops) нь ижил кодоо дахин дахин ажиллуулахад ашигладаг дараалал юм. Ингэснээр тоглоом дахь даалгавруудаа олон мөр код бичилгүйгээр амархан гүйцэтгэж болно. Давталт нь 2 төрөлтэй: ",
          },
          {
            text: "while",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталт ба ",
          },
          {
            text: "for",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталт — дараагийн түвшнүүдэд эдгээрийг судална.",
          },
        ],
        [
          {
            text: "Энэ газрын зураг дээр 5 өндөг байна. Цөөн хэдэн мөр кодоор тэдгээрийг ",
          },
          {
            text: "while",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталт ашиглан цуглуулж болно. Ижил 2 мөр кодыг 4 удаа давтаж бүх өндгийг цуглуул.",
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
            text: "While давталт ашиглан зөвхөн 6 мөр код бичээд жүчээн доторх бүх өндгийг цуглуулаад түвшнийг дуусга.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Тахианууд өндгөө хаа сайгүй тавьчихсан байна! Жүчээгээр явж бүх өндгийг хурдхан цуглуул!",
          },
        ],
        [
          {
            text: "Бичих кодоо цөөлөх, программчлалыг хялбарчлахын тулд давталтуудыг ашиглаж болно! Эдгээр нь ижил кодыг олон удаа бичихгүйгээр давтан ажиллуулах дараалал юм.",
          },
        ],
        [
          {
            text: "while",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталт нь тодорхой нөхцөл биелэгдэж байх хооронд кодыг давтан ажиллуулдаг. ",
          },
          {
            text: "count",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй хувьсагч үүсгэн кодыг хэдэн удаа давтахыг тохируулж, түүнийг давталтын нөхцөл болгон ашиглана.",
          },
        ],
        [
          {
            text: "count = 0",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "while count < 4:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    [Давтахыг хүссэн код]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    count += 1",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Энэ жишээн дээр ",
          },
          {
            text: "while",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталт нь ",
          },
          {
            text: "count",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нь 4-өөс бага байгаа эсэхийг шалгана. ",
          },
          {
            text: "count",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нь 0-ээс эхэлж, давталт бүрд +1-ээр нэмэгдэнэ. 4-д хүрэх хүртэл давтана. ",
          },
          {
            text: "while",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталт доор догол мөрөөр бичсэн код бүр давтагдана — энэ тохиолдолд 4 удаа. Анхаар, давталтууд зогсоохгүй бол үүрд ажиллаж болзошгүй тул ",
          },
          {
            text: "count",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " хувьсагчийг бүү устга, тайлбар болгож болохгүй, эс бөгөөс алдаа гарч болзошгүй.",
          },
        ],
        [
          {
            text: "Туршаад үзээрэй! Бүх 5 өндгийг цуглуулж, нийт 6 мөр кодоор түвшнийг дуусга.",
          },
        ],
      ],
    },
    {
      subtitle: "For Loop",
      level: "Level 2",
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Walk through the hedge maze to reach exit using for loop with no more than six (6) lines of code.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [
          { text: "In order to get through the maze using no more than 6 lines of code, you need to use " },
          { text: "for", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loops. This is similar to " },
          { text: "while", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loops but functions a bit differently. " },
          { text: "for", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loops can only be done a predefined amount of times rather than using a condition like " },
          { text: "while", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loops." },
        ],
        [{ text: "for x in range(3):", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "    player.move_forward(2)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [
          { text: "In this example the code " },
          { text: "player.move_forward(2)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " is repeated 3 times using a " },
          { text: "for", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loop. The " },
          { text: "x", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " is a generic variable that stores how many times the for loop has cycled. The " },
          { text: "range()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " is how many times you want the loop to repeat in total. All indented code you put under the " },
          { text: "for", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loop code will be repeated." },
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
            text: "For давталт ашиглан 6-аас илүүгүй мөр кодоор бутны төөрдөг байшингаар явж гарц руу хүр.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Энэ төөрдөг байшингаар 6-аас илүүгүй мөр кодоор гарахын тулд ",
          },
          {
            text: "for",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталтыг ашиглах хэрэгтэй. Энэ нь ",
          },
          {
            text: "while",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталттай төстэй ч арай өөрөөр ажилладаг. ",
          },
          {
            text: "for",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталт нь ",
          },
          {
            text: "while",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталт шиг нөхцөл ашиглахын оронд урьдчилан тохируулсан тооны дагуу л давтана.",
          },
        ],
        [
          {
            text: "for x in range(3):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    player.move_forward(2)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Энэ жишээнд ",
          },
          {
            text: "player.move_forward(2)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " код ",
          },
          {
            text: "for",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталтаар 3 удаа давтагдана. ",
          },
          {
            text: "x",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нь давталт хэдэн удаа эргэлдсэнийг хадгалдаг ерөнхий хувьсагч юм. ",
          },
          {
            text: "range()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нь давталтыг нийт хэдэн удаа давтахыг заана. ",
          },
          {
            text: "for",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталтын доор догол мөрөөр бичсэн бүх код давтагдана.",
          },
        ],
      ],
    },
    {
      subtitle: "More Complex Looping",
      level: "Level 3",
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Walk through field and water crops on your way to the exit while only using no more than fourteen (14) lines of code.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [
          { text: "To complete this level using fourteen (14) or less lines of code you must use either the " },
          { text: "for", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " or " },
          { text: "while", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loops." },
        ],
        [
          { text: "Use the: " },
          { text: "move_forward()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ", " },
          { text: "turn_left()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ", " },
          { text: "turn_right()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " functions inside the loop to move through the field. Along the way, use the " },
          { text: "water()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function when standing on an X mark and facing crops to water them." },
        ],
        [{ text: "Remember, loops are written like this:" }],
        [{ text: "# While loop", className: "text-white/50 italic" }],
        [{ text: "count = 0", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "while count < [Number of times you wish while code to loop]:", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "  [Code you wish to loop]", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "  count += 1", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "# for loop", className: "text-white/50 italic" }],
        [{ text: "for x in range([Number of times you wish for code to loop]):", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "  [Code you wish to loop]", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "Use whichever loop you like, there are setups in the code editor for both so erase the one you are not going to use." }],
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
            text: "14-өөс илүүгүй мөр код ашиглан талбайгаар явж ургацаа услаад гарц руу хүр.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Энэ түвшнийг 14 ба түүнээс цөөн мөр кодоор дуусгахын тулд ",
          },
          {
            text: "for",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " эсвэл ",
          },
          {
            text: "while",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталтуудыг ашиглах ёстой.",
          },
        ],
        [
          {
            text: "Давталт дотор ",
          },
          {
            text: "move_forward()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "turn_left()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "turn_right()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцуудыг ашиглаж талбайг туул. Замдаа X тэмдэг дээр зогсоод ургац руу харж байхдаа ",
          },
          {
            text: "water()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр услана.",
          },
        ],
        [
          {
            text: "Сануулга: Давталтуудыг ингэж бичдэг:",
          },
        ],
        [
          {
            text: "# While давталт",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "count = 0",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "while count < [Давтах тоо]:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    [Давтах код]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    count += 1",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "# For давталт",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "for x in range([Давтах тоо]):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    [Давтах код]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Аль дуртай давталтаа ашиглаж болно. Код засварлагчид хоёулаагийн бэлтгэл байгаа тул ашиглахгүй давталтаа устгаарай.",
          },
        ],
      ],
    },
    {
      subtitle: "For Loop Sequence",
      level: "Level 4",
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Collect grains and make your way out of the maze by writing no more than four (4) lines of code.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "You've found yourself lost in the middle of a maze, use loops in order to collect the grains in the field and exit the maze." }],
        [
          { text: "As you can see from the map the maze is uneven so you can't just repeat a very specific line of code like in previous levels. For this you need to make full use of the " },
          { text: "for", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loop's set variable." },
        ],
        [{ text: "for x in range(4):", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "    player.move_forward(x + 1)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "# +1 is added because x starts out as 0 we want to start at 1", className: "text-white/50 italic" }],
        [
          { text: "The variable set as " },
          { text: "x", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " checks how many cycles the for loop has gone through. You can set this variable to whatever name you want but by default we name it as " },
          { text: "x", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " for ease of use. By adding the variable used in the " },
          { text: "for", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loop to the " },
          { text: "move_forward()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function, this will allow you to move your character one more step each time the loop cycles." },
        ],
        [
          { text: "For example, in the above code the " },
          { text: "range()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " is set to four 4, that means that by adding the variable to the " },
          { text: "move_forward()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function the movement will increment an extra step each time the loop cycles, and would look like this in practice:" },
        ],
        [{ text: "# This is the same output as the previous code shown", className: "text-white/50 italic" }],
        [{ text: "move_forward(1)  # First Loop", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "move_forward(2)  # Second Loop", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "move_forward(3)  # Third Loop", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "move_forward(4)  # Fourth Loop", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [
          { text: "Use the variable from the " },
          { text: "for", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " loop inside the " },
          { text: "move_forward()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " code to increment your movement each loop and collect all the grains to complete the level. Remember, this must be done by writing no more than four (4) lines of code." },
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
            text: "4-өөс илүүгүй мөр код бичээд үр тариагаа цуглуулж төөрдөг байшингаас гар.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Чи төөрдөг байшингийн дунд төөрчихлөө. Давталтуудыг ашиглаад талбайн үр тариагаа цуглуулан төөрдөг байшингаас гар.",
          },
        ],
        [
          {
            text: "Газрын зургаас харвал энэ төөрдөг байшин жигд биш, тиймээс өмнөх түвшнүүдэд шиг яг ижил кодыг давтаж чадахгүй. Үүний тулд ",
          },
          {
            text: "for",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталтын тохируулсан хувьсагчийг бүрэн ашиглах хэрэгтэй.",
          },
        ],
        [
          {
            text: "for x in range(4):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    player.move_forward(x + 1)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "# +1 нэмэгдсэн шалтгаан нь x нь 0-ээс эхэлдэг учраас, бид 1-ээс эхлэхийг хүсэж байгаа",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "x",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " гэж тохируулсан хувьсагч нь for давталт хэдэн удаа эргэлдсэнийг шалгадаг. Энэ хувьсагчийг хүссэн нэрээрээ тохируулж болох ч ихэвчлэн хялбар байлгахын тулд ",
          },
          {
            text: "x",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " гэж нэрлэдэг. ",
          },
          {
            text: "for",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталтад ашигласан хувьсагчаа ",
          },
          {
            text: "move_forward()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцэд нэмснээр давталт бүрд нэг алхам илүү хөдлөх боломжийг олгоно.",
          },
        ],
        [
          {
            text: "Жишээлбэл, дээрх кодод ",
          },
          {
            text: "range()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нь 4 гэж тохируулагдсан байна. Энэ нь ",
          },
          {
            text: "move_forward()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцэд хувьсагчийг нэмэхэд давталт эргэх бүрд хөдөлгөөн нэг алхмаар нэмэгдэнэ гэсэн үг. Практикт ингэж харагдана:",
          },
        ],
        [
          {
            text: "# Энэ нь өмнөх кодтой ижил үр дүн гаргана",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "move_forward(1)  # Эхний давталт",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "move_forward(2)  # Хоёр дахь давталт",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "move_forward(3)  # Гурав дахь давталт",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "move_forward(4)  # Дөрөв дэх давталт",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "For давталтын хувьсагчийг ",
          },
          {
            text: "move_forward()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " код дотор ашиглаж давталт бүрд хөдөлгөөнөө нэмэгдүүлж, бүх үр тариагаа цуглуулаад түвшнийг дуусга. Санаарай, үүнийг 4-өөс илүүгүй мөр кодоор хийх ёстой.",
          },
        ],
      ],
    },
  ],
};

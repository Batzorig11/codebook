import type { Chapter } from "./types";

export const chapter1: Chapter = {
  chapter: "CHAPTER 1",
  title: "INTRODUCTION TO PYTHON",
  levels: [
    {
      subtitle: "Starting Out",
      level: "Level 1",
      instructionsEn: [
        [
          {
            text: "Coding for kids is a learning platform that uses a game to teach Python programming!",
          },
        ],
        [
          { text: "Use the Code Editor below and add the line: " },
          {
            text: "player.move_forward()",
            className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          { text: " to make your way to the exit. This code will allow you to take one step forward." },
        ],
        [
          { text: "Press the " },
          {
            text: "Run",
            className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          { text: " button to execute the code you have written in the code editor." },
        ],
      ],
      instructions: [
        [
          {
            text: "Codingforkids platform нь Python програмчлалыг тоглоомоор заадаг сургалтын платформ юм!",
          },
        ],
        [
          {
            text: "Code Editor-ийг ашиглан дараах мөрийг нэмнэ үү: ",
          },
          {
            text: "player.move_forward()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " — ингэснээр гарц руу хүрнэ. Энэ код танд нэг алхам урагш алхах боломжийг олгоно.",
          },
        ],
        [
          { text: "Code Editor дээр бичсэн кодоо ажиллуулахын тулд " },
          {
            text: "Run",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " товчийг дарна уу.",
          },
        ],
      ],
    },
    {
      subtitle: "Movement with Functions",
      level: "Level 2",
      instructionsEn: [
        [{ text: "Traverse the forest path and reach the exit to complete the level.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [
          { text: "How can you get across the forest? By using " },
          { text: "Functions", className: "font-bold" },
          { text: " of course!" },
        ],
        [
          { text: "Functions", className: "font-bold" },
          { text: " are useful code commands that influence the world around you. These commands are typed in the editor below." },
        ],
        [
          { text: "In Python, functions are divided into modules. The " },
          { text: "player", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " module is used to interact with the game world. This is why we need to 'import' the " },
          { text: "player", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " module to use its functions." },
        ],
        [{ text: "Functions are executed by writing 'player' then a dot, followed by the function name and parentheses." }],
        [{ text: "Functions are executed one by one, from top to bottom — meaning that the order is important." }],
        [{ text: "The following functions are available to you:" }],
        [
          { className: "ml-10", text: "• To move forward, type: " },
          { text: "player.move_forward()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
        ],
        [
          { className: "ml-10", text: "• To turn left, type: " },
          { text: "player.turn_left()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
        ],
        [
          { className: "ml-10", text: "• To turn right, type: " },
          { text: "player.turn_right()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
        ],
        [{ text: "The white X mark after your first move is your start position; the star at the end of the path is your goal." }],
        [{ text: "Once you finish writing your code, press the Run button to execute all commands one by one." }],
        [{ text: "Try it out!" }],
      ],
      instructions: [
        [
          {
            text: "Чи ойд төөрчихлөө! Python кодын эхний мөрүүдээ бичиж, гарах замаа олоод фермдээ эргэн очоорой!",
          },
        ],
        [
          {
            text: "Python бол тоглоом зэрэг олон төрлийн апп бүтээхэд ашиглаж болох олон талт програмчлалын хэл юм!",
          },
        ],
        [
          {
            text: "Чиний эхний даалгавар бол код ашиглан од руу хүрч, түвшнийг дуусгах явдал!",
          },
        ],
        [
          {
            text: "Хэрэв гацвал дэлгэцийн баруун дээд буланд байрлах ",
          },
          {
            text: "Help",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " товчийг дарж үзээрэй, эсвэл тоглоомд ашиглагдсан бүх кодын зурагт тайлбарыг үзэхийн тулд ",
          },
          {
            text: "Code Book",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " товчийг дарна уу.",
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
            text: "Ойн замаар явж, гарц руу хүрч түвшнийг дуусга.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Ойг хэрхэн туулах вэ? Мэдээж ",
          },
          {
            text: "Функцууд ",
            className: "font-bold",
          },
          {
            text: "ашиглан!",
          },
        ],
        [
          {
            text: "Функцууд",
            className: "font-bold",
          },
          {
            text: " нь эргэн тойрны ертөнцөд нөлөөлдөг хэрэгтэй код командууд юм. Эдгээр командыг доорх засварлагч дээр бичнэ.",
          },
        ],
        [
          {
            text: "Python програмчлалын хэлэнд функцууд нь модулиудад хуваагддаг. ",
          },
          {
            text: "player",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " модуль нь тоглоомын ертөнцтэй харилцахад ашиглагдана. Тиймээс бид түүний функцуудыг ашиглахын тулд ",
          },
          {
            text: "player",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " модулийг 'import' хийх шаардлагатай.",
          },
        ],
        [
          {
            text: "Функцуудыг ажиллуулахын тулд 'player' гэсэн үгийг бичээд, цэг тавьж, түүний араас функцийн нэр болон хаалтуудыг бичнэ.",
          },
        ],
        [
          {
            text: "Функцууд нь дээрээс доошоо нэг нэгээрээ ажилладаг — өөрөөр хэлбэл дараалал чухал юм.",
          },
        ],
        [
          {
            text: "Танд дараах функцууд ашиглах боломжтой:",
          },
        ],
        [
          {
            className: "ml-10",
            text: "• Урагш хөдлөхийн тулд дараахыг бичнэ: ",
          },
          {
            text: "player.move_forward()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            className: "ml-10",
            text: "• Зүүн тийш эргэхийн тулд дараахыг бичнэ: ",
          },
          {
            text: "player.turn_left()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            className: "ml-10",
            text: "• Баруун тийш эргэхийн тулд дараахыг бичнэ: ",
          },
          {
            text: "player.turn_right()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Анхны алхмын дараа харагдах цагаан X тэмдэг нь эхлэх байрлалыг, замын төгсгөлд байгаа од нь эцсийн зорилгыг илэрхийлнэ.",
          },
        ],
        [
          {
            text: "Кодоо бичиж дуусаад Run товчийг дарж бүх командыг нэг нэгээр нь ажиллуулна уу.",
          },
        ],
        [
          {
            text: "Туршаад үзээрэй!",
          },
        ],
      ],
    },
    {
      subtitle: "Collecting items",
      level: "Level 3",
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Collect all four berries in the map to complete the level.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "Let's get something to eat, those berries look tasty." }],
        [{ text: "You can walk over them to eat them — you may think it will take a lot of coding but there's an easier way." }],
        [
          { text: "Write the number of steps you'd like to take by adding a number inside the parentheses of the " },
          { text: "move_forward()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function to increase the number of steps." },
        ],
        [
          { text: "This is called a " },
          { text: "function argument", className: "font-bold" },
          { text: " — a value you pass to a function to influence its behavior. For " },
          { text: "move_forward", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ", the argument is the number of steps you want to take." },
        ],
        [{ text: "Functions can also receive more than one argument, but for now we will only use one." }],
        [
          { text: "It would look something like this: " },
          { text: "player.move_forward(3)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ". Helpful right? You're welcome!" },
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
            text: "Газрын зураг дээрх бүх дөрвөн жимсийг цуглуулж, түвшнийг дуусга.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Идэх юм олъё, тэр жимснүүд амттай харагдаж байна.",
          },
        ],
        [
          {
            text: "Тэдгээрийг идэхийн тулд дээгүүр нь алхаж болно — их код бичих шаардлагатай юм шиг санагдаж болох ч илүү хялбар арга бий.",
          },
        ],
        [
          {
            text: "Алхах гэж буй алхмынхаа тоог бичихийн тулд ",
          },
          {
            text: "move_forward()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийн хаалтан дотор тоо нэмж, хийх алхмын тоогоо нэмэгдүүлнэ.",
          },
        ],
        [
          {
            text: "Үүнийг функцийн аргумент (function argument) гэж нэрлэдэг. Функцийн аргумент гэдэг нь функцийн үйлдэлд нөлөөлөхийн тулд түүнд дамжуулдаг утгыг хэлнэ. ",
          },
          {
            text: "move_forward",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийн хувьд аргумент нь таны хийхийг хүссэн алхмын тоо юм.",
          },
        ],
        [
          {
            text: "Функцууд нэгээс олон аргумент хүлээн авах боломжтой ч одоохондоо бид ганцхан аргумент ашиглана.",
          },
        ],
        [
          {
            text: "Ингэж харагдах болно: ",
          },
          {
            text: "player.move_forward(3)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
      ],
    },
    {
      subtitle: "Pushing objects",
      level: "Level 4",
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Push rocks out of your way so you may walk to the exit and complete the level.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "Oh no, there's rocks in the way to the exit — no worries, you can push them." }],
        [
          { text: "Use the " },
          { text: "push()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function to push the rocks out of your way. Be sure to be facing the rock before you give the command." },
        ],
        [
          { text: "Make your way to the star to complete the level, push all the rocks in the way like this: " },
          { text: "player.push()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
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
            text: "Замд саад болж буй чулуунуудыг түлхэж хөдөлгөөд гарц руу алхаж, түвшнийг дуусга.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Өө үгүй ээ, гарц руу явах замд чулуунууд хаасан байна. Санаа зовох хэрэггүй — чи тэднийг түлхэж болно.",
            className: "",
          },
        ],
        [
          {
            text: "Замд саад болж буй чулуунуудыг түлхэхийн тулд ",
            className: "",
          },
          {
            text: "push()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг ашиглана. Команд өгөхөөс өмнө чулуу руу харж байгаа эсэхээ шалгаарай.",
          },
        ],
        [
          {
            text: "Од руу хүрч түвшнийг дуусга. Замд байгаа бүх чулуунуудыг ингэж түлх: ",
            className: "",
          },
          {
            text: "player.push().",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
      ],
    },
    {
      subtitle: "Printing on screen",
      level: "Level 5",
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Walk to the three X marks and speak \"Hello\" to complete the level.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [
          { text: "Head to the three X marks on the ground and call out using the " },
          { text: "speak()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function while standing on top of them." },
        ],
        [
          { text: "To call out " },
          { text: "Hello", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ", use the " },
          { text: "speak", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function as follows:" },
        ],
        [{ text: "player.speak(\"Hello\")", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
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
            text: "Гурван X тэмдэг дээр очиж “Hello” гэж хэлж, түвшнийг дуусга.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Газар дээрх гурван X тэмдэг рүү очоод, тэдгээрийн дээр зогсож байхдаа ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг ашиглан дуугарна уу.",
          },
        ],
        [
          {
            text: "Hello",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },

          {
            text: " гэж дуугарахын тулд ",
          },
          {
            text: "speak",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг дараах байдлаар ашиглана:",
          },
        ],
        [
          {
            text: "player.speak('Hello')",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
      ],
    },
    {
      subtitle: "Building objects",
      level: "Level 6",
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Collect logs to build a bridge so you may walk to the exit and complete the level.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "The logs present in the map could be used to build a bridge to get to the exit." }],
        [{ text: "If you walk over the logs you can collect them! You can see how many you've collected in the top right corner of the screen." }],
        [
          { text: "When you collect 4 logs head for the X mark and build a bridge. Use the " },
          { text: "build()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function — enter the word \"bridge\" in the parentheses to build the missing piece. It should look like this: " },
          { text: "player.build(\"bridge\")", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
        ],
        [{ text: "Once the path is built, head for the exit represented by the star at the end of the level." }],
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
            text: "Мод (log) цуглуулан гүүр барьж, гарц руу алхаад түвшнийг дуусга.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Газрын зураг дээрх мод (log)-ыг ашиглан гарц руу хүрэх гүүр барьж болно.",
          },
        ],
        [
          {
            text: "Модны дээгүүр алхвал цуглуулж болно! Хэдийг цуглуулсанаа дэлгэцийн баруун дээд буланд харж болно.",
          },
        ],
        [
          {
            text: "4 мод цуглуулсаныхаа дараа X тэмдэг рүү очиж гүүр барь. ",
          },
          {
            text: "build()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг ашиглан, функцийн хаалтан дотор “bridge” гэдэг үгийг бичиж дутуу хэсгийг барина. Ингэж харагдах ёстой: ",
          },
          {
            text: "player.build('bridge').",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Зам баригдсаны дараа түвшний төгсгөлд байгаа одоор тэмдэглэгдсэн гарц руу яв.",
          },
        ],
      ],
    },
    {
      subtitle: "Apply what you’ve learned",
      level: "Level 7",
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Push rocks, collect logs and build bridges in order to walk to the exit and complete the level.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "Your path to the exit — represented by the star at the end of the level — is blocked by rocks and incomplete bridges." }],
        [
          { text: "Use the " },
          { text: "push()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function to push rocks in the direction you’re facing. Once you collect four logs, head for the X marks and use the " },
          { text: "build()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function to get across the water." },
        ],
        [
          { text: "To complete the bridges, use " },
          { text: "build()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " and write " },
          { text: "bridge", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ". You must enter the word \"bridge\" exactly as written to build successfully." },
        ],
        [
          { text: "In case you need a refresher: to push write " },
          { text: "player.push()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " and to build a bridge after collecting four logs write " },
          { text: "player.build(\"bridge\")", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
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
            text: "Чулуу түлхэж, мод цуглуулж, гүүр барин гарц руу алхаад түвшнийг дуусга.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Түвшний төгсгөлд байгаа одоор тэмдэглэгдсэн гарц руу очих замыг чулуу болон дутуу гүүрнүүд хааж байна.",
          },
        ],
        [
          {
            text: "Харж байгаа чиглэлдээ чулуунуудыг түлхэхийн тулд ",
          },
          {
            text: "push()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг ашигла. Дөрвөн мод цуглуулсаны дараа X тэмдэг рүү очиж, усыг гатлахын тулд ",
          },
          {
            text: "build()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг ашигла.",
          },
        ],
        [
          {
            text: "Гүүрнүүдийг дуусгахын тулд ",
          },
          {
            text: "build()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг ашиглан ",
          },
          {
            text: "bridge",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " гэж бич. Амжилттай барихын тулд “bridge” гэдэг үгийг яг бичсэнээр нь оруулах ёстой.",
          },
        ],
        [
          {
            text: "Эргэн санахад: түлхэхийн тулд ",
          },

          {
            text: "player.push()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },

          {
            text: " гэж бичнэ, харин дөрвөн мод цуглуулаад гүүр барихын тулд ",
          },

          {
            text: "player.build('bridge')",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
      ],
    },
  ],
};

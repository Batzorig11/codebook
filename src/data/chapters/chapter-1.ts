import type { Chapter } from "./types";

export const chapter1: Chapter = {
  chapter: "CHAPTER 1",
  title: "INTRODUCTION TO PYTHON",
  levels: [
    {
      subtitle: "Starting Out",
      level: "Level 1",
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

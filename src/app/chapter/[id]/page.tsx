"use client";

import { use, useState } from "react";
import Link from "next/link";

type InstructionSegment = { text: string; className?: string };
type Instructions = InstructionSegment[][];

const chapterData: Record<
  string,
  {
    title: string;
    chapter: string;
    levels: { subtitle: string; level: string; instructions: Instructions }[];
  }
> = {
  "1": {
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
  },
  "2": {
    chapter: "CHAPTER 2",
    title: "VARIABLES AND TYPES",
    levels: [
      {
        subtitle: "Watering objects",
        level: "Level 1",
        instructions: [
          [
            {
              text: "Чи фермд хүрч ирлээ! Өнөөдөр бид “хувьсагч” (variable) гэдэг гайхамшигтай зүйлийг хамтдаа сурцгаана! Хувьсагч гэдэг нь тоглоом дахь юмнуудад өөрийн нэр өгч, дараа нь тэр нэрээр нь хялбархан дуудаж ашигладаг арга шүү.",
            },
          ],
          [
            {
              text: "Хувьсагчийг нарийн сурахаасаа өмнө ферм яаж ажилладгийг бага зэрэг судлая. Газрын зургийн баруун доор байгаа усны савыг (canteen) аваад 3 тэвшийг дүүргэж өгөх юм байна!",
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
              text: "Усны савыг авч 3 тэвшийг усаар дүүргэж түвшнийг дуусга.",
              className: "pl-10 ml-10 border-l-4 border-white border-solid",
            },
          ],
          [
            {
              text: "Усны савыг шүүрэн аваад гахайн бяцхан үрсэд зориулж тэвшнүүдэд нь ус цутгаж өгье!",
            },
          ],
          [
            {
              text: "Газар дээр гахайчдын усны 3 тэвшний урд X тэмдэг байрлаж байна. Эхлээд усны сав руу нь очиж аваад, дараа нь X тэмдэг бүр рүү алхаж очоод тэвшнүүдийг дүүргэцгээе.",
            },
          ],
          [
            {
              text: "Тэвш рүүгээ харан зогсоод ",
            },
            {
              text: "water()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: " функцийг ашиглавал ус цутгана. Бичихдээ иймэрхүү харагдана: ",
            },
            {
              text: "player.water()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
          ],
        ],
      },
      {
        subtitle: "Commenting code",
        level: "Level 2",
        instructions: [
          [
            {
              text: "Зорилго",
              className: "uppercase font-bold text-3xl",
            },
          ],
          [
            {
              text: "Код засварлагч дээрх тайлбаруудыг өөрчилж гарц руу хүр!",
              className: "pl-10 ml-10 border-l-4 border-white border-solid",
            },
          ],
          [
            {
              text: "Урагшаа харвал зам амархан харагдаж байгаа ч маш олон саад бий. Хэд хэдэн зам харагдаж байгаа юм шиг, гэхдээ үнэндээ ганц л жинхэнэ зам байгаа шүү.",
            },
          ],
          [
            {
              text: "Код засварлагчид гарц руу хүрэх код аль хэдийн бичээд тавьчихсан байгаа — гэхдээ хэрэггүй мөрүүдтэй холилдож, зарим нь тайлбар (comment) болоод ажиллахгүй болсон байна. Гарц руу хүрэхийн тулд тайлбар яаж нэмэх, хасахыг сурах хэрэгтэй болжээ!",
            },
          ],
        ],
      },
      {
        subtitle: "Collecting resources",
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
              text: "Худгаас ус аваад саваа дүүргээд 5 ургацыг бүгдийг нь усалж түвшнийг дуусга!",
              className: "pl-10 ml-10 border-l-4 border-white border-solid",
            },
          ],
          [
            {
              text: "Ургац хатахаас өмнө хурдхан худгаас ус авчирч усалцгаая!",
            },
          ],
          [
            {
              text: "X тэмдэгтэй худаг руу очоод усны савыг дүүргэнэ. Худаг руугаа харж зогсоод ",
            },
            {
              text: "collect()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: " функцийн хаалтан дотор “water” гэж бичихэд л болчихно — иймэрхүү: ",
            },
            {
              text: 'player.collect("water")',
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
          ],
          [
            {
              text: "Тэгээд газар дээрх X тэмдгүүд рүү очоод ургац руугаа харж байгаад ",
            },
            {
              text: "water()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: " функцийг ажиллуулна. Өмнөх түвшний адил шүү: ",
            },
            {
              text: "player.water()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: ".",
            },
          ],
          [
            {
              text: "Нийт 5 ургац усалах хэрэгтэй — амжилт хүсье!",
            },
          ],
        ],
      },
      {
        subtitle: "Opening and closing commands",
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
              text: "Хашааг нээж талбай руу ороод жүчээний 4 үүдийг бүгдийг нь хаагаад түвшнийг дуусга!",
              className: "pl-10 ml-10 border-l-4 border-white border-solid",
            },
          ],
          [
            {
              text: "Хэн нэг нь жүчээний үүдийг онгойлгоод мартчихсан юм байна! Үүдийг нь хурдхан хаахад нь туслая.",
            },
          ],
          [
            {
              text: "Жүчээ рүүгээ орохын тулд ",
            },
            {
              text: "open()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: " функцийг ашиглана — энэ нь өмнө сурсан функцуудтай яг л адилхан ажилладаг шүү. Жүчээний хаалганы X тэмдэг дээр очоод, үүд рүүгээ харж байгаад ингэж бич: ",
            },
            {
              text: "player.open()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
          ],
          [
            {
              text: "Орсныхоо дараа X тэмдэг бүр рүү очоод, үүд рүүгээ харж байгаад ",
            },
            {
              text: "close()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: " функцээр 4 үүдийг нэг нэгээр нь хаа. Бусад функцуудтай яг адилхан ажилладаг: ",
            },
            {
              text: "player.close()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
          ],
          [
            {
              text: "Амархан байна биз дээ?!",
            },
          ],
        ],
      },
      {
        subtitle: "Number variables",
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
              text: "Банз (planks), тоосго (bricks) цуглуулаад хувьсагчид хадгалж түвшнийг дуусга!",
              className: "pl-10 ml-10 border-l-4 border-white border-solid",
            },
          ],
          [
            {
              text: "Агуулах хараал ид замбараагүй болчихсон байна! Энд тэндгүй тарсан банз, тоосгонуудыг цуглуулахад нь хамтдаа туслая.",
            },
          ],
          [
            {
              text: "Ийм олон зүйлийг эмх цэгцтэй хадгалахад хувьсагч (variable) их тустай. Хувьсагч гэдэг нь юмнуудад өгдөг нэр бөгөөд дараа нь тэднийг хурдхан олж ашиглахад чинь туслана.",
            },
          ],
          [
            {
              text: "Бүх материалаа цуглуулаад дуусаад “planks” нэртэй хувьсагч үүсгэж, цуглуулсан банзныхаа тоог бичнэ. Тоосгонд ч яг адилхан хийнэ. Иймэрхүү бичээрэй:",
            },
          ],
          [
            {
              text: "planks = (цуглуулсан банзны тоо)",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
          ],
          [
            {
              text: "bricks = (цуглуулсан тоосгоны тоо)",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
          ],
          [
            {
              text: "Бичих тоо чинь яг чиний цуглуулсан банз, тоосгоны тоо байгаа шүү. Бүгдийг нь цуглуулж дуусаад л сайтар тоолоод бичээрэй!",
            },
          ],
        ],
      },
      {
        subtitle: "Placing objects",
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
              text: "Талбай дээрх улаан буудайг цуглуулаад хувьсагчид хадгал, авдарт нь байрлуулаад хаагаад түвшнийг дуусга!",
              className: "pl-10 ml-10 border-l-4 border-white border-solid",
            },
          ],
          [
            {
              text: "Талбай дээрх үр тариагаа бүгдийг цуглуулаад эмх цэгцтэй хадгалцгаая!",
            },
          ],
          [
            {
              text: "Бүх үр тариагаа түүсний дараа “wheat” гэж бичээд, цуглуулсан үрийнхээ тоог нэм — иймэрхүү хэлбэртэй байна:",
            },
          ],
          [
            {
              text: "wheat = (цуглуулсан үрийн тоо)",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
          ],
          [
            {
              text: "Хувьсагч чинь бэлэн болсон бол нээлттэй авдрын өмнөх X тэмдэг рүү очоод ",
            },
            {
              text: "place()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: " функцээр ургацаа хийж тавина. Хадгалмаар байгаа хувьсагчийнхаа нэрийг функцийн хаалтан дотор бичээд, авдар руугаа харж байгаад ингэж ашигла: ",
            },
            {
              text: "player.place(wheat)",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
          ],
          [
            {
              text: "Улаан буудайгаа хийж дууссаны дараа өмнөх бүлэгт сурсан ",
            },
            {
              text: "close()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: " функцээрээ авдрыг хааж орхи: ",
            },
            {
              text: "player.close()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
          ],
        ],
      },
      {
        subtitle: "String variables",
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
              text: "3 барааг аваад тус тусад нь хувьсагчид хадгал, авдруудыг нээж тус бүрд нь байрлуулаад хаагаад түвшнийг дуусга!",
              className: "pl-10 ml-10 border-l-4 border-white border-solid",
            },
          ],
          [
            {
              text: "3 өөр ургацаа уут уутанд нь эмх цэгцтэй хийж хураацгаая!",
            },
          ],
          [
            {
              text: "Бидэнд 3 бараа байна — ",
            },
            {
              text: "“Pumpkin”",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: ", ",
            },
            {
              text: "“Eggplant”",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: " ба ",
            },
            {
              text: "“Tomato”",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: ". Эдгээрийг цуглуулаад хувьсагч ашиглан тус тусын уутанд нь хийх болно.",
            },
          ],
          [
            {
              text: "Дараах 3 хувьсагчийг үүсгэ: ",
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
              text: ", ",
            },
            {
              text: "bag3",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: ". Уут болгон дотор 3 барааны аль нэг нь багтсан байх ёстой. Жишээ нь: ",
            },
            {
              text: 'bag1 = "Pumpkin"',
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: ". Ингэж 3 барааг 3 уутанд тус тусад нь хуваагаад, дараа нь 3 уутаа 3 авдарт хийнэ шүү.",
            },
          ],
          [
            {
              text: "Авдар бүрийн өмнөх X тэмдэг рүү очоод уутнуудаа авдруудад хийцгээе. Үүний тулд ",
            },
            {
              text: "open()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: " функцээр авдраа нээгээд, тэгээд ",
            },
            {
              text: "place()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: " функцээр уут бүрийг хийнэ — иймэрхүү: ",
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
              text: "Уутаа хийж дууссаны дараа ",
            },
            {
              text: "close()",
              className:
                "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
            },
            {
              text: " функцээр авдраа хаа. 3 барааны хувьд ч бүгдэд нь ижилхэн давтаарай!",
            },
          ],
        ],
      },
    ],
  },
  "3": {
    chapter: "CHAPTER 3",
    title: "BASIC OPERATORS",
    levels: [
      {
        subtitle: "Counting with code",
        level: "Level 1",
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
  },
};

export default function ChapterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [selectedLevel, setSelectedLevel] = useState<number>(0);

  const chapter = chapterData[id];

  if (!chapter) {
    return (
      <main className="flex  flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-3xl mb-4">Chapter not found</h1>
        <Link href="/" className="underline text-white/60">
          Go back
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#111311] text-white flex flex-col items-center px-6 py-10 relative">
      {/* BACK BUTTON */}
      <Link
        href="/"
        className="absolute left-6 top-6 text-white/40 hover:text-white transition"
      >
        ← BACK
      </Link>

      {/* NEXT BUTTON */}
      <button
        onClick={() =>
          setSelectedLevel((prev) =>
            prev < chapter.levels.length - 1 ? prev + 1 : prev,
          )
        }
        className="absolute right-6 top-6 text-green-400 border border-green-400 px-4 py-1 rounded hover:bg-green-400 hover:text-black transition"
      >
        NEXT →
      </button>

      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="mt-3 text-lg tracking-wide">
          {chapter.chapter} &gt; LEVEL {selectedLevel + 1}
        </h2>
      </div>

      {/* LEVEL SELECTOR (BOTTOM SMALL) */}
      <div className="flex gap-2 mb-8">
        {chapter.levels.map((_, i) => (
          <button
            key={i}
            onClick={() => setSelectedLevel(i)}
            className={`w-8 h-8 text-sm rounded border ${
              selectedLevel === i
                ? "bg-green-400 text-black border-green-400"
                : "border-white/20 text-white/50"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      {/* MAIN CARD */}
      <div className="w-full max-w-5xl bg-[#1c1f1c] border border-white/10 rounded-xl p-8">
        {/* TITLE */}
        <h1 className="text-2xl tracking-widest mb-4">{chapter.title}</h1>

        <div className="text-white/70 leading-relaxed space-y-4">
          {/* SUBTITLE */}
          <span className="inline-block bg-blue-400/30 uppercase text-blue-200 text-md px-3 py-1 rounded mb-6">
            {chapter.levels[selectedLevel].subtitle}
          </span>

          {/* INSTRUCTIONS */}
          {chapter.levels[selectedLevel].instructions.map((paragraph, pi) => (
            <p key={pi} className="font-mono text-2xl font-bold-500">
              {paragraph.map((segment, si) =>
                segment.className ? (
                  <span key={si} className={segment.className}>
                    {segment.text}
                  </span>
                ) : (
                  segment.text
                ),
              )}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}

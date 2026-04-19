import type { Chapter } from "./types";

export const chapter2: Chapter = {
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
};

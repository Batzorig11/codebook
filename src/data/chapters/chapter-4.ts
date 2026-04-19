import type { Chapter } from "./types";

export const chapter4: Chapter = {
  chapter: "CHAPTER 4",
  title: "LEARNING LOOPS",
  levels: [
    {
      subtitle: "While Loops",
      level: "Level 1",
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

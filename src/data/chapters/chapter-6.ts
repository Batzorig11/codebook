import type { Chapter } from "./types";

export const chapter6: Chapter = {
  chapter: "CHAPTER 6",
  title: "CONDITIONS",
  levels: [
    {
      subtitle: "Basic If Statement",
      level: "Level 1",
      instructions: [
        [
          {
            text: "Заримдаа чи хийх үйлдэлдээ тодорхой нөхцөл нэмэхийг хүсэж болно. Ингэснээр чиний код нөхцөл байдлаас шалтгаалан уян хатан, өөр өөр үйлдлүүдийг хийх боломжтой болно. Үүний тулд бид ",
          },
          {
            text: "if",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийллийг ",
          },
          {
            text: "operators",
            className: "font-bold italic",
          },
          {
            text: " -тэй хослуулан ашиглаж, нөхцөл шалгаж зохих үйлдлүүдийг гүйцэтгэдэг.",
          },
        ],
        [
          {
            text: "Энэ эхний дасгалд өндгүүдийг цуглуулж, ",
          },
          {
            text: "==",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: "!=",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " операторуудыг ашиглан жагсаалт дахь тодорхой утгууд бие биетэйгээ адилхан эсэх, эсвэл өөр эсэхийг шалгана.",
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
            text: "Талбай дээрх бүх өндгийг цуглуулж, if илэрхийллийн нөхцөлийг ашиглан бие биетэй нь харьцуул.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Талбай дээрх бүх өндгийг алхаж явааараа цуглуул. Цуглуулсны дараа ",
          },
          {
            text: "basket",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй жагсаалтад хадгал.",
          },
        ],
        [
          {
            text: 'basket = ["blue egg", "red egg", "shiny egg", "green egg"]',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Жагсаалтаа үүсгэсэн бол X тэмдгүүд рүү очоод тэдгээрийг бие биетэй нь ба ",
          },
          {
            text: "eggs",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй константтай ",
          },
          {
            text: "if",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийлэл дэх нөхцөлүүдийг тохируулан харьцуул. ",
          },
          {
            text: "eggs",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " константад одоо байгаа өндгийн ерөнхий утга хадгалагдана.",
          },
        ],
        [
          {
            text: "if basket[0] == basket[1]:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '    player.speak("This statement is True!")',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "else:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '    player.speak("This statement is False!")',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Энэ код жагсаалтын эхний 2 утгыг хооронд нь харьцуулдаг. ",
          },
          {
            text: "==",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " оператор нь харьцуулж буй 2 зүйл адилхан эсэхийг шалгана. Хэрэв адилхан бол эхний команд гүйцэтгэгдэнэ, адилхан биш бол ",
          },
          {
            text: "else",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " доор байрлах код ажиллана.",
          },
        ],
        [
          {
            text: "Дараагийн 2 X тэмдэг дээр ижил ",
          },
          {
            text: "if",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийллийг дараах нөхцлүүдээр ажиллуул: ",
          },
          {
            text: "if basket[1] != basket[2]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: "if basket == eggs",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". ",
          },
          {
            text: "!=",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " оператор нь харьцуулж буй 2 зүйл адилхан БИШ эсэхийг шалгана.",
          },
        ],
      ],
    },
    {
      subtitle: "Complex If Statement",
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
            text: "Талбай дээрх зүйлсийг цуглуулж, нөхцөлийн операторуудыг ашиглан нэгтгэ.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Операторууд нь илүү нарийн төвөгтэй нөхцөлүүдийг илүү цөөн кодоор гүйцэтгэх боломжийг олгоно. Талбай дээрх бүх зүйлсийг цуглуулж, өмнөх дасгалын адил жагсаалтад хадгал.",
          },
        ],
        [
          {
            text: 'stash = ["milk", "grape", "strawberries", "red berries", "empty jar"]',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Бүх зүйлийг авсны дараа X тэмдгүүд рүү очоод ",
          },
          {
            text: "and",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: "or",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " Boolean операторыг ашиглан тэдгээрийг нэгтгэ. ",
          },
          {
            text: "if",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийлэл ашиглан жагсаалт дотор зүйлс байгаа эсэхийг ",
          },
          {
            text: "in",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " оператораар шалга.",
          },
        ],
        [
          {
            text: 'if "item 1" and "item 2" in stash:',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    player.combine(stash)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: 'if "item 3" or "item 4" and "item 5" in stash:',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    player.combine(stash)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Эхний код нь ",
          },
          {
            text: '"item 1"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: '"item 2"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " stash дотор байгаа эсэхийг шалгаж байгаа бөгөөд, хэрэв байгаа бол тэдгээрийг нэгтгэнэ. Хоёр дахь код нь ",
          },
          {
            text: '"item 3"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " эсвэл ",
          },
          {
            text: '"item 4"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: '"item 5"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " stash дотор байгаа эсэхийг шалгаж байгаа бөгөөд нөхцөл биелсэн тохиолдолд ",
          },
          {
            text: "combine()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " код ажиллана.",
          },
        ],
        [
          {
            text: "if илэрхийлэл болон операторуудыг ашиглан stash доторх зүйлсийг нэгтгэ. Дээд талын X тэмдэг дээр ",
          },
          {
            text: '"grape"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: '"empty jar"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " stash дотор байгаа эсэхийг шалгаж, хэрэв байгаа бол ",
          },
          {
            text: "Grape Juice",
            className: "font-bold italic",
          },
          {
            text: " хийнэ. Доод талын цайвар X тэмдэг дээр ",
          },
          {
            text: '"strawberries"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " эсвэл ",
          },
          {
            text: '"red berries"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ",
          },
          {
            text: '"milk"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " -тэй хамт байгаа эсэхийг шалгаж ",
          },
          {
            text: "Berry Milk",
            className: "font-bold italic",
          },
          {
            text: " хий.",
          },
        ],
      ],
    },
    {
      subtitle: "Checking for Existence",
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
            text: "Савнууд дотор хадгалагдсан орцуудыг хайж олоод, хамтад нь нэгтгэж хоол хийж түвшнийг дуусга.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Салат хийхийн тулд хэд хэдэн орц хэрэгтэй, гэхдээ эхлээд тэдгээрийг цуглуулах хэрэгтэй. Талбай дээр ",
          },
          {
            text: "carrots",
            className: "font-bold italic",
          },
          {
            text: ", ",
          },
          {
            text: "tomatoes",
            className: "font-bold italic",
          },
          {
            text: ", ",
          },
          {
            text: "lettuce",
            className: "font-bold italic",
          },
          {
            text: " ба ",
          },
          {
            text: "cucumbers",
            className: "font-bold italic",
          },
          {
            text: " байгаа ч ",
          },
          {
            text: "carrots",
            className: "font-bold italic",
          },
          {
            text: " ба ",
          },
          {
            text: "cucumbers",
            className: "font-bold italic",
          },
          {
            text: " нь хадгалагдсан байна. Талбай дээр байгаа зүйлсийг цуглуул.",
          },
        ],
        [
          {
            text: "Дутагдаж байгаа зүйлсийг олохын тулд савнуудын өмнөх X тэмдгүүд рүү очиж, савнууд доторх зүйлсийг нөхцлөөр шалга. Процессыг хурдасгах үүднээс ",
          },
          {
            text: "for",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталт ашиглан ",
          },
          {
            text: "collect()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр орцуудыг ав.",
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
            text: "    ........",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '    if "carrot" or "cucumber" in bag:',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        player.collect(bag[x])",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Бүх зүйлсээ цуглуулсны дараа ",
          },
          {
            text: "items",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй жагсаалтад хадгал, ",
          },
          {
            text: "append()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ашиглан цуглуулсан зүйл бүрийг нэм.",
          },
        ],
        [
          {
            text: "Эцэст нь цайвар X тэмдэг рүү алхаж, ",
          },
          {
            text: "combine()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функц ашиглан хоол хий. Жагсаалтынхаа урт хангалттай эсэхийг шалгахын тулд ",
          },
          {
            text: "if",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийлэлд ",
          },
          {
            text: "len()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " операторыг ашигла — энэ нь жагсаалтын уртыг шалгадаг. ",
          },
          {
            text: ">",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " эсвэл ",
          },
          {
            text: "<",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " -г ашиглан утга тодорхой утгаас их эсвэл бага эсэхийг шалгаж болно. Хэрэгжүүлэлт: ",
          },
          {
            text: "if len(items) < 5:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
      ],
    },
    {
      subtitle: "Break and Continue Statements",
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
            text: "Барилгуудын хоорондох зам дээр ургасан зэрлэг ургамлуудыг давталтын нөхцлүүдийг ашиглан цэвэрлэ.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Барилгуудын хоорондох замд зэрлэг ургамал ургаж байна, тэдгээрийг цуглуулж хогийн саванд хая. Давталтын нөхцөлүүдийг ашиглан энэ процессыг автоматжуулж болно.",
          },
        ],
        [
          {
            text: "bag",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй хувьсагч үүсгээд, зэрлэг ургамлуудыг түүж авахдаа хадгал. ",
          },
          {
            text: "while",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталт ба нөхцлүүдийг ашиглан процессыг автоматжуул — нийт 10 зэрлэг ургамал байна.",
          },
        ],
        [
          {
            text: "while True:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    player.move_forward()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    bag += 1",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    if bag == 10:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        break",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "while",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталтыг ",
          },
          {
            text: "True",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " гэж тохируулснаар давталт ",
          },
          {
            text: "break",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ашиглагдах хүртэл дуусахгүй. Давталт бүрд bag -д нэг ургамал нэмэгдэж, хэдэн ургамал авсныг шалгана. ",
          },
          {
            text: "if",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийлэл нь давталтыг зогсоох эсэхийг шалгадаг.",
          },
        ],
        [
          {
            text: "Замыг туулсны дараа ",
          },
          {
            text: "for",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталт ашиглан X тэмдгүүд дээр ",
          },
          {
            text: "place()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг ашиглан ургамлуудыг саванд хий. Хоёр савны хооронд зай байгаа тул алхмын тоо жигд биш. ",
          },
          {
            text: "continue",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " операторыг ашиглан ",
          },
          {
            text: "if",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийлэлээр нөхцөл шалгаж давталтын мөчөлтийг алгасаж болно.",
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
            text: "    player.move_forward()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    if x == 1:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        continue",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    player.turn_right()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    player.place(bag/2)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    player.turn_left()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Дээрх кодонд ",
          },
          {
            text: "if",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийлэл давталтын мөчөлт ",
          },
          {
            text: "x",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " -ийг 1-тэй тэнцэж байгаа эсэхийг шалгадаг. Энэ for давталт ",
          },
          {
            text: "range()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " -ийн дагуу 3 удаа ажиллана; ",
          },
          {
            text: "x",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " 0-ээс эхлэх тул 0, 1, 2 гэж явна. Хэрэв давталтын мөчөлт 1-тэй тэнцэж байвал ",
          },
          {
            text: "continue",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " доорх код ажиллахгүй — алгасагдана. Ингэснээр 2 савны хоорондох зайг алгасаж чадна.",
          },
        ],
        [
          {
            text: "2 сав байгаа тул ",
          },
          {
            text: "place()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр bag хувьсагч доторх зэрлэг ургамлуудыг нийт хадгалсан тоог хуваан хи: ",
          },
          {
            text: "player.place(bag/2)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Бүх ургамлыг цуглуулж зөв байрлалд тавьсны дараа гарц руу одоор тэмдэглэгдсэн цэгт хүрч түвшнийг дуусга.",
          },
        ],
      ],
    },
    {
      subtitle: "Loop Conditions",
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
            text: "Замд ургасан бүх зэрлэг ургамлыг давталтын нөхцөл ашиглан 12-оос илүүгүй мөр кодоор цуглуулж хог руу хая.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Хашаан руу орох зам зэрлэг ургамлаар дүүрсэн байна. Давталтуудыг ашиглан процессыг автоматжуулж, ",
          },
          {
            text: "else",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийллийг бүрэн ашиглаж болно.",
          },
        ],
        [
          {
            text: "Хашааны эргэн тойрны замууд зэрлэг ургамлаар дүүрсэн байна, тэдгээрийг цуглуулж зам бүрийн төгсгөлд ",
          },
          {
            text: "place()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функц ашиглан саванд хия. Давталттай бол амархан, гэхдээ 3 зам байгаа — 2 замд тус бүр 9 ургамал, 1 замд 5 ургамал байна.",
          },
        ],
        [
          {
            text: "3 гэж ",
          },
          {
            text: "range()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " -тэй ",
          },
          {
            text: "for",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталт үүсгэ, ингэснээр давталт дотор байрлах код 3 замыг бүгдийг хамарна.",
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
            text: "    # Хөдөлгөөний код",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "    if x == 0:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        bag = 5",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        # Place() код энд оруулна",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "        player.turn_left()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    else:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        bag = 9",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        # Place() код энд оруулна",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "        player.turn_left()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Эхний замд 5 ургамал, бусад замуудад 9 ургамал байна. ",
          },
          {
            text: "if",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийллийг ашиглан давталт эхний мөчөлтөө ажиллаж байгаа эсэхийг ",
          },
          {
            text: "x",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нь ",
          },
          {
            text: "==",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " 0-тэй тэнцэж байгаа эсэхээр шалга. ",
          },
          {
            text: "x",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " хувьсагч давталт хэдэн мөчөлт ажиллаж байгааг шалгадаг ба үргэлж 0-ээс эхэлдэг.",
          },
        ],
        [
          {
            text: "Хэрэв ",
          },
          {
            text: "if",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийлэл true буцаавал ",
          },
          {
            text: "bag",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй хувьсагч үүсгээд 5 ургамал хадгалж ",
          },
          {
            text: "place()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функц ашиглан саванд хия: ",
          },
          {
            text: "player.place(bag)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". ",
          },
          {
            text: "else",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийллийг ашиглан ижил кодын хувилбарыг эхний мөчөлтөөс бусад тохиолдолд ажиллуулж bag -д 9 ургамлыг хадгалуул.",
          },
        ],
        [
          {
            text: "Бүх ургамлыг цуглуулж, зөв тоогоор сав бүрд нь тавьж 12-оос илүүгүй мөр кодоор түвшнийг дуусга.",
          },
        ],
      ],
    },
    {
      subtitle: "Alternate Loop Conditions",
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
            text: "Хашаан дахь бүх жимсийг давталт ашиглан цуглуулж, нэгтгэн Jam хий.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Одоо чи хашаанд ороод ирлээ. Талбайгаас жимсийг цуглуулаад хольж Jam хийхийн тулд холигч руу аваачина. Давталтуудыг ашиглан кодоо хэмнэж, нөхцөлүүдийг тухайн нөхцөл байдалд тохируул.",
          },
        ],
        [
          {
            text: "Жимснүүдийг нэгтгэхийн тулд жагсаалт хэрэгтэй. ",
          },
          {
            text: "berries",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй жагсаалт ингэж үүсгэ: ",
          },
          {
            text: "berries = []",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Үүнийг давталтыг үүсгэхээсээ өмнө тохируулаарай — ингэснээр жимсийг түүхдээ ",
          },
          {
            text: "append()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр жагсаалтад нэмж болно.",
          },
        ],
        [
          {
            text: "3 -тай ",
          },
          {
            text: "range()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " -ийн for давталт үүсгэ. Хашаанд 3 төрлийн жимс бий: red berries, blue berries, black berries (нил ягаан жимс). Тус бүр нь өөр өөр тоотой. Давталтын мөчөлт бүрт ",
          },
          {
            text: "if",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийлэл ашиглан жимсний тоог хувьсагчид хадгалж, жагсаалтад нэм.",
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
            text: "    player.move_forward(4)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    if x == 0:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        red_berries = 3",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        berries.append(red_berries)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    if x == 1:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        # Blue berries-ийн кодыг оруул",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "    if x == 2:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        # Black berries-ийн кодыг оруул",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "    player.turn_left()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Санаарай, ",
          },
          {
            text: "x",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нь давталтын одоогийн мөчөлтийг тодорхойлох ба үргэлж 0-ээс эхэлдэг. Мөчөлт бүрт жимс цуглуул, хувьсагч үүсгэ, зөв тоог хадгалж, дээрх кодын адил ",
          },
          {
            text: "append",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " хий.",
          },
        ],
        [
          {
            text: "Жимсүүдийг цуглуулж хадгалж дууссаны дараа ",
          },
          {
            text: "else",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийлэл ашиглан for давталтыг хаа. Ингэснээр давталт дууссаны дараа ажиллах нэг сүүлчийн кодын мөрийг ажиллуулж болно.",
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
            text: "    .........",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "else:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    player.move_forward(4)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    # combine кодыг энд оруулна",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "Хөдөлгөөнөө X тэмдэг дээр хүрэхээр тохируулаад ",
          },
          {
            text: "combine()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функц ашиглан жимсүүдээ холин Jam болго: ",
          },
          {
            text: "player.combine(berries)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Ингэж түвшнийг дуусгаарай.",
          },
        ],
      ],
    },
  ],
};

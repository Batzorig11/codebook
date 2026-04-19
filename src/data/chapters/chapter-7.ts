import type { Chapter } from "./types";

export const chapter7: Chapter = {
  chapter: "CHAPTER 7",
  title: "CREATING YOUR OWN FUNCTIONS",
  levels: [
    {
      subtitle: "Creating a Function",
      level: "Level 1",
      instructions: [
        [
          {
            text: "Олон төрлийн үйлдэл гүйцэтгэхэд ашиглах олон функц урьдчилан бэлэн байгаа ч, өөрийн захиалгат (custom) функцуудыг үүсгэснээр хийж болох үйлдлээ өргөжүүлж болно. Эдгээр нь нэг мөр кодоор програмынхаа өөр өөр хэсэгт ижил кодын блокыг дахин ашиглах боломжийг олгоно.",
          },
        ],
        [
          {
            text: "Захиалгат функцууд нь кодоо хялбарчилж, бичих шаардлагатай кодын хэмжээг багасгадаг. Захиалгат функц ашиглан энэ талбайн чулуунуудыг түлхэж, 22-оос илүүгүй мөр кодоор гарц руу хүр.",
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
            text: "22-оос илүүгүй мөр код бичиж, чулуунуудыг түлхэж гарц руу хүр.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Кодлоход цаг хэмнэх хэд хэдэн арга бий — заримдаа ижил кодын хэсгийг олон удаа дахин ашиглахыг хүсэж болно. Өмнөх бүлгүүдэд бид давталт, жагсаалтыг танилцуулсан. Кодыг үр ашигтай болгох өөр нэг арга бол захиалгат функц үүсгэх юм.",
          },
        ],
        [
          {
            text: "def repeat_push():",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    player.push()",
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
            text: "    player.push()",
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
            text: "    player.push()",
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
            text: "    player.push()",
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
            text: "Дээрх код нь догол мөртэй кодыг ажиллуулах захиалгат функц юм. Үүнийг ашиглан тоглогч объектыг 4 удаа түлхэж, урагш хөдлөх болно.",
          },
        ],
        [
          {
            text: "Энэ захиалгат функцийг ашиглан талбайн чулуунуудыг хөдөлгөж, 22-оос илүүгүй мөр кодоор гарц руу хүр.",
          },
        ],
      ],
    },
    {
      subtitle: "Function Arguments",
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
            text: "13-аас илүүгүй мөр кодоор захиалгат функц ашиглан талбайн бүх ургацыг усал.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Аргумент гэдэг нь функцийн хаалтанд оруулах утга юм. Захиалгат функц үүсгэхдээ аргумент тохируулан функцийн ажиллагаанд өөрчлөлт оруулж болно.",
          },
        ],
        [
          {
            text: "Дараалан усалах хэд хэдэн ургац байна. Бичих кодоо цөөлөхийн тулд захиалгат функц ашигла.",
          },
        ],
        [
          {
            text: "def water_crops(count):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    for x in range(count):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        player.move_forward(2)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
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
            text: "        player.water()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        player.turn_right()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Дээрх кодонд ",
          },
          {
            text: "count",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " хувьсагч нь аргумент юм. Энэ функцийг ашиглан нэг мөр кодоор давталт ажиллуулахаас гадна давталтыг хэдэн удаа давтахыг тохируулах боломжтой. Жишээлбэл: ",
          },
          {
            text: "water_crops(4)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " гэж бичвэл функц доторх for давталтыг 4 удаа ажиллуулна.",
          },
        ],
        [
          {
            text: "Энэ функцийг тодорхойлж, 13-аас илүүгүй мөр кодоор ургацыг усал.",
          },
        ],
      ],
    },
    {
      subtitle: "Passing Functions as Arguments",
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
            text: "Функц ашиглан намгийн mandrake болон мөөгнүүдийг тоол.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Намагт байрлах янз бүрийн хачин объектуудыг тоолохдоо захиалгат функц ашиглан кодоо цэгцтэй болго. X тэмдгүүд рүү явж ",
          },
          {
            text: '"Red Mandrake"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"Blue Mandrake"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"Poison Mushroom"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " тус бүрээс хэд байгааг тоолоод цайвар X тэмдэг дээр тэдгээрийн нийт тоог тоол.",
          },
        ],
        [
          {
            text: "Захиалгат функц нь утга буцаах чадвартай бөгөөд эдгээр утгуудыг одоо байгаа функцэд аргумент болгон ашиглаж болно.",
          },
        ],
        [
          {
            text: "def name_and_number(name, number):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '    return("There are %d %ss in the field." % (number, name))',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Функцийн төгсгөлд ",
          },
          {
            text: "return()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " -г байрлуулснаар функц өөрөө утга буцаадаг — энэ тохиолдолд оруулсан аргументуудаас үүссэн ",
          },
          {
            text: "string",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " юм. Энэ функцээс буцаж ирсэн утгыг ашиглан объект бүрийн нэр, тоог ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр дуудаж болно. Жишээ: ",
          },
          {
            text: 'player.speak(name_and_number("Red Mandrake", 4))',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "def add_numbers(num1, num2, num3):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    return(num1 + num2 + num3)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Сүүлчийн цайвар X тэмдэг дээр тоонуудыг нэмж, тоолсон объектуудын нийт тоог буцаах өөр нэг захиалгат функц үүсгэ.",
          },
        ],
      ],
    },
    {
      subtitle: "Using Lists in Functions",
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
            text: "Талбайн бүх ногоог цуглуулж, захиалгат функц ашиглан даршилж хадгал.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Даршлах гэдэг нь ногоог сав дотор цуу, амтлагчтай битүүмжилж, амтыг өгч, удаан хугацаанд хадгалах үйл явц юм. Талбай дээр даршлах боломжтой хэд хэдэн ногоо байна. Хашааны дэргэдэх пресс ашиглан тэдгээрийг даршлаж үзье!",
          },
        ],
        [
          {
            text: "Эхлээд ",
          },
          {
            text: "pickle_food",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй захиалгат функц үүсгэнэ — энэ нь 2 жагсаалт ашиглан ногоог даршлах боломжийг олгоно.",
          },
        ],
        [
          {
            text: "def pickle_food(food, amount):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    for x in range(3):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '        player.speak("You have pickled %d %s" % (amount[x], food[x]))',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Энэ захиалгат функц нь жагсаалтуудыг аргумент болгон ашигладаг — нэг нь ",
          },
          {
            text: "food",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", нөгөө нь ",
          },
          {
            text: "amount",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " . Тийм учраас даршлах хоолны нэрсийг хадгалах жагсаалт ба тоо хэмжээг хадгалах өөр жагсаалтыг үүсгэх хэрэгтэй. Тоо хэмжээний тусдаа жагсаалттай байх нь чухал — учир нь даршлах ногооны тоо өөр өөр байж болно.",
          },
        ],
        [
          {
            text: "Талбайн бүх ногоог цуглуулаад ногооны нэрсийг ",
          },
          {
            text: "vegetables",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй жагсаалтад, тоо хэмжээг ",
          },
          {
            text: "vegetable_number",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй жагсаалтад хадгал: ",
          },
          {
            text: "vegetables = []",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "vegetable_number = []",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Тэгээд цуглуулсан ногоог нэрс жагсаалт руу нэм. Нэрс нь: ",
          },
          {
            text: '"Cucumbers"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"Tomatoes"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: '"Radishes"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "vegetables жагсаалтыг бөглөсний дараа ногоо бүрд хувьсагч үүсгээд цуглуулсан тоог хадгал, дараа нь тэдгээр хувьсагчдыг ",
          },
          {
            text: "vegetable_number",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " жагсаалтад бичнэ. Жишээ: ",
          },
          {
            text: "cucumbers = 1",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "tomatoes = 2",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "radishes = 3",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "vegetables_number = [cucumbers, tomatoes, radishes]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Бүх зүйлс бэлэн болсны дараа X тэмдэг рүү очоод үүсгэсэн жагсаалтуудыг ашиглан захиалгат функцээ ажиллуулж ногоогоо даршилж, түвшнийг дуусга.",
          },
        ],
      ],
    },
    {
      subtitle: "Using Conditions in Functions",
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
            text: "Нэг захиалгат функцэд нөхцөлүүдийг ашиглан хаалгыг нээж, гүүрнүүдийг засаарай.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Намаг дундуур явах замд хэд хэдэн саад бэрхшээл байна — заримыг нь давах шаардлагатай. Эдгээрийн зарим нь ижил тул нэг захиалгат функц дотор нөхцөлүүдийг ашиглан автоматжуулж болно.",
          },
        ],
        [
          {
            text: "Хоёр төрлийн саад байна: нээж хаах хаалганууд, засах шаардлагатай гүүрнүүд. Функцэд аргумент болгон ",
          },
          {
            text: '"open"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: '"build"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " командуудыг өгөхөөр тохируулж хоёуланг нь даван туулах захиалгат функц үүсгэ.",
          },
        ],
        [
          {
            text: "def navigate_swamp(action):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '    if action == "build":',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        # Гүүр барьж урагш хөдлөх код нэм",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "        # Код 3 удаа давтагдахыг шалга",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: '    if action == "open":',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        # Хаалга нээж урагш хөдлөх код нэм",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "        # Тэгээд эргэж хаалгаа хаах код",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "Захиалгат функц дотор build нөхцөл дор ",
          },
          {
            text: "build()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функц ашиглан газрын зургийн дундах эвдэрсэн гүүрийг засна: ",
          },
          {
            text: 'player.build("bridge")',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Тоглогч урагш хөдөлж гүүрийг 3 удаа барьж гатлахаар тохируул.",
          },
        ],
        [
          {
            text: "Захиалгат функцийн хоёр дахь сонголтод ",
          },
          {
            text: "open()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: "close()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцуудыг ашиглан хаалгыг нээж, урагш хөдөлж, эргэж хаалгыг хаахаар тохируул.",
          },
        ],
        [
          {
            text: "Хаалганы өмнөх бараан X тэмдгүүд рүү алхаад open командтай захиалгат функцийг ашиглан хаалгыг давж гар: ",
          },
          {
            text: 'navigate_swamp("open")',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Талбай дээрх бүх модыг цуглуулж, тааралдсан эхний цайвар X тэмдэг рүү очоод build командтай функцийг ашиглан урсгалыг гатал: ",
          },
          {
            text: 'navigate_swamp("build")',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Замын төгсгөлд байгаа одоор тэмдэглэгдсэн гарц руу захиалгат функц ашиглан хүрч түвшнийг дуусга.",
          },
        ],
      ],
    },
    {
      subtitle: "Using Operators in Functions",
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
            text: "Бүх жимсийг цуглуулж, захиалгат функц дотор операторуудыг ашиглан хангалттай жимс байгаа эсэхийг шалга.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Талбай дээр цуглуулж нухаж puree хийх боломжтой хэд хэдэн жимс байна. Гэхдээ нэг хуваарийн хэмжээнд хангалттай жимс байгаа эсэхийг шалгах хэрэгтэй. Үүнийг хялбарчлахын тулд захиалгат функц ашиглан тооцоолол хийлгэе.",
          },
        ],
        [
          {
            text: "Эхлээд ",
          },
          {
            text: "serving",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй хувьсагч үүсгэнэ — энэ нь нэг хуваарьд хэрэгтэй хэмжээ юм. Энэ хувьсагч нь талбайн нийт жимсийг 3-д ",
          },
          {
            text: "(/)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " хуваасантай тэнцүү байх ёстой: ",
          },
          {
            text: "serving = total amount of berries / 3",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Талбайн нийт жимсийг өөрөө тоолж тоогоо оруулах хэрэгтэй. 3-д хуваадаг шалтгаан нь талбайд 3 төрлийн жимс байдаг: ",
          },
          {
            text: "red berries",
            className: "font-bold italic",
          },
          {
            text: ", ",
          },
          {
            text: "blue berries",
            className: "font-bold italic",
          },
          {
            text: " ба ",
          },
          {
            text: "black berries",
            className: "font-bold italic",
          },
          {
            text: ". ",
          },
          {
            text: "serving",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " хувьсагчийн утга нь талбайн жимсний дундаж тоо юм.",
          },
        ],
        [
          {
            text: "Ирээдүйд ашиглахад зориулж ",
          },
          {
            text: "mash_berries",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй захиалгат функц үүсгэнэ — энэ нь оруулсан хувьсагчийн жимсний тоо хангалттай эсэхийг шалгаж мессеж буцаана.",
          },
        ],
        [
          {
            text: "def mash_berries(item):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    if item > serving:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '        player.speak("You have too many berries")',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '        player.speak("You have %d more than needed" % (item - serving))',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    if item == serving:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '        player.speak("You have the right amount of berries")',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    if item < serving:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '        player.speak("You have too few berries")',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '        player.speak("You need %d more for a serving" % (serving - item))',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Талбайн бүх жимсийг цуглуул, төрөл тус бүрээс цуглуулсан тоог ",
          },
          {
            text: "red_berries",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "blue_berries",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: "black_berries",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " гэсэн хувьсагчдад хадгал — black berries нь талбайн ",
          },
          {
            text: "purple berries",
            className: "font-bold italic",
          },
          {
            text: " юм. Харгалзах X тэмдгүүд рүү явж, захиалгат функцийг хувьсагч тус бүрийг аргумент болгон оруулж ашигла. Жишээ: ",
          },
          {
            text: "mash_berries(red_berries)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Гурван төрлийн жимсний хувьд бүгдэд нь хийж түвшнийг дуусга. X тэмдгийн хажууд байрлах тэмдэгт аль жимсийг шалгах ёстойг мэдэгдэнэ. Дээд талын X тэмдэг нь ",
          },
          {
            text: "black berries",
            className: "font-bold italic",
          },
          {
            text: ", доод тал нь ",
          },
          {
            text: "blue berries",
            className: "font-bold italic",
          },
          {
            text: " юм.",
          },
        ],
      ],
    },
  ],
};

import type { Chapter } from "./types";

export const chapter8: Chapter = {
  chapter: "CHAPTER 8",
  title: "USING DICTIONARIES",
  levels: [
    {
      subtitle: "Creating a Dictionary",
      level: "Level 1",
      instructions: [
        [
          {
            text: "Код бичихэд илүү үр ашигтай олон хэрэгсэл байгаа ч, өөр өөр нөхцөлд өөр өөр шилдэг практик байдаг. Dictionary (толь) нь утгыг хадгалах өөр нэг арга бөгөөд жагсаалттай төстэй боловч энэ тохиолдолд тухайн утгыг хадгалдаг индекстэй байна.",
          },
        ],
        [
          {
            text: "Энэ талбайн бүх жимсийг цуглуулж, толь ашиглан тэдгээрийн нэр болон авсан тоог хадгал. Туршаад үз!",
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
            text: "Бүх жимсийг цуглуулж толь (dictionary)-д хадгалаад хэдийг авсанаа тоол.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Ойд янз бүрийн жимс тарсан байна, тэдгээрийг цуглуулах нь зүйтэй — ",
          },
          {
            text: '"Apples"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"Oranges"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: '"Pears"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "variables",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: "lists",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нь дараа нь ашиглахад зориулж утгыг хадгалах үр ашигтай арга боловч өөр нэг үр дүнтэй арга бол ",
          },
          {
            text: "dictionaries",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ашиглах явдал юм. Эдгээр нь жагсаалттай төстэй ч зөвхөн нэг утгыг хадгалахын оронд утга болон утганд зориулсан индексийг хоёуланг нь хадгална.",
          },
        ],
        [
          {
            text: "bag = {}",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: 'bag["Apples"] = цуглуулсан алимны тоо',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: 'bag["Oranges"] = цуглуулсан жүржийн тоо',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: 'bag["Pears"] = цуглуулсан пийрийн тоо',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Дээрх код нь тухайн зүйлийн нэрийг толь дотор хадгалж, түүнийг индекс (эсвэл Key гэж нэрлэдэг) болгон ашиглана. Энэ тохиолдолд индекс нь чиний цуглуулсан тухайн зүйлийн тоо болох утгатай холбогдоно.",
          },
        ],
        [
          {
            text: "Жимсээ цуглуулж толь руу оруулж дуусаад X тэмдэг рүү очиж ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр тэдгээрийг тоол: ",
          },
          {
            text: "player.speak(bag)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
      ],
    },
    {
      subtitle: "Using a Dictionary",
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
            text: "Толь ашиглан талбайд үрийг суулга.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Ургац ургахад үр талбайд суух ёстой, 4 төрлийн ургац тарих болно: ",
          },
          {
            text: '"Pumpkin"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"Eggplant"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"Tomato"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: '"Melon"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Чи эдгээр үрсийг ",
          },
          {
            text: "seeds",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй урьдчилан зарласан толь (constant)-д хадгалж эзэмшиж байна.",
          },
        ],
        [
          {
            text: "X тэмдгүүд рүү явж ",
          },
          {
            text: "plant()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функц ашиглан үрийг талбайд суу. Энэ функц 2 аргумент авдаг — нэг нь толь нэр, нөгөө нь үрийн индекс юм.",
          },
        ],
        [
          {
            text: "Жишээ: ",
          },
          {
            text: 'player.plant(seeds, "Pumpkin")',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " — энэ код Pumpkin-ий үрийг суулгана. Эхлээд толийн нэрийг, дараа нь ургацын нэрийг бичнэ. Код нь тухайн үрийн тоог дүрийн толгойн дээр харуулж, толь доторх үрийн тоог илчлэх болно.",
          },
        ],
        [
          {
            text: "Ургацыг суусны дараа усал. Талбай дээрх 4 өөр ургацын хувьд бүгдэд нь хий. Үүний дараа дунд X тэмдэг рүү явж ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функц ашиглан тарьсан бүх үрийн тоог дуул.",
          },
        ],
      ],
    },
    {
      subtitle: "More Complex Operations",
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
            text: "Агуулахын бүх хайрцгийг шалгаж, хайрцаг бүрээс хог хаягдлыг устга.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Агуулахын хайрцгууд замбараагүй байна. Хайрцаг бүр дотор хэрэггүй зүйлс бүхий толь агуулагдана. Эдгээр зүйлс нь: ",
          },
          {
            text: '"Pipes"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"Screws"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: '"Bolts"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Тольтой ажиллах үедээ индексийг нь нээж үзэн зүйлсийг хялбархан хасах арга байдаг.",
          },
        ],
        [
          {
            text: '# crate = {"Planks": 4, "Bricks": 2, "Pipes": 3}',
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: 'del crate["Pipes"]',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '# Одоо толинд: crate = {"Planks": 4, "Bricks": 2}',
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "Дээрх кодонд ",
          },
          {
            text: "crate",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй толь planks, bricks, pipes агуулж байна. ",
          },
          {
            text: "del",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " тэмдэглэгээг ашиглан ",
          },
          {
            text: '"Pipes"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " -ийн индекс болон түүний утгыг тольноос хасна.",
          },
        ],
        [
          {
            text: "Энэ түвшинд 5 толь константууд байна: ",
          },
          {
            text: "crate1",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "crate2",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "crate3",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "crate4",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: "crate5",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Хайрцаг бүрийн өмнөх X тэмдэг рүү явж ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр толь бүрийн нэрээр уншуулж ямар зүйл дотор байгааг шалга. ",
          },
          {
            text: "del",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " тэмдэглэгээг ашиглан ",
          },
          {
            text: '"Pipes"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"Screws"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: '"Bolts"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " зэргийг хайрцаг бүрээс хас.",
          },
        ],
      ],
    },
    {
      subtitle: "Placing Objects Using Dictionaries",
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
            text: "Талбайн бүх ургацыг хурааж, толь ашиглан агуулахад хадгал.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Талбай дээр 4 төрлийн ургац тарсан байна: ",
          },
          {
            text: '"corn"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"carrot"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"wheat"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: '"parsnip"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Ургацыг хураан толь үүсгэж агуулахад хадгал.",
          },
        ],
        [
          {
            text: "Талбайгаар алхаад бүх ургацыг авч, талбайг амжилттай туулж дууссны дараа ургац бүрийн тоог тоол. Зохицуулахад хялбар байхын тулд ургацыг толь дотор хадгал.",
          },
        ],
        [
          {
            text: "crops = {}",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: 'crops["corn"] = талбайд байгаа эрдэнэ шишийн тоо',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "........",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Эхлээд ",
          },
          {
            text: "crops",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй толь үүсгээд ургац бүрийн нэрийг string болгон нэм. Ургац тус бүрийн утгыг авсан тоо болгон тохируул.",
          },
        ],
        [
          {
            text: "Бүх ургацыг авч толь дотор хадгалсны дараа X тэмдгүүд рүү явж хайрцаг руу харан ургацыг ",
          },
          {
            text: "place()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функц ашиглан хадгал: ",
          },
          {
            text: 'place(crops["corn"])',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". X тэмдэг бүр дээр аль ургац хадгалагдах ёстойг заасан тэмдэг байрлана. Тэмдгийн дагуу зөв хайрцагт ургацыг хадгалж түвшнийг дуусга.",
          },
        ],
      ],
    },
    {
      subtitle: "Custom Functions Using Dictionaries",
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
            text: "Талбайг туулж мод тарих, усалах захиалгат функц ашигла.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Талбай дээр тарих шаардлагатай хэд хэдэн мод байна. Үр агуулсан уутыг авч, худгаас усаа дүүргэ. Толь ашигласан захиалгат функцээр талбайг туулж, үрүүдийг тарьж усал.",
          },
        ],
        [
          {
            text: "Үрийн уутыг ав — энэ нь чамд дараах модны үрүүдийг толь дотор өгнө: ",
          },
          {
            text: '"orange": 3',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"pear": 4',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"apple": 3',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"peach": 2',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Худгийн хажууд байгаа цайвар X тэмдэг рүү очиж ",
          },
          {
            text: "collect()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр ус цуглуул: ",
          },
          {
            text: 'player.collect("water")',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Шаардлагатай бүх материалыг цуглуулсны дараа ",
          },
          {
            text: "sow_field",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй захиалгат функц үүсгэн үрс, ус ашиглан талбайг тарьж услах. Захиалгат функц 3 аргумент авна: ",
          },
          {
            text: "tree",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "loops",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: "direction",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Эдгээр аргументуудыг ашиглан захиалгат функц for давталт ажиллуулж талбайг услана.",
          },
        ],
        [
          {
            text: "def sow_field(tree, loops, direction):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    for x in range(loops):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '        if direction == "right":',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "            player.move_forward(2)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "            player.turn_left()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "            player.plant(seeds, tree)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "            player.water()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "            player.turn_right()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "            player.move_forward()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '        if direction == "left":',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "            player.move_forward()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "            player.turn_right()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "            player.plant(seeds, tree)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "            player.water()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "            player.turn_left()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "            player.move_forward(2)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Эхний аргумент ",
          },
          {
            text: "tree",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нь толинд ашигладаг key-ийн нэр юм: ",
          },
          {
            text: '"orange"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"pear"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"apple"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: '"peach"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Тарих үедээ тохирох нэрээ сонгоно.",
          },
        ],
        [
          {
            text: "Дараагийн аргумент нь ",
          },
          {
            text: "loops",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " — функцийг хэдэн мөчөлт ажиллуулахыг тодорхойлно. Энэ нь талбай дахь төрөл бүрийн үрийн тоотой тэнцүү юм. Сүүлчийн аргумент ",
          },
          {
            text: "direction",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нь ",
          },
          {
            text: '"left"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " эсвэл ",
          },
          {
            text: '"right"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " — давталт ажиллах үед тоглогчийг аль чиглэл рүү хөдлөхийг сонгоно.",
          },
        ],
        [
          {
            text: "Усыг цуглуулсны дараа газрын зургийн хамгийн дээд хэсэг рүү очоод захиалгат функцийг ашиглана: ",
          },
          {
            text: 'sow_field("orange", 3, "right")',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Энэ функцийг бүх мод, үрсэд нь хийж түвшнийг дуусга.",
          },
        ],
      ],
    },
    {
      subtitle: "Iterating Over Dictionaries",
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
            text: "Талбайн бүх материалыг олоод цуглуулсан эд зүйлсээ тоолсны дараа тухайн саванд нь хадгал.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Шуурга гүүрний хажууд байсан форпостыг эвдэж материалуудыг тарааж хаячихсан байна, дараа нь ашиглаж болох л болов уу. Авсан эд зүйл тус бүрийнхээ тоог бүртгэж, гүүрний цаана байрлах агуулахад хадгал.",
          },
        ],
        [
          {
            text: "Эхлээд талбайд тарсан бүх хог хаягдлыг цуглуулах хэрэгтэй: ",
          },
          {
            text: '"branches"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"boulders"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: '"planks"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Бүх зүйлсийг цуглуулсны дараа ",
          },
          {
            text: "materials",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй толинд хадгалж 3 материалын нэр болон тоог нэм.",
          },
        ],
        [
          {
            text: "materials = {}",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: 'materials["branches"] = цуглуулсан мөчрийн тоо',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "......",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Бүх зүйлийг толинд оруулсаны дараа цайвар X тэмдэг рүү очиж цуглуулсан бүх материалыг ",
          },
          {
            text: "for",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталт ба ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функц ашиглан бүртгэ. Толь нь жагсаалтаас ялгаатай учир ижил аргаар дараалан давталт хийх боломжгүй — толь өөрийн гэсэн арга барилтай.",
          },
        ],
        [
          {
            text: "for name, number in materials.items():",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '    player.speak("There were %d %s collected" % (number, name))',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "2 хувьсагч тохируулснаар — энэ тохиолдолд ",
          },
          {
            text: "name",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: "number",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " — толин дахь 2 талбарыг авч чадна. ",
          },
          {
            text: "in",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " илэрхийлэл, толийн нэр ба ",
          },
          {
            text: "items()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функц ашиглан энгийн for давталттай адил толийг дамжин гүйлгэж болно.",
          },
        ],
        [
          {
            text: "Бүртгэл хийсний дараа бараан X тэмдгүүд рүү явж цуглуулсан материалуудыг тольноос савнуудад ",
          },
          {
            text: "place()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр хадгал: ",
          },
          {
            text: 'player.place(materials["branches"])',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". 3 бараан X тэмдэг байна — зүүн саванд ",
          },
          {
            text: '"branches"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", дундах саванд ",
          },
          {
            text: '"boulders"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба баруун саванд ",
          },
          {
            text: '"planks"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " тавина. Бүх зүйлийг зөв байрлалд нь хадгалж түвшнийг дуусга.",
          },
        ],
      ],
    },
  ],
};

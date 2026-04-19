import type { Chapter } from "./types";

export const chapter5: Chapter = {
  chapter: "CHAPTER 5",
  title: "CREATING LISTS",
  levels: [
    {
      subtitle: "Numeric Lists",
      level: "Level 1",
      instructions: [
        [
          {
            text: "Жагсаалтууд (Lists) нь нэг газар олон утгыг — тоо ч бай, үг (string) ч бай — хадгалахад ашиглагддаг. Энэ нь таны кодонд цаг, зай хэмнэж, өгөгдлийг дараалан унших боломж олгоно.",
          },
        ],
        [
          {
            text: "Энэ дасгалд жүчээний эргэн тойрон дахь өнгөт өндгүүдийг цуглуулж, жагсаалтад хадгалаад савандаа хамтад нь хийх болно.",
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
            text: "Өндгүүдийг цуглуулж, саванд хадгалах боломжтой жагсаалт үүсгэ.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Жүчээнд байгаа өөр өөр өндгүүдийг цуглуулж, ",
          },
          {
            text: "list",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " -д хадгалж, саванд хамтад нь байрлуулцгаая.",
          },
        ],
        [
          {
            text: "Lists",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нь хувьсагчтай төстэй бөгөөд олон утгыг нэг газар хамтад нь хадгалах боломжийг олгоно. Ердийн хувьсагч шиг бичих боловч утга болгон ",
          },
          {
            text: "[]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " -г ашиглана: ",
          },
          {
            text: "mylist = []",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Дараа нь жагсаалтын нэр ба ",
          },
          {
            text: "append()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг ашиглан утга нэмнэ: ",
          },
          {
            text: "mylist.append(1)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Жишээ:",
          },
        ],
        [
          {
            text: "my_list = []",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "my_list.append(3)  # Жагсаалтад хадгалагдах эхний утга 3",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "my_list.append(5)  # Хоёр дахь утга 5",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "my_list.append(2)  # Гурав дахь утга 2",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "# Энэ код ингэж жагсаалт үүсгэнэ: my_list = [3, 5, 2]",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "Талбай дээрх өнгө бүрийн өндгүүдийг бүгдийг нь цуглуулаад ",
          },
          {
            text: "blue_eggs",
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
            text: ", ",
          },
          {
            text: "green_eggs",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " гэсэн хувьсагчдыг үүсгэ. ",
          },
          {
            text: "eggs = []",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " гэж ",
          },
          {
            text: "eggs",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй жагсаалт үүсгээд, цуглуулсан өндгүүдийнхээ тоог хувьсагчид хадгал, жишээ нь: ",
          },
          {
            text: "blue_eggs = 5",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Үүний дараа дээр дурдсан ",
          },
          {
            text: "append()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг ашиглан хувьсагчийг жагсаалтдаа нэмнэ: ",
          },
          {
            text: "eggs.append(blue_eggs)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Өнгийг заасан дарааллаар нь нэмэхээ мартуузай.",
          },
        ],
        [
          {
            text: "Бүх өндөг жагсаалтад орсны дараа X тэмдэг рүү очоод ",
          },
          {
            text: "place()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр саванд хий, хувьсагч шиг ингэж ашиглана: ",
          },
          {
            text: "player.place(eggs)",
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
      subtitle: "Combining Lists",
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
            text: "Хэд хэдэн барааг жагсаалтад хийж, нийлүүлэн шинэ бүтээгдэхүүн гарга.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Орой идэх салатандаа зориулж соус бэлдье. Талбай дээр 4 төрлийн бараа байна — ",
          },
          {
            text: "milk",
            className: "font-bold italic",
          },
          {
            text: ", ",
          },
          {
            text: "cream",
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
            text: "radishes",
            className: "font-bold italic",
          },
          {
            text: ". Бүгдийг цуглуулж хольж Radish dressing болго.",
          },
        ],
        [
          {
            text: "Эхлээд сүү, цөцгийгөө цуглуулж, өмнөх түвшний адилаар шингэн зүйлсээ жагсаалтад нэм. Сүү нь цагаан шингэн, цөцгий нь бүдэг цагаан өнгийн зузаан шингэн юм.",
          },
        ],
        [
          {
            text: "liquids = []",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "liquids.append(3)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "liquids.append(4)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "# Энэ код ингэж жагсаалт үүсгэнэ: liquids = [3, 4]",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "Шингэн зүйлсээ цуглуулж жагсаалтад хийсний дараа ногоогоо цуглуулж мөн ижил аргаар бичнэ. Хэрвээ жагсаалтад оруулах утгууд өмнөөс мэдэгдэж байвал өөр аргаар шууд бичиж болно:",
          },
        ],
        [
          {
            text: "vegetables = [3, 4]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Хоёр жагсаалтыг үүсгэсний дараа тэдгээрийг нийлүүлэх амархан: ",
          },
          {
            text: "mixture = liquids + vegetables",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Хольц үүсгэсний дараа X тэмдэг рүү очоод, газар дэвссэн бүтээлэг рүү харан ",
          },
          {
            text: "combine()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг ашиглан бүгдийг нь ваарандаа хольж ингэж бичнэ: ",
          },
          {
            text: "player.combine(mixture)",
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
      subtitle: "String Lists",
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
            text: "Хоолоо тавиад гахайчуудын нэрсийг жагсаалтад оруулан тэднийг дууд.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Гахайчид удахгүй өлсөх байх. Том уутан гахайн тэжээлийг авч 2 бараан X тэмдэг рүү оч. ",
          },
          {
            text: "place()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр тэжээлийг нь урьдчилан цутгаж өгцгөөе: ",
          },
          {
            text: 'player.place("food")',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "2 бараан X тэмдэг дээр тэжээлээ тавьж дууссаны дараа цайвар X тэмдэг рүү очиж гахайчуудыг дуудаад ирж идүүлцгээе. Тэдний нэрс: ",
          },
          {
            text: '"Peggle"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"Peter"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: '"Piper"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: '"Pedro"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Амархан дуудахын тулд нэрсийг жагсаалтад хийе: ",
          },
          {
            text: 'names = ["Peggle", "Peter", "Piper", "Pedro"]',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "For давталт ашиглан ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр бүх гахайчуудын нэрсийг дуудна. Дуудах мессеж нь ",
          },
          {
            text: '"Come here %s"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " байх бөгөөд ",
          },
          {
            text: "%s",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нь дуудлагад string (энэ тохиолдолд нэр) нэмэх боломжийг олгоно.",
          },
        ],
        [
          {
            text: 'names = ["Peggle", "Peter", "Piper", "Pedro"]',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "for x in names:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '    player.speak("Come here %s" % x)',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Энэ кодонд тоглогч бүх гахайчдын нэрсийг дараалан дуудна. ",
          },
          {
            text: "for",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " давталт дахь ",
          },
          {
            text: "x",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нь давталт аль мөчөлт дээр байгааг шалгадаг ба жагсаалтын нэр бүрийг төгсгөл хүртэл нэгээр нэгээр нь дамжина.",
          },
        ],
      ],
    },
    {
      subtitle: "Combining String Lists",
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
            text: "Хэд хэдэн жимс, ваар цуглуулж жагсаалтад хамт хийн жимсний жүүс болго.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Тоон жагсаалттай адил string жагсаалтыг ч нэгтгэж бусад материалуудыг үйлдвэрлэхэд ашиглаж болно.",
          },
        ],
        [
          {
            text: "Эхлээд хоосон ваар аваад бараан X тэмдэг рүү очоод ",
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
            text: ". Тэгээд эдгээр материалаа ",
          },
          {
            text: "base",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " гэсэн жагсаалтад хадгал: ",
          },
          {
            text: 'base = ["jar", "water"]',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Дараа нь талбайгаас олдох 4 өөр жимс цуглуулж, ",
          },
          {
            text: "fruits",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй жагсаалтад ижил аргаар хадгал. Цуглуулах жимснүүд: ",
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
            text: '"apple"',
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
            text: " ба ",
          },
          {
            text: '"peach"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Жагсаалтаа үүсгэсний дараа цайвар X тэмдэг рүү очиж хоёр жагсаалтаа нэгтгээд шинэ бодис үүсгэе. Эхлээд хоёр жагсаалтыг ",
          },
          {
            text: "(+)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " операторыг ашиглан нэгтгэж ",
          },
          {
            text: "mixture",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй нэг жагсаалт болго: ",
          },
          {
            text: "mixture = [base + fruits]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "X тэмдэг дээр зогсоод бүтээлэг рүүгээ харан ",
          },
          {
            text: "combine()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг шинэ жагсаалтаараа ашиглан жимсний жүүс болгож түвшнийг дуусга.",
          },
        ],
      ],
    },
    {
      subtitle: "Referencing List Items",
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
            text: "Өндөгний сагс ав, доторх өндөг бүрийн тоог шалгаад, жагсаалтын байрлалыг ашиглан зөв саванд нь байрлуул.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Өнөөдрийн шинэхэн түүсэн өндгийг сагсанд хийгээд тавьсан байна. Сагсаа аваад өнгө бүрийн хэдэн өндөгтэй байгаагаа шалга, ингэснээр буцаан хадгалж болно. Сагсанд 4 төрлийн өндөг байна: ",
          },
          {
            text: '"white eggs"',
            className: "font-bold italic",
          },
          {
            text: ", ",
          },
          {
            text: '"dark eggs"',
            className: "font-bold italic",
          },
          {
            text: ", ",
          },
          {
            text: '"red eggs"',
            className: "font-bold italic",
          },
          {
            text: " ба ",
          },
          {
            text: '"blue eggs"',
            className: "font-bold italic",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Эхлээд савнуудын дэргэдэх сагсыг аваад ширээний хажууд байрлах цайвар X тэмдэг рүү алх. Ширээ рүүгээ харан while давталт ашиглан сагсан дахь өндгөө шалга:",
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
            text: '    player.speak("I have %d %s in compartment %d"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    % (basket[count], eggs[count], count))",
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
            text: "Сагсан дотор 2 жагсаалт ",
          },
          {
            text: "constants",
            className: "font-bold italic",
          },
          {
            text: " байна. Нэг нь 4 өндгийн нэрийг агуулсан ",
          },
          {
            text: "eggs",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " жагсаалт, нөгөө нь ",
          },
          {
            text: "basket",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " — сагс дотор өнгө бүрийн хэдэн өндөг байгааг хадгалсан.",
          },
        ],
        [
          {
            text: "Сагс 4 хэсэгтэй, 0-ээс 3 гэж тоологдоно. Өнгө бүрийн өндөг өөрийн хэсэгт хадгалагдана. Жагсаалт дахь байршил, дараалал нь:",
          },
        ],
        [
          {
            text: "0 = white eggs",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "1 = dark eggs",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "2 = red eggs",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "3 = blue eggs",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Савнуудын хажууд байрлах бараан X тэмдэг рүү алхаад ",
          },
          {
            text: "place()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр зөв өнгөний өндгийг зөв саванд нь хий. Сав бүр дээр аль өнгөний өндөг хадгалагдахыг заасан тэмдэг бий.",
          },
        ],
        [
          {
            text: "Жагсаалт дотор байгаа өндөг бүрд ийм байдлаар хандаж болно: ",
          },
          {
            text: "basket[0]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Хаалт дотор байх тоо нь жагсаалт дахь утгын байрлал юм. Энэ арга нь жагсаалтын нэр, утгын индексийг бичиж тодорхой утгад хандах боломжийг олгоно.",
          },
        ],
        [
          {
            text: "Бүх 4 бараан X тэмдэг рүү алхаад өнгө тус бүрийн өндгийг зөв байрлалд нь байрлуул. Жишээлбэл: ",
          },
          {
            text: "player.place(basket[0])",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " -г ",
          },
          {
            text: "white eggs",
            className: "font-bold italic",
          },
          {
            text: " тэмдэгтэй бараан X тэмдэг дээр ашигла. Дээрх дугаарлалтын хүснэгтийг ашиглан ",
          },
          {
            text: "place()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: "basket[]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " -г 4 бараан X тэмдэг дээр ашиглан түвшнийг дуусга.",
          },
        ],
      ],
    },
    {
      subtitle: "Assigning List Values",
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
            text: "Жагсаалтад утга оноох замаар ямар тахиа ямар өнгийн хэдэн өндөг гаргаж дарснийг тодорхойл.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Тахианууд хэд хэдэн өндөг гаргаж дарагчинд хийчихсэн байна. Ямар тахиа ямар өнгөний хэдэн өндөг гаргасныг ол. Тахиануудын нэр, өнгийн өндгүүдийг 2 өөр string жагсаалтад хадгалсан байна:",
          },
        ],
        [
          {
            text: 'chickens = ["Susan", "Kelly", "Betty", "Sandy"]',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: 'eggs = ["red eggs", "blue eggs", "white eggs"]',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "red_eggs = [0, 0, 0, 0]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "blue_eggs = [0, 0, 0, 0]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "white_eggs = [0, 0, 0, 0]",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "3 өнгийн өндөг тус бүрд тоон жагсаалт үүсгэсэн ба тэдгээрийг тахиа тус бүрийн гаргасан өндгийн тоогоор дүүргэнэ. 4 оролт нь 4 тахиаг төлөөлнө. Эдгээрийг дараа нь дуудахад хялбар болгож хувьсагч болгоно:",
          },
        ],
        [
          {
            text: "susan = 0",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "kelly = 1",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "betty = 2",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "sandy = 3",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Дарагчдын хажууд байрлах бараан X тэмдэг рүү алхаад ",
          },
          {
            text: "speak()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг ашиглан тухайн өнгийн өндөг гаргасан тахиаг тодорхойл. Дарагч бүрд өндгийн тоог харуулах ",
          },
          {
            text: "constant",
            className: "font-bold italic",
          },
          {
            text: " байна: ",
          },
          {
            text: "red_incubator",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "blue_incubator",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "white_incubator",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Зөв өнгөний дарагч бүрийн мессежийг ингэж унш: ",
          },
          {
            text: "player.speak(red_incubator)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Мессеж уншсаны дараа жагсаалт доторх байршлыг заан утга оноож өндгийн тоог тухайн өнгөний жагсаалтад нэм. Жишээ:",
          },
        ],
        [
          {
            text: '# Мессеж ("Kelly laid 2 Red eggs")',
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "red_eggs[kelly] = 2",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "# Энэ нь red_eggs[1] = 2 гэж бичихтэй ижил",
            className: "text-white/50 italic",
          },
        ],
        [
          {
            text: "Бүх мессежийг уншиж, тоонуудыг өнгөний өндгийн жагсаалтад амжилттай нэмсний дараа цайвар X тэмдэг рүү алхаад ширээ рүүгээ харан кодын засварлагч дахь бэлэн for давталтыг ашиглан бүх тахианы нэр ба гаргасан өндгийн тоог дуудаад дасгалыг дуусга.",
          },
        ],
      ],
    },
  ],
};

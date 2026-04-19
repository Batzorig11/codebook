import type { Chapter } from "./types";

export const chapter9: Chapter = {
  chapter: "CHAPTER 9",
  title: "CLASSES AND OBJECTS",
  levels: [
    {
      subtitle: "Creating a Class",
      level: "Level 1",
      instructions: [
        [
          {
            text: "Class-ууд нь хүссэнээрээ өөрчилж болох кодын блокуудыг агуулдаг загвар (template)-тай маш төстэй юм. Эдгээр загваруудыг ашиглан тэдгээрийн тусдаа объектуудыг үүсгэж болно. Жишээлбэл, сандлын бүтцийг илэрхийлсэн class үүсгээд, тэр class-ыг ашиглан ширээний хажууд байх 4 өөр сандлын объект үүсгэж болно.",
          },
        ],
        [
          {
            text: "Энэ түвшинд үр тарианы овоог илэрхийлсэн class үүсгэж, талбайн үр тариаг цуглуулж, class-ын объект үүсгээд ",
          },
          {
            text: "build()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функц ашиглан талбайд үр тарианы овоо бүтээ.",
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
            text: "Талбайн бүх үр тариаг цуглуулж, class ашиглан өвсний овоог бүтээ.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Талбай дээрх үр тариаг нэгтгэж овоо болгон угсрах хэрэгтэй. Үүнийг хийхийн тулд objects үүсгэх шаардлагатай. Class гэдэг нь objects үүсгэх арга бөгөөд тэдгээр нь жагсаалт, хувьсагч, толиудаас ялгаатай. Эдгээр нь өөрийн гэсэн шинж чанар бүхий бие даасан objects юм.",
          },
        ],
        [
          {
            text: "class grain_stack:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '    name = "Grain"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    number = 4",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "stack = grain_stack()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Дээрх код нь ",
          },
          {
            text: "grain_stack",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй ",
          },
          {
            text: "class",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " бөгөөд доторх объектуудын нэр, тоог агуулна. Нэр бичин утгыг class болгож тохируулснаар энэ class-ын тусдаа объект үүснэ: ",
          },
          {
            text: "stack = grain_stack()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Class-ууд маш хэрэгтэй — дотор нь агуулагдсан мэдээлэл бүхий объектуудыг чиний хүссэнээр өөрчлөх боломжтой.",
          },
        ],
        [
          {
            text: "grain_stack-ийн class ба энэ class-ын объектыг үүсгээд талбайн 12 үр тариаг бүгдийг нь (зүйл тус бүр 4) цуглуул. X тэмдгүүд рүү явж ",
          },
          {
            text: "build()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функц ашиглан тэдгээрийг нэгтгэ. Энэ функцийг ашиглан объектуудыг угсарч талбайд бүтээж болно: ",
          },
          {
            text: "player.build(stack)",
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
      subtitle: "Class Members",
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
            text: "Талбайн материалуудыг цуглуулж, замуудыг бүтээ.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Хуучин агуулах руу чиглэсэн замууд хоосон байна. Талбайн материалуудыг цуглуулж замаа бий болго. Хоёр төрлийн зам байна: ",
          },
          {
            text: '"wood"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " ба ",
          },
          {
            text: '"stone"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " -оор хийсэн. Class ашиглан зам барихад ашиглах объектуудыг үүсгэж болно. Замыг бүтээхийн тулд тухайн төрөл тус бүрээс 4 зүйл шаардагдана.",
          },
        ],
        [
          {
            text: "class road:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    number = 4",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    def __init__(self, material):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "        self.material = material",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Дээрх код нь замуудыг үүсгэх зориулалттай тусгайлсан class-ыг үүсгэнэ. ",
          },
          {
            text: "__init__()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функц нь class руу шууд утга дамжуулах боломжийг олгодог дотоод функц юм. Энэ функцийн тусламжтайгаар объект үүсгэх үед замын материалын төрлийг тохируулах боломжтой: ",
          },
          {
            text: 'wood_road = road("wood")',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ".",
          },
        ],
        [
          {
            text: "Талбайн бүх материалыг цуглуулж, ",
          },
          {
            text: "road",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй class үүсгэ. Дараа нь бүтээхийг хүссэн замын төрлийг нарийвчлан зааж өгсөн объектуудыг үүсгэ. X тэмдгүүд рүү явж ",
          },
          {
            text: "build()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр үүсгэсэн объектоо ашиглан замуудыг дуусга: ",
          },
          {
            text: "player.build(wood_road)",
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
      subtitle: "Class Methods",
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
            text: "Талбайн материалуудыг цуглуулж тахиануудад шинэ байшингууд барь.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Тахиануудад шинэ торгоолон хэрэгтэй байна. Class ашиглан янз бүрийн төрлийн тахианы байшин барьж болно. Class-аар үүсгэсэн объектын хэд хэдэн шинж чанарыг тохируулж болно.",
          },
        ],
        [
          {
            text: "class chicken_house:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '    color = ""',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '    size = ""',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Дээрх код color, size гэсэн 2 хувьсагчтай class үүсгэнэ. Объект бүрийн шинж чанарыг гадны талаас нь өөрчилж болно.",
          },
        ],
        [
          {
            text: "big_green_house = chicken_house()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: 'big_green_house.color = "green"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: 'big_green_house.size = "big"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "4 өөр объект үүсгэ: ",
          },
          {
            text: "big_green_house",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "small_blue_house",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "big_orange_house",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ", ",
          },
          {
            text: "small_red_house",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: ". Объект бүрийн шинж чанаруудыг нэртэй нь таарч тохирохоор өөрчил.",
          },
        ],
        [
          {
            text: "Талбайн бүх банзыг цуглуулж X тэмдгүүд рүү явж ",
          },
          {
            text: "build()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцээр 4 байшингийн бүгдийг бүтээ.",
          },
        ],
      ],
    },
    {
      subtitle: "Class Functions",
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
            text: "Үхрүүдийн тэвшнүүдийн хажууд байрлах насосны объектуудын функцуудыг идэвхжүүлж ус, хоолыг нь дахин дүүрг.",
            className: "pl-10 ml-10 border-l-4 border-white border-solid",
          },
        ],
        [
          {
            text: "Үхрүүдэд илүү хоол, ус хэрэгтэй байна. Чамд байхгүй ч аз болоход хоол тэжээлийг нь автоматаар дүүргэдэг насосууд байдаг.",
          },
        ],
        [
          {
            text: "Тэвшнүүдийн 2 талд байрлах машинууд нь насос бөгөөд ",
          },
          {
            text: "machine",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй class-ыг оноосон байна. Энэ class-ын дотор ",
          },
          {
            text: "refill()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " нэртэй функц бий — энэ нь чиний сонголтоор ",
          },
          {
            text: '"food"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " эсвэл ",
          },
          {
            text: '"water"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " -г дахин дүүргэж чадна.",
          },
        ],
        [
          {
            text: "class machine:",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "    def refill(self, resource):",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '        if resource == "food":',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "            player.place(resource)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "            player.speak(food_amount)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: '        if resource == "water":',
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
            text: "            player.speak(water_amount)",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Энэ class-ын объект дотор ",
          },
          {
            text: "refill()",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " функцийг тоглогчийн функц дуудах адил ашиглаж болно:",
          },
        ],
        [
          {
            text: "pump = machine()  # Объектыг тохируул",
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: 'pump.refill("food")  # Объектын функцийг ажиллуул',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
        ],
        [
          {
            text: "Энэ функцийг ашиглан үхрүүдэд хоол ус дахин дүүргэж болно. ",
          },
          {
            text: "light X marks",
            className: "font-bold italic",
          },
          {
            text: " рүү явж ",
          },
          {
            text: '"water"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " дүүргэх ба ",
          },
          {
            text: "dark X marks",
            className: "font-bold italic",
          },
          {
            text: " рүү явж ",
          },
          {
            text: '"food"',
            className:
              "font-bold text-green-400 bg-black/30 px-2 py-1 rounded",
          },
          {
            text: " дүүргэнэ.",
          },
        ],
        [
          {
            text: "Талбайн 4 тэвшийг бүгдийг дүүргэж, амьтдад тэжээл өгч, зорилгоо биелүүл.",
          },
        ],
      ],
    },
  ],
};

import type { Chapter } from "./types";

export const chapter2: Chapter = {
  chapter: "CHAPTER 2",
  title: "VARIABLES AND TYPES",
  levels: [
    {
      subtitle: "Watering objects",
      level: "Level 1",
      instructionsEn: [
        [{ text: "You've made your way to the farm! Help take care of the farm by learning about variables — names assigned to objects or groups of objects in order to store them for ease of use." }],
        [{ text: "Before we go further into how variables work, let's familiarize ourselves with how the farm works. Grab the canteen in the lower right of the map to refill three water trays." }],
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Pick up the water canteen and fill up all 3 trays to complete the level.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "Grab the canteen and put water in the trays for the piglets to drink!" }],
        [{ text: "There are 3 X marks on the ground in front of the water trays. Walk over the canteen to grab it, then walk towards the X marks to water the trays." }],
        [
          { text: "You can put water in the trays by facing them and using the " },
          { text: "water()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function, like this: " },
          { text: "player.water()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
        ],
      ],
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
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Modify comments in the code editor in order to reach the exit.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "The path forward should be pretty easy, but there are a lot of obstacles in the way. There looks to be a few possible ways to move forward but really there's just one." }],
        [{ text: "The code editor has the code already written to reach the exit, but it's jumbled with code that doesn't belong and code that isn't run because it's commented. You must learn how to add or remove comments." }],
        [
          { text: "# player.speak(\"This code is commented\")", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
        ],
        [
          { text: "player.speak(\"This code is not commented\")", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
        ],
        [{ text: "Any code that is commented is ignored when the game runs. Adding a " },
          { text: "#", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " comments out that line. Removing the " },
          { text: "#", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " makes the line execute." },
        ],
        [{ text: "The solution is already in the code editor — comment and un-comment the correct lines to reach the exit." }],
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
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Collect water at the well to refill your canteen and water all five crops to complete the level.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "You must refill the canteen at the well and water the crops before they dry up!" }],
        [
          { text: "Head over to the well marked with an X and refill your canteen. Face the well and use the " },
          { text: "collect()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function by writing \"water\" inside it, like this: " },
          { text: "player.collect(\"water\")", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
        ],
        [
          { text: "Then head to the X marks on the ground, face the crops and use the " },
          { text: "water()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function just like in the previous level: " },
          { text: "player.water()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: "." },
        ],
        [{ text: "There are five crops to water in total — good luck!" }],
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
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Open the fence to go into the field and close all four stable doors to complete the level.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "Someone left the doors in the stable open — help out by closing the doors." }],
        [
          { text: "To enter the stable use the " },
          { text: "open()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function. Head to the X mark by the stable entrance, face the door and write: " },
          { text: "player.open()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
        ],
        [
          { text: "Once inside, close the four open doors by walking to each X mark, facing the door and using the " },
          { text: "close()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function one by one: " },
          { text: "player.close()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
        ],
        [{ text: "Easy right?!" }],
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
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Collect planks and bricks and store them into variables in order to complete the level.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "The storehouse is a mess — help pick up all these bricks and planks scattered about." }],
        [{ text: "To store materials more easily you need to use variables. A variable is a name you assign to an object or group of objects so you can address them more easily later on." }],
        [{ text: "After collecting all materials, write a variable named \"planks\" and set it to the number of planks you gathered. Do the same for bricks:" }],
        [{ text: "planks = (number of planks picked up)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "bricks = (number of bricks picked up)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [{ text: "Remember, the number you assign is exactly how many of each you've picked up — count carefully!" }],
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
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Collect wheat in the field, store it in a variable, place it in the chest and close it to complete the level.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "Collect the grain in the field and put it away." }],
        [{ text: "Pick up all the grains on the field, then put them into a variable by writing the word \"wheat\" followed by the number of grains you picked up, like this:" }],
        [{ text: "wheat = (number of grains picked up)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" }],
        [
          { text: "Once the variable is ready, go to the X mark in front of the open chest and store the grain using the " },
          { text: "place()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function — write the variable name in the parentheses while facing the chest: " },
          { text: "player.place(wheat)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
        ],
        [
          { text: "Once you've put the wheat away, close the chest using the " },
          { text: "close()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function: " },
          { text: "player.close()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
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
      instructionsEn: [
        [{ text: "Objective", className: "uppercase font-bold text-3xl" }],
        [{ text: "Pick up all three items, store them in individual variables, open the chests to place each variable in their own container and close them to complete the level.", className: "pl-10 ml-10 border-l-4 border-white border-solid" }],
        [{ text: "Store the 3 different harvests in a bag and put them away." }],
        [
          { text: "There are 3 items: " },
          { text: "\"Pumpkin\"", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ", " },
          { text: "\"Eggplant\"", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " and " },
          { text: "\"Tomato\"", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ". Collect them and store each in its own bag using variables." },
        ],
        [
          { text: "Create 3 variables: " },
          { text: "bag1", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ", " },
          { text: "bag2", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ", " },
          { text: "bag3", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ". Each bag must contain one of the 3 items. Example: " },
          { text: "bag1 = \"Pumpkin\"", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: ". Do this for all 3 items, then place each bag in one of the 3 chests." },
        ],
        [
          { text: "Walk to each X mark in front of each chest and place the bags inside. Use the " },
          { text: "open()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function to open the chest, then the " },
          { text: "place()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function to store each bag: " },
          { text: "player.place(bag1)", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: "." },
        ],
        [
          { text: "After placing a bag, close the chest using the " },
          { text: "close()", className: "font-bold text-green-400 bg-black/30 px-2 py-1 rounded" },
          { text: " function. Repeat this process for all 3 items." },
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

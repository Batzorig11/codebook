"use client";

import FuncName from "@/components/FuncName";
import Syntax from "@/components/Syntax";
import Explanation from "@/components/Explanation";
import Example from "@/components/Example";
import Link from "next/link";
import Image from "next/image";

// const codebookData: {
//   funcname: string;
//   syntax: string;
//   explanation: string;
//   example?: string;
//   img?: string;
// }[] = [
//   {
//     funcname: "move_forward()",
//     syntax: "player.move_forward([number of steps])",
//     explanation:
//       "This function is used to have player move forward in the direction they’re facing provided there is not a collision blocking the player’s trajectory. You can assign the amount of steps you would like for this function to repeat or you can leave it blank and it will execute the action only once. If the function is not provided with any arguments, then it will move the player forward by one step.\nExample:\n\nThis code will have player move three steps forward in the map.",
//     example: "player.move_forward(3)",
//     img: "/codebook/move_forward.png",
//   },
//   {
//     funcname: "turn_left()",
//     syntax: "player.turn_left()",
//     explanation:
//       "This function is used to have player turn left, altering their direction towards the left of their current direction. Example:\n\nThis code will have player turn towards the left of their current facing direction and move forward in that direction with the follow up code.",
//     example: "player.turn_left()\nplayer.move_forward()",
//     img: "/codebook/turn_left.png",
//   },
//   {
//     funcname: "turn_right()",
//     syntax: "player.turn_right()",
//     explanation:
//       "This function is used to have player turn right, altering their direction towards the right of their current direction. Example:\n\nThis code will have player turn towards the right of their current facing direction and move forward in that direction with the follow up code.",
//     example: "player.turn_right()\nplayer.move_forward()",
//     img: "/codebook/turn_right.png",
//   },
//   {
//     funcname: "push()",
//     syntax: "player.push()",
//     explanation:
//       "This function is used to have player push an object in the direction he is facing provided there is not a collision blocking object’s trajectory. Example:\n\nThis code will have player turn left and push a movable object in the direction he is facing.",
//     example: "player.turn_left()\nplayer.push()",
//     img: "/codebook/push.png",
//   },
//   {
//     funcname: "speak()",
//     syntax: "player.speak([message])",
//     explanation:
//       "This function is used to have player call out a string that is specified in this function’s argument. In game this is expressed by the string being drawn on screen over the player’s head. Example:\n\nThis code will have the phrase “Hello World” displayed over the player’s head.",
//     example: 'player.speak("Hello World")',
//     img: "/codebook/speak.png",
//   },
//   {
//     funcname: "build()",
//     syntax: "player.build([object to build])",
//     explanation:
//       "This function is used to have player build an object that is specified in this function’s argument. There is a limited selection of objects that the player can build using this function and there are certain requirements tied to building each object. Objects will be built in front of the player’s facing direction provided the area is not occupied by a different object or the object cannot be built in the type of terrain it’s being built over. Example:\n\nExample:\n\nThis code will have player build a bridge in front of the player in the direction they are facing.",
//     example: 'player.build("bridge")',
//     img: "/codebook/build.png",
//   },
//   {
//     funcname: "water()",
//     syntax: "player.water()",
//     explanation:
//       "The function can be used to water objects in game, such as watering crops and refilling water trays. In game this is usually used for farming and homesteading.\n\nExample:\n\nUsing this code the player can water an object in the direction they are facing.",
//     example: "player.water()",
//     img: "/codebook/water.png",
//   },
//   {
//     funcname: "collect()",
//     syntax: "player.collect(string)",
//     explanation:
//       "This function is used to collect resources that you can’t claim as part of your inventory. This is usually used to replenish inventory items that can be exhausted, for example filling a canteen with water. Example:\n\nThis code will have the player collect water from a water source they are facing, then turn left to water an object.",
//     example: 'player.collect("water")\nplayer.turn_left()\nplayer.water()',
//     img: "/codebook/collect.png",
//   },
//   {
//     funcname: "open()",
//     syntax: "player.open([object to open])",
//     explanation:
//       "This function is used to open doors and containers, this can be useful for crossing entryways or opening containers to pick up or place objects. Example:\n\nThis code will have player turn left to open a door and then cross through it.",
//     example: "player.turn_left()\nplayer.open()\nplayer.move_forward()",
//     img: "/codebook/open.png",
//   },
//   {
//     funcname: "close()",
//     syntax: "player.close()",
//     explanation:
//       "This function is used to close doors and containers, this can be useful for closing doors behind you or closing a container after you’ve placed something inside.\n\nExample:\n\nThis code will have player open a container, collect an item from it, and then close the container. Example:\n\nThis code will have player open a chest, pick up an item and then close the chest afterwards.",
//     example: 'player.open()\nplayer.collect("item")\nplayer.close()',
//     img: "/codebook/close.png",
//   },
//   {
//     funcname: "place()",
//     syntax: "player.place([object to place])",
//     explanation:
//       "This function is used to place and object, item or variable in a location where objects are allowed to be placed. This is usually used to store items in a container or setting down objects in specified locations. Example:\n\nThis code illustrates player storing a number inside a variable named wheat and then the place() function being used to place the variable in a designated location.",
//     example: "wheat = 6\nplayer.place(wheat)",
//     img: "/codebook/place.png",
//   },
//   {
//     funcname: "combine()",
//     syntax: "player.combine(mixture)",
//     explanation:
//       "This function is used to have player combine different object together to produce a brand new object. This is usually used to combine ingredients to make food, drink or substances. Example:\n\nThis code will have player take everything in a list named “jar” and combine them to form a new item/object.",
//     example: "player.combine(jar)",
//     img: "/codebook/combine.png",
//   },
//   {
//     funcname: "plant()",
//     syntax: "player.plant(dictionary, key)",
//     explanation:
//       "This function is used to plant objects in the ground, this is usually reserved for planting crops. This function uses dictionaries, it takes 2 arguments, the name of the dictionary and the dictionary key. Example:\n\nIn the below code the player plants eggplant seeds in the soil and then waters them.",
//     example: 'player.plant(seeds, "Eggplant")',
//     img: "/codebook/plant.png",
//   },
//   {
//     funcname: "write()",
//     syntax: "await player.write(message)",
//     explanation:
//       "Allow a message to be displayed, this is an async function that allows a pop up to show a message that has been pre-recorded in the level. Program is paused until the message is closed. Example:\n\nIn the above code a popup message is displayed with a pre-recorded message manually embeded into the level, pausing the program until the player closes the message.",
//     example: "await player.write('Hello World')",
//     img: "/codebook/write.png",
//   },
//   {
//     funcname: "read()",
//     syntax: "await player.read()",
//     explanation:
//       "This function is used to have player read an object, item or variable. This is usually used to read the contents of a container or to read a message. Example:\n\nThis code will have player read the contents of a container named box.",
//     example: "await player.read()",
//     img: "/codebook/read.png",
//   },
//   {
//     funcname: "question()",
//     syntax: "await player.question(question)",
//     explanation:
//       "Allow a message to be displayed with a yes or no question, this is an async function that allows a pop up to show a message provided and produces a Boolean variable based on input. Example:\n\nIn the above code a popup message is displayed with a question with yes and no buttons, pausing the program until the player makes a selection.",
//     example: `async def question_function():
//   answer = await player.question("Question you would like to ask")
//   if answer:
//     # Actions to take if answer is Yes
//   else:
//     # Actions to take if answer is No`,
//     img: "/codebook/question.png",
//   },
//   {
//     funcname: "display()",
//     syntax: "await player.display(message)",
//     explanation:
//       "This function is used to display a message to the player. Example:\n\nThis code will display a message to the player.",
//     example: 'await player.display("Whatever I want to put here")',
//     img: "/codebook/display.png",
//   },
// ];

const codebookData: {
  funcname: string;
  syntax: string;
  explanation: string;
  example?: string;
  img?: string;
}[] = [
  {
    funcname: "move_forward()",
    syntax: "player.move_forward([number of steps])",
    explanation:
      "Энэ функц нь тоглогчийг харж буй чиглэл рүү нь урагшлуулахад ашиглагдана, хэрэв замд саад байхгүй бол. Та хэдэн алхам урагшлахыг зааж өгч болно, эсвэл хоосон орхивол зөвхөн нэг удаа ажиллана. Хэрэв ямар ч параметр өгөөгүй бол тоглогчийг нэг алхам урагшлуулна.\nExample:\n\nЭнэ код нь тоглогчийг газрын зураг дээр 3 алхам урагшлуулна.",
    example: "player.move_forward(3)",
    img: "/codebook/move_forward.png",
  },
  {
    funcname: "turn_left()",
    syntax: "player.turn_left()",
    explanation:
      "Энэ функц нь тоглогчийг зүүн тийш эргүүлж, одоогийн чиглэлээс нь зүүн зүг рүү харуулна.\nExample:\n\nЭнэ код нь тоглогчийг зүүн тийш эргүүлээд дараагийн кодоор урагшлуулах боломжтой болгоно.",
    example: "player.turn_left()\nplayer.move_forward()",
    img: "/codebook/turn_left.png",
  },
  {
    funcname: "turn_right()",
    syntax: "player.turn_right()",
    explanation:
      "Энэ функц нь тоглогчийг баруун тийш эргүүлж, одоогийн чиглэлээс нь баруун зүг рүү харуулна.\nExample:\n\nЭнэ код нь тоглогчийг баруун тийш эргүүлээд дараагийн кодоор урагшлуулах боломжтой болгоно.",
    example: "player.turn_right()\nplayer.move_forward()",
    img: "/codebook/turn_right.png",
  },
  {
    funcname: "push()",
    syntax: "player.push()",
    explanation:
      "Энэ функц нь тоглогчийг харж буй чиглэл рүү объект түлхэхэд ашиглагдана, хэрэв замд саад байхгүй бол.\nExample:\n\nЭнэ код нь тоглогчийг зүүн тийш эргүүлээд тухайн чиглэлд объект түлхэнэ.",
    example: "player.turn_left()\nplayer.push()",
    img: "/codebook/push.png",
  },
  {
    funcname: "speak()",
    syntax: "player.speak([message])",
    explanation:
      "Энэ функц нь тоглогчийг өгөгдсөн текстийг хэлэхэд ашиглагдана. Тоглоом дээр энэ нь тоглогчийн толгойн дээр текст гарч ирэх байдлаар харагдана.\nExample:\n\nЭнэ код нь “Hello World” гэсэн үгийг тоглогчийн толгойн дээр харуулна.",
    example: 'player.speak("Hello World")',
    img: "/codebook/speak.png",
  },
  {
    funcname: "build()",
    syntax: "player.build([object to build])",
    explanation:
      "Энэ функц нь тоглогчийг өгөгдсөн объектыг барихад ашиглагдана. Барих боломжтой объектууд хязгаартай бөгөөд тус бүрдээ шаардлагатай нөхцөлтэй. Объект нь тоглогчийн харж буй чиглэлд, хэрэв тухайн байрлал сул байвал баригдана.\nExample:\n\nЭнэ код нь тоглогчийн өмнө гүүр барина.",
    example: 'player.build("bridge")',
    img: "/codebook/build.png",
  },
  {
    funcname: "water()",
    syntax: "player.water()",
    explanation:
      "Энэ функц нь тоглоом дахь объектуудыг услахад ашиглагдана, жишээ нь ургамал услах эсвэл ус дүүргэхэд.\n\nExample:\n\nЭнэ код нь тоглогчийн харж буй чиглэлд байгаа объектыг усална.",
    example: "player.water()",
    img: "/codebook/water.png",
  },
  {
    funcname: "collect()",
    syntax: "player.collect(string)",
    explanation:
      "Энэ функц нь нөөц цуглуулахад ашиглагдана. Ихэвчлэн дуусдаг зүйлсийг дахин дүүргэхэд хэрэглэгддэг (жишээ нь ус авах).\n\nExample:\n\nЭнэ код нь тоглогчийг ус цуглуулаад дараа нь зүүн тийш эргэж объект услах боломжтой болгоно.",
    example: 'player.collect("water")\nplayer.turn_left()\nplayer.water()',
    img: "/codebook/collect.png",
  },
  {
    funcname: "open()",
    syntax: "player.open([object to open])",
    explanation:
      "Энэ функц нь хаалга болон сав нээхэд ашиглагдана. Ингэснээр нэвтрэх эсвэл доторх зүйлийг авах боломжтой болно.\n\nExample:\n\nЭнэ код нь тоглогчийг зүүн тийш эргүүлээд хаалга нээгээд цааш нэвтрэх боломжтой болгоно.",
    example: "player.turn_left()\nplayer.open()\nplayer.move_forward()",
    img: "/codebook/open.png",
  },
  {
    funcname: "close()",
    syntax: "player.close()",
    explanation:
      "Энэ функц нь хаалга болон сав хаахад ашиглагдана. Жишээ нь хаалгаа хаах эсвэл савыг буцааж хаахад хэрэглэнэ.\n\nExample:\n\nЭнэ код нь тоглогчийг сав нээгээд, доторх зүйлийг аваад дараа нь буцааж хаана.",
    example: 'player.open()\nplayer.collect("item")\nplayer.close()',
    img: "/codebook/close.png",
  },
  {
    funcname: "place()",
    syntax: "player.place([object to place])",
    explanation:
      "Энэ функц нь объект, зүйл эсвэл хувьсагчийг зөвшөөрөгдсөн байрлалд байрлуулахад ашиглагдана. Ихэвчлэн саванд хийх эсвэл тодорхой газар тавихад хэрэглэнэ.\n\nExample:\n\nЭнэ код нь wheat нэртэй хувьсагчид тоо хадгалаад түүнийг байрлуулна.",
    example: "wheat = 6\nplayer.place(wheat)",
    img: "/codebook/place.png",
  },
  {
    funcname: "combine()",
    syntax: "player.combine(mixture)",
    explanation:
      "Энэ функц нь хэд хэдэн объектыг нэгтгэж шинэ объект үүсгэхэд ашиглагдана. Ихэвчлэн хоол, ундаа эсвэл бодис хийхэд хэрэглэгддэг.\n\nExample:\n\nЭнэ код нь “jar” жагсаалтад байгаа бүх зүйлийг нэгтгэж шинэ зүйл үүсгэнэ.",
    example: "player.combine(jar)",
    img: "/codebook/combine.png",
  },
  {
    funcname: "plant()",
    syntax: "player.plant(dictionary, key)",
    explanation:
      "Энэ функц нь газар тариа тарихад ашиглагдана. Dictionary ашигладаг бөгөөд 2 параметр авна: dictionary-ийн нэр болон key.\n\nExample:\n\nДоорх код нь тоглогчийг хашны үр тарьж дараа нь услахад ашиглагдана.",
    example: 'player.plant(seeds, "Eggplant")',
    img: "/codebook/plant.png",
  },
  {
    funcname: "write()",
    syntax: "await player.write(message)",
    explanation:
      "Энэ функц нь popup мессеж харуулна. Энэ нь async функц бөгөөд level-д урьдчилан бэлтгэсэн мессежийг харуулна. Мессеж хаагдах хүртэл програм түр зогсоно.\n\nExample:\n\nЭнэ код нь popup мессеж харуулж, тоглогч хаах хүртэл програмыг зогсооно.",
    example: "await player.write('Hello World')",
    img: "/codebook/write.png",
  },
  {
    funcname: "read()",
    syntax: "await player.read()",
    explanation:
      "Энэ функц нь объект, сав эсвэл мэдээлэл уншихад ашиглагдана. Ихэвчлэн савны доторх агуулгыг шалгах эсвэл мессеж уншихад хэрэглэгддэг.\n\nExample:\n\nЭнэ код нь box нэртэй савны доторхыг уншина.",
    example: "await player.read()",
    img: "/codebook/read.png",
  },
  {
    funcname: "question()",
    syntax: "await player.question(question)",
    explanation:
      "Энэ функц нь yes/no асуулт бүхий popup харуулна. Энэ нь async функц бөгөөд хэрэглэгчийн сонголтоос хамаарч Boolean утга буцаана.\n\nExample:\n\nЭнэ код нь асуулт харуулж, хэрэглэгчийн хариунаас хамаарч дараагийн үйлдлийг шийднэ.",
    example: `async def question_function():
  answer = await player.question("Question you would like to ask")
  if answer:
    # Actions if Yes
  else:
    # Actions if No`,
    img: "/codebook/question.png",
  },
  {
    funcname: "display()",
    syntax: "await player.display(message)",
    explanation:
      "Энэ функц нь тоглогчид мессеж харуулахад ашиглагдана.\n\nExample:\n\nЭнэ код нь тоглогчид мессеж харуулна.",
    example: 'await player.display("Whatever I want to put here")',
    img: "/codebook/display.png",
  },
];

export default function CodebookPage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-6 pt-5">
      <Link
        href="/"
        className="self-start mb-8 text-white/50 hover:text-white transition-colors"
      >
        &larr; Back
      </Link>

      <h1 className="text-5xl font-light tracking-wide mb-12">Codebook</h1>

      <div className="w-full max-w-3xl flex flex-col gap-10">
        {codebookData.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <FuncName>{item.funcname}</FuncName>
            <div className="">Syntax:</div>
            <Syntax>{item.syntax}</Syntax>
            <div className="">Тайлбар:</div>
            <Explanation>{item.explanation}</Explanation>
            <div className="">Жишээ:</div>
            <Example>{item.example}</Example>
            {item.img && (
              <Image
                src={item.img}
                alt={item.funcname}
                className="rounded-lg mt-2"
                width={400}
                height={400}
              />
            )}
            <hr />
          </div>
        ))}
      </div>
    </main>
  );
}

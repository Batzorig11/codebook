"use client";

import { use, useState } from "react";
import Link from "next/link";
import AnimatedList from "@/components/AnimatedList";

const chapterData: Record<
  string,
  {
    title: string;
    chapter: string;
    description: string;
    levels: { title: string; level: string; instructions: string }[];
  }
> = {
  "1": {
    chapter: "Chapter 1",
    title: "Introduction",
    description:
      "Хүүхдэд зориулсан код бичих платформ нь тоглоом ашиглан Python програмчлалыг заадаг сургалтын систем юм.\n\nДоорх Code Editor-ийг ашиглаад player.move_forward() гэсэн мөрийг нэмээрэй. Энэ код нь таныг нэг алхам урагшлуулах болно.\n\nRun товчийг дарж, бичсэн кодоо ажиллуулна уу.",
    levels: [
      {
        title: "Level 1",
        level: "",
        instructions:
          "Хүүхдэд зориулсан код бичих платформ нь тоглоом ашиглан Python програмчлалыг заадаг сургалтын систем юм.\n\nДоорх Code Editor-ийг ашиглаад player.move_forward() гэсэн мөрийг нэмээрэй. Энэ код нь таныг нэг алхам урагшлуулах болно.\n\nRun товчийг дарж, бичсэн кодоо ажиллуулна уу.",
      },
      {
        title: "Level 2",
        level: "Movement with Functions",
        instructions:
          'You\'re lost in the woods! Make your way out and get back to your farm by writing your first lines of Python code!\n\nPython is an all use programming language you can use for a variety of apps including games!\n\nYour first task is to make your way to the star using code to complete the level!\n\nIf you get stuck, try pressing the Help button in the upper right corner of the screen or press the Code Book button for illustrated explanations of all the codes used in the game.\n\nYou can also receive help from the Virtual Teacher, this feature will generate tips via popups in the code editor guiding you through the coding process. You can turn it on and off by switching the teacher icon located on top of the editor. The coin icon next to it informs you of how many tips you are eligible to receive. ObjectiveTraverse the forest path and reach the exit to complete the level.How can you get across the forest? By using Functions of course!Functions are useful code commands that influence the world around you. These commands are typed in the editor below.In the programming language Python, the functions are divided into modules. The player module is used to interact with the game world. This is why we need to "import" the player module to use its functions.Functions are executed by writing the word "player" and then a dot, followed by the function name and parentheses.Functions are executed one by one, from top to bottom - meaning that the order is important.The following functions are available to you:To move forward, you need to type player.move_forward().To turn left, you need to type player.turn_left().To turn right, you need to type player.turn_right().The white X mark displayed after you first move represents your start position, the star at the end of the path represents your end goal.Once you finished writing your code, press the "Run" button to execute all commands one by one.Try it out!',
      },
      {
        title: "Level 3",
        level: "",
        instructions: "Print your first message to the console.",
      },
      {
        title: "Level 4",
        level: "",
        instructions: "Combine variables and strings using concatenation.",
      },
      {
        title: "Level 5",
        level: "",
        instructions: "Create a simple program that greets the user by name.",
      },
    ],
  },
  "2": {
    chapter: "Chapter 2",
    title: "",
    description:
      "Conditional logic and decision making. Learn how to use if/else statements.",
    levels: [
      {
        title: "Level 1",
        level: "Starting Out",
        instructions:
          "Coding for kids is a learning platform that uses a game to teach Python programming!\n\nUse the Code Editor below and add the line: player.move_forward() to make your way to the exit. This code will allow you to take one step forward.\n\nPress the Run button, to execute the code you have written in the code editor.",
      },
      {
        title: "Level 2",
        level: "Movement with Functions",
        instructions:
          'You\'re lost in the woods! Make your way out and get back to your farm by writing your first lines of Python code!\n\nPython is an all use programming language you can use for a variety of apps including games!\n\nYour first task is to make your way to the star using code to complete the level!\n\nIf you get stuck, try pressing the Help button in the upper right corner of the screen or press the Code Book button for illustrated explanations of all the codes used in the game.\n\nYou can also receive help from the Virtual Teacher, this feature will generate tips via popups in the code editor guiding you through the coding process. You can turn it on and off by switching the teacher icon located on top of the editor. The coin icon next to it informs you of how many tips you are eligible to receive. ObjectiveTraverse the forest path and reach the exit to complete the level.How can you get across the forest? By using Functions of course!Functions are useful code commands that influence the world around you. These commands are typed in the editor below.In the programming language Python, the functions are divided into modules. The player module is used to interact with the game world. This is why we need to "import" the player module to use its functions.Functions are executed by writing the word "player" and then a dot, followed by the function name and parentheses.Functions are executed one by one, from top to bottom - meaning that the order is important.The following functions are available to you:To move forward, you need to type player.move_forward().To turn left, you need to type player.turn_left().To turn right, you need to type player.turn_right().The white X mark displayed after you first move represents your start position, the star at the end of the path represents your end goal.Once you finished writing your code, press the "Run" button to execute all commands one by one.Try it out!',
      },
      {
        title: "Level 3",
        level: "More complex looping",
        instructions: "Use else if for multiple conditions.",
      },
      {
        title: "Level 4",
        level: "",
        instructions: "Combine conditions with AND and OR operators.",
      },
      {
        title: "Level 5",
        level: "",
        instructions: "Build a simple number guessing checker.",
      },
      {
        title: "Level 6",
        level: "",
        instructions: "Nested if statements for complex decisions.",
      },
    ],
  },
  "3": {
    chapter: "Chapter 3",
    title: "",
    description:
      "Loops and repetition. Learn how to repeat actions efficiently.",
    levels: [
      {
        title: "Level 1",
        level: "",
        instructions: "Write a for loop that counts from 1 to 10.",
      },
      {
        title: "Level 2",
        level: "",
        instructions: "Use a while loop to repeat until a condition is met.",
      },
      {
        title: "Level 3",
        level: "",
        instructions: "Loop through a list of items.",
      },
      {
        title: "Level 4",
        level: "",
        instructions: "Use break and continue to control loop flow.",
      },
      {
        title: "Level 5",
        level: "",
        instructions: "Create a multiplication table using nested loops.",
      },
      { title: "Level 6", level: "", instructions: "Build a countdown timer." },
      {
        title: "Level 7",
        level: "",
        instructions: "Draw a pattern using loops.",
      },
    ],
  },
  "4": {
    chapter: "Chapter 4",
    title: "",
    description:
      "Functions and reusable code. Learn to organize your code into blocks.",
    levels: [
      {
        title: "Level 1",
        level: "While Loops",
        instructions:
          "Loops гэдэг нь нэг ижил кодыг дахин дахин давтаж ажиллуулах боломжтой бүтэц юм. Энэ нь тоглоом доторх даалгаврыг урт код бичихгүйгээр илүү амархан гүйцэтгэхэд тусалдаг. Loop-ийн 2 төрөл байдаг: while loop болон for loop бөгөөд та дараагийн түвшнүүд дээр эдгээрийг судлах болно.\n\nЭнэ газрын зураг дээр нийт тав (5) өндөг байна. Та while loop ашиглан хэдхэн мөр кодоор бүгдийг нь цуглуулж чадна. Нэг ижил хоёр мөр кодыг дөрвөн удаа давтаж бүх өндгийг авахыг оролдоорой.\n\n🎯 Зорилго\n\nАгуулах (barn) доторх бүх өндгийг while loop ашиглан, нийт зургаа (6) мөр код бичиж цуглуулах.\n\nТахианууд өндгөө хаа сайгүй гаргасан байна! Агуулахаар явж, бүх өндгийг хурдан цуглуулаарай.\n\nКод бичих ажлыг хялбарчилж, давтагдсан кодыг багасгахын тулд loop ашиглаж болно. Loop нь нэг ижил кодыг дахин дахин бичих шаардлагагүй болгодог.\n\nWhile loop нь тодорхой нөхцөл үнэн (true) байгаа үед кодыг давтан ажиллуулдаг loop юм. Та эхлээд count гэсэн хувьсагч үүсгэж, хэдэн удаа давтахыг тодорхойлно. Дараа нь үүнийг loop-ийн нөхцөл болгон ашиглана.\n\nЖишээ нь: while loop нь count < 4 эсэхийг шалгана. count нь 0-оос эхэлж, давталт бүрт +1-ээр нэмэгдсээр 4 хүрэх хүртэл ажиллана. while loop-ийн доор бичигдсэн (indent хийсэн) бүх код энэ тохиолдолд 4 удаа давтагдана.\n\nАнхаар: loop буруу бичигдвэл хэзээ ч зогсохгүй (infinite loop) байж болно. Тиймээс count хувьсагчийг устгах эсвэл comment хийхгүй байх хэрэгтэй, эс бөгөөс алдаа гарч болзошгүй.",
      },
      {
        title: "Level 2",
        level: "For Loop",
        instructions:
          "🎯 Зорилго\n\nFor loop ашиглан, нийт 6-аас ихгүй мөр код бичиж, бутан лабиринтыг (hedge maze) туулж гарцад хүрээрэй.\n\nЭнэ лабиринтаас 6-аас ихгүй мөр кодоор гарахын тулд for loop ашиглах хэрэгтэй. Энэ нь while loop-той төстэй боловч бага зэрэг ялгаатай. For loop нь нөхцөл шалгах биш, харин урьдчилан тогтоосон тооны дагуу давтагддаг.for x in range(3):player.move_forward(2)Энэ жишээнд player.move_forward(2) код нь 3 удаа давтагдана.x нь loop хэдэн удаа давтагдсаныг хадгалах хувьсагч юм range() нь loop нийт хэдэн удаа ажиллахыг заана for loop-ийн доор indent хийж бичсэн бүх код давтагдана",
      },
      {
        title: "Level 3",
        level: "More complex looping",
        instructions:
          "🎯 Зорилго\n\nТалбайгаар явж, гарц руу хүрэхдээ замдаа ургамлуудыг услаарай. Үүнийг нийт 14-өөс ихгүй мөр код ашиглан гүйцэтгэнэ.\n\nЭнэ түвшинг 14 буюу түүнээс бага мөр кодоор гүйцэтгэхийн тулд for loop эсвэл while loop-ийн аль нэгийг ашиглах шаардлагатай.\n\nТалбай дундуур явахдаа loop дотор дараах функцуудыг ашиглана:\n\nmove_forward()\n\nturn_left()\n\nturn_right()\n\nЗамдаа X тэмдэг дээр зогсоод, ургамал руу харж байгаа үед water() функцийг ашиглан услаарай",
      },
      {
        title: "Level 4",
        level: "For Loop Sequence",
        instructions:
          "🎯 Зорилго\n\nНийт 4-өөс ихгүй мөр код бичиж, үр тариаг (grains) цуглуулаад лабиринтаас гар.\n\nТа лабиринтын дунд төөрчихсөн байна. Loop ашиглан талбай дээрх үр тариаг цуглуулаад гарцыг олоорой.\n\nГазрын зураг жигд биш тул өмнөх түвшнүүд шиг нэг ижил кодыг шууд давтах боломжгүй. Тиймээс for loop-ийн хувьсагчийг бүрэн ашиглах хэрэгтэй. for x in range(4):    player.move_forward(x + 1)\n\n# +1 нэмсэн шалтгаан: x нь 0-оос эхэлдэг тул бид 1-ээс эхлүүлэхийг хүсэж байна\n\nЭнд x хувьсагч нь loop хэдэн удаа давтагдсаныг илэрхийлнэ. Та энэ хувьсагчид дурын нэр өгч болно, гэхдээ ихэвчлэн x гэж нэрлэдэг.\n\nFor loop-ийн хувьсагчийг move_forward() функц дотор ашигласнаар loop бүрт илүү олон алхам урагшлах боломжтой болно.\n\nЖишээ нь дээрх код дараах байдлаар ажиллана:\n\nmove_forward(1) # 1-р давталт move_forward(2) # 2-р давталт move_forward(3) # 3-р давталт move_forward(4) # 4-р давталт\n\n💡 Loop-ийн хувьсагчийг move_forward() дотор ашиглаж, алхмын тоог нэмэгдүүлэн бүх үр тариаг цуглуулаарай.\n\n⚠️ Сануулга: Энэ бүхнийг 4-өөс ихгүй мөр кодоор хийх ёстой! 🚀",
      },
    ],
  },
  "5": {
    chapter: "Chapter 5",
    title: "",
    description:
      "Arrays and lists. Learn how to store and work with collections of data.",
    levels: [
      {
        title: "Level 1",
        level: "",
        instructions: "Create an array and access items by index.",
      },
      {
        title: "Level 2",
        level: "",
        instructions: "Add and remove items from an array.",
      },
      {
        title: "Level 3",
        level: "",
        instructions: "Loop through an array to process each item.",
      },
      {
        title: "Level 4",
        level: "",
        instructions: "Search for an item inside an array.",
      },
      {
        title: "Level 5",
        level: "",
        instructions: "Sort an array in ascending and descending order.",
      },
      {
        title: "Level 6",
        level: "",
        instructions: "Use map and filter to transform arrays.",
      },
    ],
  },
  "6": {
    chapter: "Chapter 6",
    title: "",
    description:
      "Objects and key-value pairs. Learn to represent real-world things in code.",
    levels: [
      {
        title: "Level 1",
        level: "",
        instructions: "Create an object with properties.",
      },
      {
        title: "Level 2",
        level: "",
        instructions: "Access and update object properties.",
      },
      {
        title: "Level 3",
        level: "",
        instructions: "Loop through an object's keys and values.",
      },
      {
        title: "Level 4",
        level: "",
        instructions: "Nest objects inside other objects.",
      },
      {
        title: "Level 5",
        level: "",
        instructions: "Build a contact book using objects.",
      },
      {
        title: "Level 6",
        level: "",
        instructions: "Use arrays of objects to represent a collection.",
      },
      {
        title: "Level 7",
        level: "",
        instructions: "Destructure objects for cleaner code.",
      },
      {
        title: "Level 8",
        level: "",
        instructions: "Compare and merge objects.",
      },
    ],
  },
  "7": {
    chapter: "Chapter 7",
    title: "",
    description:
      "DOM manipulation. Learn to interact with web pages using JavaScript.",
    levels: [
      {
        title: "Level 1",
        level: "",
        instructions: "Select an element from the page.",
      },
      {
        title: "Level 2",
        level: "",
        instructions: "Change the text content of an element.",
      },
      {
        title: "Level 3",
        level: "",
        instructions: "Change styles dynamically with JavaScript.",
      },
      {
        title: "Level 4",
        level: "",
        instructions: "Add an event listener to a button.",
      },
      {
        title: "Level 5",
        level: "",
        instructions: "Create and append new elements to the page.",
      },
      {
        title: "Level 6",
        level: "",
        instructions: "Build an interactive to-do list.",
      },
    ],
  },
  "8": {
    chapter: "Chapter 8",
    title: "",
    description:
      "Error handling and debugging. Learn to find and fix problems in your code.",
    levels: [
      {
        title: "Level 1",
        level: "",
        instructions: "Understand common error types.",
      },
      {
        title: "Level 2",
        level: "",
        instructions: "Use try/catch to handle errors gracefully.",
      },
      {
        title: "Level 3",
        level: "",
        instructions: "Throw custom errors with meaningful messages.",
      },
      {
        title: "Level 4",
        level: "",
        instructions: "Debug with console.log and breakpoints.",
      },
      {
        title: "Level 5",
        level: "",
        instructions: "Handle edge cases in your functions.",
      },
    ],
  },
  "9": {
    chapter: "Chapter 9",
    title: "",
    description:
      "Final project. Combine everything you've learned to build a complete application.",
    levels: [
      {
        title: "Level 1",
        level: "",
        instructions: "Plan the structure of your project.",
      },
      { title: "Level 2", level: "", instructions: "Set up the HTML layout." },
      {
        title: "Level 3",
        level: "",
        instructions: "Add styles to make it look good.",
      },
      {
        title: "Level 4",
        level: "",
        instructions: "Add JavaScript logic and interactivity.",
      },
      {
        title: "Level 5",
        level: "",
        instructions: "Handle user input and validation.",
      },
      {
        title: "Level 6",
        level: "",
        instructions: "Test and debug your project.",
      },
      {
        title: "Level 7",
        level: "",
        instructions: "Polish and present your finished project.",
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
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const chapter = chapterData[id];

  if (!chapter) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="text-4xl mb-4">Chapter not found</h1>
        <Link
          href="/"
          className="text-white/60 hover:text-white transition-colors underline"
        >
          Go back home
        </Link>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen px-6 pt-5">
      <Link
        href="/"
        className="self-start mb-8 text-white/50 hover:text-white transition-colors"
      >
        &larr; Back
      </Link>

      <h1 className="text-5xl font-light tracking-wide mb-6">
        {chapter.chapter}
      </h1>
      <h2 className="text-3xl font-light tracking-wide mb-6">
        {chapter.title}
      </h2>
      {/*<p className="text-white/60 text-center max-w-2xl text-lg leading-relaxed mb-12">
        {chapter.description}
      </p> */}

      <div className="flex w-full max-w-5xl gap-6">
        {/* Instructions - left side (3/4) */}
        <div className="w-3/4">
          {selectedLevel !== null ? (
            <div className="p-6 rounded-xl border border-white/20 bg-black/10">
              <h3 className="text-xl mb-4">
                {chapter.levels[selectedLevel].title}
              </h3>
              <h4 className="text-lg mb-4">
                {chapter.levels[selectedLevel].level}
              </h4>
              <p className="text-white/70 leading-relaxed font-mono font-semibold text-lg">
                {chapter.levels[selectedLevel].instructions}
              </p>
            </div>
          ) : (
            <div className="p-6 rounded-xl border border-dashed border-white/20 flex items-center justify-center h-48">
              <span className="text-white/30 text-lg">
                Select a level to view instructions
              </span>
            </div>
          )}
        </div>

        {/* Level selector - right side (1/4) */}
        <div className="w-1/4">
          <h2 className="text-2xl font-light tracking-wide mb-6 text-center">
            Levels
          </h2>
          <AnimatedList
            items={chapter.levels.map((l) => l.title)}
            onItemSelect={(_item: string, index: number) => {
              setSelectedLevel(selectedLevel === index ? null : index);
            }}
            showGradients={false}
            displayScrollbar={false}
            className="!w-full"
          />
        </div>
      </div>
    </main>
  );
}

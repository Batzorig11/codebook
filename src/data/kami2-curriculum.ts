export type Kami2Day = {
  day: number;
  title: string;
  theme: string;
  concepts: string[];
  build: string;
  outcome: string;
  teacherFocus: string;
  challenge: string;
};

export type Kami2Resource = {
  title: string;
  items: string[];
};

export const kami2Overview = {
  title: "Kami-2: JavaScript Game Builder",
  subtitle: "Kami-1-ийн ахисан түвшин",
  duration: "10 өдөр, өдөр бүр 90 минут",
  audience: "Kami-1 эсвэл програмчлалын суурь ойлголттой сурагчид",
  goal:
    "Сурагчид платформ дээр бэлэн түвшин шийдэхийн оронд HTML, CSS, JavaScript ашиглан өөрийн 2D platformer тоглоомыг эхнээс нь бүтээнэ.",
  finalProject:
    "Хичээлийн төгсгөлд хөдөлгөөн, үсрэлт, gravity, collision, оноо, амь, саад, collectible, олон level, win/game-over төлөвтэй тоглоом демо хийнэ.",
};

export const dailyStructure = [
  { time: "10 мин", activity: "Өмнөх feature-ийг шалгаж, өнөөдрийн зорилгыг харуулах" },
  { time: "15 мин", activity: "Багш live coding хийж шинэ ойлголтыг тайлбарлах" },
  { time: "45 мин", activity: "Сурагчид guided build хийж тоглоомдоо feature нэмэх" },
  { time: "10 мин", activity: "Challenge extension эсвэл өөрийн theme-ээр өөрчлөх" },
  { time: "10 мин", activity: "Debugging, reflection, checkpoint хадгалах" },
];

export const projectFiles = [
  {
    name: "index.html",
    purpose: "Canvas, score/lives UI, script холболт",
  },
  {
    name: "style.css",
    purpose: "Page layout, canvas frame, HUD, start/win/game-over screen",
  },
  {
    name: "game.js",
    purpose: "Game loop, player state, controls, physics, collision, levels",
  },
  {
    name: "assets/",
    purpose: "Student-created sprites, background, sound файлууд",
  },
];

export const starterCode = `const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const player = {
  x: 50,
  y: 300,
  width: 32,
  height: 32,
  vx: 0,
  vy: 0,
  speed: 4,
  jumpPower: 12,
  onGround: false,
};

function update() {
  // change game state here
}

function draw() {
  // draw the game here
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();`;

export const kami2Days: Kami2Day[] = [
  {
    day: 1,
    title: "Real JavaScript эхлэл",
    theme: "Kami-1 командуудаас browser game project руу шилжих",
    concepts: ["HTML structure", "canvas", "variables", "functions"],
    build: "Canvas үүсгэж player-ийг rectangle эсвэл sprite хэлбэрээр зурна.",
    outcome: "Сурагч өөрийн компьютерт local browser game ажиллуулж чадна.",
    teacherFocus:
      "Код нь одоо platform-ийн command биш, browser-т өөрсдийн бүтээсэн game state-ийг зурж байгааг ялгуулна.",
    challenge: "Player-ийн өнгө, хэмжээ, нэрийг өөрчилж өөрийн theme сонгох.",
  },
  {
    day: 2,
    title: "Game Loop",
    theme: "Тоглоом тасралтгүй update/draw циклээр ажилладаг",
    concepts: ["requestAnimationFrame", "coordinates", "update()", "draw()"],
    build: "Player автоматаар эсвэл тогтмол speed-ээр хөдөлдөг болно.",
    outcome: "Сурагч frame бүр дээр position өөрчлөгдөхийг ойлгоно.",
    teacherFocus:
      "Kami-1-ийн мөр мөрөөр ажиллах дарааллыг real-time loop-тэй харьцуулж тайлбарлана.",
    challenge: "Canvas border хүрэхэд player буцаад эргэдэг болгох.",
  },
  {
    day: 3,
    title: "Keyboard Controls",
    theme: "Input state ашиглан тоглогчийг удирдах",
    concepts: ["events", "booleans", "objects", "conditionals"],
    build: "Arrow эсвэл WASD дарахад player зүүн/баруун хөдөлж, jump input авна.",
    outcome: "Controls responsive болж, key дарах болон тавих ялгааг ойлгоно.",
    teacherFocus:
      "Event listener зөвхөн input хадгалж, movement-ийг update() дээр шийдэх pattern-ийг хэвшүүлнэ.",
    challenge: "Shift дарахад түр хурд нэмэгддэг sprint mode хийх.",
  },
  {
    day: 4,
    title: "Gravity and Jump",
    theme: "Physics-ийн үндсэн санааг velocity ашиглан бүтээх",
    concepts: ["velocity", "gravity", "limits", "state flags"],
    build: "Player үсэрч, gravity-д татагдан бууж, ground дээр зогсоно.",
    outcome: "Үсрэлт нэг удаа ажиллаж, агаарт дахин давхар үсрэхгүй.",
    teacherFocus:
      "position ба velocity-ийн ялгааг жишээгээр тайлбарлаж, magic number-уудыг named constants болгоно.",
    challenge: "Jump power, gravity-г өөрчилж тоглоомын feel тохируулах.",
  },
  {
    day: 5,
    title: "Platforms and Collision",
    theme: "Rectangle collision ашиглан тоглоомын ертөнц бүтээх",
    concepts: ["arrays", "objects", "loops", "collision detection"],
    build: "Олон platform нэмж, player дээр нь тогтвортой зогсдог болгоно.",
    outcome: "Player platform-оор нэвтрэхгүй, доороос унахгүй level болно.",
    teacherFocus:
      "Collision бол if statement-үүдийн цэгцтэй хэрэглээ гэдгийг харуулж, edge case-ийг debug хийлгэнэ.",
    challenge: "Moving platform эсвэл нарийн jump section нэмэх.",
  },
  {
    day: 6,
    title: "Collectibles and Score",
    theme: "Game objective, score, item collection",
    concepts: ["array methods", "loops", "state updates", "HUD"],
    build: "Coin/star collectible нэмээд авах бүрд алга болж score өснө.",
    outcome: "Game UI score харуулж, level-ийн зорилго тодорхой болно.",
    teacherFocus:
      "Data array-гаас object устгах, эсвэл collected flag ашиглах хоёр аргаас нэгийг тогтвортой хэрэглүүлнэ.",
    challenge: "Бүх coin цуглуулахад хаалга эсвэл portal нээгддэг болгох.",
  },
  {
    day: 7,
    title: "Hazards and Lives",
    theme: "Алдаа, restart, game-over төлөв",
    concepts: ["game states", "reset functions", "lives", "hazards"],
    build: "Spike/enemy нэмээд мөргөхөд амь хасагдаж checkpoint руу буцна.",
    outcome: "Failure condition-тэй, дахин тоглох боломжтой game loop болно.",
    teacherFocus:
      "Restart хийхдээ бүх state-ийг нэг дор reset хийдэг function бичихийг шаардана.",
    challenge: "Enemy-ийг нэг чиглэлд хөдөлгөж, ирмэг дээр буцаадаг болгох.",
  },
  {
    day: 8,
    title: "Levels and Maps",
    theme: "Level data ашиглан тоглоомоо өргөтгөх",
    concepts: ["data-driven design", "nested objects", "functions", "indexes"],
    build: "2-3 level data үүсгэж, win condition биелэхэд дараагийн level ачаална.",
    outcome: "Сурагч layout-ийг кодын logic-оос салгаж удирдаж сурна.",
    teacherFocus:
      "Platform, collectible, hazard бүгд level object дотор хадгалагдах ёстойг тогтооно.",
    challenge: "Secret collectible эсвэл bonus level нэмэх.",
  },
  {
    day: 9,
    title: "Polish and Customization",
    theme: "Тоглоомыг өөрийн бүтээл болгох",
    concepts: ["CSS UI", "images", "audio", "balancing"],
    build: "Theme, sprites, background, sound, start/win/game-over screen нэмнэ.",
    outcome: "Тоглоом visual болон interaction талаасаа дууссан мэдрэмжтэй болно.",
    teacherFocus:
      "Polish хийхдээ core gameplay эвдэхгүйгээр жижиг checkpoint бүрээр test хийхийг сануулна.",
    challenge: "Timer, best score, эсвэл difficulty сонголт нэмэх.",
  },
  {
    day: 10,
    title: "Final Build and Showcase",
    theme: "Debugging, refactoring, presentation",
    concepts: ["code review", "testing", "refactoring", "demo explanation"],
    build: "Final bug fix хийж, тоглоомоо demo-д бэлдэнэ.",
    outcome: "Сурагч playable game танилцуулж, гол code хэсгээ тайлбарлана.",
    teacherFocus:
      "Demo хийхээс өмнө controls, win/loss, restart, level transition гэсэн 4 зүйл заавал ажиллаж байгаа эсэхийг шалгуулна.",
    challenge: "Найзынхаа тоглоомыг test хийж 2 bug report, 1 сайжруулах санал бичих.",
  },
];

export const assessmentRubric: Kami2Resource[] = [
  {
    title: "Code correctness",
    items: ["Game major error-гүй ажиллана", "Функцүүд тодорхой үүрэгтэй", "State reset ойлгомжтой"],
  },
  {
    title: "Controls and physics",
    items: ["Left/right movement responsive", "Jump ба gravity тогтвортой", "Collision найдвартай"],
  },
  {
    title: "Game logic",
    items: ["Score, lives, win/loss ажиллана", "2 ба түүнээс дээш level-тэй", "Restart боломжтой"],
  },
  {
    title: "Creativity and explanation",
    items: ["Өөрийн theme, sprites, layout нэмсэн", "Game loop, player object, collision-оо тайлбарлаж чадна"],
  },
];

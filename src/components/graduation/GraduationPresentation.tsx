"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
  BookOpen01Icon,
  CheckmarkCircle02Icon,
  CodeIcon,
  GameController03Icon,
  Rocket02Icon,
  SchoolIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

const slides = [
  { id: "opening", label: "Эхлэл", content: <OpeningSlide /> },
  { id: "kami", label: "Kami", content: <KamiSlide /> },
  { id: "platform", label: "Platform", content: <PlatformSlide /> },
  { id: "learned", label: "Сурсан", content: <LearnedSlide /> },
  { id: "skills", label: "Чадвар", content: <SkillsSlide /> },
  { id: "progress", label: "Ахиц", content: <ProgressSlide /> },
  { id: "parents", label: "Талархал", content: <ParentsSlide /> },
  { id: "ending", label: "Төгсгөл", content: <EndingSlide /> },
];

const kamiGoals = [
  {
    title: "Компьютерийн суурь",
    text: "Компьютер юу хийдэг, mouse, keyboard, browser, file, window-г яаж зөв ашиглах.",
    icon: SchoolIcon,
    accent: "from-[#14b8a6] to-[#22c55e]",
  },
  {
    title: "Алгоритм ойлгох",
    text: "Даалгаврыг жижиг алхам болгон задлаад, зөв дарааллаар шийдэх дадал.",
    icon: Rocket02Icon,
    accent: "from-[#38bdf8] to-[#60a5fa]",
  },
  {
    title: "Python эхлэл",
    text: "Команд, хувьсагч, давталт, нөхцөл, алдааг уншиж засах анхны түвшин.",
    icon: CodeIcon,
    accent: "from-[#f59e0b] to-[#ef4444]",
  },
];

const platformAdvantages = [
  "Browser дээр шууд эхэлнэ.",
  "Кодын үр дүн шууд харагдана.",
  "Даалгавар алхмаар ахина.",
  "Алдааг туршиж засна.",
  "Өөрийн хурдаар дуусгана.",
];

const lessons = [
  "Компьютер гэж юу вэ?",
  "Mouse, keyboard",
  "Browser ашиглах",
  "File ба window",
  "Команд бичих",
  "Дараалал",
  "Алгоритм",
  "Асуудал задлах",
  "Python syntax",
  "Хувьсагч",
  "Давталт",
  "Нөхцөл",
  "Функц",
  "List, data",
  "Алдаа засах",
  "Final practice",
];

const skills = [
  {
    title: "Логик сэтгэлгээ",
    text: "Ямар алхам эхэнд, ямар алхам дараа орохыг боддог болсон.",
    icon: CodeIcon,
    accent: "#38bdf8",
  },
  {
    title: "Problem solving",
    text: "Том асуудлыг жижиг хэсэг болгон харж шийддэг болсон.",
    icon: Rocket02Icon,
    accent: "#f59e0b",
  },
  {
    title: "Тэвчээр",
    text: "Нэг удаа болохгүй бол дахин туршиж, бууж өгөхгүй байх дадал суусан.",
    icon: CheckmarkCircle02Icon,
    accent: "#22c55e",
  },
  {
    title: "Error fixing",
    text: "Алдааны мөр уншиж, кодоо шалгаж, засах эхний чадвар бүрдсэн.",
    icon: BookOpen01Icon,
    accent: "#fb7185",
  },
  {
    title: "Бүтээлч байдал",
    text: "Нэг даалгаврыг өөрийнхөөрөө бодож, өөр шийдэл туршиж үзсэн.",
    icon: GameController03Icon,
    accent: "#a78bfa",
  },
  {
    title: "Компьютертэй ажиллах",
    text: "Keyboard, browser, platform, code editor-той айхгүй харьцдаг болсон.",
    icon: SchoolIcon,
    accent: "#2dd4bf",
  },
];

const roadSteps = [
  {
    title: "Эхлэл",
    text: "Компьютер гэж юу болохыг хүртэл шинээр таньж эхэлсэн.",
  },
  {
    title: "Дасгал",
    text: "Mouse, keyboard, browser ашиглаж даалгавраа өөрөө эхлүүлдэг болсон.",
  },
  {
    title: "Алгоритм",
    text: "Зорилгод хүрэх алхмуудаа дарааллаар нь төлөвлөдөг болсон.",
  },
  {
    title: "Код",
    text: "Python command бичиж, алдаа гарвал уншиж засахыг оролддог болсон.",
  },
  {
    title: "Одоо",
    text: "Computer, programming language, algorithm-ийн үндсэн ойлголттой болсон.",
  },
];

const cardClass =
  "rounded-lg border border-white/12 bg-white/[0.075] p-5 shadow-[0_24px_80px_rgba(2,6,23,0.28)] backdrop-blur-xl";

export default function GraduationPresentation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const deckRef = useRef<HTMLElement | null>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);

  const setSlideRef = useCallback(
    (index: number) => (node: HTMLElement | null) => {
      slideRefs.current[index] = node;
    },
    [],
  );

  const goToSlide = useCallback((index: number) => {
    const nextIndex = Math.max(0, Math.min(slides.length - 1, index));
    slideRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveIndex(nextIndex);
  }, []);

  useEffect(() => {
    const root = deckRef.current;
    if (!root) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveIndex(Number((visible.target as HTMLElement).dataset.slideIndex));
        }
      },
      { root, threshold: [0.6, 0.78] },
    );

    slideRefs.current.forEach((slide) => {
      if (slide) {
        observer.observe(slide);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) {
        return;
      }

      if (["ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        goToSlide(activeIndex + 1);
      }

      if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        goToSlide(activeIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, goToSlide]);

  return (
    <div className="fixed inset-0 z-[80] bg-[#0b0b0d] text-[#f8fafc]">
      <style>{`nextjs-portal { display: none !important; }`}</style>
      <main
        ref={deckRef}
        className="relative h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, index) => (
          <SlideShell
            key={slide.id}
            id={slide.id}
            index={index}
            setRef={setSlideRef(index)}
          >
            {slide.content}
          </SlideShell>
        ))}
      </main>

      <PresentationControls
        activeIndex={activeIndex}
        onNext={() => goToSlide(activeIndex + 1)}
        onPrevious={() => goToSlide(activeIndex - 1)}
      />
    </div>
  );
}

function PresentationControls({
  activeIndex,
  onNext,
  onPrevious,
}: {
  activeIndex: number;
  onNext: () => void;
  onPrevious: () => void;
}) {
  return (
    <div className="fixed right-5 top-5 z-[90] flex items-center gap-2 rounded-lg border border-white/12 bg-[#07111f]/72 p-2 shadow-2xl backdrop-blur-xl">
      <button
        type="button"
        className="grid size-10 place-items-center rounded-lg border border-white/12 bg-white/8 text-white transition duration-200 hover:bg-white/16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#67e8f9] disabled:cursor-not-allowed disabled:opacity-35"
        onClick={onPrevious}
        disabled={activeIndex === 0}
        aria-label="Өмнөх слайд"
      >
        <HugeiconsIcon icon={ArrowLeft02Icon} size={22} strokeWidth={2.2} />
      </button>

      <button
        type="button"
        className="grid size-10 place-items-center rounded-lg bg-[#67e8f9] text-[#07111f] transition duration-200 hover:bg-[#a5f3fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-35"
        onClick={onNext}
        disabled={activeIndex === slides.length - 1}
        aria-label="Дараагийн слайд"
      >
        <HugeiconsIcon icon={ArrowRight02Icon} size={22} strokeWidth={2.2} />
      </button>
    </div>
  );
}

function SlideShell({
  id,
  index,
  setRef,
  children,
}: {
  id: string;
  index: number;
  setRef: (node: HTMLElement | null) => void;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      ref={setRef}
      data-slide-index={index}
      className="relative isolate flex min-h-screen snap-start overflow-hidden px-6 py-8 sm:px-10 lg:px-14 xl:px-20"
    >
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-[1320px] content-center py-12">
        {children}
      </div>
    </section>
  );
}

function OpeningSlide() {
  return (
    <>
      <Image
        src="/banner.png"
        alt="CodingForKids game world"
        width={1920}
        height={1080}
        priority
        sizes="100vw"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-20 bg-[#06101f]/82" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(37,99,235,0.34)_0%,rgba(88,28,135,0.26)_46%,rgba(6,16,31,0.72)_100%)]" />
      <PatternGrid />

      <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-end">
        <div className="max-w-5xl">
          <DeckLabel tone="blue">Graduation showcase</DeckLabel>
          <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[1.04] text-white sm:text-6xl lg:text-7xl">
            Төгсөлтийн хичээл
          </h1>
          <p className="mt-5 max-w-4xl text-4xl font-black leading-tight text-[#67e8f9] sm:text-5xl lg:text-6xl">
            Бид юу сурав?
          </p>
          <p className="mt-8 max-w-3xl text-lg font-semibold leading-8 text-[#dbeafe] sm:text-xl lg:text-2xl lg:leading-9">
            Хүүхдүүдийн кодын ертөнцөд хийсэн анхны том алхмыг эцэг эх,
            сурагчидтай хамт тайзан дээр гаргаж харах өдөр.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
          <MetricTile value="16" label="хичээл" />
          <MetricTile value="3" label="зорилго" />
          <MetricTile value="1" label="эхний аялал" />
        </div>
      </div>
    </>
  );
}

function KamiSlide() {
  return (
    <>
      <div className="absolute inset-0 -z-30 bg-[#08111f]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,rgba(20,184,166,0.22)_0%,rgba(30,64,175,0.24)_42%,rgba(88,28,135,0.18)_100%)]" />
      <CircuitLines />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(460px,1.08fr)] lg:items-center">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex rounded-lg border border-white/12 bg-white/[0.08] p-4 shadow-[0_20px_70px_rgba(6,182,212,0.16)] backdrop-blur-xl">
            <Image
              src="/kami-logo.png"
              alt="Kami logo"
              width={170}
              height={76}
              style={{ width: "170px", height: "auto" }}
            />
          </div>
          <DeckLabel tone="teal">Kami curriculum</DeckLabel>
          <h2 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Kami гэж юу вэ?
          </h2>
          <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-[#dbeafe] sm:text-xl">
            Kami бол кодын ертөнц рүү орох эхний алхам. Хүүхэд тоглоомын
            даалгавраар дамжуулж компьютер, алгоритм, Python-ийн суурийг
            ойлгож эхэлдэг.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {kamiGoals.map((goal, index) => (
            <article
              key={goal.title}
              className={cn("relative overflow-hidden", cardClass)}
            >
              <div
                className={cn(
                  "absolute inset-y-0 left-0 w-1 bg-gradient-to-b",
                  goal.accent,
                )}
              />
              <div className="flex items-start gap-4">
                <span
                  className={cn(
                    "grid size-12 shrink-0 place-items-center rounded-lg bg-gradient-to-br text-[#07111f]",
                    goal.accent,
                  )}
                >
                  <HugeiconsIcon icon={goal.icon} size={27} strokeWidth={2.2} />
                </span>
                <div>
                  <p className="font-mono text-sm font-black text-[#9ca3af]">
                    OBJECTIVE 0{index + 1}
                  </p>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-white">
                    {goal.title}
                  </h3>
                  <p className="mt-2 text-base font-semibold leading-7 text-[#cbd5e1]">
                    {goal.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

function PlatformSlide() {
  return (
    <>
      <div className="absolute inset-0 -z-30 bg-[#07111f]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(140deg,rgba(14,165,233,0.24)_0%,rgba(79,70,229,0.22)_45%,rgba(15,23,42,0.92)_100%)]" />
      <DiagonalBars />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(390px,0.92fr)] lg:items-center">
        <div>
          <DeckLabel tone="blue">Codingforkids.io platform</DeckLabel>
          <h2 className="mt-5 max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl">
            Яагаад энэ platform дээр сурдаг вэ?
          </h2>
          <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-[#dbeafe] sm:text-xl">
            Хүүхэд код бичээд үр дүнг нь шууд тоглоом дээр хардаг. Алгоритм нь
            цаасан дээрх онол биш, ажилладаг шийдэл болж харагддаг.
          </p>

          <div className="mt-6 grid gap-2 md:grid-cols-2">
            {platformAdvantages.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 rounded-lg border border-white/12 bg-white/[0.075] px-3 py-2.5 text-sm font-bold leading-5 text-white shadow-[0_18px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg bg-[#67e8f9] text-[#07111f]">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} strokeWidth={2.2} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#67e8f9]/30 bg-[#07111f]/82 shadow-[0_28px_90px_rgba(14,165,233,0.22)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.07] px-4 py-3">
            <span className="font-mono text-sm font-black text-[#bae6fd]">
              codingforkids.io/run
            </span>
            <span className="rounded-md bg-[#67e8f9]/16 px-2 py-1 font-mono text-xs font-black text-[#67e8f9]">
              LIVE
            </span>
          </div>
          <div className="relative aspect-[4/3] bg-[#0f172a]">
            <Image
              src="/banner.png"
              alt="CodingForKids game screen"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover opacity-[0.88]"
            />
            <div className="absolute inset-x-0 bottom-0 border-t border-white/12 bg-[#07111f]/88 p-5 backdrop-blur-md">
              <p className="font-mono text-base font-black text-[#67e8f9]">
                player.move_forward()
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#dbeafe]">
                Код бичих бүрд тоглоом хөдөлнө.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function LearnedSlide() {
  return (
    <>
      <div className="absolute inset-0 -z-30 bg-[#07111f]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,rgba(34,197,94,0.16)_0%,rgba(37,99,235,0.2)_48%,rgba(88,28,135,0.18)_100%)]" />
      <PatternGrid />

      <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[400px_minmax(0,1fr)] lg:items-center">
        <div>
          <DeckLabel tone="green">16 lessons</DeckLabel>
          <h2 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
            Хүүхдүүд юу сурсан бэ?
          </h2>
          <p className="mt-7 text-lg font-semibold leading-8 text-[#dbeafe] sm:text-xl">
            Компьютерийн үндэс, алгоритмын суурь, Python командууд, мөн
            компьютертэй зөв ажиллах дадлыг 16 хичээлээр давтсан.
          </p>
          <div className="mt-6 rounded-lg border border-[#22c55e]/28 bg-[#22c55e]/10 px-4 py-3 shadow-[0_20px_70px_rgba(34,197,94,0.12)]">
            <p className="font-mono text-base font-black text-[#86efac]">
              think / code / run / fix
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {lessons.map((lesson, index) => (
            <article
              key={lesson}
              className={cn(
                "min-h-[112px] rounded-lg border bg-white/[0.075] p-4 shadow-[0_18px_55px_rgba(2,6,23,0.18)] backdrop-blur-xl",
                index % 4 === 0 && "border-[#38bdf8]/45",
                index % 4 === 1 && "border-[#22c55e]/45",
                index % 4 === 2 && "border-[#a78bfa]/45",
                index % 4 === 3 && "border-[#67e8f9]/45",
              )}
            >
              <p className="font-mono text-sm font-black text-[#94a3b8]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-sm font-black leading-6 text-white">
                {lesson}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

function SkillsSlide() {
  return (
    <>
      <div className="absolute inset-0 -z-30 bg-[#07111f]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(140deg,rgba(88,28,135,0.28)_0%,rgba(37,99,235,0.18)_48%,rgba(6,182,212,0.14)_100%)]" />
      <CircuitLines />

      <div>
        <div className="mb-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_520px] lg:items-end">
          <div className="max-w-4xl">
            <DeckLabel tone="violet">Growth beyond code</DeckLabel>
            <h2 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Ямар чадвар хөгжсөн бэ?
            </h2>
          </div>
          <p className="text-lg font-semibold leading-8 text-[#dbeafe] sm:text-xl">
            Coding class-ийн үнэ цэнэ зөвхөн syntax биш. Хүүхдүүд бодох,
            турших, засах, бүтээх арга барил сурсан.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className={cn(cardClass, "relative min-h-[148px] overflow-hidden p-4")}
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: skill.accent }}
              />
              <span
                className="grid size-10 place-items-center rounded-lg text-[#07111f]"
                style={{ backgroundColor: skill.accent }}
              >
                <HugeiconsIcon icon={skill.icon} size={22} strokeWidth={2.2} />
              </span>
              <h3 className="mt-4 text-xl font-black leading-tight text-white">
                {skill.title}
              </h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#cbd5e1]">
                {skill.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

function ProgressSlide() {
  return (
    <>
      <div className="absolute inset-0 -z-30 bg-[#07111f]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,rgba(14,165,233,0.2)_0%,rgba(88,28,135,0.26)_50%,rgba(15,23,42,0.92)_100%)]" />
      <DiagonalBars />

      <div>
        <div className="mb-10 max-w-5xl">
          <DeckLabel tone="blue">Student progress</DeckLabel>
          <h2 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Сурагчдын ахиц
          </h2>
          <p className="mt-7 max-w-4xl text-lg font-semibold leading-8 text-[#dbeafe] sm:text-xl">
            Эхэндээ зарим сурагч компьютерийн үндсэн ойлголтоо шинээр авч
            байсан. Одоо тэд coding-ийн гол ойлголтуудыг нэрлэж, жишээгээр
            тайлбарлаж чадна.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 right-8 top-[50px] hidden h-px bg-[#67e8f9]/45 md:block" />
          <div className="absolute left-8 right-8 top-[50px] hidden border-t border-dashed border-white/22 md:block" />

          <div className="relative grid gap-4 md:grid-cols-5">
            {roadSteps.map((step, index) => (
              <article
                key={step.title}
                className={cn("relative min-h-[224px]", cardClass)}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="grid size-11 place-items-center rounded-lg bg-[#67e8f9] font-mono text-sm font-black text-[#07111f] shadow-[0_0_24px_rgba(103,232,249,0.34)]">
                    {index + 1}
                  </span>
                  {index === roadSteps.length - 1 ? (
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={26}
                      strokeWidth={2.2}
                      className="text-[#86efac]"
                    />
                  ) : (
                    <HugeiconsIcon
                      icon={ArrowRight02Icon}
                      size={26}
                      strokeWidth={2.2}
                      className="text-[#67e8f9]"
                    />
                  )}
                </div>
                <h3 className="mt-5 text-2xl font-black leading-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#cbd5e1]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ParentsSlide() {
  return (
    <>
      <div className="absolute inset-0 -z-30 bg-[#07111f]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(130deg,rgba(124,58,237,0.28)_0%,rgba(37,99,235,0.2)_48%,rgba(245,158,11,0.12)_100%)]" />
      <StageLines />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_390px] xl:grid-cols-[minmax(0,1fr)_430px] lg:items-center">
        <div className="max-w-5xl">
          <DeckLabel tone="gold">Parents</DeckLabel>
          <h2 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Эцэг эхчүүдэд талархах
          </h2>
          <p className="mt-8 max-w-4xl text-2xl font-black leading-10 text-[#fde68a] sm:text-3xl sm:leading-tight">
            Энэ ахицын ард хүүхдийн хичээл зүтгэлээс гадна гэр бүлийн итгэл,
            цаг, дэмжлэг байсан.
          </p>
          <p className="mt-7 max-w-4xl text-lg font-semibold leading-8 text-[#dbeafe] sm:text-xl">
            Та бүхэн хүүхдээ ирүүлэх, хүлээх, урам өгөх, дахин оролдох
            боломжийг нь нээж өгсөн учраас өнөөдөр тэд компьютерийн өмнө айх
            биш, бодож туршдаг болсон.
          </p>
        </div>

        <div className="grid gap-4">
          <ThanksTile title="Итгэл" text="Хүүхэд чадна гэж харсан." />
          <ThanksTile title="Цаг" text="Тогтмол оролцох боломж гаргасан." />
          <ThanksTile title="Дэмжлэг" text="Алдаа гарсан ч үргэлжлүүлэх урам өгсөн." />
        </div>
      </div>
    </>
  );
}

function EndingSlide() {
  return (
    <>
      <Image
        src="/banner.png"
        alt="CodingForKids graduation background"
        width={1920}
        height={1080}
        sizes="100vw"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-20 bg-[#06101f]/84" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(37,99,235,0.34)_0%,rgba(88,28,135,0.32)_42%,rgba(20,184,166,0.16)_100%)]" />
      <PatternGrid />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center">
        <div className="max-w-5xl">
          <DeckLabel tone="green">Final slide</DeckLabel>
          <h2 className="mt-6 text-6xl font-black leading-tight text-[#67e8f9] sm:text-7xl lg:text-8xl">
            Баяр хүргэе!
          </h2>
          <p className="mt-7 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Kami төгсөгчид
          </p>
          <p className="mt-8 max-w-3xl text-lg font-semibold leading-8 text-[#dbeafe] sm:text-xl">
            Өнөөдрөөс эхлээд код бол айх зүйл биш, бодож бүтээдэг хэрэгсэл
            гэдгийг хүүхдүүд мэдэрсэн.
          </p>
        </div>

        <div className="grid gap-4">
          <AchievementTile
            icon={CodeIcon}
            label="Code"
            title="Командаар бодлоо илэрхийлсэн"
          />
          <AchievementTile
            icon={Rocket02Icon}
            label="Algorithm"
            title="Алхмаар шийдэх аргыг сурсан"
          />
          <AchievementTile
            icon={CheckmarkCircle02Icon}
            label="Confidence"
            title="Алдаанаас айхгүй туршдаг болсон"
          />
        </div>
      </div>
    </>
  );
}

function DeckLabel({
  children,
  tone,
}: {
  children: ReactNode;
  tone: "blue" | "gold" | "green" | "rose" | "teal" | "violet";
}) {
  const toneClass = {
    blue: "border-[#67e8f9]/40 bg-[#67e8f9]/14 text-[#a5f3fc]",
    gold: "border-[#f59e0b]/40 bg-[#f59e0b]/14 text-[#fde68a]",
    green: "border-[#22c55e]/40 bg-[#22c55e]/14 text-[#86efac]",
    rose: "border-[#fb7185]/40 bg-[#fb7185]/14 text-[#fecdd3]",
    teal: "border-[#14b8a6]/40 bg-[#14b8a6]/14 text-[#5eead4]",
    violet: "border-[#a78bfa]/40 bg-[#a78bfa]/14 text-[#ddd6fe]",
  }[tone];

  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-sm font-black shadow-[0_16px_48px_rgba(2,6,23,0.18)] backdrop-blur-xl",
        toneClass,
      )}
    >
      <HugeiconsIcon icon={Rocket02Icon} size={18} strokeWidth={2.2} />
      {children}
    </p>
  );
}

function MetricTile({ value, label }: { value: string; label: string }) {
  return (
    <article className={cardClass}>
      <p className="font-mono text-4xl font-black text-[#67e8f9]">{value}</p>
      <p className="mt-2 text-base font-black text-white">{label}</p>
    </article>
  );
}

function ThanksTile({ title, text }: { title: string; text: string }) {
  return (
    <article className={cardClass}>
      <p className="font-mono text-sm font-black text-[#fde68a]">{title}</p>
      <p className="mt-3 text-lg font-black leading-7 text-white">{text}</p>
    </article>
  );
}

function AchievementTile({
  icon,
  label,
  title,
}: {
  icon: IconSvgElement;
  label: string;
  title: string;
}) {
  return (
    <article className={cn("flex items-center gap-4", cardClass)}>
      <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-[#67e8f9] text-[#07111f] shadow-[0_0_26px_rgba(103,232,249,0.34)]">
        <HugeiconsIcon icon={icon} size={25} strokeWidth={2.2} />
      </span>
      <div>
        <p className="font-mono text-sm font-black text-[#a5f3fc]">{label}</p>
        <h3 className="mt-1 text-xl font-black leading-7 text-white">{title}</h3>
      </div>
    </article>
  );
}

function PatternGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]"
    />
  );
}

function CircuitLines() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.22]">
      <div className="absolute left-[7%] top-[18%] h-px w-[42%] bg-[#14b8a6]" />
      <div className="absolute left-[7%] top-[18%] h-[28%] w-px bg-[#14b8a6]" />
      <div className="absolute right-[10%] top-[24%] h-px w-[36%] bg-[#38bdf8]" />
      <div className="absolute right-[10%] top-[24%] h-[36%] w-px bg-[#38bdf8]" />
      <div className="absolute bottom-[16%] left-[18%] h-px w-[52%] bg-[#f59e0b]" />
      <div className="absolute bottom-[16%] left-[18%] h-[18%] w-px bg-[#f59e0b]" />
    </div>
  );
}

function DiagonalBars() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.12]">
      <div className="absolute -left-24 top-20 h-16 w-[56%] rotate-[-8deg] bg-white" />
      <div className="absolute -right-28 bottom-28 h-14 w-[48%] rotate-[-8deg] bg-white" />
      <div className="absolute left-1/4 top-1/2 h-6 w-[38%] rotate-[-8deg] bg-[#67e8f9]" />
    </div>
  );
}

function StageLines() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.22]">
      <div className="absolute left-[10%] top-0 h-full w-px rotate-[14deg] bg-[#a78bfa]" />
      <div className="absolute left-[24%] top-0 h-full w-px rotate-[14deg] bg-[#67e8f9]" />
      <div className="absolute right-[18%] top-0 h-full w-px rotate-[-14deg] bg-[#fde68a]" />
      <div className="absolute bottom-20 left-0 h-px w-full bg-[#67e8f9]" />
    </div>
  );
}

import type { Metadata } from "next";
import GraduationPresentation from "@/components/graduation/GraduationPresentation";

export const metadata: Metadata = {
  title: "Төгсөлтийн хичээл | CodeBook",
  description:
    "Kami curriculum төгсөлтийн presentation: хүүхдүүд юу сурсан, ямар чадвар хөгжсөн, сурагчдын ахиц.",
};

export default function GraduationPage() {
  return <GraduationPresentation />;
}

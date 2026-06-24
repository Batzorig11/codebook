import { getStudentGuides, getStudentGuidesEn } from "@/lib/student-guides";
import StudentGuidesListContent from "./StudentGuidesListContent";

export default function StudentGuidesPage() {
  const guides = getStudentGuides();
  const guidesEn = getStudentGuidesEn();
  return <StudentGuidesListContent guides={guides} guidesEn={guidesEn} />;
}

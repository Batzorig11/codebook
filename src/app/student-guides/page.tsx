import { getStudentGuides } from "@/lib/student-guides";
import StudentGuidesListContent from "./StudentGuidesListContent";

export default function StudentGuidesPage() {
  const guides = getStudentGuides();
  return <StudentGuidesListContent guides={guides} />;
}

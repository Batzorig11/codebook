import { redirect } from "next/navigation";

// claude.ai artifact-ийг iframe-д оруулах боломжгүй (frame-ancestors 'self'),
// тиймээс шууд artifact руу шилжүүлнэ.
const KAMI_CODE_URL = "https://claude.ai/artifact/FV9dq7XVaoNF12MWB7ehBo";

export default function KamiCodePage() {
  redirect(KAMI_CODE_URL);
}

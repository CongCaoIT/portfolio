import { redirect } from "next/navigation";

// Redirect to default locale - handled by middleware/proxy
export default function RootPage() {
  redirect("/vi");
}

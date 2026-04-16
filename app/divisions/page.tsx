import Navbar from "@/app/components/Navbar";
import DivisionsSection from "@/app/components/Divisions";

export const metadata = {
  title: "Divisions | Tasmed",
  description:
    "Explore Tasmed's specialized therapeutic divisions delivering quality pharmaceutical solutions.",
};

export default function DivisionsPage() {
  return (
    <main>
      <Navbar />

      <DivisionsSection />
    </main>
  );
}

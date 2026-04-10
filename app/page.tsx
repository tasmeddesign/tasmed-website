import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Divisions from "./components/Divisions";
import Manufacturing from "./components/Manufacturing";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Divisions />
      <Manufacturing />
    </main>
  );
}

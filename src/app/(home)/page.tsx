import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import BestSolution from "./components/BestSolution";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <section>
      <Banner />
      <BestSolution />
      <AboutUs />
      <Partners />
    </section>
  );
}

import NavbarMain from "./components/navbar/NavbarMain";
import BioMain from "./components/bio/bioMain";
import BioGradient from "./components/bio/BioGradient";
import SubBioSection from "./components/bio/SubBioSection";
import SkillsMain from "./components/skillsSection/SkillsMain";
import HelperSection from "./components/HelperSection";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <BioMain />
      <BioGradient />
      <SubBioSection />
      <SkillsMain />
      <HelperSection />
    </main>
  );
}

export default App;

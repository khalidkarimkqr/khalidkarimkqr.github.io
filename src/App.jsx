import NavbarMain from "./components/navbar/NavbarMain";
import BioMain from "./components/bio/bioMain";
import BioGradient from "./components/bio/BioGradient";
import SubBioSection from "./components/bio/SubBioSection";
import SkillsMain from "./components/skillsSection/SkillsMain";
import HelperSection from "./components/HelperSection";
import SubSkills from "./components/skillsSection/SubSkills";
import ExperienceMain from "./components/experience/ExperienceMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <BioMain />
      <BioGradient />
      <SubBioSection />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <HelperSection />
    </main>
  );
}

export default App;

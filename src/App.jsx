import NavbarMain from "./components/navbar/NavbarMain";
import BioMain from "./components/bio/bioMain";
import BioGradient from "./components/bio/BioGradient";
import SubBioSection from "./components/bio/SubBioSection";
import SkillsMain from "./components/skillsSection/SkillsMain";
import HelperSection from "./components/HelperSection";
import SubSkills from "./components/skillsSection/SubSkills";
import ExperienceMain from "./components/experience/ExperienceMain";
import ProjectsMain from "./components/projects/ProjectsMain";
import ContactMeMain from "./components/contactMe/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";

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
      <ContactMeMain />
      <FooterMain />
      <HelperSection />
    </main>
  );
}

export default App;

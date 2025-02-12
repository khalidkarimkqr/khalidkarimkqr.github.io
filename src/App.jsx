import NavbarMain from "./components/navbar/NavbarMain";
import BioMain from "./components/bio/bioMain";
import BioGradient from "./components/bio/BioGradient";
import SubBioSection from "./components/bio/SubBioSection";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <BioMain />
      <BioGradient />
      <SubBioSection />
    </main>
  );
}

export default App;

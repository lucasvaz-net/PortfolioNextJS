import NavbarComponent from '../components/Navbar';
import SobreMim from '../components/SobreMim';
import Skills from '../components/Skills';
import Projetos from '../components/Projetos';
import Experiencias from '../components/Experiencias';
import Estudos from '../components/Estudos';
import Contatos from '../components/Contatos';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../app/globals.css'; 
import '../plugins/fontawesome';


const Home: React.FC = () => {
  return (
    <div>
      <NavbarComponent />
      <div id="sobre-mim">
        <SobreMim />
      </div>
      <div id="projetos">
        <Projetos />
      </div>
      <div id="experiencia">
        <Experiencias />
      </div>
      <div id="estudos">
        <Estudos />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contato">
        <Contatos />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;

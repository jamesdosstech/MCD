import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Hello from './components/Hello';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Hello />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;

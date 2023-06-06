import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header prop="06/06/2023" />
      <Main prop="React" />
      <Footer prop="Beatriz Christie" />
    </div>
  );
}

export default App;

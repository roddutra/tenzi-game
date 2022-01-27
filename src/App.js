import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import GithubBadge from './components/GithubBadge';

function App() {
  return (
    <div className='relative flex items-center justify-center w-screen h-screen bg-tenzies-bg font-karla'>
      <GithubBadge />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

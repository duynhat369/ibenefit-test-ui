import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './App.css';
import WordsApp from './features/WordsApp';

function App() {

  return (
    <div className="App mx-auto">
      <p className='header pb-4 font-bold'>UI iBenefit Test - Nguyen Duy Nhat</p>
      <div className='title flex items-center justify-start'>
        <ChevronLeftIcon className='title-icon mr-2' />
        <span className='font-semibold text-left'>Create New Wallet</span>
      </div>
      <WordsApp />
    </div>
  );
}
export default App;

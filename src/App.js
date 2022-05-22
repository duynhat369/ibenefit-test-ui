import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
// import {
//   BrowserRouter as Router, Route, Routes
// } from "react-router-dom";
import './App.css';
import WordsApp from './features/WordsApp';
import ConfirmWords from './features/WordsApp/components/Wallet/confirmWords';

function App() {
  const [open, setOpen] = useState(false);

  // const [words, setWords] = useState([])
  const data = ["analyst", "banana", "craw", "craw", "craw", "craw", "craw", "craw", "craw", "craw", "crab", "crab", "december", "eleven", "egg", "fan", "favorite", "human", "hight", "height", "job", "journey", "ten", "tailwind", "limit", "schema", "known", "vietnam", "may", "november", "light", "nurse", "horse", "habit", "rabbit", "console", "index", "free", "dumb", "wild", "money", "career", "about", "skills", "profile", "profile", "profile", "profile", "profile", "profile", "portfolio", "contain", "objective",]

  let words = [];
  let words18 = []

  function inArray(array, el) {
    for (var i = 0; i < array.length; i++)
      if (array[i] === el) return true;
    return false;
  }

  // return a random word in data
  function getRandomWord(array) {
    var randomWord = array[Math.floor(Math.random() * array.length)];
    if (!inArray(words, randomWord)) {
      words.push(randomWord);
      return randomWord;
    }
    return getRandomWord(array);
  }

  // get 24 unduplicated words from data 
  for (let i = 0; i < 24; i++) {
    getRandomWord(data);
  }
  const new24Words = words.map((item, index) => {
    return {
      name: item,
      index
    }
  })

  // 18 words
  function inArrayObj(array, el) {
    for (var i = 0; i < array.length; i++)
      if (array[i].name === el.name) return true;
    return false;
  }
  function getRandomObject(array) {
    var randomObj = array[Math.floor(Math.random() * array.length)];
    if (!inArrayObj(words18, randomObj)) {
      words18.push(randomObj);
      return randomObj;
    }
    return getRandomObject(array);
  }
  for (let i = 0; i < 18; i++) {
    getRandomObject(new24Words)
  }

  const handleConfirmSubmit = () => {
    // return setOpen(true)
  }
  return (
    <>
      {/* <Router> */}
      <div className="App mx-auto">
        <p className='header pb-4 font-bold'>UI iBenefit Test - Nguyen Duy Nhat</p>
        <div className='title flex items-center justify-start'>
          <ChevronLeftIcon className='title-icon mr-2' />
          <span className='font-semibold text-left'>Create New Wallet</span>
        </div>
        <WordsApp words={new24Words} />
        <ConfirmWords words={words18} />
        <div className='wallet-bottom flex flex-col mt-6 bg-white'>
          <div className='flex mb-9'>
            <p className='font-bold mr-auto'>How does this work?</p>
            <ChevronRightIcon />
          </div>
          {/* if route = "/" => NEXT, if route = "/confirm" => submit */}
          {/* <button className='bottom-button py-4 px-8 font-bold text-white bg-black rounded-lg'>NEXT</button> */}
          <button
            className='bottom-button py-4 px-8 font-bold text-white bg-black rounded-lg'
            onClick={handleConfirmSubmit}
          >SUBMIT</button>
        </div>



        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        {/* <Routes>
            <Route path="/confirm">
              <ConfirmWords words={words18} />
            </Route>
            <Route path="/">
              <WordsApp words={new24Words} />
            </Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}
export default App;

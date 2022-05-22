import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from "react";
import "./styles.css";

function ConfirmWords({ words }) {
    const randomNum = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    }
    const newWords = [...words]
    const groupWord = []

    for (let i = 0; i < 6; i++) {
        const newArrayHasName = newWords.map((element) => element.name)
        const newArrayHasIndex = newWords.map((element) => element.index + 1)
        const nameSlice = newArrayHasName.slice(0, 3)
        const indexSlice = newArrayHasIndex.slice(0, 3)
        let item = {
            "list": nameSlice,
            "primary": randomNum(indexSlice)
        }
        groupWord.push(item)
        newWords.splice(0, 3)
    }

    const [isActive, setIsActive] = useState(false)
    const handleWordClick = (item) => {
        console.log("item: ", item)
        // return setIsActive(!isActive)
    }
    const classActive = isActive ? 'active' : ''
    return (
        <>
            <div className='wallet text-left'>
                <p className='wallet-title font-semibold py-4'>Confirm Your Seed Phrase</p>
                <div className='wallet-card grid gap-4'>
                    {groupWord ?
                        groupWord?.map((word) => (
                            <div key={word.primary + '123'} className="wallet-words group-words flex items-center justify-around rounded-lg px-2 py-4 border w-full">
                                <span style={{ width: '25%' }} className='word-index-group inline-flex justify-center items-center relative w-2 rounded-full'>{word.primary}</span>
                                <FormControl className='w-3/4 relative'>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        className='radio-group w-full'
                                    >
                                        {word.list.map((item, index) => (
                                            // <FormControlLabel
                                            //     key={item}
                                            //     value={item}
                                            //     control={<Radio />}
                                            //     label={item}
                                            //     onClick={() => handleWordClick(item)}
                                            //     className={`word-item-group text-center rounded cursor-pointer relative`}
                                            // />
                                            <div
                                                key={index}
                                                className="group-radio text-center relative"
                                            >
                                                <input
                                                    type='radio'
                                                    value={item}
                                                    name={word.primary}
                                                    id={item}
                                                    className="cursor-pointer"
                                                />
                                                <label
                                                    htmlFor={item}
                                                    className="cursor-pointer  rounded"
                                                >{item}</label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        ))
                        :
                        <div>Failed to load api - CORS POLICY </div>
                    }
                </div>
            </div>
        </>
    )
}



export default ConfirmWords
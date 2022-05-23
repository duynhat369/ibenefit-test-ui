import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DoneIcon from '@mui/icons-material/Done';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from "react";
import "./styles.css";

function ConfirmWords({ words }) {
    const [values, setValues] = useState([]);
    const [checked, setChecked] = useState(0);
    const [flag, setFlag] = useState(false);
    const [open, setOpen] = useState(false);
    console.log("rerender")

    const handleClose = () => {
        setFlag(false)
        setOpen(false);
    }

    const handleConfirmSubmit = (e) => {
        e.preventDefault();
        setFlag(true)
        setValues(document.querySelectorAll('input[class="cursor-pointer"]:checked'));
        if (document.querySelectorAll('input[class="cursor-pointer"]:checked').length < 6) return
        setOpen(true)
    }
    const handleCheckBoxChange = () => {
        setChecked(document.querySelectorAll('input[type=checkbox]:checked').length);
        console.log("checked", checked)
    }

    return (
        <>
            <form onSubmit={handleConfirmSubmit}>
                <div className='wallet text-left mb-16'>
                    <div className='wallet-title flex font-semibold inline-block justify-between py-4'>
                        <span className='inline-block'>Confirm Your Seed Phrase</span>
                        <span className='inline-block'>{values.length}/6</span>
                    </div>
                    <div className='wallet-card grid gap-4'>
                        {words ?
                            words?.map((word) => (
                                <div key={word.primary + '123'} className="wallet-words group-words flex items-center justify-around rounded-lg px-2 py-5 border w-full">
                                    <span style={{ width: '25%' }} className='word-index-group inline-flex justify-center items-center relative w-2 rounded-full'>{word.primary}</span>
                                    <FormControl className='w-3/4 relative'>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                            className='radio-group w-full justify-around items-center'
                                        >
                                            {word.list.map((item, index) => (
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
                                                        className="cursor-pointer rounded"
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
                    {values.length < 6 && flag === true ? (
                        <p className='mt-4 text-red-500 absolute -b-5'>Wrong seed phrases. Please try again!</p>
                    ) : (<p></p>)}
                </div>
                <div className='wallet-bottom flex flex-col mt-6 bg-white'>
                    <div className='flex mb-9'>
                        <p className='font-bold mr-auto'>How does this work?</p>
                        <ChevronRightIcon />
                    </div>
                    {/* if route = "/" => NEXT, if route = "/confirm" => submit */}
                    {/* <button className='bottom-button py-4 px-8 font-bold text-white bg-black rounded-lg'>NEXT</button> */}
                    <button
                        // onClick={handleSubmitClick}
                        className='bottom-button py-4 px-8 font-bold text-white bg-black rounded-lg'
                    >SUBMIT</button>
                    <div className={values.length === 6 && open ? 'created absolute flex flex-col justify-center items-center bg-white' : 'created-closed absolute flex flex-col justify-center items-center bg-white'}>
                        <div onClick={handleClose} className="cursor-pointer">
                            <KeyboardArrowDownIcon className='down-icon mt-4 text-slate-400' />
                        </div>
                        <DoneIcon className='created-copy-icon mb-5 my-5' />
                        <p className='my-5 font-bold text-lg'>Your wallet has been created!</p>
                        <div
                            className="group-radio-done flex flex-col text-center relative mb-5"
                        >
                            <div className='flex mb-2 text-left'>
                                <input
                                    onChange={handleCheckBoxChange}
                                    type='checkbox'
                                    value={1}
                                    name={1}
                                    id={1}
                                    className="checkbox cursor-pointer mt-2 w-6 h-6 rounded-full"
                                />
                                <label
                                    htmlFor={1}
                                    className="cursor-pointer rounded-full pl-4"
                                >Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe, it’s your responsibility.
                                </label>
                            </div>
                            <div className='flex mb-2 text-left'>
                                <input
                                    onChange={handleCheckBoxChange}
                                    type='checkbox'
                                    value={2}
                                    name={2}
                                    id={2}
                                    className="checkbox cursor-pointer mt-2 w-6 h-6 rounded-full"
                                />
                                <label
                                    htmlFor={2}
                                    className="cursor-pointer rounded-full pl-4"
                                >Your transaction data is one of the most important security keys which is needed for every incurred transaction. You should back up your data automatically and secure back up file with a strong pasword.
                                </label>
                            </div>
                            <div className='flex mb-2 text-left'>
                                <input
                                    onChange={handleCheckBoxChange}
                                    type='checkbox'
                                    value={3}
                                    name={3}
                                    id={3}
                                    className="checkbox cursor-pointer mt-2 w-6 h-6 rounded-full"
                                />
                                <label
                                    htmlFor={3}
                                    className="cursor-pointer rounded-full pl-4"
                                >To keep your backup file safe, you should also keep secret your back up location and secure it.
                                </label>
                            </div>
                        </div>
                        <button
                            onSubmit={() => false}
                            className='created-button font-bold border py-5 px-10 w-full mb-5 rounded-lg text-white'
                            disabled={checked < 3}
                        >I UNDERSTAND</button>
                    </div>
                </div>
            </form>
        </>
    )
}



export default ConfirmWords
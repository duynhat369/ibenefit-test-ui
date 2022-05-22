import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import '../Wallet/styles.css';

function Wallet({ words }) {
    const [open, setOpen] = useState(false);
    const handleCopyWordsClick = () => {
        return setOpen(true)
    };
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className='wallet text-left'>
                <p className='wallet-title font-semibold py-4'>Auto Gen Seed Phrase?</p>
                <div className='wallet-card grid gap-4 grid-cols-3'>
                    {words ?
                        words?.map((word) => (
                            <div key={word.name + '123'} className="wallet-words flex items-center basis-1/3 rounded-lg p-2 bg-white">
                                <span className='word-index inline-flex justify-center items-center relative w-2 rounded-full mr-2'>{word.index + 1}</span>
                                <span className='word-name'>{word.name}</span>
                            </div>
                        ))
                        :
                        <div>Failed to load api - CORS POLICY </div>
                    }
                </div>
                <div className='wallet-copy flex mt-8'>
                    <p>Tap to Copy or Carefully write down your seed phrase and store it in a safe place</p>
                    <button onClick={handleCopyWordsClick}>
                        <FileCopyIcon className='copy-icon' />
                    </button>
                    {/* <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className="w-full"
                    > */}
                    <div className={open ? 'clipboard absolute flex flex-col justify-center items-center bg-white' : 'clipboard-closed absolute flex flex-col justify-center items-center bg-white'}>
                        <button onClick={handleClose}>
                            <KeyboardArrowDownIcon className='down-icon mt-4 text-slate-400' />
                        </button>
                        <FileCopyIcon className='clipboard-copy-icon mb-10 mt-5' />
                        <p className='mb-20 font-bold text-lg'>Saved to clipboard</p>
                    </div>
                    {/* </Modal> */}
                </div>
            </div>
        </>
    )
}

export default Wallet
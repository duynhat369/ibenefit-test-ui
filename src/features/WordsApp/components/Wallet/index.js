import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import '../Wallet/styles.css';


function Wallet({ words }) {
    return (
        <>
            <div className='wallet text-left'>
                <p className='wallet-title font-semibold py-4'>Auto Gen Seed Phrase?</p>
                <div className='wallet-card grid gap-4 grid-cols-3'>
                    {words ?
                        words?.map((word) => (
                            <div key={word.name + '123'} className="wallet-words flex items-center basis-1/3 rounded-lg p-2 bg-white">
                                <span className='word-index inline-flex justify-center items-center relative w-2 rounded-full mr-2'>{word.index}</span>
                                <span className='word-name'>{word.name}</span>
                            </div>

                        ))
                        :
                        <div>Failed to load api - CORS POLICY </div>
                    }
                </div>
                <div className='wallet-copy flex mt-8'>
                    <p>Tap to Copy or Carefully write down your seed phrase and store it in a safe place</p>
                    <FileCopyIcon className='copy-icon' />
                </div>
            </div>
            <div className='wallet-bottom flex flex-col mt-6 bg-white'>
                <div className='flex mb-9'>
                    <p className='font-bold mr-auto'>How does this work?</p>
                    <ChevronRightIcon />
                </div>
                <button className='bottom-button py-4 px-8 font-bold text-white bg-black rounded-lg'>NEXT</button>
            </div>
        </>
    )
}

export default Wallet
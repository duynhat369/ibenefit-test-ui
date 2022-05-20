import axios from 'axios'
import { useEffect, useState } from "react"
import Wallet from "./components/Wallet"
import './styles.css'

function WordsApp() {
    const [words, setWords] = useState([])
    const wordss = [
        { name: "analyst", index: 1 },
        { name: "banana", index: 2 },
        { name: "craw", index: 3 },
        { name: "crab", index: 4 },
        { name: "december", index: 5 },
        { name: "eleven", index: 6 },
        { name: "egg", index: 7 },
        { name: "fan", index: 8 },
        { name: "favorite", index: 9 },
        { name: "human", index: 10 },
        { name: "hight", index: 11 },
        { name: "height", index: 12 },
        { name: "job", index: 13 },
        { name: "journey", index: 14 },
        { name: "ten", index: 15 },
        { name: "tailwind", index: 16 },
        { name: "limit", index: 17 },
        { name: "schema", index: 18 },
        { name: "known", index: 19 },
        { name: "vietnam", index: 20 },
        { name: "may", index: 21 },
        { name: "november", index: 22 },
        { name: "light", index: 23 },
        { name: "nurse", index: 24 },
    ]

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("https://metanode.vipn.net/eng.json")
                console.log(data)
                setWords(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [words])

    return (
        <div className="words-app">
            <Wallet words={words} />
        </div>
    )
}

export default WordsApp
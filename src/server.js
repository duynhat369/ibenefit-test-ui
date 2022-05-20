import fetch from "node-fetch";
const JsonUrl = "https://metanode.vipn.net/eng.json"

const server = (async () => {
    const response = await fetch(JsonUrl);
    const data = await response.json();

    const randomNum = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    }

    // create 24 elements from data (unduplicated)
    const array24ElementsFromData = []
    for (let i = 0; i < 24; i++) {
        const checkDuplicate = []
        const nameInData = randomNum(data);

        if (checkDuplicate.includes(nameInData)) {
            nameInData = randomNum(data);
        } else {
            checkDuplicate.push(nameInData)
            let item = {
                "name": nameInData,
                "index": i,
            }
            array24ElementsFromData.push(item)
        }
    }
    // create 18 elements from array 24 elements (unduplicated)
    const array18ElementsFromArray24Elements = []
    for (let i = 0; i < 18; i++) {
        const nameInArray = randomNum(array24ElementsFromData);
        let item = {
            "name": nameInArray.name,
            "index": nameInArray.index,
        }
        array18ElementsFromArray24Elements.push(item)
    }
    // create a list from array 18 elements (unduplicated)
    const array6ElementsFromArray18Elements = []

    for (let i = 0; i < 6; i++) {
        const newArrayHasName = array18ElementsFromArray24Elements.map((element) => element.name)
        const newArrayHasIndex = array18ElementsFromArray24Elements.map((element) => element.index)
        const elementsSlice = newArrayHasName.slice(0, 3)
        const indexSlice = newArrayHasIndex.slice(0, 3)
        let item = {
            "list": elementsSlice,
            "primary": randomNum(indexSlice)
        }
        array6ElementsFromArray18Elements.push(item)
        array18ElementsFromArray24Elements.splice(0, 3)
    }
    console.log("array6ElementsFromArray18Elements", array6ElementsFromArray18Elements)
    return array6ElementsFromArray18Elements
})()
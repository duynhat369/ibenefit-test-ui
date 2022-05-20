import axiosClient from "./axiosClient";

const wordsApi = {
    getAll(params) {
        const url = ""
        return axiosClient.get(url, { params })
    }
}

export default wordsApi
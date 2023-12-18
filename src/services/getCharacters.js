import { BASE_URL } from "../utils/constants";


export const getCharacters =  async ({signal}) => {
    try {
        const res = await fetch(`${BASE_URL}/character`, { signal});
        const data = res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
console.log(BASE_URL)

export const postScore = async (formData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/scores`, formData);

    return data;
  } catch (err) {
    console.error('Error posting score', err);
  }
}

export const getScoresById = async (gameID) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/score/${gameID}`);

    return data;
  } catch (err) {
    console.error('Error posting score', err);
  }
};

export const getScores = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/scores`);

    return data.data;
  } catch (err) {
    console.error('Error posting score', err);
  }
};
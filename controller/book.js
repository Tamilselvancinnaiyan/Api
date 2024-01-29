import axios from 'axios';

export const book = async (req, res) => {
    try {
        const genderizeResponse = await axios.get('https://api.genderize.io', {
            params: {
                name: 'Mary'
            }
        });
        res.status(200).json(genderizeResponse.data);
    } catch (error) {
        console.error("Error occurred:", error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

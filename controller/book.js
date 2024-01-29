export const book = async (req, res) => {
    try {
        
        res.status(200).json({ message: 'Books working successfully' });
    } catch (error) {
        console.error("Error occurred:", error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

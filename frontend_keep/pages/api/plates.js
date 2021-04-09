import data from '../../data/platesData.json'

export default async function handler(req, res) {
    res.status(200).json(data)
}

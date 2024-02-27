import CarPart from "../models/carparts.model.js";

const CarPartDAO = {};

CarPartDAO.getAll = async () => {
    const carParts = await CarPart.find({});
    return carParts;
};

CarPartDAO.getOne = async (partNumber) => {
    const carPart = await CarPart.findOne({ partNumber: partNumber });
    return carPart;
};

CarPartDAO.insertOne = async (carPart) => {
    return await CarPart.create(carPart);
};

CarPartDAO.updateOne = async (partNumber, carPart) => {
    return await CarPart.findOneAndUpdate({ partNumber: partNumber }, carPart);
};

CarPartDAO.deleteOne = async (partNumber) => {
    return await CarPart.findOneAndDelete({ partNumber: partNumber });
};

export default CarPartDAO;

import CarPartDAO from "../dao/carparts.dao.js";

const carPartsController = {};

export const getAll = (req, res) => {
    CarPartDAO.getAll()
        .then(carParts => {
            res.render('../src/views/index.ejs', { carParts }); // Se pasa un objeto con la propiedad 'carParts'
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const getOne = (req, res) => {
    const partNumber = req.params.partNumber;
    CarPartDAO.getOne(partNumber)
        .then(result => {
            if (result) {
                res.render("../src/views/edit.ejs", { carPart: result });
            } else {
                res.json({
                    status: "Car part not found"
                });
            }
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const insertOne = (req, res) => {
    CarPartDAO.insertOne(req.body)
        .then(result => res.redirect('/partes/mostrar'))
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const updateOne = (req, res) => {
    const partNumber = req.params.partNumber;
    const updatedCarPart = req.body;

    CarPartDAO.updateOne(partNumber, updatedCarPart)
        .then(result => {
            if (result) {
                res.redirect(`/partes/edieli`);
            } else {
                res.json({
                    status: "Car part not found"
                });
            }
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const deleteOne = (req, res) => {
    const partNumber = req.params.partNumber;
    CarPartDAO.deleteOne(partNumber)
        .then(result => {
            if (result) {
                res.redirect(`/partes/edieli`);
            } else {
                res.json({
                    status: "Car part not found"
                });
            }
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
};


export const mostrarPaginaPartes = async (req, res) => {
    try {
        const carParts = await CarPartDAO.getAll();
        res.render('../src/views/carparts.ejs', { carParts });
    } catch (error) {
        res.json({ status: "Server unavailable" });
    }
};

export const mostrarPaginaAgregarParte = async (req, res) => {
    try {
        const carParts = await CarPartDAO.getAll();
        res.render('../src/views/AgregarParte.ejs', { carParts });
    } catch (error) {
        res.json({ status: "Server unavailable" });
    }
};

export const mostrarPaginaEditarEliminar = async (req, res) => {
    try {
        const carParts = await CarPartDAO.getAll();
        res.render('../src/views/edieli.ejs', { carParts });
    } catch (error) {
        res.json({ status: "Server unavailable" });
    }
};

export const mostrarPaginaIndex = async (req, res) => {
    try {
        const carParts = await CarPartDAO.getAll();
        res.render('../src/views/index.ejs', { carParts });
    } catch (error) {
        res.json({ status: "Server unavailable" });
    }
};
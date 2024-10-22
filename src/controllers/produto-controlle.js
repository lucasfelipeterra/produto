import produto from '../model/produto-model.js';

export const store = async (req, res) => {
    console.log(req.body);
    try {
        const produtos = await produto.create(req.body);
        return res.status(201).json(produtos);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const index = async (req, res) => {
    

    try {
        const produtos = await produto.find().exec();
        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const update = async (req, res) => {
    try {
        const produtos = await produto.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

export const destroy = async (req, res) => {
    try {
        const produtos = await produto.findByIdAndDelete(req.params.id).exec();
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};
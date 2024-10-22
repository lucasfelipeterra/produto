import db from "../config/db.js";

const produtoSchema = new db.Schema({
    product_name: {
        type: String,
        required: true
    },
    amounr: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    expiration_date: {
        type: Date,
        required: true
    },
});

const produto = db.model("produto", produtoSchema);

export default produto;


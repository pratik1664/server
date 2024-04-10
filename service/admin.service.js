const { adminSchema } = require("../models")


const adddata = (body) => {

    return adminSchema.create(body)
}



module.exports = { adddata }
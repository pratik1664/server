const { adminService } = require("../service");



const adddata = async (req, res) => {
    let databody = req.body;
    console.log(databody);

    const admin = await adminService.adddata(databody)

    res.render('/index', { message: admin });

    res.status(201).json({
        message: "user created success",
        admin
    })
}

module.exports = { adddata }
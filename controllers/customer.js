const Customer = require("../Model/Customer")

exports.getCustomer = async (req, res) => {
    const customer = await Customer.findById(req.params.id)
    res.json(customer)
}
exports.createCustomer = async (req, res) => {
    const customer = new Customer({...req.body})
    await customer.save()
    res.json(customer)
}
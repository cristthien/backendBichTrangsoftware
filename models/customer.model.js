const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    name:{type: String, required: true},
    company:{type: String},
    phone:{type: Number, required: true},
    address:{type: String},
    zalo:{type: Number},
    website:{type: String}
});
const Customer = mongoose.model("Customers",CustomerSchema);
module.exports= Customer;
const router = require('express').Router();
let Customer= require('../models/customer.model.js')


router.route('/').get((req,res)=>{
    Customer.find()
    .then(customers=> res.json(customers))
    .catch(err => res.sendStatus(400).json('Error: '+ err))
})
router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const company = req.body.company || 'No company';
    const phone = Number(req.body.phone);
    const address = req.body.address || 'No Address Company';
    const zalo = Number(req.body.zalo) || 'No Zalo account';
    const website = req.body.website || 'No Website Company';
    
    const NewCustomer = new Customer({
        name, 
        company,
        phone,
        address,
        zalo, 
        website
    }) 

    
    NewCustomer.save()
    .then(()=> res.json(" New Customer added"))
    .catch(err => res.sendStatus(400).json('Error: '+ err))
})
router.route('/delete/:id').delete((req,res)=>{
    Customer.findByIdAndDelete(req.params.id)
    .then(()=> res.json('customer deleted successfully'))
    .catch(err => res.sendStatus(400).json('Error: '+ err));
})
router.route('/update/:id').post((req,res)=>{
    Customer.findById(req.params.id)
        .then((customer)=>{
            customer.name=req.body.name;
            customer.company=req.body.company;
            customer.phone=req.body.phone;
            customer.address=req.body.address;
            customer.zalo=req.body.zalo;
            customer.website=req.body.website;
            
            customer.save()
            .then(()=>res.json('Customer updated'))
            .catch((err)=>res.status(400).json('Error: '+ err));
        })
        .catch((err)=>res.status(400).json('Error:'+err));
})
router.route('/detail/:id').get((req,res)=>{
    Customer.findById(req.params.id)
        .then((customer)=> res.json(customer))
        .catch((err)=>res.status(400).json('Error:'+err));
})

module.exports= router; 
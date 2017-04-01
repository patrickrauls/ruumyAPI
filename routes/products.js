const query = require('../query'),
    router = require('express').Router();

//create
router.post('/', (req, res) => {
    query.create_product(req.body)
        .then(product => {
            res.status(200).json(product)
        })
        .catch(console.error)
})
//read
router.get('/:id', (req, res) => {
    query.read_product(req.params.id)
        .then(product => {
            res.status(200).json(product)
        })
        .catch(console.error)
})
//update
router.put('/', (req, res) => {
    query.update_product(req.body)
        .then(product => {
            res.status(200).json(product)
        })
        .catch(console.error)
})
//delete
router.delete('/:id', (req, res) => {
    query.delete_product(req.params.id)
        .then(product => {
            res.status(200).json(product)
        })
        .catch(console.error)
})
//list
router.get('/', (req, res) => {
    query.list_products()
        .then(products => {
            res.status(200).json(products)
        })
        .catch(console.error)
})
module.exports = router;
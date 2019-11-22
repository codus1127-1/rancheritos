module.exports = {

    getCategories: (req, res) => {
        const database = req.app.get('db')
        database.get_categories()
        .then(result => {
            res.status(200).send(result)
            // console.log(result)
        }).catch(error => {
            console.log(error)
        })
    },

    getItems: async (req, res, next) => {
        const db = req.app.get('db')
        const {category} = req.params
        const result = await db.get_category_items(category)
        res.status(200).send(result)
        // console.log(result)
        console.log(req.session.user.user_id)
    },

    // addToCart: (req, res, next) => {
    //     const db = req.app.get('db')
    //     const {id} = req.params
    //     db.add_to_cart([req.session.user.user_id, id])
    //     .then(result => {
    //         res.status(200).send(result)
    //     })
    // },

    addToCart: (req, res) => {
        req.session.user.cart.push(req.body)
        req.session.save()
        res.status(200)
        console.log(req.session.user.cart)
    },

    getCart: (req, res) => {
        res.status(200).send(req.session.user.cart)
    },

    getAddOns: (req, res) => {
        const database = req.app.get('db')
        database.get_add_ons()
        .then(result => {
            res.status(200).send(result)
            // console.log(result)
        }).catch(error => {
            console.log(error)
        })
    }

}
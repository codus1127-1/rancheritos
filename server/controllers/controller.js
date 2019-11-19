module.exports = {

    getCategories: (req, res) => {
        const database = req.app.get('db')
        database.get_categories()
        .then(result => {
            res.status(200).send(result)
            console.log(result)
        }).catch(error => {
            console.log(error)
        })
    },

    getItems: async (req, res, next) => {
        const db = req.app.get('db')
        const {category} = req.params
        const result = await db.get_category_items(category)
        res.status(200).send(result)
    }

}
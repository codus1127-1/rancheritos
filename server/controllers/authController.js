const bcrypt = require('bcryptjs')


module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const {email, password, name} = req.body
    const found = await db.find_user([email])
    // console.log(found)
    if (+found[0].count !== 0) {
      return res.status(409).send({message: 'Email already registered'})
    }
    const user_id = await db.add_user({name, email})
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    // console.log(user_id)
    db.add_hash({user_id: user_id[0].user_id, hash})
    req.session.user = {user_id: user_id[0].user_id, email, name, cart: []}
    res.status(201).send({message: `Hola ${req.session.user.name}, welcome to Rancheritos!`, user: req.session.user})
    console.log(req.session)
  },
login: async (req, res) => {
  const db = req.app.get('db')
  // console.log(req)
  const {email, password} = req.body
  const found = await db.find_user([email])
  if (+found[0].count === 0) {
    return res.status(401).send({message: 'email does not exist'})
  }
  const foundUser = await db.find_hash([email])
  const {hash, user_id, is_admin, name} = foundUser[0]
  const result = bcrypt.compareSync(password, hash)
  if (!result) {
    return res.status(401).send({message: 'password incorrect'})
  }
  req.session.user = {user_id, email, name, is_admin, cart: []}
  // console.log(req)
  res.status(200).send({message: `Hola ${req.session.user.name}, we have been awaiting your return!`, user: req.session.user})
}, 
logout: (req, res) => {
  req.session.destroy()
  res.status(200).send({message: 'Logged Out!'})
}

}
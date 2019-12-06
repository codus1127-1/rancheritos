module.exports = {
  getCategories: (req, res) => {
    const database = req.app.get("db");
    database
      .get_categories()
      .then(result => {
        res.status(200).send(result);
        // console.log(result)
      })
      .catch(error => {
        console.log(error);
      });
  },

  getItems: async (req, res, next) => {
    const db = req.app.get("db");
    const { category } = req.params;
    const result = await db.get_category_items(category);
    res.status(200).send(result);
    // console.log(result)
    // console.log(req.session.user.user_id)
  },

  addToCart: (req, res) => {
    req.session.user.cart.push(req.body);
    req.session.save();
    res.status(200).send({ cartCount: req.session.user.cart.length });
    // console.log(req.session.user.cart)
  },

  getCart: (req, res) => {
    res.status(200).send(req.session.user.cart);
    // console.log('hit')
  },

  deleteCart: (req, res) => {
    const { index } = req.params;
    req.session.user.cart.splice(index, 1);
    req.session.save();
    res.status(200).send({ cartCount: req.session.user.cart.length });
  },

  getAddOns: (req, res) => {
    const database = req.app.get("db");
    database
      .get_add_ons()
      .then(result => {
        res.status(200).send(result);
        // console.log(result)
      })
      .catch(error => {
        console.log(error);
      });
  },

  submitOrder: (req, res) => {
    const database = req.app.get("db");
    database
      .add_order(
        req.session.user.user_id,
        JSON.stringify(req.session.user.cart)
      )
      .then(() => {
        req.session.user.cart = [];
        req.session.save();
        res.sendStatus(200);
      })
      .catch(error => {
        console.log(error);
      });
  },

  getOrders: (req, res, next) => {
    const database = req.app.get("db");
    database
      .get_orders()
      .then(newOrders => {
        database.get_ready_orders().then(readyOrders => {
          res.status(200).send({ newOrders, readyOrders });
        }).catch(error => {
            console.log(error)
        });
      }).catch(error => {
        console.log(error);
      });
  },

  updateOrders: (req, res) => {
    const database = req.app.get("db");
    const { id } = req.params;
    const {action} = req.body
    if (action === 'ready') {
        database.update_order_fulfilled(id)
      .then(results => {
        res.status(200).send(results);
      })
      .catch(error => {
        console.log(error);
      })
    } else {
        database.update_order_picked_up(id)
        .then(results => {
            res.status(200).send(results);
          })
          .catch(error => {
            console.log(error);
          })
    }
  }
};

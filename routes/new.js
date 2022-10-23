let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('newForm', { title: 'Add New Message' });
});

module.exports = router;
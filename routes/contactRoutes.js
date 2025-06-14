const express = require('express');
const router = express.Router();
const {
    getAllContacts,
    getContactById,
    createContact
  } = require('../controllers/contactController');
  

// @route GET /api/contacts
router.get('/', getAllContacts);

// @route GET /api/contacts/:id
router.get('/:id', getContactById);

// @route POST /api/contacts
router.post('/', createContact);

module.exports = router;

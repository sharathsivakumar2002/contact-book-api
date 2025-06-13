const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getContactById
} = require('../controllers/contactController');

// @route GET /api/contacts
router.get('/', getAllContacts);

// @route GET /api/contacts/:id
router.get('/:id', getContactById);

module.exports = router;

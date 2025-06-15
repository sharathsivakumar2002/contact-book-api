const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contactController');

// @route GET /api/contacts
router.get('/', getAllContacts);

// @route GET /api/contacts/:id
router.get('/:id', getContactById);

// @route POST /api/contacts
router.post('/', createContact);

// @route PUT /api/contacts/:id
router.put('/:id', updateContact);

// @route DELETE /api/contacts/:id
router.delete('/:id', deleteContact);

module.exports = router;


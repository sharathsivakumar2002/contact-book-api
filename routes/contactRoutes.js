const express = require('express');
const router = express.Router();

const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contactController');

const { validateContact } = require('../middleware/validateContact');

// @route GET /api/contacts
router.get('/', getAllContacts);

// @route GET /api/contacts/:id
router.get('/:id', getContactById);

// @route POST /api/contacts
router.post('/', validateContact, createContact);

// @route PUT /api/contacts/:id
router.put('/:id', validateContact, updateContact);

// @route DELETE /api/contacts/:id
router.delete('/:id', deleteContact);

module.exports = router;

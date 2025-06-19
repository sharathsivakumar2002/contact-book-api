const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contactController');

const protect = require('../middleware/authMiddleware');

// All routes require authentication now
router.get('/', protect, getAllContacts);
router.get('/:id', protect, getContactById);
router.post('/', protect, createContact);
router.put('/:id', protect, updateContact);
router.delete('/:id', protect, deleteContact);

module.exports = router;

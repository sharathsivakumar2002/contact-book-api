const Contact = require('../models/Contact');

// @desc    Get all contacts
// @route   GET /api/contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching contacts' });
  }
};

// @desc    Get single contact by ID
// @route   GET /api/contacts/:id
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching contact' });
  }
};

// @desc    Create a new contact
// @route   POST /api/contacts
exports.createContact = async (req, res) => {
  const { name, email, phone } = req.body;

  // Basic validation
  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newContact = await Contact.create({ name, email, phone });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: 'Server error while creating contact' });
  }
};

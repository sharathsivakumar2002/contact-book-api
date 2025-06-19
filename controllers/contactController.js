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

// @desc    Update a contact
// @route   PUT /api/contacts/:id
exports.updateContact = async (req, res) => {
    try {
      const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // return updated document
        runValidators: true, // validate new data
      });
  
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
  
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ message: 'Server error while updating contact' });
    }
  };
  
// @desc    Delete a contact
// @route   DELETE /api/contacts/:id
exports.deleteContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    console.log("Deleting contact with ID:", contactId); // helpful debug log

    const contact = await Contact.findByIdAndDelete(contactId);

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error("Delete error:", error); // log actual error
    res.status(500).json({ message: 'Server error while deleting contact' });
  }
};


  
const { v4: uuidv4 } = require('uuid');
const { Venue } = require('../models');

// List all venues (any authenticated user can view)
exports.listVenues = async (req, res) => {
  try {
    const venues = await Venue.findAll({
      where: { is_archived: false },
      order: [['name', 'ASC']]
    });
    res.json({ ok: true, venues });
  } catch (error) {
    console.error('List venues error:', error);
    res.status(500).json({ ok: false, message: 'Server error.' });
  }
};

// Create a venue (staff only)
exports.createVenue = async (req, res) => {
  try {
    const { name, code, building_location, type } = req.body;

    if (!name || !code) {
      return res.status(400).json({ ok: false, message: 'Name and code are required.' });
    }

    // Check for duplicate code
    const existing = await Venue.findOne({ where: { code } });
    if (existing) {
      return res.status(409).json({ ok: false, message: 'Venue code already exists.' });
    }

    const venue = await Venue.create({
      id: uuidv4(),
      name: name.trim(),
      code: code.trim().toUpperCase(),
      building_location: building_location?.trim() || null,
      type: type?.trim() || null,
      created_by: req.userId,           // from auth middleware
      is_archived: false
    });

    res.status(201).json({ ok: true, venue });
  } catch (error) {
    console.error('Create venue error:', error);
    res.status(500).json({ ok: false, message: 'Server error.' });
  }
};

// Update a venue (staff only)
exports.updateVenue = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code, building_location, type } = req.body;

    const venue = await Venue.findByPk(id);
    if (!venue) {
      return res.status(404).json({ ok: false, message: 'Venue not found.' });
    }

    // If code changed, check uniqueness
    if (code && code !== venue.code) {
      const existing = await Venue.findOne({ where: { code } });
      if (existing) {
        return res.status(409).json({ ok: false, message: 'Venue code already exists.' });
      }
      venue.code = code.trim().toUpperCase();
    }

    if (name) venue.name = name.trim();
    if (building_location !== undefined) venue.building_location = building_location?.trim() || null;
    if (type !== undefined) venue.type = type?.trim() || null;
    venue.updated_at = new Date();

    await venue.save();
    res.json({ ok: true, venue });
  } catch (error) {
    console.error('Update venue error:', error);
    res.status(500).json({ ok: false, message: 'Server error.' });
  }
};

// Archive a venue (soft delete – staff only)
exports.archiveVenue = async (req, res) => {
  try {
    const { id } = req.params;
    const venue = await Venue.findByPk(id);
    if (!venue) {
      return res.status(404).json({ ok: false, message: 'Venue not found.' });
    }
    venue.is_archived = true;
    venue.updated_at = new Date();
    await venue.save();
    res.json({ ok: true, message: 'Venue archived.' });
  } catch (error) {
    console.error('Archive venue error:', error);
    res.status(500).json({ ok: false, message: 'Server error.' });
  }
};
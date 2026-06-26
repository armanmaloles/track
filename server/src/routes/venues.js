const express = require('express');
const router = express.Router();
const { listVenues, createVenue, updateVenue, archiveVenue } = require('../controllers/venuesController');
const { authenticate } = require('../middleware/auth');
const requireStaff = require('../middleware/requireStaff');

router.get('/', authenticate, listVenues);                // any user can view
router.post('/', authenticate, requireStaff, createVenue);   // staff only
router.put('/:id', authenticate, requireStaff, updateVenue);
router.delete('/:id', authenticate, requireStaff, archiveVenue);

module.exports = router;
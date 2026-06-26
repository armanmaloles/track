const { UserProfile, Role } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const profile = await UserProfile.findByPk(req.userId, {
      include: [{ model: Role, where: { name: 'staff' } }]
    });
    if (!profile) {
      return res.status(403).json({ ok: false, message: 'Staff access required.' });
    }
    next();
  } catch (error) {
    console.error('Require staff error:', error);
    res.status(500).json({ ok: false, message: 'Server error.' });
  }
};
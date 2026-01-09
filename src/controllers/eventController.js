const Event = require('../models/Event');

exports.getAll = async (req, res) => {
    try {
        let query = {};
        if (req.query.category) {
            query.category = req.query.category; 
        }

        let sort = {};
        if (req.query.sortBy) {
            sort[req.query.sortBy] = 1; 
        }

        const events = await Event.find(query).sort(sort);
        res.render('index', { events });
    } catch (err) {
        res.status(500).render('error', { message: 'Błąd bazy danych' });
    }
};

exports.create = async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save(); 
        res.redirect('/');
    } catch (err) {
        res.status(400).render('error', { message: 'Błąd walidacji danych' }); 
    }
};

exports.getOne = async (req, res) => {
    const event = await Event.findById(req.params.id); 
    res.render('event-details', { event });
};

exports.renderAdd = (req, res) => res.render('add-event');

exports.renderEdit = async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.render('edit-event', { event });
};

exports.update = async (req, res) => {
    await Event.findByIdAndUpdate(req.params.id, req.body); 
    res.redirect(`/event/${req.params.id}`);
};

exports.delete = async (req, res) => {
    await Event.findByIdAndDelete(req.params.id); 
    res.redirect('/');
};
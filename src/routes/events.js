const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAll); // Wyświetlanie + Filtracja/Sortowanie
router.get('/event/add', eventController.renderAdd); // Formularz dodawania
router.post('/event/add', eventController.create); // Akcja dodawania
router.get('/event/:id', eventController.getOne); // Szczegóły (Dynamic Routing)
router.get('/event/:id/edit', eventController.renderEdit); // Formularz edycji
router.post('/event/:id/edit', eventController.update); // Akcja edycji
router.post('/event/:id/delete', eventController.delete); // Usuwanie

module.exports = router;
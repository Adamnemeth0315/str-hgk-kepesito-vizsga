/**
 * @TODO : controller elkészítése, mely kapcsolódik a megfelelő service osztályhoz
 *
 * Kezelje a http-error üzeneteket:
 * - hiányos értékek @update műveletkor: BadREquest => 'Missing field'
 * - ha valamiért nem tudta a server frissíteni a building entitást:
 *  InternalServerError => 'Could not updated building'
 *
 * A szerver a megfelelő válaszokat küldje el a kliens felé
 */

const httpError = require('http-errors');

const Model = require('../../models/building.model');
const service = require('./building.service');

exports.updateBuilding = (req, res, next) => {}


exports.getAllBuildingWithClassrooms = () => {
    return service.findAll()
         .then(list => {
             res.json(list);
         }).catch(err => {
             console.error(err);
             return new httpError.InternalServerError('List could not send')
         })
};
const express = require('express');
const router = express.Router();
const { protect } = require('../../middleware/auth');

const { getAllRestaurants,
    getAllRestaurantsById,
    addRestaurant,
    addReservation,
    addEvent,
    getAllReviewsforRestaurant
 } = require('../../controllers/restaurants');

/**
 * @swagger
 * path:
 *  /api/v1/restaurants:
 *    get:
 *      summary: Fetch all restaurants in the database
 *      tags: [Restaurants]
 *      responses:
 *        "200":
 *          description: Restaurants fetched successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: true when request is successful, false otherwise.
 *                    example: true
 *                  count:
 *                    type: number
 *                    description: Number of restaurants returned in the response body
 *                  example: 1
 *                  data:
 *                    schema:
 *                    type: array
 *                    description: restaurants
 *                    items:
 *                      $ref: '#/components/schemas/User'
 *    post:
 *      summary: Add a restaurant in the database  
 *      tags: [Restaurants]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                        - param
 * 
 */
router.route('/')
.get(getAllRestaurants)
.post(protect, addRestaurant);;

/**
 * @swagger
 * path:
 *  /api/v1/restaurants/{id}:
 *    get:
 *      summary: Fetch all restaurants in the database
 *      tags: [Restaurants]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: Fetch details of a restaurant
 *      responses:
 *        "200":
 *          description: Restaurants fetched successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: true when request is successful, false otherwise.
 *                    example: true
 *                  count:
 *                    type: number
 *                    description: Number of restaurants returned in the response body
 *                  example: 1
 *                  data:
 *                    schema:
 *                    type: array
 *                    description: restaurants
 *                    items:
 *                      $ref: '#/components/schemas/User'
 */
router.route('/:id').get(getAllRestaurantsById);

/**
 * @swagger
 * path:
 *  /api/v1/restaurants/reservation/{id}:
 *    get:
 *      summary: Post a reservation to the database
 *      tags: [Restaurants]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: Post a reservation to the database
 *      responses:
 *        "200":
 *          description: Restaurants fetched successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: true when request is successful, false otherwise.
 *                    example: true
 *                  count:
 *                    type: number
 *                    description: Number of restaurants returned in the response body
 *                  example: 1
 *                  data:
 *                    schema:
 *                    type: array
 *                    description: restaurants
 *                    items:
 *                      $ref: '#/components/schemas/User'
 */
router.route('/reservation/:id')
.post(addReservation)
.get(getAllReservation);

//   /api/v1/restaurants/event/{id}:
router.route('/event').post(addEvent);

//   /api/v1/restaurants/review/{id}:
router.route('/reviews/:id').get(getAllReviewsforRestaurant);

module.exports = router;

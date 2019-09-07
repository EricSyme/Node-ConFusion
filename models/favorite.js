var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    dishes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish',
        unique: true
    }]
},{
    timestamps : true
})

//Create constant Favorites for the model

var Favorites = mongoose.model('favorite', favoriteSchema);

module.exports = Favorites;
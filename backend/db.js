const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://MealPrep:dufIkmvCW5VZ6bWS@mealprep.6gflhpl.mongodb.net/?retryWrites=true&w=majority' 

module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo testing ..")
            const foodCollection = await mongoose.connection.db.collection("food-items");
            console.log(foodCollection.findOne);
            
            foodCollection.find({}).toArray(async function (err, data) {
                // console.log(data);
                // console.log("data");
            
                const categoryCollection = await mongoose.connection.db.collection("food-category");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    // console.log(Catdata);
                
                    callback(err, data, Catdata);

                })
            });        
            

            
            // listCollections({name: 'food_items'}).toArray(function (err, database) {
            // });
            //     module.exports.Collection = database;
            // });
        }
    })
};

// * Import (require) `connection.js` into `orm.js`
var connection = require('./connection');
connection.connect(function(err){
    if(err){
        console.error('error connecting: ' +err.stack);
        return;
    };
    console.log('connected as id ' + connection.threadID);
});
//    * In the `orm.js` file, create the methods 
//that will execute the necessary MySQL commands in the controllers. 
//These are the methods you will need to use 
//in order to retrieve and store data in your database.
var orm = {
//      * `selectAll()`
selectAll: function(callback){
    var queryString = 'SELECT * FROM burgers';
    connection.query(queryString, function(err, result){
       if (err)throw err;
       callback(result); 
    });
},
//      * `insertOne()`
// insertOne: function(burger_name, callback){
//     var queryString = 'INSERT INTO' + table;

// },
//      * `updateOne()`
updateOne: function(burgerID, callback){
    var queryString = 'UPDATE burgers SET ? where ?'; 
    connection.query(queryString, [{devoured: true}, {id: burgerID}], function(err, result){
        if (err) throw err;
        callback(result);
    });
}
};
//    * Export the ORM object in `module.exports`.
module.exports = orm;
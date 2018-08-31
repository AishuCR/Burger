// * Import (require) `connection.js` into `orm.js`
var connection = require("./connection.js");

//helper function for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}
//    * In the `orm.js` file, create the methods 
//that will execute the necessary MySQL commands in the controllers. 
//These are the methods you will need to use 
//in order to retrieve and store data in your database.
var orm = {
    //      * `selectAll()`
    selectAll: function (tableInput, callback) {
        var queryString = 'SELECT * FROM ' + tableInput + ';' ;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    //      * `insertOne()`
    insertOne: function (table, cols, vals, callback) {
        var queryString = 'INSERT INTO ' + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });

    },
    //      * `updateOne()`
    updateOne: function (table, objColVals, condition, callback) {
        var queryString = 'UPDATE ' + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        //console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err){
                throw err;
            } 
            callback(result);
        });
    }
};
//    * Export the ORM object in `module.exports`.
module.exports = orm;
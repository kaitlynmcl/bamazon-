var mysql = require("mysql");
var inquirer = require("inquirer");

// CREATE CONNECTION FOR MYSQL 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "clothing"
});

// CONNECTO TO MYSQL SERVER AND DATABASE
connection.connect(function (err) {
    console.log("connected as id " + connection.threadId);
    if (err) throw err;
    afterConnection();
});
// DISPLAY RESULTS FOR LOADING CLI INTERFACE
function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        start();
    });
}

function start() {                                  // INQUIRER PROMPTS QUESTIONS TO ASK
    inquirer.prompt([
        {
            name: "choice",
            type: "input",
            message: "Please provide the ID of the item you'd like to buy: ",
        },
        {
            name: "units",
            type: "input",
            message: "Please provide the number of units you'd like to buy: "
        }
    ]).then(function (placeOrder) {                 // PLACE ORDER FUNCTION TO SELECT FROM DATABASE
        var query = "SELECT * FROM products WHERE ?";
        connection.query(query, { item_id: placeOrder.choice }, function (err, data) {
            console.log(data)
            if (err) throw err;
            if (data.length === 0) {
                console.log("Invalid item id. Please select a valid item id.")
            }
            else {
                var product = data[0];              // SELECTS FROM INQUIRER RESULTS TO APPLY DATABASE INFORMATION 
                if (placeOrder.units < + product.stock_quantity) {
                    console.log("Thanks for your order! Your total comes to $" + product.price * placeOrder.units);
                    var quanityUpdate = "UPDATE products SET stock_quantity = "
                        + (product.stock_quantity - placeOrder.units) + ' WHERE item_id = ' + placeOrder.choice;
                    connection.end();
                }
                else {                                  // PLACES ORDER IF POSSIBLE AND UPDATES STOCK QTY, ELSE ORDER CANNOT BE PLACED
                    console.log("We're sorry, we are out of stock. Please check again tomorrow.")
                    connection.end();
                }
            };
        })
    })
};
var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('db/example.db');

db.serialize(function () {
    // Create a table
    db.run("CREATE TABLE IF NOT EXISTS employee (id INTEGER PRIMARY KEY, name TEXT, parent_id INTEGER)");
    db.run("INSERT INTO employee (name, parent_id) VALUES ('Fajar', NULL)");
    db.run("INSERT INTO employee (name, parent_id) VALUES ('Asep', 1)");
    db.run("INSERT INTO employee (name, parent_id) VALUES ('Roni', 1)");
    db.run("INSERT INTO employee (name, parent_id) VALUES ('Dani', NULL)");
    db.run("INSERT INTO employee (name, parent_id) VALUES ('Ucok', 4)");
    // Insert data into the table


    // Query data from the table
    db.each("SELECT A.id, A.name, B.name as parent_name FROM employee A LEFT JOIN employee B ON A.parent_id = B.id", function (err, row) {
        console.log(row);
    });
    db.run("DELETE FROM employee")
});

db.close();
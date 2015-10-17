var fs = require('fs');

fs.readFile(__dirname + '/product.json', function(err, data) {
    var jsonObj = JSON.parse(data);
    console.log("Nama Product = " + jsonObj.name);
    console.log("Usia = " + jsonObj.age);
    console.log("Jumlah anak = " + jsonObj.children.length);
    
});

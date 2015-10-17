var fs = require('fs');

fs.readFile(__dirname + '/product.json', function(err, data) {
    var jsonObj = JSON.parse(data);
    console.log("Product = " + jsonObj.name);
    console.log("ID Type = " + jsonObj.properties.id.type);
    console.log("ID Description = " + jsonObj.properties.id.description);
    console.log("ID Requierd = " + jsonObj.properties.id.required);
    console.log("Name Type = " + jsonObj.properties.name.type);
    console.log("Name Description = " + jsonObj.properties.name.description);
    console.log("Name Requierd = " + jsonObj.properties.name.required);
    console.log("Price Type = " + jsonObj.properties.price.type);
    console.log("Price Minimum = " + jsonObj.properties.price.minimum);
    console.log("Price Requierd = " + jsonObj.properties.price.required);
    console.log("Tags Type = " + jsonObj.properties.tags.type);
    console.log("Tags Items Type = " + jsonObj.properties.tags.items.type);
    
});

// This is our Express server
// It will handle all of the middleware and back-end data transfer
const express = require('express');
const db = require('./database/displayQueries.js');
const cors = require('cors');
const { __values } = require('tslib');
const app = express();
const port = 3000;

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    // Basic GET route
    // Can also use POST/PUT/DELETE
    res.send("hello world");
});

/*
app.get('/data', (req, res) => {
    // Route that shows the capabilities of sending data from databases
    db.dbConnector.getValue(value => {
        value.map(row => {
            const newRow = row;
            newRow.name = row.name + " the Cat";
            return newRow;
        });
        res.send(JSON.stringify(value));
    });
});
*/

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
// Use nodemon server.js to start

//Olivia's stuff vvv
function formatCustomizations(options){
    let allJSONS = [];
    let allCusts = {};
    for(let i = 0; i < options.length; i++){
        allCusts = {};
        let eachPair = options[i].customizations.split(",");
        for(let j = 0; j < eachPair.length; j++){
            let trimmed = eachPair[j].trim();
            let whole = trimmed.split(":");
            if(whole[0] !== "" && whole[1] !== ""){
                let partOne = whole[0].substr(1, whole[0].length-1);
                let partTwo = whole[1].substr(0, whole[1].length-1);
                allCusts[partOne] = Number(partTwo);
            }     
        }
        allJSONS.push({id: options[i].id, name: options[i].name, store: options[i].store, description: options[i].description, price: options[i].price, customizations: allCusts});
    }
    return JSON.stringify(allJSONS);
}

function formatCart(order, callback){
    let objItems = [];
    if(order.length < 1)
        callback(JSON.stringify({balance: 0, items: []}));
    let items = order[0].items.split(", ");
    function addItem(i) {
        if(i == items.length) {
            const data = {balance: order[0].balance, items: objItems};
            callback(JSON.stringify(data));
        }
        else {
            let curItem = Number(items[i]);
            db.dbConnector.idRetrieve(curItem, returned => {
                objItems.push({id: returned[0].id, name: returned[0].name, price: returned[0].price});
                addItem(i + 1);
            });
        }
    }
    addItem(0);
}

app.get('/Freshii', (req, res) => {
    db.dbConnector.storeRetrieve("Freshii", options => {
        let displayFormat = formatCustomizations(options);
        res.send(displayFormat);
    });
});

app.get('/Einsteins', (req, res) => {
    db.dbConnector.storeRetrieve("Einstein Bros. Bagels", options => {
        let displayFormat = formatCustomizations(options);
        res.send(displayFormat);
    });
});

app.get('/TacoTaco', (req, res) => {
    db.dbConnector.storeRetrieve("Taco Taco", options => {
        let displayFormat = formatCustomizations(options);
        res.send(displayFormat);
    });
});

app.get('/Price/:min/:max', (req, res) => {
    if((req.params.min >= Number(req.params.max)) || (Number(req.params.min) < 0) || (Number(req.params.max) < 0) || (Number(req.params.min) > 20.00) || (Number(req.params.max) > 20.00)){
        res.send({name: null, description: null, price: null, customizations: null})
    }
    else{
        db.dbConnector.priceRetrieve(req.params.min, req.params.max, options => {
            let displayFormat = formatCustomizations(options);
            res.send(displayFormat);
        });
    }
});

app.get('/Tags/:tags', (req, res) => {
    let choices = req.params.tags.split("_");
    db.dbConnector.tagRetrieve(choices, options => {
        let displayFormat = formatCustomizations(options);
        res.send(displayFormat);
    });
});

app.get('/Cart/Add/:user/:id', (req, res) => {
    db.dbConnector.idRetrieve(req.params.id, returned => {
        //Seeing whether the user has an existing cart
        db.dbConnector.retrieveCart(req.params.user, currentCart => {
            //If not create a new cart and put the one item in
            if(currentCart.length > 0) {
                //If they do, update their existing cart
                db.dbConnector.addToCart(req.params.user, currentCart[0].items + ", " + req.params.id, currentCart[0].balance + returned[0].price, () => {
                    //Retrieve carts of either type now that they both would be up to date
                    db.dbConnector.retrieveCart(req.params.user, uniformRetrieve => {
                        formatCart(uniformRetrieve, cartDisplay => {
                            res.send(cartDisplay);
                        });
                    });
                });
            }
            else{
                db.dbConnector.createNewCart(req.params.user, req.params.id, returned[0].price, () => {
                    db.dbConnector.retrieveCart(req.params.user, result => {
                        formatCart(result, cartDisplay => {
                            res.send(cartDisplay);
                        });
                    })
                });
            }
        });
    });
});

app.get('/Cart/View/:user', (req, res) => {
    db.dbConnector.retrieveCart(req.params.user, result => {
        formatCart(result, cartDisplay => {
            res.send(cartDisplay);
        });
    });
});

app.get('/Cart/Remove/:user/:id', (req, res) => {

});

app.get('/Cart/Delete/:user', (req, res) => {
    db.dbConnector.deleteExistingCart(req.params.user, result => {
        res.send("Deleted.");
    });
});


var request = require('request');

function ShoppingListFromDB(array) {
    return new Promise((resolve, reject) => {
        let i = 0
        var list = [];
        for (const element of array) {
            console.log("element ",element);
            request.get('http://localhost:3001/user', function (err, res, body) {
                if (err) {
                    console.log(err)
                    return reject(error);
                }
                i++
                console.log("body--",body)
                list.push(body)
                if (i == array.length){
                    console.log("body2--", body)
                    return resolve(list)
                }
                
                
            });
        }
        
    })
} 

async function getUserAuthLists() {
    let array = ['1','2']
    await ShoppingListFromDB(array)
        .then((list) => {
            console.log("list--",list);
        })
        .catch((error) => {
            console.log(error);
        })
}

getUserAuthLists()
const request = require('request');
const fs = require('fs');
const args = process.argv;
const splitArgs = args.splice(2);

const URL = splitArgs[0];

const path = splitArgs[1];

request(URL, (error, response, body) =>{
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    //console.log('body:', body);

    if (error) {
        return console.log('INVALID URL');
    }
    
    fs.access(path, fs.constants.F_OK)

    fs.writeFile(path, body, err => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    })
    
});

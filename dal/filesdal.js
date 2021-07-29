const jsonfile = require('jsonfile')

const readFile = function(url)
{
    return new Promise((resolve,reject) =>
        {
        jsonfile.readFile(url,function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        })
    });
}


const writeToFile = function(url,obj)
{
    return new Promise((resolve,reject) =>
    {
        jsonfile.writeFile( url, obj, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Created!')
            }
        })
    });
}


module.exports = {readFile,writeToFile}
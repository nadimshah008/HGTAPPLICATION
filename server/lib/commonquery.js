const commonQuery = {};

const mongoose=  require("mongoose");


commonQuery.findOneData =async function findOneData(collection,condition){
 return   new Promise(function(resolve, reject) {
        collection.find(condition).exec(function(err,result){
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }

        })
    })
}


commonQuery.findAll =async function findAll(collection,condition){
    return   new Promise(function(resolve, reject) {
        if(condition){
            condition =  condition
        }
        else{
            condition = {}
        }
           collection.find(condition).exec(function(err,result){
               if(err){
                   reject(err)
               }
               else{
                   resolve(result)
               }
   
           })
       })
   }



commonQuery.insertIntoCollection =async function insertIntoCollection(collection,data){
 return   new Promise(function(resolve, reject) {
       
       collection.create(data,function(err,result){

        if(err){
            reject(err)
        }
        else{
            resolve(result)
        }

       })
    })
}

commonQuery.fileUpload = function fileUpload(imagePath, buffer) {
    return new Promise((resolve, reject) => {
     
      try {
    
  
        fs.writeFile("upload/" + imagePath, buffer, function(err, result) {
          if (err) {
            tempObj.error = err;
            reject(err);
          } else {
       
           
            let dataToPass = {
              url: "upload/" + imagePath,
              name: imagePath
            };
         
            resolve(dataToPass);
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  };
  
  




module.exports =  commonQuery;
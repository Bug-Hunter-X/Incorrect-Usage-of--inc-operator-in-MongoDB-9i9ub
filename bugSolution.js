```javascript
//Correct usage of $inc operator
db.collection.updateOne({"_id":1},{$inc:{x:1,y:1}});
//Correct usage
db.collection.updateOne({"_id":1},{$inc:{x:1,y:1}});
```
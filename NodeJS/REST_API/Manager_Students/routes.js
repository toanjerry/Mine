var MS = require('./Models/MS');
  
module.exports = {
  configure: function(app) {
    app.get('/students', function(req, res) {
        MS.get(res);
    });
    
    app.get('/', function(req, res) {
        MS.get(res);
    });

    app.get('/students/read/:id', function(req, res) {
        MS.read(req.params.id,res);
    });
 
    app.post('/students/create', function(req, res) {
        MS.create(req.body, res);
    });
  
    app.put('/students/update', function(req, res) {
        MS.update(req.body, res);
    });

    app.delete('/students/delete/:id', function(req, res) {
        MS.delete(req.params.id, res);
    });
  }
};
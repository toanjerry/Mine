var connection = require('../connection');
  
function API() {
    this.get = function(res) {
        connection.acquire(function(err, con) {
            con.query('select * from students', function(err, result) {
                con.release();
                res.send(result);
            });
        }); 
    };
    this.create = function(field_data, res) {
        connection.acquire(function(err, con) {
          con.query('insert into students set ?', field_data, function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'TODO creation failed'});
            } else {
              res.send({status: 0, message: 'TODO created successfully'});
            }
          });
        });
      };
    this.update = function(field_data, res) {
        connection.acquire(function(err, con) {
          con.query('update students set ? where id = ?', [field_data, field_data.id], function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'TODO update failed'});
            } else {
              res.send({status: 0, message: 'TODO updated successfully'});
            }
            });
        });
    };
    this.read = function(id, res) {
        connection.acquire(function(err, con) {
          con.query('select * from students where id=?', [id], function(err, result) {
            con.release();
            res.send(result);
            });
        });
    };
    this.delete = function(id, res) {
        connection.acquire(function(err, con) {
          con.query('delete from students where id = ?', [id], function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'Failed to delete'});
            } else {
              res.send({status: 0, message: 'Deleted successfully'});
            }
          });
        });
    };
}
module.exports = new API();
export default {
    get: function(connection, callback){
        connection.query('SELECT * FROM books', callback)
    },

    getById: function(connection, id, callback){
        connection.query(`SELECT * FROM books WHERE id = ${id}`, callback)
    },

    create: function(connection, data, callback){
        connection.query(`INSERT INTO books SET 
        title = '${data.title}',
        author = '${data.author}',
        year = '${data.tahun}'`, 
        callback)
    },

    update: function(connection, id, data, callback){
        connection.query(`UPDATE books SET 
        title = '${data.title}',
        author = '${data.author}',
        year = '${data.tahun}'
        WHERE id = ${id}`,callback)
    },

    destroy: function(connection, id, callback){
        connection.query(`DELETE FROM books WHERE id = '${id}'`, callback)
    }
}
import Books from '../models/Books.js';


export default {
    index: function(req, res){
        Books.get(req.connection, function(error, book){
            if(!!error){
                // req.flash('error', error);
                res.render('books/index', {
                data: ''
                })
            }else{
                res.render('books/index', {data: book});
            }
        })
    },
    create: function(req, res){
        res.render('books/create');
    },
    store: function(req, res){
        Books.create(req.connection, req.body, function(error){
        res.redirect('/books');
    })
    },
    edit: function(req, res){
        Books.getById(req.connection, req.params.id, function(error, book){
            if(!!error){
                req.flash('error', error);
                res.render('books/edit', {
                data: ''
                })
            }else{
                res.render('books/edit', {data: book[0]});
            }
        })
    },
    update: function(req, res){
        Books.update(req.connection, req.params.id, req.body, function(error){
            res.redirect('/books');
        })
    },
    destroy: function(req, res){
        Books.destroy(req.connection, req.params.id, function(error){
            res.redirect('/books');
        })
    }

}
var Article = require("../models/articleModel.js");

module.exports = {
        // This method handles retrieving articles from the db
        index: function(req, res) {
            let query;
            if (req.query) {
                query = req.query;
            } else {
                query = req.params.id ? { _id: req.params.id } : {};
            }

            Article.find(query)
                .then(function(doc) {
                    // console.log(doc)
                    res.json(doc);
                }).catch(function(err) {
                    res.json(err);
                });
        },


        // This method handles creating new Articles
        create: function(req, res) {
            console.log(req.body)
            Article.create(req.body, function(err, res){
                err ? console.log(err) : console.log(res)
            })
    },

    // This method handles updating Articles
    update: function(req, res) {
        Article.update({
                _id: req.params.id
            },
            req.body
        ).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    },

    // This method handles deleting Articles
    destroy: function(req, res) {
        Article.remove({
            _id: req.params.id
        }).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    }
};

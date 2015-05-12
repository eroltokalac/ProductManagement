/**
 * Created by ErolTokalac on 05/12/15.
 */

var Product=require('../models/product');
var Comment=require('../models/comment');
var express=require('express');

// ROUTES FOR OUR API
// =============================================================================
var router=express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Methods","GET, POST, DELETE, PUT");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log('New API Request');
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/comments/:id')
    .post(function(req,res){
        Product.findOne({_id:req.params.id},function(err,product){

            if(err)
                res.send(err);
		   
		   var comment=new Comment(req.body);
		   comment.save(function(err) {
                if (err)
                    res.send(err);
            });
           	product.comments.push(comment);
			product.comment_count = product.comment_count + 1;
            product.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Comment Added!' });
            });

        });
    })
    
   .get(function(req,res){
        Product.findOne({_id:req.params.id},function(err,product){

            if(err)
                res.send(err);
			
			Comment.find({_id:{$in: product.comments}},function(err, comment){
					if(err)
                		res.send(err);
  					res.json(comment);
			});	
        });
    });

router.route('/products')
    .get(function(req,res){
       Product.find(function(err,products){
           if(err)
                res.send(err);
           res.json(products);
       });
    })

    .post(function(req,res){
        var product=new Product(req.body);
        product.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'Product Added'});
        });
    });

router.route('/products/:id')
    .put(function(req,res){
        Product.findOne({_id:req.params.id},function(err,product){

            if(err)
                res.send(err);

           for(prop in req.body){
                product[prop]=req.body[prop];
           }

            product.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Product updated!' });
            });

        });
    })

    .get(function(req,res){
        Product.findOne({_id:req.params.id},function(err, product) {
            if(err)
                res.send(err);


			/*Comment.find({_id:{$in: product.comments}},function(err, comment){
					if(err)
                		res.send(err);
                	
                	var response = product.toObject();                	
                	response.comments = comment;
					res.json(response);
                	
			});
			
			*/
			res.json(product);
        });
    })

    .delete(function(req,res){
        Product.remove({
            _id: req.params.id
        }, function(err, product) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports=router;

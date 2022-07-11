const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors({
  origin: '*'
}));

let BstMethods = require("./bst.methods.js");

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index.pug', { title: 'Binary Search Tree | Exercise' })
})

app.post('/deepest', (request, response) => {
  try{
    const input_array = JSON.parse(request.body.input, true);
    const Tree = BstMethods.create_tree(input_array);
    let deepest = BstMethods.find_deepest(Tree,null);
    let depth = BstMethods.fin_depth(Tree);
    let res = BstMethods.create_response(deepest,depth, Tree);
    response.end(res);
  }catch(err){
    response.end('Error: '+err);
  }
  
});

app.post('/remove', (request, response) => {
  try{
    const input_array = JSON.parse(request.body.input, true);
    const data = JSON.parse(request.body.data, true);
    const Tree = BstMethods.create_tree(input_array);
    BstMethods.remove_data(Tree,data);
    let res = BstMethods.create_response([],'', Tree);
    response.end(res);
  }catch(err){
    response.end('Error: '+err);
  }
  
});

app.post('/search', (request, response) => {
  try{
    const input_array = JSON.parse(request.body.input, true);
    const data = JSON.parse(request.body.data, true);
    const Tree = BstMethods.create_tree(input_array);
    const search = BstMethods.search_node(Tree,data);
    let res = BstMethods.create_response([],'', search);
    response.end(res);
  }catch(err){
    response.end('Error: '+err);
  }
  
});

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
let BstClass = require("./bst.class.js");


function create_tree(input) {
    let Tree = new BstClass();
    for (const data of input) {
        Tree.insert(data);
    }
    return Tree.root;
}

function fin_depth(node) {
    if (node == null)
        return -1;
    else {
        let lDepth = fin_depth(node.left);
        let rDepth = fin_depth(node.right);
        if (lDepth > rDepth)
            return (lDepth + 1);
        else
            return (rDepth + 1);
    }
}

function search_node(node, data) {
    // if trees is empty return null
    if (node === null)
        return null;

    // if data is less than node's data
    // move left
    else if (data < node.data)
        return this.search_node(node.left, data);

    // if data is greater than node's data
    // move right
    else if (data > node.data)
        return this.search_node(node.right, data);

    // if data is equal to the node data
    // return node
    else
        return node;
}

function find_height(root) {
    if (root == null) {
        return 0;
    }

    if (root.left == null && root.right == null) {
        return 1;
    }

    return Math.max(find_height(root.left),
        find_height(root.right)) + 1;
}

// find deepests nodes
function find_deepest(root, req_node) {
    if (root == null){
        return req_node;
    }
        
    let left_ht = find_height(root.left); // left height

    
    let right_ht = find_height(root.right); // right height

    if (left_ht > right_ht) {
        req_node = find_deepest(root.left, req_node);
    }
    else if (right_ht > left_ht) {
        req_node = find_deepest(root.right, req_node);
    }
    else {

        // current node
        req_node = root;
        return req_node;
    }
    return req_node;
}

function findMinNode(node) {
    // if left node is null, it is the minimun node
    // else use recursion
    if (node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
}

function remove_data(tree, data) {

    tree = removeNode(tree, data);

    return tree
}

function removeNode(node, key) {

    // check empty tree
    if (node === null)
    {
        return null;
    }
        
    // if data < root move to left
    else if (key < node.data) {
        node.left = removeNode(node.left, key);
        return node;
    }

    // if data > root move to right
    else if (key > node.data) {
        node.right = removeNode(node.right, key);
        return node;
    }

    // if data is similar delete current node
    else {
        // no children
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }

        // one children
        if (node.left === null) {
            node = node.right;
            return node;
        }
        else if (node.right === null) {
            node = node.left;
            return node;
        }
        // two children
        var aux = this.findMinNode(node.right);
        node.data = aux.data;

        node.right = this.removeNode(node.right, aux.data);
        return node;
    }

}

function create_response(deepest, depth, Tree) {
    let nodes = [];
    if (deepest.right && deepest.left) {
        nodes.push(deepest.right.data);
        nodes.push(deepest.left.data);
    }
    else {
        nodes.push(deepest.data);
    }
    let res = {
        "Deepest": nodes.sort(),
        "Depth": depth,
        "Tree": Tree
    };

    return JSON.stringify(res).toString();
}

module.exports = { create_tree, fin_depth, search_node, find_deepest, remove_data, create_response };
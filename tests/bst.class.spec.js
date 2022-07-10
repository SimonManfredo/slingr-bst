var assert = require('assert');

var should = require('chai').should();

let BstClass = require("../bst.class.js");

describe('BST Class', function () {
    it('should create a Single Node', function () {
        let node = new BstClass();
        node.insert(10);
        let expected = JSON.stringify({ "data": 10, "left": null, "right": null }).toString();
        let result = JSON.stringify(node.root).toString();
        result.should.equal(expected);
    });

    it('should create a Tree', function () {
        let Tree = new BstClass();
        Tree.insert(10);
        Tree.insert(5);
        Tree.insert(11);
        let expected = JSON.stringify({ "data": 10, "left": { "data": 5, "left": null, "right": null }, "right": { "data": 11, "left": null, "right": null } }).toString();
        let result = JSON.stringify(Tree.root).toString();
        result.should.equal(expected);
    });

});
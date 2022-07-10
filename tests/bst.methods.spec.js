var assert = require('assert');

var should = require('chai').should();

let BstMethods = require("../bst.methods.js");

describe('BST Methods', function () {
    it('should create a Tree from array of integers', function () {
        let input_array = [26, 82, 16, 92, 33];
        const Tree = BstMethods.create_tree(input_array);
        let expected = {
            data: 26,
            left: {
                data: 16,
                left: null,
                right: null,
            },
            right: {
                data: 82,
                left: {
                    data: 33,
                    left: null,
                    right: null,
                },
                right: {
                    data: 92,
                    left: null,
                    right: null,
                },
            },
        };
        let result = Tree;
        JSON.stringify(result).should.equal(JSON.stringify(expected));
    });


    it('should remove a node from tree', function () {
        let input_array = [26, 82, 16, 92, 33];
        let data = 16;
        const Tree = BstMethods.create_tree(input_array);
        BstMethods.remove_data(Tree, data);
        let expected = {
            data: 26,
            left: null,
            right: {
                data: 82,
                left: {
                    data: 33,
                    left: null,
                    right: null,
                },
                right: {
                    data: 92,
                    left: null,
                    right: null,
                },
            },
        };
        let result = Tree;
        JSON.stringify(result).should.equal(JSON.stringify(expected));
    });

    it('should return deepests nodes with their depth', function () {
        let input_array = [26, 82, 16, 92, 33];
        const Tree = BstMethods.create_tree(input_array);
        let deepest = BstMethods.find_deepest(Tree, null);
        let depth = BstMethods.fin_depth(Tree);
        depth.should.equal(2);
        deepest.left.data.should.equal(33);
        deepest.right.data.should.equal(92);
    });

    it('should return deepests nodes with their depth 2', function () {
        let input_array = [12,11,90,82,7,9];
        const Tree = BstMethods.create_tree(input_array);
        let deepest = BstMethods.find_deepest(Tree, null);
        let depth = BstMethods.fin_depth(Tree);
        depth.should.equal(3);
        deepest.data.should.equal(9);
    });

    it('should search a node in the tree', function () {
        let input_array = [26, 82, 16, 92, 33];
        let data = 82;
        const Tree = BstMethods.create_tree(input_array);
        const search = BstMethods.search_node(Tree,data);
        search.data.should.equal(82);
        search.left.data.should.equal(33);
        search.right.data.should.equal(92);
    });



});
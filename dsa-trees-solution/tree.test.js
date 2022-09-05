// const { Tree, TreeNode } = require("./tree");

// const emptyTree = new Tree();

// //         1
// //         |
// //         2

// const smallTree = new Tree(
//     new TreeNode(1, [
//         new TreeNode(2),
//     ]));

// //            1
// //          / | \
// //        2   3   4
// //               / \
// //              5   6
// //                   \
// //                    7
// //                     \
// //                      8

// const largeTree = new Tree(
//     new TreeNode(1,[
//         new TreeNode(2),
//         new TreeNode(3),
//         new TreeNode(4, [
//             new TreeNode(5),
//             new TreeNode(6, [
//                 new TreeNode(7, [
//                     new TreeNode(8)
//                 ]),
//             ]),
//         ]),
//     ]));


// describe("sumValues", function () {
//   it("sums simple trees", function () {
//     expect(smallTree.sumValues()).toEqual(3);
//   });

//   it("sums more complicated trees", function () {
//     expect(largeTree.sumValues()).toEqual(36);
//   });

//   it("sums up an empty tree", function () {
//     expect(emptyTree.sumValues()).toEqual(0);
//   });
// });

// describe("countEvens", function () {
//   it("counts nodes in simple trees", function () {
//     expect(smallTree.countEvens()).toEqual(1);
//   });

//   it("counts Treenodes in more complicated trees", function () {
//     expect(largeTree.countEvens()).toEqual(4);
//   });

//   it("counts empty", function () {
//     expect(emptyTree.countEvens()).toEqual(0);
//   });
// });

// describe("numGreater", function () {
//   it("counts nodes in small trees", function () {
//     expect(smallTree.numGreater(0)).toEqual(2);
//     expect(smallTree.numGreater(1)).toEqual(1);
//     expect(smallTree.numGreater(2)).toEqual(0);
//     expect(smallTree.numGreater(3)).toEqual(0);
//   });

//   it("counts nodes in larger trees", function () {
//     expect(largeTree.numGreater(0)).toEqual(8);
//     expect(largeTree.numGreater(4)).toEqual(4);
//     expect(largeTree.numGreater(8)).toEqual(0);
//   });

//   it("counts nodes in an empty  tree", function () {
//     expect(emptyTree.numGreater(0)).toEqual(0);
//   });
// });

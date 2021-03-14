/* 
var objectOne = {one:1,two:2,other:0}
var objectTwo = {three:3,four:4,other:-1}
var combind = {
    one: objectOne.one,
    two: objectOne.two,
    three: objectTwo.three,
    four: objectTwo.four,

}
var combind = Object.assign({},objectOne,objectTwo)
// combind = {one : 1, two : 2, three : 3, four: 4, other: -1}
var combind = Object.assign({},objectTwo,objectOne)
//combind = {one:1, two:2, three:3, four:4, other:0}
var others = Object.assign({},combind)
delete others.other
// others = {one : 1, two : 2, three : 3, four : 4}
*/

var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
  ...objectOne,
  ...objectTwo,
};
// combined = {one : 1, two : 2, three : 3, four : 4,other:-1}
var combined = {
  ...objectTwo,
  ...objectOne,
};
// combined = {one:1,two:2,three:3,four:4,other:0}
var { other, ...others } = combined;
//others = {one : 1,two:2,three:3,four:4}

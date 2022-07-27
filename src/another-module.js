import _ from 'lodash';

const odds = [1,2,3,4].map(v => v + 1);

var ibo = {}
console.log(ibo?.a ?? 111) //  111
var ibo = {a:{b:1}}
console.log(ibo?.a?.b ?? 111) //1

console.log(1??'2') //  1
console.log(null ?? "xx") // xx
undefined
console.log(undefined ?? "xx") //  xx
console.log( ' '?? "xx")  //  空值

class SkinnedMesh {}

const a = Symbol('a');

async function foo() {
  await setTimeout(()=>{console.log("第一步耗时操作 开始执行")},1000)
  await setTimeout(()=>{console.log("第二步耗时操作 执行中")},2000)
  await setTimeout(()=>{console.log("第三步耗时操作 执行结束")},3000)
}


console.log(_.join(['Another123', 'module', 'loaded!'], ' '));
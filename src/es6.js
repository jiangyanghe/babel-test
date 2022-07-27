const a = Symbol('a');

async function foo() {
  await setTimeout(()=>{console.log("第一步耗时操作 开始执行")},1000)
  await setTimeout(()=>{console.log("第二步耗时操作 执行中")},2000)
  await setTimeout(()=>{console.log("第三步耗时操作 执行结束")},3000)
}
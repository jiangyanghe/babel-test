const a = Symbol('a');

async function foo() {
  await setTimeout(()=>{console.log("第一步耗时操作 开始执行")},1000)
}

foo();
function resolveAfter5Seconds(x,y) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, y*1000);
    });
  }

  async function asyncCall() {
    console.time('function');
    var result1 = resolveAfter5Seconds(10,5)
    var result2 = resolveAfter5Seconds(20,7);
    result3 = await result1+await result2;
    console.log(result3);
    console.timeEnd('function');
    throw (new Error('error'));
  }
  
  asyncCall().catch((err)=>console.log(err.message));
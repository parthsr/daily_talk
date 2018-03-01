function resolveAfter5Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 5000);
    });
  }
  
  async function asyncCall() {
    console.time('function');
    var promise = await resolveAfter5Seconds(10).then((result1)=>{
        return resolveAfter5Seconds(20).then((result2)=>{
            return result1+result2;
        });
    });
    console.log(promise);
    console.timeEnd('function');
    throw (new Error('error'));
  }
  
  asyncCall().catch((err)=>console.log(err.message));
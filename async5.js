function resolveAfter5Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 5000);
    });
  }
  
  async function asyncCall() {
    console.time('function');
    var promise =[ resolveAfter5Seconds(10), resolveAfter5Seconds(20)];
    var result= await Promise.all(promise).then((result=>{return (result[0]+result[1])}));
    console.log(result);
    console.timeEnd('function');
    throw (new Error('error'));
  }
  
  asyncCall().catch((err)=>console.log(err.message));
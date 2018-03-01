const resolveAfter5Seconds= (x) =>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 5000);
    });
  }
  
  const asyncCall = async() =>{
    console.time('function');
    var result1 =await resolveAfter5Seconds(10)
    var result2 = await resolveAfter5Seconds(20);
    result3 = result1+result2;
    console.log(result3);
    console.timeEnd('function');
    throw (new Error('error'));
  }
  
  asyncCall().catch((err)=>console.log(err.message));
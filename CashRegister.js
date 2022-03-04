function checkCashRegister(price, cash, cid) {
    let originalCID = JSON.parse(JSON.stringify(cid));
    let currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    let change = (cash - price) * 100;
    let arr = []
  
    cid.forEach(e => e[1] = Math.round(e[1] * 100));
  
    let total = cid.reduce((a, b) => a + b[1], 0);
                              
    if (total < change){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    if (total == change){
      return {status: "CLOSED", change: originalCID}  
    }
  
    for(let i = cid.length - 1; i >= 0; i--){
      let temp = [cid[i][0], 0]
      while(change - currency[i] >= 0 && cid[i][1] > 0){
        change -= currency[i];
        cid[i][1] -= currency[i];
        temp[1] += currency[i];
      }
      if(temp[1] != 0){
        arr.push([temp[0], temp[1]/100]);
        console.log(arr, change)
      }
      if(change == 0){
        return {status: "OPEN", change: arr};
      }
    }
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
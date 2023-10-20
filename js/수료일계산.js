    const dDay = new Date("2024-02-21").getTime();       
    
    const now = new Date().getTime();   
 
    let remainTime = dDay - now;  

    remainTime = Math.round(remainTime/(1000*60*60*24)); 

    document.querySelector('.Dday').innerText = remainTime;
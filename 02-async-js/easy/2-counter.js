let counter = 0;
increment = () =>{
    counter ++;
    console.log(counter);
    setTimeout(increment, 1000);
}
setTimeout(increment, 1000);
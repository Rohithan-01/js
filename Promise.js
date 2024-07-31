isLocationFound=(loc,time)=>{
    if(loc==="SKCT" && time<=2000)
    {
        return true
    }
    else
    {
        return false
    }
}
function locationFinder(){
    time=2000
    loc="SKCET"
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
            if(isLocationFound(loc,time))
            {
                locFound("Location Found")
            }
            else
            {
                locNotFound("Location not Found")
            }
        },time)
    })
}
locationFinder()
.then((val)=>{
    console.log(val);
})
.catch((val)=>{
    console.log(val);
})
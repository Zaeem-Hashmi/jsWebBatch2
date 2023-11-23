class data {
    constructor(url){
        this.getData(url)
    }
    getData(url){
        fetch(url).then((el)=>{
            data = el.json();
            data.then((value)=>{
                sessionStorage.setItem("data",JSON.stringify(data));
            })
        }).catch((e)=>{
            console.log(e);
        })
    }
}
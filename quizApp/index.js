class Data {
    constructor(url){
        this.getData(url)
    }
    async getData(url){
        this.data1 = await fetch(url);
        this.data_json = await this.data1.json();
        console.log(this.data_json);
    }
}
const instanceData = new Data('./data/question.json');

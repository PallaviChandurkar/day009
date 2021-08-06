var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);

    //1.- Get all the countries from Asia continent /region using Filter function
    var reg = data.filter((element) => element.region === "Asia");
    console.log(reg);

    //2. - Get all the countries with population of less than 2 lacs using Filter function
    var reg1 = data.filter((element) => element.population < 200000);
    console.log(reg1);

    //3. - Print the country which use US Dollars (USD)as currency.
    var cur = data.filter((element) => {
        for(let i in element.currencies) {
            if(element.currencies[i].code === "USD")
        return true;
        }
    });
    console.log(cur);

    //4.- print the sum of the total population of the  countries by using reduce function
    const sum = data.reduce((acc,ele) => acc + ele.population,0);
    console.log(sum);

    //5.Print the following details name, capital, flag using forEach function
    data.forEach(element => {
        console.log(element.name,element.capital,element.flag);
    });

}

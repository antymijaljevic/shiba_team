class SHIB{
    constructor(){
        this.apiKey = 'OQRyMBqT6e5CL5icqFIte2OJDCQzIKlz24Y';
    }

    //fetch weather from API
    async getPrice(){
        const response = await fetch(`https://www.worldcoinindex.com/apiservice/ticker?key=${this.apiKey}&label=shibbtc-ethbtc&fiat=eur`);

        const responseData = await response.json();
        return responseData;
    }
}; 
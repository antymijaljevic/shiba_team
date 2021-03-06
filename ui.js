class UI{
    constructor(){
        this.eurPrice = document.getElementById('euro');   
        this.elemUsers = document.getElementById('users');
        this.userCoins = [
            {Name: 'Ante', Amount: 101_519_624.2},
            {Name: 'Asier', Amount:  140_552_263.4},
            {Name: 'Husein', Amount: 202_961_436.4},
            {Name: 'Combo', Amount:  7_244_406.43},
            {Name: 'Luka', Amount:  41_837_276.0},
            {Name: 'Rocio', Amount:  13_723_714.0},
        ]

        this.userCoins.sort((user1, user2) => user2.Amount - user1.Amount);


        this.getRank = function(amount) {
            if (amount > 1000) {
                return 'House Owner'
            }
            if (amount >= 500 && amount < 1000) {
                return 'Private Room Guest'
            }
            if (amount >= 240 && amount < 500) {
                return 'Mixed Dorm Guest'
            }

            return 'Cave Man'
        }
    }

    paint(data){
        this.eurPrice.textContent = data.Markets[0].Price;

        var temp = ""
        this.userCoins.forEach(user => { 
            var amountInEuros = user.Amount * data.Markets[0].Price
            
            temp += `
            <tr>
                <td>${this.getRank(amountInEuros)}</td>
                <td>${user.Amount.toLocaleString()} SHIB</td>
                <td>${parseFloat(amountInEuros).toFixed(2)} €</td>
                <td>${user.Name}</td>
            </tr>
            `
        })

        this.elemUsers.innerHTML = temp;
    }
}
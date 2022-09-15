class restaurantManager{
    constructor(restaurantList){
        this.restaurantList1 = restaurantList;
    }
    
    printAllRestaurantNames(){
        return this.restaurantList1;
    }
    
    filterRestaurantByCity(city){
        return this.restaurantList1.filter(bycity=>bycity.city===city)
    }
    
    orderDatasum(){
        var sum =0;
        for(var i=0;i<Object.values(this.restaurantList1).length;i++){
            sum += Object.values(this.restaurantList1)[i];
        };
        return 'Total number of orders placed : '+sum;
    }
    
    orderproportion(){
        return 'Total number of order proportions : '+Object.keys(this.restaurantList1).length;
    }
    
    orderpercentage(){
        var dataarray = [];
        var sum =0;
        
        for(var i=1;i<Object.values(this.restaurantList1).length;i++){
            sum += Object.values(this.restaurantList1)[i];
        };
        sum;
        
        for (var i=1;i<Object.values(this.restaurantList1).length;i++){
            dataarray.push({'id':i,'Order':Object.keys(this.restaurantList1)[i],'Order Percentage':(Object.values(this.restaurantList1)[i]/sum*100).toFixed(2)+ ' %','restaurant':this.restaurantList1.restaurentname });
        }
        return dataarray;
        
    }
}

var restaurants = new restaurantManager([
    {
        'name':'Punjabi Tadka',
        'addres' : 'sect-7 Rohini, Old Delhi',
        'city' : 'Delhi'
    },
    {
        'name':'Suraj Graden',
        'addres' : 'Main Bypas, Near High court',
        'city' : 'Jaipur'
    },
    {
        'name':'OTR',
        'addres' : 'DPS Circle Near DPS School',
        'city' : 'Jodhpur'
    }
])


var orderData = new restaurantManager({
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
});

var data = new restaurantManager ({
    'restaurentname' : 'Punjabi Tadka Restaurent',
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
})

// Output 1 : Print All Restaurent Name
console.log(restaurants.printAllRestaurantNames());

// Output 2 : Print All Restaurent Name Filtered By City Name
console.log(restaurants.filterRestaurantByCity('Delhi'));

// Output 3 : Print Sum Of All Types Of Placed Orders
console.log(orderData.orderDatasum());

// Output 4 : Print Proportion Of All Type Placed Orders.
console.log(orderData.orderproportion());

// Output 5 : Print Orders Details As Mentioned In Assignment for Punjabi Tadka Restaurent
console.log(data.orderpercentage());
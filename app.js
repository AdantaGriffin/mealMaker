let menu = {
    _meal: '',
    _price: 0,
    
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck;
      }
    },
  
    get todaysSpecial() {
      if (this._meal && this._price) {
        return 'Todays special is Burger Delux, your way for $15!'
      } else {
        return 'Meal or price was not set correctly.'
      }
    },
  };
  menu.meal = 'pizza';
  menu.price = 15;
  console.log(menu.todaysSpecial);
  
// Возможно ли реализовать такое?

var a = {  
    num: 0,
    valueOf: function() {    
        return this.num += 1
    }
};

// Проверка
console.log(a == a); // true
console.log(a < a); // true

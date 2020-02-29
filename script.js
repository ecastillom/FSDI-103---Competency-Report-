class Character{
    constructor(image,name,energy,id){
        this.name = name;
        this.energy = energy;
        this.id = id;
        this.image = image;
    }

    display = function() {
        document.getElementById("img"+this.id).innerHTML=`<img class="character" src="${this.image}" >`;

        document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy: ${this.energy} <br> HP: ${this.hp} `;
        
    }

    attack = function (opponent,item) {
        var newEnergy = opponent.energy - item.imagic;
        
        if(newEnergy > 0){

            opponent.energy = newEnergy;
            opponent.display();
    
            // document.getElementById("console").innerHTML=` ${item.iname} <br> <img src="${item.img}" class="imgConsole">`;
            document.getElementById("itemTittle").innerHTML=` ${item.iname} `;
            document.getElementById("itemData").innerHTML=` Attack: ${item.imagic} `;
            document.getElementById("itemImage").innerHTML=`<img src="${item.img}" class="imgConsole">`;
            
        }
        else{
            document.getElementById("itemTittle").innerHTML=` Game Over `;
            document.getElementById("itemData").remove();
            document.getElementById("itemImage").remove();
            document.getElementById("btnC1").remove();
            document.getElementById("btnC2").remove();
               
        }
    }

}

const c1 = new Character("img/link.png","Link",100,"c1");
const c2 = new Character("img/dk.png","Donkey Kong",100,"c2");
// const c3 = new Character("img/c2.png","Toad",100,10,"c2");

c1.display();
c2.display();

class Item{
    constructor(iname,imagic,img){
        this.iname = iname; 
        this.imagic = imagic; 
        this.img = img; 
    }
}

const Item1 = new Item("AK47",30,"img/item-AK47.png");
const Item2 = new Item("Bananas",10,"img/item-Bananas.png");
const Item3 = new Item("Pokeball",15,"img/item-pokeball.png");
const Item4 = new Item("Bate",25,"img/item-bate.png");

var Items = [Item1, Item2, Item3, Item4];

function select(){
    let selection = Math.floor(Math.random()*4);
    return Items[selection];
}


'Use strict';

class Storage {
    constructor(items) {
        this._items = items;
    };

    getItems() {
        return this._items;
    };
    addItem(item) {
        this._items.push(item);
        console.log(this._items);
    };
    removeItem(item) {
        
        this._items = this._items.filter(newItem => newItem !== item );
        console.log(this._items);
    };
};


const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
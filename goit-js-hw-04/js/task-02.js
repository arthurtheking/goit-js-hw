"Use strict";
const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
      console.log(`Adding ${itemName} to inventory`);
  
      this.items.push(itemName);
    },
    remove(itemName) {
      console.log(`Removing ${itemName} from inventory`);
  
      this.items = this.items.filter(item => item !== itemName);
    },
  };
  
  const invokeInventoryAction = function(itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action(itemName);
  };
  
  invokeInventoryAction('Medkit', inventory.add.bind(inventory));
  // Invoking action on Medkit
  // Adding Medkit to inventory
  
  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
  invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
  // Invoking action on Gas mask
  // Removing Gas mask from inventory
  
  console.log(inventory.items); // ['Knife', 'Medkit']



const users = {
    names: [],
    getNames() {
        console.table(this.names);
        return this.names;
    },
    add(name) {
        console.log(`User ${name} was added to users`)
        this.names.push(name)
    },
    findName(name) {
        this.names.find(foundName => foundName === name)
        console.log(`User with name ${name} was found`)
    },
    remove(name) {
        this.names = this.names.filter(filterdName => filterdName !== name)
        console.log(`User with name ${name} was successfuly removed`)
    }
}


const usersAction = function(action, name) {
    action(name);
}


usersAction(users.add.bind(users), 'Anton');
usersAction(users.add.bind(users), 'Arthur');
usersAction(users.add.bind(users), 'Sashka');
usersAction(users.add.bind(users), 'Deniska');
usersAction(users.getNames.bind(users));
usersAction(users.findName.bind(users), `Anton`);
usersAction(users.remove.bind(users), 'Deniska')
usersAction(users.getNames.bind(users));
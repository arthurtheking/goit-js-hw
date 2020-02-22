'Use strict';

class StringBuilder {
    constructor(value) {
        this._value = value;
    };

    get value() {
        return this._value;
    };

    append(str) {
        const valArr = this._value.split('');
        valArr.push(str);
        this._value = valArr.join('')
    };

    prepend(str) {
        const valArr = this._value.split('');
        valArr.unshift(str);
        this._value = valArr.join('')

    };
    pad(str) {
        this.append(str);
        this.prepend(str);
    };
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
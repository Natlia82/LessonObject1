//var obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

export default function orderByProps(obje, mass) {
    let newObject = [];
    for (let i = 0; i < mass.length; i++) {
        newObject[i] = { key: mass[i], value: obje[mass[i]] };
        delete obje[mass[i]];

    }


    let countObj = Object.keys(obje).sort(function(a, b) {
        if (a >= b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }

    });

    let j = newObject.length;
    for (let i = 0; i < countObj.length; i++) {
        newObject[j] = { key: countObj[i], value: obje[countObj[i]] };
        j++;
    }

    return newObject;
};

//orderByProps(obj, ["name", "level"])
//console.log(orderByProps(obj, ["name", "level"]));
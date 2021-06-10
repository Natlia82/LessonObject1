//var obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

function orderByProps(obje, mass) {
    let newObject = [];
    for (let i = 0; i < mass.length; i++) {
        newObject[i] = { key: mass[i], value: obje[mass[i]] };
        delete obje[mass[i]];
    }

    const j = newObject.length;

    let k = null;
    do {

        k = null;
        for (const prot in obje) {
            if (!k) {
                k = prot;
            }
            if (k > prot) {
                k = prot;
            }
        }
        newObject[j] = { key: k, value: obje[k] };
        delete obje[k];
        j++;

    } while (Object.keys(obje).length > 0)

    return newObject;
};

//orderByProps(obj, ["name", "level"]);
module.exports = {
    success,
    fail,
    repair,
    validateDurability
}

const enhancement_table = {
    1:'+1',
    2:'+2',
    3:'+3',
    4:'+4',
    5:'+5',
    6:'+6',
    7:'+7',
    8:'+8',
    9:'+9',
    10:'+10',
    11:'+11',
    12:'+12',
    13:'+13',
    14:'+14',
    15:'+15',
    16:'PRI',
    17:'DUO',
    18:'TRI',
    19:'TET',
    20:'PEN'
}

function success(item) {
    let enhancedItem = Object.assign({},item);
    enhancedItem.enhancement += 1;
    enhancedItem.name = '[' + enhancement_table[enhancedItem.enhancement] + '] ' + enhancedItem.originalName;
    return enhancedItem
}

function fail(item) {
    let failedItem = Object.assign({}, item);
    if (failedItem.enhancement >= 0 && failedItem.enhancement <= 14) {
        failedItem.durability -= 5;
    } else if (failedItem.enhancement > 14 && failedItem.enhancement <= 16) {
        failedItem.durability -= 10; // correct durability to go down for all levels above 16
    } else if (failedItem.enhancement > 16) {
        failedItem.enhancement -= 1;
        failedItem.durability -= 10;
        failedItem.name = '[' + enhancement_table[failedItem.enhancement] + '] ' + failedItem.originalName;
    } else {
        throw new Error("Whoa, this shouldn't happen! Item did not satisfy any of three if conditions")
    }
    return failedItem
}

function repair(item) {
    let repairedItem = Object.assign({},item);
    repairedItem.durability = 100;
    return repairedItem;
}

function validateDurability(item) {
    if (item.enhancement <= 14) {
        // durability under 25 will fail 
        return item.durability < 25 ? 0 : 1
    } else if (item.enhancement >= 15) {
        return item.durability < 10 ? 0 : 1
    } else {
        return 1
    }
}
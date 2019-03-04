module.exports = {
    success,
    fail,
    repair
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
        failedItem.durability -= 10;
    } else if (failedItem.enhancement > 16) {
        failedItem.enhancement -= 1;
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
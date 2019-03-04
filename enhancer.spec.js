const {success, fail, repair, validateDurability} = require('./enhancer');

const regularItem = {
    originalName: 'Blade of Wonder',
    name: 'Blade of Wonder',
    type: 'weapon',
    durability: 45,
    enhancement: 0
}

const repairedRegularItem = {
    originalName: 'Blade of Wonder',
    name: 'Blade of Wonder',
    type: 'weapon',
    durability: 100,
    enhancement: 0
}

const enhancedRegularItem = {
    originalName: 'Blade of Wonder',
    name: '[+1] Blade of Wonder',
    type: 'weapon',
    durability: 45,
    enhancement: 1
}

const failEnhanceRegularItem = {
    originalName: 'Blade of Wonder',
    name: 'Blade of Wonder',
    type: 'weapon',
    durability: 40,
    enhancement: 0
}

const niceItem = {
    originalName: 'Glowing Scythe',
    name: '[+15] Glowing Scythe',
    type: 'weapon',
    durability: 70,
    enhancement: 15
}

const failEnhanceNiceItem = {
    originalName: 'Glowing Scythe',
    name: '[+15] Glowing Scythe',
    type: 'weapon',
    durability: 60,
    enhancement: 15
}

const amazingItem = {
    originalName: 'Dark Claymore',
    name: '[TET] Dark Claymore',
    type: 'weapon',
    durability: 70,
    enhancement: 19
}

const amazingEnhancedItem = {
    originalName: 'Dark Claymore',
    name: '[PEN] Dark Claymore',
    type: 'weapon',
    durability: 70,
    enhancement: 20
}

const amazingFailItem = {
    originalName: 'Dark Claymore',
    name: '[TRI] Dark Claymore',
    type: 'weapon',
    durability: 60,
    enhancement: 18
}

const beatUpItem = {
    originalName: 'Spiked Club',
    name: '[+1] Spiked Club',
    type: 'weapon',
    durability: 10,
    enhancement: 1
}

const niceItemLowDur = {
    originalName: 'Shining Helm',
    name: '[DUO] Shining Helm',
    type: 'armor',
    durability: 15,
    enhancement: 17
}

describe('enhancer.js', () => {
    describe('repair()', () => {
        test('happy case, durability of regular item set to 100', () => {
            expect(repair(regularItem)).toEqual(repairedRegularItem);
        })
    })
    describe('success()', () => {
        test('happy case, enhancement from 0 to 1 of regular item', () => {
            expect(success(regularItem)).toEqual(enhancedRegularItem);
        })
        test('happy case, amazing item at 19 gets enhanced to 20', () => {
            expect(success(amazingItem)).toEqual(amazingEnhancedItem);
        })
    })
    describe('fail()', () => {
        test('happy case, regular item with 0<x<14 enhancement fails to be enhanced', () => {
            expect(fail(regularItem)).toEqual(failEnhanceRegularItem);
        })
        test('happy case, nice item with 14<x<16 enhancement fails to be enhanced', () => {
            expect(fail(niceItem)).toEqual(failEnhanceNiceItem);
        })
        test('happy case, amazing item with >16 enhancement fails to be enhanced', () => {
            expect(fail(amazingItem)).toEqual(amazingFailItem);
        })
    })
    describe('validateDurability()', () => {
        test('item always fail if durability < 25 for enhancement levels under 14', () => {
            expect(validateDurability(beatUpItem)).toBe(0)
        })
        test('item is fine if durability more than 25', () => {
            expect(validateDurability(regularItem)).toBe(1)
        })
        test('nice items will be fine if durability is more than 10', () => {
            expect(validateDurability(niceItemLowDur)).toBe(1)
        })
    })
})
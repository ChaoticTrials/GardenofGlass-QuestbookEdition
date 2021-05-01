events.listen('recipes', function (event) {
    const recipes = [
        shapedRecipe('4x minecraft:chest', ['XXX', 'X X', 'XXX'], {
            X: '#minecraft:logs'
        }),
        shapedRecipe('minecraft:hopper', ['ILI', 'ILI', ' I '], {
            I: '#forge:ingots/iron',
            L: '#minecraft:logs'
        }),
        shapedRecipe('minecraft:grass_block', ['PPP', 'PDP', 'PPP'], {
            P: 'botania:fertilizer',
            D: 'minecraft:dirt'
        }),
        shapedRecipe('16x minecraft:stick', ['X', 'X'], {
            X: '#minecraft:logs'
        })
    ];

    const infusions = [
        manaInfusion('minecraft:warped_fungus', '#forge:mushrooms', 200, 'minecraft:warped_nylium'),
        manaInfusion('minecraft:crimson_fungus', '#forge:mushrooms', 200, 'minecraft:crimson_nylium'),
        manaInfusion('minecraft:warped_roots', 'minecraft:grass', 200, 'minecraft:warped_nylium'),
        manaInfusion('minecraft:crimson_roots', 'minecraft:grass', 200, 'minecraft:crimson_nylium'),
        manaInfusion('2x minecraft:warped_nylium', 'minecraft:warped_nylium', 200, 'botania:conjuration_catalyst'),
        manaInfusion('2x minecraft:crimson_nylium', 'minecraft:crimson_nylium', 200, 'botania:conjuration_catalyst')
    ];

    const daisy = [
        pureDaisy('minecraft:netherrack', '#forge:cobblestone'),
        pureDaisy('minecraft:shroomlight', 'minecraft:glowstone'),
        pureDaisy('minecraft:lava', 'minecraft:magma_block')
    ];

    const terra = [
        terraPlate('minecraft:warped_nylium', ['#forge:ender_pearls', '#forge:netherrack', '#forge:netherrack', '#forge:netherrack', '#forge:netherrack'], 5000),
        terraPlate('minecraft:crimson_nylium', ['#forge:crops/nether_wart', '#forge:netherrack', '#forge:netherrack', '#forge:netherrack', '#forge:netherrack'], 5000)
    ];

    recipes.forEach(function (recipe) {
        if (recipe.id) {
            event.shaped(recipe.result, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.result, recipe.pattern, recipe.key);
        }
    });

    infusions.forEach(function (recipe) {
        if (recipe.catalyst) {
            event.custom({
                type: 'botania:mana_infusion',
                input: recipe.input,
                output: recipe.result,
                mana: recipe.mana,
                catalyst: recipe.catalyst
            });
        } else {
            event.custom({
                type: 'botania:mana_infusion',
                input: recipe.input,
                output: recipe.result,
                mana: recipe.mana
            });
        }
    });

    daisy.forEach(function (recipe) {
        event.custom({
            type: 'botania:pure_daisy',
            input: recipe.input,
            output: recipe.result
        });
    });

    terra.forEach(function (recipe) {
        event.custom({
            type: 'botania:terra_plate',
            mana: recipe.mana,
            ingredients: recipe.input,
            result: recipe.result
        });
    });
});

function shapedRecipe(result, pattern, key, id) {
    return {result: result, pattern: pattern, key: key, id: id};
}

function manaInfusion(result, input, mana, catalyst) {
    return {
        result: Item.of(result).toResultJson(),
        input: Ingredient.of(input).toJson(),
        mana: mana,
        catalyst: {type: 'block', block: catalyst}
    };
}

function pureDaisy(result, input) {
    if (input.startsWith('#')) {
        return {result: {name: result}, input: {type: 'tag', tag: input.replace('#', '')}};
    } else {
        return {result: {name: result}, input: {type: 'block', block: input}};
    }
}

function terraPlate(result, input, mana) {
    return {result: {item: result}, input: input.map(item => Ingredient.of(item)), mana: mana};
}
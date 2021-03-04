events.listen('recipes', function (event) {
    recipes = [
        shapedRecipe(item.of('minecraft:chest', 4), ['XXX', 'X X', 'XXX'], {
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
        shapedRecipe(item.of('minecraft:stick', 16), ['X', 'X'], {
            X: '#minecraft:logs'
        })
    ];

    recipes.forEach(function (recipe) {
        if (recipe.id) {
            event.shaped(recipe.result, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.result, recipe.pattern, recipe.key);
        }
    });
});

function shapedRecipe(result, pattern, key, id) {
    return {result: result, pattern: pattern, key: key, id: id};
}
export const FETCH_TACO_RECIPE = 'FETCH_TACO_RECIPE';
export const TACO_RECIPE_RECIEVED = 'TACO_RECIPE_RECEIVED';

export function tacoRecipeReceived(recipe: any) {
    return {
        type: TACO_RECIPE_RECIEVED,
        data: {
            recipe,
        }
    }
}

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as tacoActions from '../../actions/tacoActions';

const link = {
    textDecoration: 'none',
    color: 'grey',
    padding: '8px',
}


interface TacoProps {
    getRecipe: () => void;
    recipe: Recipe | null;
}

interface RecipeItem {
    name: string,
    recipe: string,
    slug: string,
    url: string,
}

interface Recipe {
    base_layer: RecipeItem,
    condiment: RecipeItem,
    mixin: RecipeItem,
    seasoning: RecipeItem,
    shell: RecipeItem,
}

const center = {
    display: 'flex',
    alignItems: 'stretch',
    flexFlow: 'column nowrap',
    padding: '0 60px 0 60px',
}

class Tacos extends React.Component<TacoProps> {
    public render() {
        return (
            <div>
                <Link style={link} to="/examples">&lt; All Examples</Link>
                <div>Tacos</div>
                <button onClick={this.props.getRecipe}>Get Taco Recipe</button>
                <div>{this.props.recipe ? this.renderRecipe(this.props.recipe) : 'No Recipe Received'}</div>
            </div>
        );
    }

    private renderRecipe(recipe: Recipe) {
        return (
            <div style={center}>
                {this.renderRecipeItem(recipe.base_layer, 'Base Layer')}
                {this.renderRecipeItem(recipe.shell, 'Shell')}
                {this.renderRecipeItem(recipe.seasoning, 'Seasoning')}
                {this.renderRecipeItem(recipe.mixin, 'Mixin')}
                {this.renderRecipeItem(recipe.condiment, 'Condiments')}
            </div>
        );
    }

    private renderRecipeItem(item: RecipeItem, name: string) {
        return (
        <div>
            <h2>{name}: {item.name}</h2>
            <div style={{ height: '200px', overflow: 'auto', border: '1px solid grey'}}>{item.recipe}</div>
        </div>
        );
    }
}


const mapStateToProps = (state: any) => ({
    recipe: state.tacos.recipe,
})

const mapDispatchToProps = (dispatch: any) => ({
    getRecipe: () => dispatch({ type: tacoActions.FETCH_TACO_RECIPE })
})

export default connect(mapStateToProps, mapDispatchToProps)(Tacos);
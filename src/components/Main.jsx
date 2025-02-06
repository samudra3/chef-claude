import React from 'react'
import Recipe from './Recipe'
import List from './List'
import {getRecipeFromMistral} from './ai'




export default  function Main(){


    const [newlist,listUpdate] = React.useState([

    ])
  const showRecipe = React.useRef(null)
  console.log(showRecipe)




let newvalue= newlist.map((item)=>{
  return  <li key={item}>{item}</li>
})

const [recipe, recipeShower]= React.useState([])
React.useEffect(function(){
    recipe.length!=0?showRecipe.current.scrollIntoView():null;
},[recipe])

async function listGiver(){
    console.log('yes you enter in the listgiver')
    const recipeMarkdown = await getRecipeFromMistral(newlist)

    recipeShower(recipeMarkdown);


}






 function storevalue(formdata){


const newingredient = formdata.get('ingredient');
console.log(newingredient)
listUpdate(oldvalue=>[...oldvalue,newingredient])



}

    return (
        <>
       <main className="main">
       <form action={storevalue} className="ingredient-form" >
            <input name='ingredient' type="text"  placeholder="e.g. oregano" aria-label="Add Ingredient"/>
            <button >Add Ingredient</button>
       </form>
       <List newvalue={newvalue} handler={listGiver}  ref={showRecipe}/>
      { recipe.length!=0 && <Recipe  recipe={recipe} />}


</main>
        </>
    )
}
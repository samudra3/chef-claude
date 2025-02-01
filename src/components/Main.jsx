import React from 'react'
import Recipe from './Recipe'
import List from './List'
import {getRecipeFromMistral} from './ai'




export default  function Main(){


    const [newlist,listUpdate] = React.useState([

    ])




let newvalue= newlist.map((item)=>{
  return  <li key={item}>{item}</li>
})
console.log(newvalue)
const [recipe, recipeShower]= React.useState([""])

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
       <List newvalue={newvalue} handler={listGiver}/>
      { recipe.length!=0 && <Recipe  recipe={recipe} />}


</main>
        </>
    )
}
export default function List(props){

    return (
<>
{ props.newvalue.length>0 && <section>
    <h2>List of the ingredients:</h2>
    <ul>
{props.newvalue}
    </ul>
   {props.newvalue.length>3 && <div className="apicaller">
    <div ref={props.ref}>
    <h3>Ready for the recipe ?</h3>
    <p>Get your recipe from listed ingredients</p>
    </div>
    <button onClick={props.handler} >Get Recipe</button>
    </div>}
    </section>}
</>

    )
}
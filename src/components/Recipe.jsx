import Markdown from 'react-markdown'
export default function Recipe(props) {
    return (
        <>
         <section className='recipe-container' aria-live='polite'>
          <h2>Chef Claude Recommends:</h2>
<Markdown>
{props.recipe}
</Markdown>



    </section>
        </>
    )
}
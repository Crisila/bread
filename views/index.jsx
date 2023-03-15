const React = require('react')
const Default = require('./layouts/Default')

function Index({breads, title}) {
    return (
        <Default title={title}>
            {/* <h2>Index Page</h2>
            <p>My favorite is {breads[1].name} bread!</p> */}

            <ul>
                {
                    // the first arg represents bread.js
                    // the second arg is the referece to the index its based [0, 1, 2, 3]
                    breads.map((bread, index) => {
                        return(
                        <li key={index}>
                            <a href={`/breads/${index}`}>{bread.name}</a>
                        </li>)
                    })
                }
            </ul>
            <div className="newButton">
                <a href="/breads/new">
                    <button>Add a new bread</button>
                </a>
            </div>
            

        </Default>
    )
}

module.exports = Index


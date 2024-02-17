// export function Person() {
//     return (
//         <div>
//             <h2>Name: Chana</h2>
//             <h2>Age: 10</h2>
//         </div>
//     )
// }

// import React from "react";

// export function Person() {
//     return (
//         <React.Fragment>
//             <h2>Name: Chana</h2>
//             <h2>Age: 10</h2>
//         </React.Fragment>
//     )
// }

//props = properties
//הפרופס יכיל את כל המאפיינים שנכתוב לקומפוננטה בעת טעינה
export function Person(props) {

    //props = { name:'Sara', age=90 }

    const { name, age, message } = props

    return <>
        <h2>~~~~~~~~~~~~~~~~~~</h2>
        <h2>Name: {name}</h2>
        {/* <h2>Name: {props.name}</h2> */}
        <h2>Age: {age}</h2>
        {/* <h2>Age: {props.age}</h2> */}
        {message && <h2>{message}</h2>}
        <h2>~~~~~~~~~~~~~~~~~~</h2>
    </>
}

Person.defaultProps = {
    name: 'Annonymous',
    age: 0
}
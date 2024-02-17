export function Person(props) {

    const { name, age } = props

    return <>
        <h2>~~~~~~~~~~~~~~~~~~</h2>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>~~~~~~~~~~~~~~~~~~</h2>
    </>
}
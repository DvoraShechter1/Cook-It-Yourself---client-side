import { useState } from "react"

const InputName = (props) => {

    const { name } = props

    return <>
        <input placeholder={'input name'} onBlur={(e) => name(e.target.value)}></input>
    </>
}

const SelectCountry = (props) => {

    const { list, country } = props

    return <>
        <select onChange={(e) => country(e.target.value)}>
            <option selected disabled>select country</option>
            {list.map((x, i) => <option key={i}>{x}</option>)}
        </select>
    </>
}

export const Main = () => {

    const [name, setName] = useState("Annonymous")
    const [selectedCountry, setSelectedCountry] = useState()
    const [selectedCity, setSelectedCity] = useState()

    const dictionary = {
        Israel: ["Jerusalem", "Haifa", "Jaffo", "Tel-Aviv", "Ashdod"],
        England: ["London", "Grinits", "GoldesGrin", "Bermangheim", "Mantchester"],
        France: ["Paris", "Merssei", "Verssai"],
        Switserland: ["Zirich", "Beren", "Dabos"],
    }

    const countries = Object.keys(dictionary)
    const cities = dictionary[selectedCountry]

    return <>
        <h1>{name}</h1>
        {name == "Annonymous" && <InputName name={setName}></InputName>}
        {name != "Annonymous" && <SelectCountry list={countries} country={setSelectedCountry}></SelectCountry>}
        
        {selectedCountry && <h2>{selectedCountry}</h2>}
    </>
}
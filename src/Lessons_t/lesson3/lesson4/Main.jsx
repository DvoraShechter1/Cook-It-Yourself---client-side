import { Person } from "./Person";

//העשרה
export const Main = () => {

    const list = [
        { firstname: "Efrat", age: 5, sweets:["", "", ""] },
        { firstname: "Miriam", age: 10 },
        { firstname: "Avigail", age: 8 },
        { firstname: "Ruth", age: 12 },
        { firstname: "Nechama", age: 7 }
    ]

    const name = 'Esti'

    const StringFunc = () => {
        console.log("Hello " + name + "!");
        console.log('Hello ' + name + '!');
        console.log(`Hello ${name}!`);
    }

    const JsonFunc = () => {

        //לולאה שעוברת על המערך ומדפיסה את האיברים
        for (let index = 0; index < list.length; index++) {
            console.log(list[index]);
        }
        //foreach - כנ"ל
        //אבל אי אפשר לשלוט על המעבר - לדלג וכו
        list.forEach(x => {
            console.log(x);
        })

        for (let i = 0; i < list.length; i++) {
            //דרכים להדפסת ערך מאפיין כאשר שם המפתח ידוע
            console.log(list[i].name);
            console.log(list[i]["name"]);
            //מעבר על מפתחות של אובייקט
            for (const key in list[i]) {
                //כאשר שם המפתח אינו ידוע
                //כאשר רוצים לעבור על כל המפתחות באובייקט
                console.log(list[i][key]);
                //שרשור
                console.log(`${key}: ${list[i][key]}`);
            }
        }
    }

    return <>
        <h1>Hello {name}!</h1>
        {/* {StringFunc()}
        {JsonFunc()} */}
        {/* {list.map(x => <Person key={x.firstname} name={x.firstname} age={x.age}></Person>)} */}
        {list.map((x, i) => <Person key={i} name={x.firstname} age={x.age}></Person>)}
    </>
}
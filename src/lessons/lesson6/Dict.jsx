

const dict = {
    "potato" : 'תפוח אדמה',
    'carrot' : 'גזר',
    'onion' : 'בצל',
    'tomato' : 'עגבניה',
    'cucumber' : 'מלפפון',
    'pepper' : 'פלפל'
}
const s = {
    backgroundColor: 'yellow'
}
const Move = (event) =>{
    debugger
    // console.log(event.srcElement)
    var a = document.getElementById(event)
    console.log(a)
    // a.setAttribute("style",s)
}

export const Dict = () => {
    return<>
        {Object.keys(dict).map((x, i) =><h2 id={x} key={i} onMouseOver={Move({x})} className={i} data-v={x}>{x}</h2>)}
        <br></br>
        {Object.values(dict).map((x, i) => <h2 id={x} key={i} className={i}>{x}</h2>)}
        {/* {Object.map((key,value)=><h2 id={key}>{value}</h2>)} */}
    </>
}
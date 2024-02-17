export const Home=()=>{
    const arr=
        [`${process.env.PUBLIC_URL}/image/lesson7-8/home/תמונה1.png`,
        `${process.env.PUBLIC_URL}\\image\\lesson7-8\\home\\תמונה2.png`,
        `${process.env.PUBLIC_URL}\\image\\lesson7-8\\home\\תמונה3.png`
        ]
        console.log('home')
    return<>
        {arr.map((x,i)=><img key={i} src={x}></img>)}
    </>
}
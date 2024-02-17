// export const Details = ()=>{
//     return<h1>!!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>
// }
import '../css/details.css'
export const Details = (r) => {


    function Hide() {
        let divInfo = document.getElementById('popupdiv');
        if (divInfo.style.display == 'block') {
            divInfo.style.display = 'none';
        } else {
            divInfo.style.display = 'block';
        }
    }
    let recipe = r.r
    console.log(recipe)

    // {
    //     "name": r.name,
    //     "pic": r.pic,
    //     "preparationTime": r.preparationTime,
    //     "userName": r.firstName + " " + r.lastName,
    //     "categoryName": r.categoryName,
    //     "levelName": r.levelName,
    //     "note": r.note,
    //     "instructions": r.instructions
    // }

    return <>

        <div id="popupdiv" style={{ display: 'none' }}>
            <div class="backgroundPopUp" onClick={Hide}>
            </div>
            <div class="contentPopUp">
                <input type="button" class="buttonInPopUp" value="X" onClick={Hide} />
                <div class="content">
                    <h2>{recipe.name}</h2>
                    <p>{recipe.preparationTime}</p>

                </div>

            </div>

        </div>

    </>

}
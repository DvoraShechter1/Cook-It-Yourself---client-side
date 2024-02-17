import './tryyyyy.css'
export const Tryyyyyyyyy = () => {
    function Show() {
        let divInfo = document.getElementById('popupdiv');
        if (divInfo.style.display == 'none') {
            divInfo.style.display = 'block';
        } else {
            divInfo.style.display = 'none';
        }
        return recipe.name

    }

    function Hide() {
        let divInfo = document.getElementById('popupdiv');
        if (divInfo.style.display == 'block') {
            divInfo.style.display = 'none';
        } else {
            divInfo.style.display = 'block';
        }
    }
    let recipe =
    {
        "name": 'עוגת שוקולד',
        "pic": "",
        "preparationTime": "5",
        // "userId": currentUser.id,
        "userName": currentUser.firstName + " " + currentUser.lastName,
        // "categoryId": event.target[5].key,
        "categoryName": event.target[5].value,
        // "levelId": event.target[6].key,
        "levelName": event.target[6].value,
        "note": event.target[1].value,
        "instructions": event.target[4].value
    }

    return <>

        <input type="button" class="buttonForPopUp" value="פרטים נוספים" onClick={Show} />

        <div id="popupdiv" >
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
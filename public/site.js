const submitText = async () => {
    const data = await document.getElementById("ingredients").value;

    const jsonData = JSON.stringify({data: data})
    
    await fetch('/search', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "origin"
            },
            body: jsonData
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            populateResults(response);
        })
    }

const populateResults = async (response) => {
    // clear input box
    document.getElementById('ingredients').value = '';
    
    const allergens = response.allergens
    const risks = response.risks
    document.getElementById('safeText').innerHTML = response.safe ? 'Allergen free!' : 'Potential allergen(s) found:';

    const list = document.getElementById('allergenText');

    // clean list of previous search's allergens
    if (list.firstChild) {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    // populate new list of allergens
    if (!response.safe) {
        for (i = 0; i < allergens.length; i++) {
            let li = document.createElement('li');
            li.innerText = allergens[i];
            list.appendChild(li);
        }
    };

    // populate any possible allergens
    if (risks.length > 0) {
        for (i = 0; i < risks.length; i++) {
            let li = document.createElement('li');
            li.innerText = `${risks[i][0]} may be related to ${risks[i][1]}`;
            list.appendChild(li);
        }
    }
}

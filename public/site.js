const submitText = async () => {
  const data = await document.getElementById("ingredients").value;

  const jsonData = JSON.stringify({ data: data });
  try {
    await fetch("/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "origin",
      },
      body: jsonData,
    })
      .then(
        (response) => {
          return response.json();
        },
        (error) => {
          throw new Error(error.message || "Error searching data");
        }
      )
      .then((response) => {
        populateResults(response);
      });
  } catch (error) {
    alert(error.message || "Unspecified error");
  }
};

const populateResults = async (response) => {
  try {
    // clear input box
    document.getElementById("ingredients").value = "";

    const allergens = response.allergens;
    const risks = response.risks;
    document.getElementById("safeText").innerHTML = response.safe
      ? "Allergen free!"
      : "Potential allergen(s) found:";

    const list = document.getElementById("allergenText");

    // clean list of previous search's allergens
    if (list.firstChild) {
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
    }
    // populate new list of allergens
    if (!response.safe) {
      for (i = 0; i < allergens.length; i++) {
        let li = document.createElement("li");
        li.innerText = allergens[i];
        li.className = "danger";
        list.appendChild(li);
      }
    }

    // populate any possible allergens
    if (risks.length > 0) {
      for (i = 0; i < risks.length; i++) {
        let li = document.createElement("li");
        li.innerText = `${risks[i][0]} may be related to ${risks[i][1]}`;
        li.className = "warn";
        list.appendChild(li);
      }
    }
  } catch (error) {
    throw new Error(error.message || "Error populating results to HTML");
  }
};

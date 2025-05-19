function getDocuments() {
    fetch("/api/documents")
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            // TODO: render elements, do stuff
        })
}

(async function() {
    document.addEventListener('click', async () => {
        // The URL of the bootstrap.css distributed version
    const CSS_URL = `https://raw.githubusercontent.com/twbs/bootstrap/main/dist/css/bootstrap.css`;
    
    const resp = await fetch(CSS_URL);
    const css = await resp.text();

    const sheet = document.createElement('style')
    sheet.innerHTML = css;
    sheet.id = "bootstrap-css";
    document.body.appendChild(sheet);

    const sheetRef = Array(...document.getElementsByTagName("style")).find(
        (a) => a.attributes.id && a.attributes.id.value == "bootstrap-css"
    );
    const results = [];
    for (let i = 0; i < sheetRef.sheet.cssRules.length; i++) {
        const sheet = sheetRef.sheet ? sheetRef.sheet : sheetRef.styleSheet;
        if (sheet.cssRules.length > 0) {
            //console.log(sheet.cssRules[i]);
            sheet.cssRules[i].selectorText && results.push(sheet.cssRules[i].selectorText);
            //console.log(sheet.cssRules[i].cssText);
        }
    }

    console.log(`===== rules: ${results.length} =====`)
    //results.sort().map(a => console.log(a));
    results.map(a => console.log(a));
   
    // Copy the text inside the text field
    navigator.clipboard.writeText(results.join('\n'));

    // Alert the copied text
    alert(`Copied the text: ${results.length} rules`);
    })
    
    alert('Please click the document to start.')
})();
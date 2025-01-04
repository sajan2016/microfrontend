const eventhandlersetting = {
    addnitrogen: (formvalues) => {
        let sum = 0;
        ["phosphorous", "potassium", "calcium"].forEach((d) => {
            console.log("formvalues", d, formvalues, formvalues[d])
            if (formvalues[d]) {
                sum += parseFloat(formvalues[d]);
            }
        })
        return sum;
    },
    addwaterevent: (formvalues) => {
        let arr = [];
        const totalevent = formvalues["waterevent"] ? parseInt(formvalues["waterevent"]) : 0;
        const arrwater = formvalues["watereventarray"];
        let i = 0;
        while (i < totalevent) {
            if (arrwater && i < arrwater.length) {
                arr.push(arrwater[i])
            } else {
                arr.push({})
            }
            i += 1;
        }
        return arr;
    }
}

export { eventhandlersetting }
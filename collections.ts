const ceos = ["Taylor,S", "Jonas,B", "Michael,J", "Michael,J"];

const updatedECEOS = ceos.map(ceo => ceo.replace(",", " "));

console.log('Here we have the Array after de Replace method: ', updatedECEOS);

const formatedCeos = new Set(updatedECEOS);

console.log('And here we have the Set collection with the names just once: ', formatedCeos);



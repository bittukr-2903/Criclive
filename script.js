async function matchupdates(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=b19f2ebe-1c62-4205-bb8e-692c42f422f1&offset=0")
     
    .then(data=> data.json())
    .then(data=> {
        if(data.status != "success") return;
        const matcheslist = data.data;
        if(!matcheslist) return [];
        const relevantdata =matcheslist.map(match=>`${match.name},${match.status}`);

        console.log({relevantdata});

        document.getElementById("matches").innerHTML = relevantdata.map(match => `<li>${match}</li>`).join('');
        return relevantdata;
    })
    .catch(e => console.log(e));
}
matchupdates();
async function matchscorer(){
    return await fetch("https://api.cricapi.com/v1/cricScore?apikey=b19f2ebe-1c62-4205-bb8e-692c42f422f1")
     
    .then(data=> data.json())
    .then(data=> {
        if(data.status != "success") return;
        const matcheslist = data.data;
        if(!matcheslist) return [];
        const relevantdata =matcheslist.map(match=>`${match.name},${match.status}`);

        console.log({relevantdata});

        document.getElementById("matches").innerHTML = relevantdata.map(match => `<li>${match}</li>`).join('');
        return relevantdata;
    })
    .catch(e => console.log(e));
}

//matchscorer();

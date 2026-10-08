async function searchSite(q){return (await fetch('/api/search?q='+encodeURIComponent(q))).json()}

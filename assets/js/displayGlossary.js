function displayGlossary(d, successData){
  // TODO: to really get a sorted glossary after 200 entries, we really need to do a "FetchALL" 
  // that gets  all the annotations in batches of 200 and then alphabetizes the results

  const refreshResponse = d;
  localStorage.setItem("hypothesis.oauth.hypothes%2Eis.token", JSON.stringify(refreshResponse));
  authorizationToken = refreshResponse.access_token;
  const url = "https://api.hypothes.is/api/search";
  const data = { tag: successData.tag, group: "i8V1nADX", limit: 200, offset: 0 };
  $.ajax({
    type: "POST",
    dataType: "json",
    url: url,
    data: data,
    beforeSend: function(xhr){
        xhr.setRequestHeader("Authorization", "Bearer " + authorizationToken);
      },
    success: success, 
    error: error
  });
}
function error(d){
  console.log("error", d);
}
function success(d){
  console.log(d);
    const rows = d.rows;
    const newRows = rows.map((r) => {
      const terms = r.target[0].selector.filter((i) => (i.type === "TextQuoteSelector"));
      const term = terms[0].exact;
      const link = "https://hyp.is/" + r.id;
      return {
        term: term, 
        link: link,
        text: r.text
      }
    });
    const sorted_rows = newRows.sort((a, b) => (a.term > b.term) ? 1 : -1);
    sorted_rows.forEach((r) => {
      $("#result").append("<p>" + r.term + ": <a href='" + r.link + "'>" + r.text + "</a>");
    });
}
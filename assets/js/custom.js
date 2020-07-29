function addLink(value, trailing){
  console.log("test");
  const link = value.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;\s]*[-A-Z0-9+&@#/%=~_|])/ig);
  let mainlink = '';
  if (link){
    const firstString = value.split(link[0])[0];
    let strings = [firstString];
    link.forEach((l, i) => {
      mainlink = encodeURI(l);
      const linkComponent = "";
      strings.push(linkComponent);
      const afterString = value.split(l)[1];
      const prunedString = afterString.split(link[i+1])[0];
      strings.push(prunedString);
    });
    // pop to remove trailing period
    strings.pop()
    if (trailing){
      strings.push(trailing)
    }
    const finalString = "<a class='biblink' href='" + mainlink + "' target='_blank'>" + strings.join(" ") + "</a>";
    return finalString;
  }
}
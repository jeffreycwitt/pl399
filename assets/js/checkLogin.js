function checkLogin(success, successData){
  const savedInfo = localStorage.getItem("hypothesis.oauth.hypothes%2Eis.token") ? JSON.parse(localStorage.getItem("hypothesis.oauth.hypothes%2Eis.token")) : "";
  let authorizationToken = savedInfo ? savedInfo.access_token : '';
  let refreshToken = savedInfo ? savedInfo.refresh_token : '';
    
  if (!authorizationToken){
    window.location = '/pl339/login';
  }
  else{
    isLoggedIn(savedInfo); //1
  }
  
  function isLoggedIn(savedInfo){ // 2
  const url = "https://hypothes.is/api/profile";  
  $.ajax({
    type: "GET",
    dataType: "json",
    url: url,
    beforeSend: function(xhr){
        xhr.setRequestHeader("Authorization", "Bearer " + savedInfo.access_token);
      },
    success: function(d){
      if (!d.userid){
        tryRefresh(savedInfo.refresh_token) // 3a
      }
      else {
        return success(savedInfo, successData) // 3b
      }
    },
  })
}

//3a
function tryRefresh(refreshToken){
  const url = "https://hypothes.is/api/token";
  const data = "grant_type=refresh_token&refresh_token=" + refreshToken
  $.ajax({
    type: "POST",
    url: url,
    data: data,
    beforeSend: function(xhr){
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      },
    success: function(d){
      success(d, successData);
    }, //3b comes with new credentials as direct data response
    error: function(){
      window.location = '/pl339/login'; //3c
    }
  });
}


}
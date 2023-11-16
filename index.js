// var myHeaders = document.getElementById("feeds")
// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// var requestOptions = {
//     method: "get",
//     headers: myHeaders,
//     redirect: "follow",
    
// };

fetch("https://v1.nocodeapi.com/mluckyali/instagram/eAytyKYLbGSsUNkd?limit=100").then(res=>
{
   return res.json()
})
.then(data => {
    console.log(data)
})
  
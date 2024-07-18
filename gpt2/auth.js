const clientId = "c76a6ecc-8cde-4841-9a52-789b7ebb8522";
const redirectUri = "http://localhost:5500/logged.html";
const scope = "openid profile https://ads.microsoft.com/msads.manage offline_access";

const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${clientId}&scope=${scope}&response_type=code&redirect_uri=${redirectUri}&state=ClientStateGoesHere&prompt=login`;


// document.getElementById("btn-login").addEventListener("click", () => {
//     window.location.href = authUrl;
// })

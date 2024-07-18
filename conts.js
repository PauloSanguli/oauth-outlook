const CLIENT_ID = "64e30a37-a957-447b-99c8-426881b96ccb"
const SECRET_ID = "f6ccf7aa-283d-46ce-8014-ce216fb46abf"
const LOCATARY_ID = "f8cdef31-a31e-4b4a-93e4-5f571e91255a"
const SCOPE = "offline_access%20Mail.ReadWrite%20Mail.send"
const REDIRECT_URI = "http://localhost:5500/logged"

const URI_AUTH = `https://login.microsoftonline.com/${LOCATARY_ID}/oauth2/v2.0/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri='${REDIRECT_URI}'&response_mode=query&scope=${SCOPE}`

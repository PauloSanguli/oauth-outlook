// authConfig.js
const msalConfig = {
    auth: {
      clientId: "c76a6ecc-8cde-4841-9a52-789b7ebb8522", // Replace with your application ID
      authority: "https://login.microsoftonline.com/common/",
    //   authority: "https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a", // Replace with your tenant info
      redirectUri: 'http://localhost:5500/logged.html', // You must register this URI on App Registration
      navigateToLoginRequestUrl: true, // If "true", will navigate back to the original request location before processing the auth code response
    },
    cache: {
      cacheLocation: 'sessionStorage', // Configures cache location
      storeAuthStateInCookie: false, // set this to true if you have to support IE
    },
    system: {
      loggerOptions: {
        loggerCallback: (level, message, containsPii) => {
          if (containsPii) {
            return;
          }
          switch (level) {
            case msal.LogLevel.Error:
              console.error(message);
              return;
            case msal.LogLevel.Info:
              console.info(message);
              return;
            case msal.LogLevel.Verbose:
              console.debug(message);
              return;
            case msal.LogLevel.Warning:
              console.warn(message);
              return;
          }
        },
      },
    },
  };
  
  const loginRequest = {
    scopes: [
      'https://graph.microsoft.com/default',
      'api://c76a6ecc-8cde-4841-9a52-789b7ebb8522/Employee.Write.All',
      'api://c76a6ecc-8cde-4841-9a52-789b7ebb8522/Employee.Read.All',
      'api://c76a6ecc-8cde-4841-9a52-789b7ebb8522/profile',
      'api://c76a6ecc-8cde-4841-9a52-789b7ebb8522/offline_acces',
      'api://c76a6ecc-8cde-4841-9a52-789b7ebb8522/email',
      'api://c76a6ecc-8cde-4841-9a52-789b7ebb8522/Mail.ReadWrite',
      'api://c76a6ecc-8cde-4841-9a52-789b7ebb8522/Mail.Read'
    ]
    // scopes: [
    //     'User.Read',
    //     'offline_access',
    //     'email',
    //     'profile'
    //   ]
  };
  
 
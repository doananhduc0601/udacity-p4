// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'nmpi1pdex8'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-oewz2xmqqgpj0x25.us.auth0.com',            // Auth0 domain
  clientId: '2S0I9shmL6UoHdwrKGOz3hdHNFuCKjAN',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}

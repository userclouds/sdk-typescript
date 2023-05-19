import AuthZClient from './authz/client';
import UserstoreClient from './userstore/client';

const getClientCredentialsToken = async (
  tenantUrl: string,
  clientId: string,
  clientSecret: string
): Promise<string> => {
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
    audience: tenantUrl,
  });

  return fetch(`${tenantUrl}/oidc/token`, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body,
  })
    .then((res) => res.json())
    .then((json) => json.access_token);
};

export { AuthZClient, UserstoreClient, getClientCredentialsToken };

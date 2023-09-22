export interface IRegister {
  username: string;
  email: string;
  password: string;
  rememberme: Boolean;
  renderedLocale: string;
  voodin_dc_partner: Boolean;
  voodin_partner_key: string;
  voodin_partner_api_url: string;
}
let voodin_username: string;
export function register({
  username,
  email,
  password,
  rememberme,
  renderedLocale,
  voodin_dc_partner,
  voodin_partner_key,
  voodin_partner_api_url,
}: IRegister) {
  voodin_username = username;
  console.log(`
   
    New Voodin Projects Partner Created

    API ${voodin_partner_api_url}
   `);
}

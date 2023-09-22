import { describe, it, expect } from "bun:test";
import { register } from "../src";

register({
  username: "Nego",
  email: "nego@voodin.org",
  password: "",
  rememberme: true,
  renderedLocale: "Baku/Azerbaijan",
  voodin_dc_partner: true,
  voodin_partner_key: "voodin_inSksk99339odkkdo",
  voodin_partner_api_url: "client-api.voodin.org",
});

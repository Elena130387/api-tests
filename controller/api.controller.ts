import got, { Method } from "got/dist/source";
import { loadApiSpec, validate } from "../helper/validator";

export const getRestBody = (
  method: Method,
  obj: any,
  paramsString = "",
  headers: any = {},
  allowGetBody = true
) => ({
  rejectUnauthorized: false,
  headers,
  searchParams: new URLSearchParams(paramsString),
  method,
  json: obj,
  allowGetBody,
});
export const getRestBodyImg = (
  method: Method,
  body: any,
  allowGetBody = true
) => ({
  rejectUnauthorized: false,
  method,
  body,
  allowGetBody,
});

export const callRestAndCheckSchema = async (
  baseUrl: string,
  getRestBody: any,
  swaggerUrl: string,
  isValidate = false
) => {
  const response = await got(`${baseUrl}`, { ...getRestBody });
  const body = JSON.parse(response.body);

  if (isValidate) {
    const apiSpec = await loadApiSpec(swaggerUrl);
    const schema =
      apiSpec.paths["/pet/{petId}"]["get"]["responses"]["200"]["schema"]; // like example
    validate(schema, body);
  }

  return body;
};

export const callRestApi = async (baseUrl: string, getRestBody: any) => {
  try {
    const response = await got(`${baseUrl}`, { ...getRestBody });
    return response.body ? JSON.parse(response.body) : response;
  } catch (error) {
    console.log(error);
  }
};

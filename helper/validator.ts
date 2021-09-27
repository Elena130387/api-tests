import SwaggerParser from "@apidevtools/swagger-parser";
import Ajv from "ajv";

export const loadApiSpec = async (url: string | undefined) =>
  SwaggerParser.dereference(url);

export const validate = (schema: any, body: any) => {
  const ajv = new Ajv({
    allErrors: true,
    verbose: true,
    formats: {
      double: "[+-]?\\d*\\.?\\d+",
      int32:
        /^(-?\d{1,9}|-?1\d{9}|-?20\d{8}|-?21[0-3]\d{7}|-?214[0-6]\d{6}|-?2147[0-3]\d{5}|-?21474[0-7]\d{4}|-?214748[012]\d{4}|-?2147483[0-5]\d{3}|-?21474836[0-3]\d{2}|214748364[0-7]|-214748364[0-8])$/,
      int64: /^\d+$/,
    },
  });
  const validate = ajv.compile(schema);
  const valid = validate(body);
  if (!valid) {
    throw new Error(
      `Invalid schema: ${JSON.stringify(
        { errors: validate.errors, response: body },
        null,
        2
      )}`
    );
  }
};

export const prettyJSON = (obj: any) => JSON.stringify(obj, null, 2);

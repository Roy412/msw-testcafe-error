import { graphql as mswGraphql, rest } from "msw";
import _ from "lodash";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { jsonToSchema } from "@walmartlabs/json-to-simple-graphql-schema/lib";
import { graphql } from "graphql";

// declare const hammerhead: number;
declare global {
  interface Window {
    "%hammerhead%": {
      utils: {
        url: {
          getProxyUrl: (url: string) => string;
        };
      };
    };
  }
}

export function getEndpointsFor(data?: any): any {
  if(!data) {
    return [];
  }

  const schemaString = jsonToSchema({
    baseType: "Query",
    jsonInput: JSON.stringify(data),
  });

  const schema = makeExecutableSchema({ typeDefs: schemaString.value });
  const handlers: any[] = [];
  _.forEach(data, (value: any, key: string) => {
    handlers.push(
      //@ts-ignore https://github.com/mswjs/msw/issues/296
      // mswGraphql.query(`Get${_.startCase(key)}`, async (req, res, ctx) => {
      //   // console.log
      //
      //   //@ts-ignore https://github.com/mswjs/msw/issues/297
      //   const result = await graphql(schema, req.body?.query, db);
      //
      //   return res(ctx.data(result.data as any));
      // }),
      rest.get(`/${key}`, (req, res, ctx) => {
        return res(ctx.json(data![key]));
      })
    );
  });
  return handlers;
}

import { createGqlShape } from "../../../controller/graphql/shape";
import { largeCoordinates } from "../../../requests/graphql/createShape";
import { messages } from "../../../controller/shape/shape-controller";

describe("create shape more 50 000 km", function () {
  it("successfully get error to large shape", async function () {
    const response = await createGqlShape(
      largeCoordinates,
      "large object > 50000km"
    );
    const { body, status } = response.errors[0].extensions.response;

    expect(body.message).toContain(messages.toLargeShape);
    expect(status).toEqual(500);
  });
});

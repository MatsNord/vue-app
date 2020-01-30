/* eslint-disable no-undef */
import * as User from "@/api/user";

describe("User API", () => {
  it("returns a user with correct id", () => {
    return User.get(1).then(data => {
      const user = data[0];
      expect(user.id).toBe(1);
    });
  });
  it("returns a user that match user object", () => {
    return User.get(2).then(data => {
      const user = data[0];
      expect(user).toMatchObject({
        id: 2,
        name: "Assar",
        address: "Assarsund"
      });
    });
  });
});

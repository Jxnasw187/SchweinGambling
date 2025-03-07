import { authenticator } from "~/utils/auth.server";

export const action = async ({ request }) => {
  return authenticator.authenticate("user-auth", request, {
    successRedirect: "/casino",
    failureRedirect: "/login",
  });
};

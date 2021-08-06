import { object, string, ref } from "yup";

export const createUserSchema = object({
    body: object({
      phone_number: string()
        .required("Phone Number is required"),
      password: string()
        .required("Password is required")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters."),
    }),
});

export const createUserSessionSchema = object({
  body: object({
    phone_number: string()
      .required("Phone Number is required"),
    password: string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters."),
  }),
});
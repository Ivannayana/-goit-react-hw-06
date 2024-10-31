import * as Yup from "yup";

export const profileSchemas = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string().required("Number is required!"),
});

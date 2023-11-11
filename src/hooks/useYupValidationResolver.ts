import { useCallback } from "react";
import { AnyObject, ObjectSchema } from "yup";

const useYupValidationResolver = (
  validationSchema: ObjectSchema<
    {
      [x: string]: any;
    },
    AnyObject,
    {
      [x: string]: any;
    },
    ""
  >,
) =>
  useCallback(
    async (data: any) => {
      try {
        console.log("catch errors");

        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        console.log("catch errors");
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {},
          ),
        };
      }
    },
    [validationSchema],
  );

export default useYupValidationResolver;

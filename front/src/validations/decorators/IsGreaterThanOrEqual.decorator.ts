/* eslint-disable @typescript-eslint/no-explicit-any */
import { registerDecorator, ValidationOptions } from "class-validator";

// @Param property: Put the name of a property from the dto or a custom date IN STRING FORMAT
export function IsGreaterThanOrEqual(
  property: string,
  validationOptions?: ValidationOptions
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: "IsGreaterThanOrEqual",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: any) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue =
            args.object[relatedPropertyName] || relatedPropertyName;
          return value > relatedValue || value === relatedValue;
        },
      },
    });
  };
}

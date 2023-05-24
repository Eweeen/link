import { validate, ValidationError } from "class-validator";

export default abstract class BaseModel {
  public async validateModel() {
    const result = await validate(this);
    return this.setError(result);
  }

  public setError(result: ValidationError[]): Record<string, string> {
    const propBag = {};
    for (const error of result) {
      for (const key in error.constraints) {
        if (Object.prototype.hasOwnProperty.call(error.constraints, key)) {
          (propBag as Record<string, unknown>)[error.property] =
            error.constraints[key];
        }
      }
    }

    return propBag;
  }
}

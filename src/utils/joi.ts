import Joi from "joi";
import { LoginInputType } from "@/types/authTypes";

class JoiUtils {
  private loginDataSchema: Joi.ObjectSchema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().min(5).max(20).required().label("Password"),
  });

  public validateLoginData(loginData: LoginInputType) {
    const { error, value } = this.loginDataSchema.validate(loginData);
    if (error) {
      return { true: true, error: error.details[0].message };
    }
    if (value) {
      return false;
    }
    return false;
  }
}

export const joiUtilObject = new JoiUtils();

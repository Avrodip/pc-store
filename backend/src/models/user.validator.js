const joi = require("joi");
const apiResponse = require("../helpers/apiResponse");

const validation = joi.object({
    firstName: joi.string().alphanum().min(3).max(25).trim(true).required().empty().messages({
        "string.empty": `{#key} cannot be an empty field`,
        "string.alphanum": `{#key} must only contain alpha-numeric characters`,
        "any.required": `{#key} is a required field`,
        "string.min": `{#key} length must be at least {{#limit}} characters long`,
        "string.max": `{#key} length must be less than or equal to {{#limit}} characters long`,
    }),
    lastName: joi.string().alphanum().min(3).max(25).trim(true).required().empty().messages({
        "string.empty": `{#key} cannot be an empty field`,
        "string.alphanum": `{#key} must only contain alpha-numeric characters`,
        "any.required": `{#key} is a required field`,
        "string.min": `{#key} length must be at least {{#limit}} characters long`,
        "string.max": `{#key} length must be less than or equal to {{#limit}} characters long`,
    }),
    email: joi.string().email().empty().trim(true).required().messages({
        "string.empty": `{#key} cannot be an empty field`,
        "any.required": `{#key} is a required field`,
        "string.email": `{#key} must be a valid email`,
    }),
    mobileNumber: joi.string().length(10).pattern(/[6-9]{1}[0-9]{9}/).empty().required().messages({
        "string.empty": `{#key} cannot be an empty field`,
        "any.required": `{#key} is a required field`,
        "string.length": `{#key} length must be {{#limit}} characters long`,
    }),
    password: joi.string().min(6).trim(true).required().empty().messages({
        "string.empty": `{#key} cannot be an empty field`,
        "any.required": `{#key} is a required field`,
        "string.min": `{#key} length must be at least {{#limit}} characters long`,
    })
});

const userValidation = async (req, res, next) => {

    const payload = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.emailID,
        mobileNumber: req.body.contactNumber.toString(),
        password: req.body.password,
    };



    const { error } = validation.validate(payload);

    console.log("During validation : ", error)

    if (error) {
        console.log("Executed")
        return apiResponse.notAcceptableRequest(res, `${error.message}`);
    } else {
        next();
    }
}

module.exports = userValidation;
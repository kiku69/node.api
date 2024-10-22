import Joi from "joi";

export const bookSchema = Joi.onject({
    title: Joi.string().request().messages({
        'string.emty': 'Title is required',
        'any.required': 'Title is required'
    }),
    
})

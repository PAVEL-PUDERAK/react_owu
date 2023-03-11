import Joi from "joi";

const carValidator = Joi.object({
    brand:Joi.string().min(2).max(20).required().messages({
            'string.empty':'Вкажіть назву машини',
            'string.min': 'Повинно бути не менше двох символів',
            'string.max': 'Не більше 20 символів',
            'string.required': 'Це поле обовязкове',
        }),
        price:Joi.number().min(2).max(1000000).required().messages({
            'number.empty': 'Вкажіть суму',
            'number.min' : 'Мінімальна сума 2',
            'number.max' : 'Сума не більша за 1000000',
            'number.required': 'Це поле обовязкове'
        }),
        year:Joi.number().integer().min(1990).max(new Date().getFullYear()).required().messages({
            'number.min' : 'Машина не може бути молодша 1990 року',
            'number.max' : 'Не може бути більшим поточного року',
            'number.empty' : 'Вкажіть рік',
            'number.required' : 'Обовязкове поле',

        }),


});

export {carValidator};

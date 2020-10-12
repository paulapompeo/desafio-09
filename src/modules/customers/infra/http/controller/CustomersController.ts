import { Request, Response } from 'express';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

import { container } from 'tsyringe';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    // instanciar o service + injecao de dependencias
    const createCustomer = container.resolve(CreateCustomerService);

    // chamar um service que vai retornar um customer
    const customer = await createCustomer.execute({
      name,
      email,
    });

    return response.json(customer);
  }
}

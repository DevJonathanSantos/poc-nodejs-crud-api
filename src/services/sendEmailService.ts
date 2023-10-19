import { SES, } from 'aws-sdk';
import { SendEmailResponse } from 'aws-sdk/clients/ses';

export default class SendEmailService {
    private client: SES

    constructor() {
        this.client = new SES({
            region: 'us-east-2',
        });
    }

    async run(): Promise<SendEmailResponse> {
        return await this.client.sendEmail(
            {
                Source: 'jojortd0@gmail.com',
                Destination: {
                    ToAddresses: ['kawara9618@mugadget.com']
                },
                Message: {
                    Subject: {
                        Data: 'New Hello World'
                    },
                    Body: {
                        Text: {
                            Data: 'Envio feito com sucesso'
                        }
                    }
                },
            }).promise();
    }
}
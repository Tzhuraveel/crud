import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: 'Example field "Timofii"' })
  firstName: string;

  @Field({ description: 'Example field "Zhuravel"' })
  lastName: string;

  @Field({ description: 'Example field "qwerqwer"' })
  password: string;
}

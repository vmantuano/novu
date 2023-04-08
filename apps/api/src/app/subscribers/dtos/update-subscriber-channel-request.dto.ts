import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsObject, IsString } from 'class-validator';
import { ChatProviderIdEnum, PushProviderIdEnum } from '@novu/shared';
import { ChannelCredentials } from '../../shared/dtos/subscriber-channel';

export class UpdateSubscriberChannelRequestDto {
  @ApiProperty({
    enum: { ...ChatProviderIdEnum, ...PushProviderIdEnum },
    description: 'The provider identifier for the credentials',
  })
  @IsString()
  @IsDefined()
  providerId: ChatProviderIdEnum | PushProviderIdEnum;

  @ApiProperty({
    description: 'Credentials payload for the specified provider',
  })
  @IsDefined()
  @IsObject()
  credentials: ChannelCredentials;
}

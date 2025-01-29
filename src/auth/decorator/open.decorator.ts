import { SetMetadata } from '@nestjs/common';

export const IS_OPE_KEY = 'isOpen';
export const Open = () => SetMetadata(IS_OPE_KEY, true);

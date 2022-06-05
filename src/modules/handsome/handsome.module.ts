import { Module } from '@nestjs/common';

const HANDSOME_HAO = {
  provide: 'HANDSOME_MAN',
  useValue: {
    name: 'HAO',
  },
};

@Module({
  providers: [HANDSOME_HAO],
  exports: [HANDSOME_HAO],
})
export class HandsomeModule {}

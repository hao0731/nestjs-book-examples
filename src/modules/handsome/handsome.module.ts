import { Module } from '@nestjs/common';

const HANDSOME_HAO = {
  provide: 'HANDSOME_MAN',
  useFactory: async () => {
    const getHAO = new Promise((resolve) => {
      setTimeout(() => resolve({ name: 'HAO' }), 2000);
    });
    const HAO = await getHAO;
    return HAO;
  },
};

@Module({
  providers: [HANDSOME_HAO],
  exports: [HANDSOME_HAO],
})
export class HandsomeModule {}

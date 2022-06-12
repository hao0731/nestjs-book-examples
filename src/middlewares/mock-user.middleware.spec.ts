import { MockUserMiddleware } from './mock-user.middleware';

describe('MockUserMiddleware', () => {
  it('should be defined', () => {
    expect(new MockUserMiddleware()).toBeDefined();
  });
});

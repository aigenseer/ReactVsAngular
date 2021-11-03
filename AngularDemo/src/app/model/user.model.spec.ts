import { User } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User(-1, "email", "first_name", "last_name")).toBeTruthy();
  });
});

import { PasswordErrorFilterPipe } from './password-error-filter.pipe';

describe('PasswordErrorFilterPipe', () => {
  it('should create an instance', () => {
    const pipe = new PasswordErrorFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return false if value is an empty array', () => {
    const pipe = new PasswordErrorFilterPipe();
    let errors: Error[] = [];
    expect(pipe.transform(errors, 'test')).toBeFalsy();
  });

  it('should return false if error is not found', () => {
    const pipe = new PasswordErrorFilterPipe();
    let errors: Error[] = [{name: 'test', message: 'It shouldn\'t be here'}];
    expect(pipe.transform(errors, 'test2')).toBeFalsy();
  });

  it('should return true if error is found', () => {
    const pipe = new PasswordErrorFilterPipe();
    let errors: Error[] = [{name: 'test', message: 'It should be here'}];
    expect(pipe.transform(errors, 'test')).toBeTruthy();
  });
});

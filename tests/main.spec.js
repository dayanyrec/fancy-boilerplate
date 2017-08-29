import { expect } from 'chai';
import main from '../src/main';

describe('Main', () => {
  it('test', () => {
    expect(main()).to.be.equal(1);
  });
});

import { ConcatExpression } from '../../../src/expressions/string/concat-expression';
import { expect } from 'chai';

describe('ConcatExpression', () => {
    describe('evaluate()', () => {
        it('should combine multiple strings', () => {
            let exp = new ConcatExpression();

            exp.operands.push('foo');
            exp.operands.push(' ');
            exp.operands.push('bar');

            expect(exp.evaluate()).to.equal('foo bar');
        });
    });
});

//Assertions state facts about values or peices of code that must be true otherwise an exception is thrown
import {strict as assert} from 'assert';
assert.equal(3 + 5, 8); //Expected value for 3+5 is 8

//With assert you can specify expected results

//Strict equal() uses === for comparison . Meaning an object is equal to itself
assert.notEqual({foo : 1}, {foo : 1})
//deepEqual() us a better choice for comparing objects, which works for arrays too
assert.deepEqual({foo : 1}, {foo : 1})
assert.notEqual(['a','b','c'],['a','b','c'])
assert.deepEqual(['a','b','c'],['a','b','c'])

//We can catch the assertion error and give a better explanition of what is happening
let e;
try{
  const x = 3;
  assert.equal(x,8,'x must be equal to 8');
} catch (err) {
  assert.equal(
    String(err),
    'AssertionError [ERR_ASSERTION]: x must be equal to 8');
}

//An object must not be deeply equal to expected
assert.notDeepEqual([1,2,3],[1,2]);

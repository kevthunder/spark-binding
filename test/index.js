
const assert = require('chai').assert
const index = require('../index')

describe('index file', function () {
  it('return all the classes', function () {
    assert.equal(index.Binder.name, 'Binder')
    assert.equal(index.EventBind.name, 'EventBind')
    assert.equal(index.Reference.name, 'Reference')
  })
})

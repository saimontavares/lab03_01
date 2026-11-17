import { describe, expect, it } from '@jest/globals'
import { hello } from './hello_world.js'

describe('test hello', () => {
  it('should return hello world', () => {
    expect(hello()).toBe('Hello world!')
  })
})
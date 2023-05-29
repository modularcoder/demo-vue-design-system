/**
 * @jest-environment jsdom
 */

// Extend expect expressions with jest dom
import '@testing-library/jest-dom'
import { configure } from '@testing-library/vue'
// import { server } from './server'

beforeAll(() => {
  // server.listen()
})
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

configure({
  testIdAttribute: 'data-test-id',
})

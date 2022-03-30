/* eslint-disable testing-library/await-async-query */

import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);


/** rendering */

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test('renders decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test('renders error message', () => {
  const wrapper = setup();
  const errorMessage = findByTestAttr(wrapper, "error-message").text();
  expect(errorMessage).toBe("");
})

/** behaviour */

test('counter display starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test('clicking button increment counter display', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate('click');
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

test('clicking button decrement counter display', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate('click');
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test('diplaying error message when counter goes below zero', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate('click');
  const errorMessage = findByTestAttr(wrapper, "error-message").text();
  expect(errorMessage).not.toBe("");
});

test('hiding error message when counter goes above zero', () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate('click');
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate('click');
  const errorMessage = findByTestAttr(wrapper, "error-message").text();
  expect(errorMessage).toBe("");
});
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

// setting up enzyme's react adapter
Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = () => {
  return shallow(<App />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test c1scoL0ve!
 *
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapper = setup();
  //const appComponent = wrapper.find("[data-test='component-app']")
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders component with Class App", () => {
  const wrapper = setup();

  expect(wrapper.find(".App").getElements().length).toBe(1); // or
  expect(wrapper.find("div.App").length).toBe(1);
  expect(wrapper.find(".header").length).toBe(1); // or
  expect(wrapper.find("h1.header").length).toBe(1);
});

// test("renders button", () => {
//   const wrapper = setup();
//   const button = findByTestAttr(wrapper, 'increment-button');
//   expect(button.length).toBe(1);
// });
test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});
test("Counters start at Zero", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0"); // do this first with an integer and show failure!
});
// test("clicking on button increments counter display", () => {
//   const wrapper = setup();
//  // find button and click
//  const button = findByTestAttr(wrapper, 'increment-button');
//  button.simulate('click',{
//   preventDefault: () => {
//   }
//  });
//   // check the counter
//   const count = findByTestAttr(wrapper, 'count').text();
//   expect(count).toBe("1");
// });

describe("Test Increment", () => {
  test("renders Increment button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-button");
    expect(button.length).toBe(1);
  });

  test("clicking on button increments counter display", () => {
    const wrapper = setup();
    // find button and click
    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate("click", {
      preventDefault: () => {},
    });
    // check the counter
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("1");
  });
});

describe("Test Decrement", () => {
  test("render decrement button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "decrement-button");
    expect(button.length).toBe(1);
  });
  test("clicking decrement button decrements counter display when state is greater than 0", () => {
    const wrapper = setup();
    // find increment button and click
    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate("click", {
      preventDefault: () => {},
    });
    // find decrement button and click
    const decButton = findByTestAttr(wrapper, "decrement-button");
    decButton.simulate("click");
    // find display value
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });
});
describe("counter is 0 and decrement is clicked", ()=>{
  // using a describe here so I can use a "beforeEach" for shared setup
  let wrapper
  // scoping wrapper to the describe, so it can be used in beforeEach and the tests
  beforeEach(() => {
    // no need to set counter value here; default value of 0 is good
    wrapper = setup();

    // find button and click
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');
  });

  test("error shows",()=>{
    const errDiv = findByTestAttr(wrapper,"error-message")
    const errorHasHiddenClass = errDiv.hasClass('hidden')
    expect(errorHasHiddenClass).toBe(false)
  })

  test("counter still displays 0",()=>{
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  })

  test("clicking increment button clears the error",()=>{
    //find and click inc button
    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate("click", {
      preventDefault: () => {},
    });
    const errDiv = findByTestAttr(wrapper,"error-message")
    const errorHasHiddenClass = errDiv.hasClass('hidden')
    expect(errorHasHiddenClass).toBe(true)
  })
})
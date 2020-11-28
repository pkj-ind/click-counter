import React from "react";
import Enzyme, {shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from "./App";

// setting up enzyme's react adapter

Enzyme.configure({ adapter: new Adapter() });

test("renders without error", ()=>{
const wrapper=shallow(<App />)
const appComponent = wrapper.find("[data-test='component-app']")
expect(appComponent.length).toBe(1)
})

test("renders component with Class App", ()=>{
  const wrapper=shallow(<App />)
  
  expect(wrapper.find(".App").getElements().length).toBe(1) // or
  expect(wrapper.find("div.App").length).toBe(1)
  expect(wrapper.find(".header").length).toBe(1) // or
  expect(wrapper.find("h1.header").length).toBe(1)
  })

test("renders button", ()=>{
  
})
test("renders counter display", ()=>{
  
})
test("Counters start at Zero", ()=>{
  
})
test("clicking on button increments counter display", ()=>{
  
})
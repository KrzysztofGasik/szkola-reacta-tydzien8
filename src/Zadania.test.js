import sum from "./components/Zadanie1/Zadanie1";
import Buttons from "./components/Zadanie2/Buttons";
import Wrapper from "./components/Zadanie3/Wrapper";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

describe("zadanie 1 - funkcja sum()", () => {
  it("should add 2 and 3 and return 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

describe("zadanie 2 - komponent button", () => {
  it("should have value of 0 if props is not passed", () => {
    const wrapper = shallow(<Buttons />);
    const counter = wrapper.find(".counter");
    expect(counter.text()).toBe("0");
  });
  it("should have value of 10 if props is passed", () => {
    const wrapper = shallow(<Buttons start="10" />);
    const counter = wrapper.find(".counter");
    expect(counter.text()).toBe("10");
  });
  it("should have two buttons, one for increment and one for decrement counter", () => {
    const wrapper = shallow(<Buttons />);
    const incrementBtn = wrapper.find(".increment");
    const decrementBtn = wrapper.find(".decrement");
    expect(incrementBtn).toHaveLength(1);
    expect(decrementBtn).toHaveLength(1);
  });
  it("should update counter after button click", () => {
    const wrapper = shallow(<Buttons />);
    const incrementBtn = wrapper.find(".increment");
    incrementBtn.simulate("click");
    let counter = wrapper.find(".counter");
    expect(counter.text()).toBe("1");
    const decrementBtn = wrapper.find(".decrement");
    decrementBtn.simulate("click");
    counter = wrapper.find(".counter");
    expect(counter.text()).toBe("0");
  });

  it("should have value of typed into input - 50", () => {
    const wrapper = shallow(<Buttons />);
    const inputVal = wrapper.find(".update");
    inputVal.simulate("change", { target: { value: "50" } });
    const updateBtn = wrapper.find(".updateBtn");
    updateBtn.simulate("click");
    const counter = wrapper.find(".counter");
    expect(counter.text()).toBe("50");
  });

  it("should reset to 0", () => {
    const wrapper = shallow(<Buttons start="15" />);
    const resetBtn = wrapper.find(".resetBtn");
    resetBtn.simulate("click");
    const counter = wrapper.find(".counter");
    expect(counter.text()).toBe("0");
  });
});

describe("zadanie 3 - component user list", () => {
  it("should return the user list count", () => {
    const wrapper = shallow(<Wrapper />);
    const userList = wrapper.find(".userlist .user");
    const length = userList.length;
    expect(userList).toHaveLength(length);
  });
});

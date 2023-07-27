import {expect} from "chai";
import proxyquire from "proxyquire";
import sinon from "sinon";

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake(),
};

const {Block} = proxyquire("./Block.ts", {
  "./EventBus.ts": {
    EventBus: class {
      emit = eventBusMock.emit;
      on = eventBusMock.on;
    },
  },
});

describe("class Block", () => {
  class ComponentMock extends Block {
  }

  it("Should dispatch the init event after initialization", () => {
    new ComponentMock();

    expect(eventBusMock.emit.calledWith(ComponentMock.EVENTS.INIT)).to.be.true;
  });

  it("setProps() method sets the props", () => {
    const component = new ComponentMock();
    component.setProps({color: "red"});

    expect(component.props).to.have.property("color");
  });
});

import {StoreApp} from "./Store";

export function withStore(WrappedBlock: any) {
  return class extends WrappedBlock {
    constructor(props: Record<string, any>) {
      super({...props, ...StoreApp.state});
    }

    __onChangeStoreCallback = () => {
      this.setProps({...this.props, ...StoreApp.state});
    };

    componentDidMount(props: Record<string, any>) {
      super.componentDidMount(props);
      StoreApp.on("changed", this.__onChangeStoreCallback);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      StoreApp.off("changed", this.__onChangeStoreCallback);
    }
  };
}

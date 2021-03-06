import * as React from 'react';
import RcDropdown from 'rc-dropdown';

export interface DropDownProps {
  trigger: string[];
  overlay: React.ReactNode;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
}

export default class Dropdown extends React.Component<DropDownProps, any> {
  static defaultProps = {
    transitionName: 'slide-up',
    prefixCls: 'ant-dropdown',
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
  };

  render() {
    return <RcDropdown {...this.props} />;
  }
}

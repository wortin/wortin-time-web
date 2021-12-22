import { Button } from 'antd';
import React from 'react';
import { Link } from 'umi';

export interface TodoViewButtonProps {
  icon: React.ExoticComponent<any>;
  text: string;
  to: string;
  primary: boolean;
}

interface TodoViewButtonState {}

export class ToDoViewButtonC extends React.Component<
  TodoViewButtonProps,
  TodoViewButtonState
> {
  public constructor(props: TodoViewButtonProps) {
    super(props);
  }

  public render() {
    let Icon = this.props.icon;
    return (
      <Link to={this.props.to}>
        <Button
          type={this.props.primary ? 'primary' : undefined}
          icon={<Icon />}
          style={
            this.props.primary
              ? { float: 'right', marginLeft: '24px' }
              : { border: 'none', marginRight: '24px' }
          }
        >
          {this.props.text}
        </Button>
      </Link>
    );
  }
}

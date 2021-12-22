import React from 'react';

export default function Page() {
  return <Page404 />;
}

export interface Page404Props {}

export interface Page404State {}

class Page404 extends React.Component<Page404Props, Page404State> {
  public constructor(props: Page404Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div>Page404</div>;
  }
}

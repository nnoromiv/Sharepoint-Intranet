import * as React from 'react';
import type { IHelloTailwindProps } from './IHelloTailwindProps';
import { Feeder, Footer, Hero, Navbar } from '.';

export default class HelloTailwind extends React.Component<IHelloTailwindProps, {}> {
  public render(): React.ReactElement<IHelloTailwindProps> {
    return (
      <>
        <Navbar toBeActive="/" />
        <Hero />
        <Feeder />
        <Footer />
      </>
    );
  }
}

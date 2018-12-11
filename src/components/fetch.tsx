import React, { Component } from "react";
import { Fetcher } from "./fetchDec";

interface FetchState {
  data: number;
  name: string;
}

@Fetcher()
class Fetch extends Component<{}, FetchState> {
  course: any;
  constructor(props: any) {
    super(props);
    this.state = {
      data: 1,
      name: "saiumesh"
    };
  }

  public render() {
    return (
      <div>
        <p>Hello Fetch!!</p>
        <p>
          Data is {this.state.data}, {this.state.name}
        </p>
      </div>
    );
  }
}

export default Fetch;

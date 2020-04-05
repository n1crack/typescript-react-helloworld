import React from "react";

//----> 1. yol.
type HelloworldPropTypes = {
  name: string;
};
const Helloworld = ({ name }: HelloworldPropTypes) => <h1>Hello {name}</h1>;

//----> 2. yol.
/*
    import PropTypes from "prop-types"; // ES6
    const Helloworld = (props: any) => <h1>Hello {props.name} dasda</h1>;
        Helloworld.propTypes = {
        name: PropTypes.string.isRequired
    };
*/

//----> 3. yol.
// FunctionComponent  kullanımı
/*
    type HelloworldProps = {
        name: string;
    };
    const Helloworld: React.FunctionComponent<HelloworldProps> = ({ name }) => {
        const [sname] = React.useState(name);
        return <div>Hello, {sname}</div>;
    };
*/

/*
//---->  4. yol
    interface IHelloWorldProps {
        name: string;
    }
    const Helloworld: React.FC<IHelloWorldProps> = ({ name }) => {
        const [sname] = React.useState(name);
        return <div>Hello, {sname}</div>;
    };
*/

//---->  5. yol
/*
type HelloWorldProps = {
  name: string;
};
type HelloWorldStates = {
  name: string;
};
class Helloworld extends React.Component<HelloWorldProps, HelloWorldStates> {
  constructor(props: HelloWorldProps) {
    super(props);
    this.state = {
      name: this.props.name
    };
  }
  render() {
    return <div>Hello, {this.state.name}</div>;
  }
}
*/

export default Helloworld;

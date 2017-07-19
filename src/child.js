import React, {Component} from 'react';


// const About = () => {
//     return (
//         <div>hello</div>
//     );
// }

class Child extends Component {
    constructor(props) {
        super(props);
        console.log('props', props);

    }
      render() {
        return (
           <div>Child</div>
        );
    }
}
export default Child;

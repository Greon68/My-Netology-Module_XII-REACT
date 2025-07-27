function Welcome(props) {
// function Welcome({people}) {
    console.log (props);
    console.log (props.name);
    // console.log (props.people)
    // console.log (props.people.name)
    // console.log (people.name)
   return (
    <h1> Привет, {props.name} !</h1>
    // <h1> Привет, {props.people.name} !</h1>
    // <h1> Привет, {people.name} !</h1>
   )
}

export default Welcome
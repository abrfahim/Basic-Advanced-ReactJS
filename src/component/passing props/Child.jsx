
// Unidirectional-flow : Parent to Child... Child recieve data from parent by props parameter

const Child = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.document}</h1>
        </div>
    );
};

export default Child;
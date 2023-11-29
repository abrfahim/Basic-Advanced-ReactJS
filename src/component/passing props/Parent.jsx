import Child from "./Child";


const Parent = () => {
    return (
        <div>
            <Child title='Hello world' document='I am from Parent , You can recieve me via props'/>
        </div>
    );
};

export default Parent;
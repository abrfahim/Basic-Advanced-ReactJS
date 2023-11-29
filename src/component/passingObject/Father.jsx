import ItemObj from "./ItemObj";
import Son from "./Son";
const Father = () => {
    return (
        <div>
            <Son datasend= {ItemObj} />
        </div>
    );
};

export default Father;
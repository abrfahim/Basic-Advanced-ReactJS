
const Son = (props) => {
    return (
        <div>
            <ul>
                <li>{props.datasend['Name']}</li>
                <li>{props.datasend['Age']}</li>
                <li>{props.datasend['Edu']}</li>
                <li>{props.datasend['Profession']}</li>

            </ul>
        </div>
    );
};

export default Son;
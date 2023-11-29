
const Loop = () => {
    const city = ['Dhaka', 'Hikari', 'Kolkata', 'Chittagong']
    var town = ['Tokiyo', 'Higenbarg', 'Dhaka', 'Dilli']

    return (
        <div>
            <ol>
                {
                    city.map((item, i)=>{
                        return <li key={i.toString()}>{item}</li>
                    })
                }
            </ol>
            <ul>
                {
                    town.map((item, i)=>{
                        return <li key={i.toString()}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Loop;
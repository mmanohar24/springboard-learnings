const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

const newUsers = users.map( function(value)
{
    return {
        fullName: `${value.firstName} ${value.lastName}`,
        memberShipStatus: value.points >= 100 ? 'Premium': 'Standard'
    }   
})


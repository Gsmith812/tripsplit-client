const STORE = {
    trips: [
        {
            id: 1,
            tripName: 'Paris',
            tripStartDate: '11/20/2021',
            tripEndDate: '11/27/2021',
            friends: [
                { 
                    id: 1,
                    name: 'Minous',
                    amountPaid: 1000,
                    settled: false,
                },
                {
                    id: 2,
                    name: 'Rachel',
                    amountPaid: 1000,
                    settled: false
                },
                {
                    id: 3,
                    name: 'Louis',
                    amountPaid: 1150,
                    settled: false
                }
            ],
            expenses: [
                {
                    id: 1,
                    expenseName: 'Dinner in Montemarte',
                    paidBy: 'Minous',
                    amount: 200,
                    friendId: 1
                },
                {
                    id: 2,
                    expenseName: 'A show at the Moulin Rouge',
                    paidBy: 'Louis',
                    amount: 150,
                    friendId: 3,
                },
                {
                    id: 3,
                    expenseName: 'Latin Quarter tour',
                    paidBy: 'Rachel',
                    amount: 200,
                    friendId: 2
                },
                {
                    id: 4,
                    expenseName: 'Louvre Tickets',
                    paidBy: 'Minous',
                    amount: 800,
                    friendId: 1
                },
                {
                    id: 5,
                    expenseName: 'Eiffel Tower Visit',
                    paidBy: 'Rachel',
                    amount: 800,
                    friendId: 2
                },
                {
                    id: 6,
                    expenseName: 'Versailles Day Trip',
                    paidBy: 'Louis',
                    amount: 1000,
                    friendId: 3
                }
            ],
            totalAmount: 3150
        },
        {
            id: 2,
            tripName: 'Vietnam',
            tripStartDate: '08/12/2021',
            tripEndDate: '08/16/2021',
            friends: [
                { 
                    id: 1,
                    name: 'George',
                    amountPaid: 2000,
                    settled: false,
                },
                {
                    id: 2,
                    name: 'Randy',
                    amountPaid: 1500,
                    settled: false
                },
                {
                    id: 3,
                    name: 'Joey',
                    amountPaid: 1500,
                    settled: false
                }
            ],
            expenses: [
                {
                    id: 1,
                    expenseName: 'Visiting Angkor Wat',
                    paidBy: 'George',
                    amount: 1000,
                    friendId: 1
                },
                {
                    id: 2,
                    expenseName: 'Stay at nice Hotel',
                    paidBy: 'Joey',
                    amount: 1000,
                    friendId: 3,
                },
                {
                    id: 3,
                    expenseName: 'Nice Dinner in Ho Chi Minh',
                    paidBy: 'Randy',
                    amount: 1000,
                    friendId: 2
                },
                {
                    id: 4,
                    expenseName: 'Hotel stay in Vietnam',
                    paidBy: 'George',
                    amount: 1000,
                    friendId: 1
                },
                {
                    id: 5,
                    expenseName: 'Boat Tour',
                    paidBy: 'Randy',
                    amount: 500,
                    friendId: 2
                },
                {
                    id: 6,
                    expenseName: 'Shopping for Souveniers',
                    paidBy: 'Joey',
                    amount: 500,
                    friendId: 3
                }
            ],
            totalAmount: 5000
        },
        {
            id: 3,
            tripName: 'Key West',
            tripStartDate: '09/04/2021',
            tripEndDate: '09/07/2021',
            friends: [
                { 
                    id: 1,
                    name: 'George',
                    amountPaid: 1000,
                    settled: false,
                },
                {
                    id: 2,
                    name: 'Darren',
                    amountPaid: 1000,
                    settled: false
                },
                {
                    id: 3,
                    name: 'Louis',
                    amountPaid: 1150,
                    settled: false
                }
            ],
            expenses: [
                {
                    id: 1,
                    expenseName: 'Dinner in Key West',
                    paidBy: 'George',
                    amount: 500,
                    friendId: 1
                },
                {
                    id: 2,
                    expenseName: 'Drag show at Bourbon Pub',
                    paidBy: 'Louis',
                    amount: 150,
                    friendId: 3,
                },
                {
                    id: 3,
                    expenseName: 'Pub Crawl',
                    paidBy: 'Darren',
                    amount: 200,
                    friendId: 2
                },
                {
                    id: 4,
                    expenseName: 'Deep Sea Fishing',
                    paidBy: 'George',
                    amount: 800,
                    friendId: 1
                },
                {
                    id: 5,
                    expenseName: 'Souveniers',
                    paidBy: 'Darren',
                    amount: 800,
                    friendId: 2
                },
                {
                    id: 6,
                    expenseName: 'Fancy Hotel',
                    paidBy: 'Louis',
                    amount: 1000,
                    friendId: 3
                }
            ],
            totalAmount: 3150
        }
    ]
}

export default STORE;
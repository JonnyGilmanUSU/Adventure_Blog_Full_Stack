const navItems = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Adventures',
        path: '/adventures', 
        subItems: [
            { name: 'Canyoneering', path: '/adventures/canyoneering' },
            { name: 'Climbing', path: '/adventures/climbing' },
            { name: 'Backpacking', path: '/adventures/backpacking' },
            { name: 'Hiking', path: '/adventures/hiking' }
        ]
    },
];

export default navItems;

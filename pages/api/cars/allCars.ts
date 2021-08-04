const cars = [
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb5c',
    },
    id: '1',
    make: 'Audi',
    model: 'A2',
    year: '2003',
    kilometers: '123456',
    fuelType: 'Petrol',
    price: '8199',
    photoUrl: '/photos/cars/audi-a2-2003-8199.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb5d',
    },
    id: '2',
    make: 'BMW',
    model: '116',
    year: '2013',
    kilometers: '1231231',
    fuelType: 'Petrol',
    price: '12999',
    photoUrl: '/photos/cars/bmw-116-d-line-urban-2013.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb5e',
    },
    id: '3',
    make: 'BMW',
    model: '320',
    year: '2009',
    kilometers: '123456',
    fuelType: 'Petrol',
    price: '8199',
    photoUrl: '/photos/cars/bmw-320-2009-18000.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb5f',
    },
    id: '4',
    make: 'BMW',
    model: 'x1',
    year: '2003',
    kilometers: '565656',
    fuelType: 'Diesel',
    price: '24000',
    photoUrl: '/photos/cars/bmw-x1-2012-24999.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb60',
    },
    id: '5',
    make: 'Ford',
    model: 'Fiesta',
    year: '2008',
    kilometers: '433444',
    fuelType: 'Petrol',
    price: '5590',
    photoUrl: '/photos/cars/ford-fiesta-2008-5950.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb61',
    },
    id: '6',
    make: 'Ford',
    model: 'Fiesta',
    year: '2014',
    kilometers: '343434',
    fuelType: 'Petrol',
    price: '9950',
    photoUrl: '/photos/cars/ford-fiesta-2014-9950.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb63',
    },
    id: '7',
    make: 'Merces-Benz',
    model: '200',
    year: '2015',
    kilometers: '111111',
    fuelType: 'Petrol',
    price: '24999',
    photoUrl: '/photos/cars/mercedes-benz-200-2015-24999.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb64',
    },
    id: '8',
    make: 'Merces-Benz',
    model: 'e250',
    year: '2011',
    kilometers: '123443',
    fuelType: 'Diesel',
    price: '29800',
    photoUrl: '/photos/cars/mercedes-benz-e250-2011-29800.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb65',
    },
    id: '9',
    make: 'Peugeot',
    model: '3008',
    year: '2014',
    kilometers: '77000',
    fuelType: 'Petrol',
    price: '18999',
    photoUrl: '/photos/cars/peugeot-3008-2014-17999.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb66',
    },
    id: '10',
    make: 'Renault',
    model: 'Ckui',
    year: '2017',
    kilometers: '123123',
    fuelType: 'Diesel',
    price: '13485',
    photoUrl: '/photos/cars/renault-clio-2017-13485.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb67',
    },
    id: '11',
    make: 'Renault',
    model: 'Espace',
    year: '2004',
    kilometers: '123123',
    fuelType: 'Petrol',
    price: '9800',
    photoUrl: '/photos/cars/renault-espace-2004.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb68',
    },
    id: '12',
    make: 'Renault',
    model: 'Megane IV',
    year: '2016',
    kilometers: '123123',
    fuelType: 'Diesel',
    price: '15890',
    photoUrl: '/photos/cars/renault-megane-2016-15890.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb69',
    },
    id: '13',
    make: 'Seat',
    model: 'Leon',
    year: '2010',
    kilometers: '44444',
    fuelType: 'Diesel',
    price: '13650',
    photoUrl: '/photos/cars/seat-leon-2010-13650.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb6a',
    },
    id: '14',
    make: 'Smart',
    model: 'for two',
    year: '2008',
    kilometers: '5534',
    fuelType: 'Diesel',
    price: '5800',
    photoUrl: '/photos/cars/smart-fortwo-2008-5800.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb6b',
    },
    id: '15',
    make: 'Smart',
    model: 'for two',
    year: '2012',
    kilometers: '343434',
    fuelType: 'Diesel',
    price: '7950',
    photoUrl: '/photos/cars/smart-fortwo-2012-7950.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb6c',
    },
    id: '16',
    make: 'Smart',
    model: 'for two',
    year: '2003',
    kilometers: '343434',
    fuelType: 'Diesel',
    price: '8850',
    photoUrl: '/photos/cars/smart-fortwo-passion-2003-8888.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb6d',
    },
    id: '17',
    make: 'Smart',
    model: 'for two',
    year: '2015',
    kilometers: '343434',
    fuelType: 'Diesel',
    price: '11500',
    photoUrl: '/photos/cars/smart-fortwo-passion-2015-11500.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb6e',
    },
    id: '18',
    make: 'Volkswagen',
    model: 'EOS',
    year: '2008',
    kilometers: '343434',
    fuelType: 'Diesel',
    price: '14700',
    photoUrl: '/photos/cars/volkswagen-eos-2008-14700.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb6f',
    },
    id: '19',
    make: 'Volkswagen',
    model: 'Golf',
    year: '2013',
    kilometers: '123123',
    fuelType: 'Petrol',
    price: '18300',
    photoUrl: '/photos/cars/volkswagen-golf-2013-18300.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a647a9d60a12c40ddb70',
    },
    id: '20',
    make: 'Volkswagen',
    model: 'Tiguan',
    year: '2007',
    kilometers: '1231234',
    fuelType: 'Petrol',
    price: '14299',
    photoUrl: '/photos/cars/volkswagen-tiguan-2007-14299.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    _id: {
      $oid: '60e9a968a9d60a12c40ddb71',
    },
    id: '21',
    make: 'Mazda',
    model: '6',
    year: '2015',
    kilometers: '343411',
    fuelType: 'Petrol',
    price: '21000',
    photoUrl: '/photos/cars/mazda-6-2015.jpg',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default cars;

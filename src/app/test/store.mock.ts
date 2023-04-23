const initialStateMock = {
  error: {
    userReducer: {
      isLoading: false,
      usersLists: null,
      userDetail: null,
      hasError: true,
      error: 'Can not get users',
    },
  },
  loading: {
    userReducer: {
      isLoading: true,
      usersList: null,
      userDetail: null,
      hasError: false,
      error: null,
    }
  },
  loaded: {
    userReducer: {
      isLoading: false,
      usersList: [
        {
          email: 'Sincere@april.biz',
          id: 1,
          name: 'Leanne Graham',
          phone: '1-770-736-8031 x56442',
          username: 'Bret',
        },
        {
          email: 'Shanna@melissa.tv',
          id: 2,
          name: 'Ervin Howell',
          phone: '010-692-6593 x09125',
          username: 'Antonette',
        },
        {
          email: 'Nathan@yesenia.net',
          id: 3,
          name: 'Clementine Bauch',
          phone: '1-463-123-4447',
          username: 'Samantha',
        },
      ],
      userDetail: {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
      hasError: false,
      error: null,
    }
  }
};

export default initialStateMock;

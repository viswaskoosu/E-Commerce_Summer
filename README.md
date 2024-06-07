github
fix if needed:
1. currently, storing user details in localstorage
    if it should be avoided, make a state for userDetails, iniaitalised to null
    every time check userDetails is null, then fetch everything from server, otherwise just display
2. favorites stored away from user in userreducer initialstate
3. initialstate initialised in reducer (no use), initial state little bit messed up no effects. 

need fix:
1. don't read from localstorage. (might crash if corrupted, fetch from server in index.js)
2. details check in edit page
3. suggesstion maybe: store token as state also. (after delete token, unless u refresh the page you can access server)
4. global error handling in app.js when product fetch from server failed.
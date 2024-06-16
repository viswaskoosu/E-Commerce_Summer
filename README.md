github
fix if needed:
1. currently, storing user details in localstorage
    if it should be avoided, make a state for userDetails, iniaitalised to null
    every time check userDetails is null, then fetch everything from server, otherwise just display
2. favorites stored away from user in userreducer initialstate //solved. it is fine
3. initialstate initialised in reducer (no use), initial state little bit messed up no effects. 
4. make a separate file to display error?

need fix:
1. don't read from localstorage. (might crash if corrupted, fetch from server in index.js)
2. details check in edit page
3. suggesstion maybe: store token as state also. (after delete token, unless u refresh the page you can access server)
4. global error handling in app.js when product fetch from server failed. //solved. but need special error page
5. checkoutproduct moving to wishlist needs handling.
6. handling on favouriting on home page //solved
7. error messages little ambiguity in checkout and editbasket i think.
8. in review model, add product field
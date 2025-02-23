function UseCase3() {

    const loggedIn = false;
    return ( 
        <div>
            <button>{loggedIn? 'Logout':'Login'}</button>
            <h3>
                {loggedIn?'Welcome USer to our Dashboard':'Login to our portal to access Dashboard'}
            </h3>
        </div>
     );
}

export default UseCase3;
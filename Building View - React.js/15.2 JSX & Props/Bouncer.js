// JSX Conditionals

const Bouncer = ( {age} ) => {

    let reply;

    if(age < 18)
    {
        reply = "Sorry, you can't come in!"
    }
    else if (age < 21)
    {
        reply = "You can come in, but no drinking!"
    }
    else
    {
        reply = "Come in, you can drink!"
    }
    return (
        <div>
            <p> 
                <b> Bouncer: </b> How old are you?
            </p>

            <p>
                <b> You: </b> I am  {age} years old!
            </p>

            <p>
                <b> Bouncer: {reply} </b>
            </p>
        </div>
    )
}
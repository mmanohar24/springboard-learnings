const App = () => {

    // const colors = ["Red", "Green", "Yellow"];

    return (
        <div>
            {/* < GoldenRetriever />

            < GermanShepherd /> */}

            <RandomNum />

            <RandomNum />

            <RandomNum />

            <Title title = "My Youtube Channel">
                <Description text = "Hi, welcome to my YouTube channel!"/>
            </Title>

            <Alert>
                <RandomChoices choices={["Red", "Green", "Yellow"]} />
            </Alert>

            <RandomChoices choices={["Red", "Green", "Yellow"]} />

            <ProgrammingLanguages />

            <MovieList />

            <TodoList todos={["Take a shower", "Finish Costco Shopping", "Car Wash"]} />

            <Owner ownerName="Alex" />

            <Animal name="Golden Retriever" species="Canis lupus" emoji="🐶" isCute />

            <Animal name="German Shephred" species="West German Working Line" emoji="🐕" />

            <Bouncer age={28} />

            <Bouncer age={18} />

            <Bouncer age={17} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
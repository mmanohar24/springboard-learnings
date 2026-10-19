import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowesList", () => {

    beforeEach(() => {
        console.log("Running test before rendering one follower!!")
    })

    beforeAll(() => {
        console.log("Running once before all tests")
    })

    afterEach(() => {
        console.log("Running after each test")
    })

    afterAll(() => {
        console.log("Ran after all tests")
    })

    test('should render one follower items', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        screen.debug();
        expect(followerDivElement).toBeInTheDocument();
    })

    test('should render all followers items', async () => {
        render(<MockFollowersList />);
        const followerDivElements = await screen.findAllByTestId(/follower-item/i);
        screen.debug();
        expect(followerDivElements.length).toBe(5);
    })
})
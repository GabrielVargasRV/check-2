import "@testing-library/jest-dom/extend-expect";
import { render,fireEvent } from "@testing-library/react";
import PomodoroTimer from "../PomodoroTimer";


test('Pomodoro renders correctly', () => {
    const component = render(<PomodoroTimer/>);

    //check if it renders correctly
    expect(component.container).toHaveTextContent('START');
    // check if it start correctly
    const startBtn = component.getByText('START');
    fireEvent.click(startBtn);
    expect(component.container).toHaveTextContent('SKIP');
    expect(component.container).toHaveTextContent('PAUSE');
    // check if it get paused corrently
    const pauseBtn = component.getByText('PAUSE');
    fireEvent.click(pauseBtn);
    expect(component.container).toHaveTextContent('CONTINUE');
    expect(component.container).toHaveTextContent('SKIP');
    // check if it skip corrently
    const skipBtn = component.getByText('SKIP');
    fireEvent.click(skipBtn);
    expect(component.container).toHaveTextContent('START');
})
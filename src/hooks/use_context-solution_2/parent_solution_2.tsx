import { Child1 } from './child_1';
import { Child2 } from './child_2';
import {
    Button
} from './button';
import { ThemeProvider } from './theme_context';


export const ParentSolution2 = () => {

    return (
        <>
            <h1>useContext - solution 2</h1>
            <ThemeProvider>
                <Button />
                <Child1 />
                <Child2 />
            </ThemeProvider>
        </>

    )
}
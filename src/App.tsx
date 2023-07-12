import './App.css';
import { APICall } from './components/hooks/use_effect/use_effect';
import { Todo } from './components/hooks/use_x/todo';
import { MemoExample } from './components/hooks/use_memo/use_memo';
import { CountRenders } from './components/hooks/use_ref/count_renders';
import { Focus } from './components/hooks/use_ref/focus';
import { CountCats } from './components/hooks/use_state/count_cats';
import { TaskApp } from './components/hooks/use_reducer/todo_app';
import { Section } from './components/section';
import { ParentSolution1 } from "./components/hooks/use_context-solution_1/parent_solution_1";
// import { ParentSolution2 } from "./components/hooks/use_context-solution_2/parent_solution_2";


function App() {
	return (
		<>
			<div className='App'>

				<Section>
					<h1>Hooks Solution Repo!</h1>
				</Section>

				<Section>
					<ParentSolution1/>
					{/* <ParentSolution2/> */}
				</Section>

				<Section>
					<APICall />
				</Section>

				<Section>
					<MemoExample />
					<Focus/>
				</Section>

				<Section>
					<CountRenders />
				</Section>

				<Section>
					<CountCats />
				</Section>

				<Section>
					<Todo />
				</Section>

				<Section>
					<TaskApp />
				</Section>
			</div>
		</>
	);
}

export default App;
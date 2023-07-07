import { ParentSolution1 } from './hooks/use_context-solution_1/parent_solution_1';
import { APICall } from './hooks/use_effect/use_effect';
import { MemoExample } from './hooks/use_memo/use_memo';
import { Todo } from './hooks/custom_hooks/todo';
import { CountRenders } from './hooks/use_ref/count_renders';
import { CountCats } from './hooks/use_state/count_cats';
import { ParentSolution2 } from './hooks/use_context-solution_2/parent_solution_2';

function App() {

  return (
    <>
      <div className="App">
        <ParentSolution1 />
        <hr />
        <ParentSolution2 />
        <hr />
        <APICall />
        <hr />
        <MemoExample />
        <hr/>
        <Todo/>
        <hr/>
        <CountRenders/>
        <hr/>
        <CountCats />
      </div>
    </>
  )
}

export default App

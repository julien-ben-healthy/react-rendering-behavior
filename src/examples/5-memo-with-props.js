import { useState, memo } from 'react';
import { useRedRender } from '../useRedRender';

// Primitive vs non-primitives

// Only solutions at this point:
// - Pass primitives only (AKA flattening props but no functions + not scalable)
// - Declare non-primitives outside the component

function Child(props) {
  const ref = useRedRender();
  return (
    <div className="box" ref={ref}>
      <h3>memo(Child)</h3>
      <p>Props: {JSON.stringify(props)}</p>
    </div>
  );
}

const MemoizedChild = memo(Child);

export default function Parent() {
  const ref = useRedRender();

  const [num, setNum] = useState(0);
  const increment = () => setNum(num + 1);

  const style = { display: 'flex' };

  return (
    <div className="box" ref={ref}>
      <h3>Parent</h3>

      <p>State: {num}</p>
      <button type="button" onClick={increment}>
        Update state
      </button>

      <MemoizedChild style={style} />
    </div>
  );
}

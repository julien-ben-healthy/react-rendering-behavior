import { ComponentGenerator } from "../ComponentGenerator";

// Exploring re-renders caused by direct state update, or parent render.
// No props are being passed.

// Wrapping a component with memo prevents the entire subtree of
// this component from re-rendering in response to parent render.

// https://reactjs.org/docs/react-api.html#reactmemo

export default ComponentGenerator({
  name: "App",
  withState: true,
  Child: ComponentGenerator({
    name: "Component A",
    withState: true,
    withMemo: false,
    Child: ComponentGenerator({
      name: "Component B",
      withState: true,
      Child: ComponentGenerator({
        name: "Component C",
        withState: true,
        withMemo: true
      })
    })
  })
});

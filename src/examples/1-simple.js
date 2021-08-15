import { ComponentGenerator } from "../ComponentGenerator";

// App > A > B > C
// Components A, B, and C don’t have any props or state.
// Yet, they still re-render when the App renders.

export default ComponentGenerator({
  name: "App",
  withState: true,
  Child: ComponentGenerator({
    name: "Component A",
    Child: ComponentGenerator({
      name: "Component B",
      Child: ComponentGenerator({ name: "Component C" })
    })
  })
});

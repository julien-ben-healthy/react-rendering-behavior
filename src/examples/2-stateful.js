import { ComponentGenerator } from "../ComponentGenerator";

// When the state of C changes, only C renders.
// But when the state of B changes, both B and C render.
// The B renders because its state updates, and C renders because its parent renders.

export default ComponentGenerator({
  name: "App",
  withState: true,
  Child: ComponentGenerator({
    name: "Component A",
    withState: true,
    Child: ComponentGenerator({
      name: "Component B",
      withState: true,
      Child: ComponentGenerator({ name: "Component C", withState: true })
    })
  })
});

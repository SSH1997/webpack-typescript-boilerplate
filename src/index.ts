import "svelte";
import ExecutionPage from "./svelte/Page.svelte";

new ExecutionPage({
  target: document.body,

  props: {
    propsString: "Hello! Wolrd!",
  },
});

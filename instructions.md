# Instructions for Optional Setup Actions

1. add checkboxes for each setup action
2. checkboxes should be generated dynamically based on the setup actions array
3. each checkbox should have a label that is the setup action
4. each checkbox should have an id that is the setup action
5. each checkbox should be checked by default
6. each checkbox should have an onChange handler that updates the setup actions array
7. manage the state of the setup actions in a hook.
8. each call in the setup actions array should preserve its index in the array. If I toggle one off and then back on, the call should remain in the same index.
9. input widths should be responsive and adjust to the screen size. currently the input width is too wide on mobile and exceeds the screen width.
10. add a note above the <GenerateButton> with a quick instruction on how the generated output can be used in creating a new contract or in the multicall method on an existing 1155 collection.

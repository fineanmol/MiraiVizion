//Wizard Init

$("#wizard").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slide",
    transitionEffectSpeed: "300",
    titleTemplate: '#title#',
    // Disables the finish button (required if pagination is enabled)
    enableFinishButton: true,
    // Disables the next and previous buttons (optional)
    enablePagination: true,
    // Enables all steps from the begining
    enableAllSteps: true,
    // Removes the number from the title
    titleTemplate: "#title#"
});




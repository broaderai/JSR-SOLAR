// Stepper lement
const stepperElem = document.querySelectorAll(".kt_stepper_example_clickable");
const dateElem = document.querySelectorAll(".dateOnlyInput");
const timeElem = document.querySelectorAll(".timeOnlyInput");
// for (let i = 0; i < stepperElem.length; i++) {
//   console.log(stepperElem[i]);
// }

stepperElem.forEach((elem) => {
  let stepper = new KTStepper(elem);

  stepper.on("kt.stepper.click", function (stepper) {
    stepper.goTo(stepper.getClickedStepIndex()); // go to clicked step
  });

  stepper.on("kt.stepper.next", function (stepper) {
    stepper.goNext(); // go next step
  });

  stepper.on("kt.stepper.previous", function (stepper) {
    stepper.goPrevious(); // go previous step
  });
});

dateElem.forEach((elem) => {
  new tempusDominus.TempusDominus(elem, {
    display: {
      viewMode: "calendar",
      components: {
        decades: true,
        year: true,
        month: true,
        date: true,
        hours: false,
        minutes: false,
        seconds: false,
      },
    },
  });
});

timeElem.forEach((elem) => {
  new tempusDominus.TempusDominus(elem, {
    display: {
      viewMode: "clock",
      components: {
        decades: false,
        year: false,
        month: false,
        date: false,
        hours: true,
        minutes: true,
        seconds: false,
      },
    },
  });
});

new tempusDominus.TempusDominus(
  document.getElementById("kt_td_picker_simple"),
  {
    //put your config here
  }
);

var choice = async () => {
  const {value} = await Swal.fire({
    title: 'You are not on an uber site. Please select an option then click the icon again.',
    input: 'radio',
    showCancelButton: true,
    inputOptions: {
      rides: "Uber Rides"
    }
  });
  if (value) {
    if (value === "rides") {
      window.open("https://riders.uber.com/trips", "_blank");
    }
  }
};

choice();

$(() => {
  init();
});

function init() {

  var choice = async () => {
    Swal.fire({
      title: 'Go to Uber.com and sign in as a rider before clicking continue.',
      text: 'Once you are logged in, press continue below. Then you can view your Uber history and offset information by clicking the UberNeutral chrome extension link in the top right.',
      confirmButtonText: 'Continue &rarr;',
      showCancelButton: true,
      confirmButtonColor: '#000000',
      cancelButtonColor: '#ccc',
    }).then((result) => {
      if (result.value) {
        window.open("https://riders.uber.com/trips", "_blank");
      }
    })
  };

  $("#continue").on('click', (ev) => {
    console.log('h');
    choice();
  });
}

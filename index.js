let param;
$form.find('[name]').each(function () {
           let $input = $(this);
           let name = $input.attr('name');
           let value = $input.val();
           if (value) {
               data[name] = value;
           }
       });

axios.get('https://aicte.herokuapp.com/initiatives/1')
  .then(function (response) {
    console.log(response);
    param = response.data.length;
  })
  .catch(function (error) {
    console.log(error);
  });

  axios.post('https://aicte.herokuapp.com/initiatives/1/ratings/add', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

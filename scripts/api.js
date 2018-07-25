const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/charutha-antoine';

  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback)
   
  };

  const createItem = function(name, callback) {
    let newItem = JSON.stringify({name});
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/JSON',
      data: newItem,
      success: callback
    });
  };

  const updateItem = function(id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/JSON',
      data: JSON.stringify(updateData),
      success: callback
    })
  }

  return {
    getItems,
    createItem,
    updateItem
  };

}()
);
function search() {
   let inputText = $('#searchText').val();
   $('#towns li').css('font-weight', 'normal');
   let towns = $(`#towns li:contains(${inputText})`).css('font-weight', 'bold');

   $('#result').text(`${towns.length} matches found`);
}
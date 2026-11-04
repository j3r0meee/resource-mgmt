for (var i = 0; i < response.length; i++)
{
    html += '<tr>' +
    '<td>' + (i+1) + '</td>' +
    '<td>' + response[i].name + '</td>' +
    '<td>' + response[i].location + '</td>' +
    '<td>' + response[i].description + '</td>' +
    '<td>' + response[i].owner + '</td>' +
    '<td>' +
    '<button type="button" class="btn btn-warning"' +
    'onclick="editResource(\'' + JSON.stringify(response[i]).replaceAll('"', '&quot;') + '\')">Edit </button>' +
    '<button type="button" class="btn btn-danger"' +
    'onclick="deleteResource(\'' + response[i].id + '\')"> Delete </button>' +
    '</td>' +
    '</tr>'
}
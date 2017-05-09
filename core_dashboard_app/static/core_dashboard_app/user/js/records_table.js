/**
 * Define the table for the records
 */
function initAdmin() {
    $('#table-records-admin').DataTable({
        "scrollY": "226px",
        "iDisplayLength": 5,
        "scrollCollapse": true,
        "lengthMenu": [ 5, 10, 15, 20 ],
        "columnDefs": [
                {"className": "dt-center", "targets": 0}
              ],
        order: [[2, 'asc']],
        "columns": [ { "orderable": false }, null, null, null, { "orderable": false } ]
    });

    $('#table-records-other').DataTable({
        "scrollY": "226px",
        "iDisplayLength": 5,
        "scrollCollapse": true,
        "lengthMenu": [ 5, 10, 15, 20 ],
        "columnDefs": [
                {"className": "dt-center", "targets": 0}
              ],
        order: [[2, 'asc']],
        "columns": [ { "orderable": false }, null, null, null, { "orderable": false } ]
    });
}

function initUser () {
    $('#table-records-user').DataTable({
        "scrollY": "226px",
        "iDisplayLength": 5,
        "scrollCollapse": true,
        "lengthMenu": [ 5, 10, 15, 20 ],
        "columnDefs": [
                {"className": "dt-center", "targets": 0}
              ],
        order: [[1, 'asc']],
        "columns": [ null, null, { "orderable": false } ]
    });
}

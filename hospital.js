$(document).ready(function () {
  const url_params = new URLSearchParams(window.location.search);
  const hospital_id = url_params.get("id");

  $.ajax({
    url: "../back-end/display-departments.php",
    method: "GET",
    data: { id: hospital_id },
    dataType: "json",
    success: function (data) {
      var departmentsHTML = "";
      $.each(data, function (index, value) {
        departmentsHTML += "<div class='dotted'>";
        departmentsHTML += "<h2>" + value.name + "</h2>";
        departmentsHTML += "<p>floor " + value.floor + "</p>";
        departmentsHTML +=
          "<a href='hospital.html' class='terquoise'>select department &#8594</a>";
        departmentsHTML += "</div>";
      });
      $("#departments").find(".flexbox").html(departmentsHTML);
    },
  });

  $.ajax({
    url: "../back-end/display-services.php",
    method: "GET",
    data: { id: hospital_id },
    dataType: "json",
    success: function (data) {
      var servicesHTML = "";
      $.each(data, function (index, value) {
        servicesHTML += "<div class='dotted'>";
        servicesHTML += "<h2>" + value.name + "</h2>";
        servicesHTML += "<p>" + value.description + "</p>";
        servicesHTML += "<p>$" + value.cost + "</p>";
        servicesHTML +=
          "<a href='hospital.html' class='terquoise'>select service &#8594</a>";
        servicesHTML += "</div>";
      });
      $("#services").find(".flexbox").html(servicesHTML);
    },
  });
});

$(document).ready(function () {
  $.ajax({
    url: "../back-end/display-hospitals.php",
    dataType: "json",
    success: function (data) {
      var hospitalsHTML = "";
      $.each(data, function (index, value) {
        hospitalsHTML += "<div class='dotted'>";
        hospitalsHTML += "<h2>" + value.name + "</h2>";
        hospitalsHTML += "<p>" + value.address + "</p>";
        hospitalsHTML += "<p>" + value.phone_number + "</p>";
        hospitalsHTML += "<p>" + value.email + "</p>";
        hospitalsHTML +=
          '<a href="hospital.html?id=' +
          encodeURIComponent(value.id) +
          '" class="terquoise hospital-link">See inside</a>';
        hospitalsHTML += "</div>";
      });
      $("#hospitals").find(".flexbox").html(hospitalsHTML);
    },
  });
});

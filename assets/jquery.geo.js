jQuery.getJSON('http://freegeoip.net/json/', function(location) {
  // example where I update content on the page.
  jQuery('#city').html(location.city);
  jQuery('#region-code').html(location.region_code);
  jQuery('#region-name').html(location.region_name);
  jQuery('#areacode').html(location.areacode);
  jQuery('#ip').html(location.ip);
  jQuery('#zipcode').html(location.zipcode);
  jQuery('#longitude').html(location.longitude);
  jQuery('#latitude').html(location.latitude);
  jQuery('#country-name').html(location.country_name);
  jQuery('#country-code').html(location.country_code);
});
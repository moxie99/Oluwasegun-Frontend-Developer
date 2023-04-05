<?php
// Set your API key here
$api_key = 'I give the value of api key here';

// Set the API endpoint URL
$endpoint_url = 'https://api.spacexdata.com/v4/capsules';

// Create a new cURL session
$curl = curl_init();

// Set the cURL options
curl_setopt_array($curl, array(
  CURLOPT_URL => $endpoint_url,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer ' . $api_key,
    'Content-Type: application/json'
  )
));

// Send the request and get the response
$response = curl_exec($curl);

// Check for errors
if (curl_errno($curl)) {
  $error_msg = curl_error($curl);
  // Handle the error
} else {
  // Handle the response
  $json_data = json_decode($response, true);
  // Do something with the data
}

// Close the cURL session
curl_close($curl);
?>

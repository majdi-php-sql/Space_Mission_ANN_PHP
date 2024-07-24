// This Neural Network & Code designed & developed by Majdi M. S. Awad
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Rest API Client Side Demo</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <style>
        .btn {
            background-color: #7393B3;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="container">
        <br></br>
        <div class="form-group">
            <p>Follow the steps defined in the "index.php" file</p>
            <p>Refresh the page to see the prediction</p>
        </div>
        <h4>
            <?php
            session_start();
            if(isset($_SESSION['lastpage']) && $_SESSION['lastpage'] == __FILE__) { 
                if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') 
                    $url = "https://"; 
                else
                    $url = "http://"; 

                $url .= $_SERVER['HTTP_HOST'];
                $url .= $_SERVER['REQUEST_URI'];
                $url_components = parse_url($url);
                parse_str($url_components['query'], $params);

                $num0 = $params['num0'];
                $space_x = intval($num0);
                $num1 = $params['num1'];
                $boein_g = intval($num1);
                $num2 = $params['num2'];
                $martin__marietta = intval($num2);
                $num3 = $params['num3'];
                $us_air_fo_rce = intval($num3);
                $num4 = $params['num4'];
                $european_space_agency = intval($num4);
                $num5 = $params['num5'];
                $brazilian_space_agency = intval($num5);
                $num6 = $params['num6'];
                $arianespace = intval($num6);
                $num7 = $params['num7'];
                $falcon = intval($num7);
                $num8 = $params['num8'];
                $delta = intval($num8);
                $num9 = $params['num9'];
                $titan = intval($num9);
                $num10 = $params['num10'];
                $ariane = intval($num10);
                $num11 = $params['num11'];
                $vls = intval($num11);
                $num12 = $params['num12'];
                $vega = intval($num12);
                $num13 = $params['num13'];
                $li_ftoff_thrust_kn = intval($num13);
                $num14 = $params['num14'];
                $payload_to_orbit_kg = intval($num14);
                $num15 = $params['num15'];
                $rocket_height_m = intval($num15);
                $num16 = $params['num16'];
                $fairin_g_diameter_m = intval($num16);
                $num17 = $params['num17'];
                $low_earth_orbit = intval($num17);
                $num18 = $params['num18'];
                $geostationary_transfer_orbit = intval($num18);
                $num19 = $params['num19'];
                $medium_earth_orbit = intval($num19);
                $num20 = $params['num20'];
                $sun_synchronous_orbit = intval($num20);
                $num21 = $params['num21'];
                $polar_orbit = intval($num21);
                $num22 = $params['num22'];
                $high_earth_orbit = intval($num22);
                $num23 = $params['num23'];
                $sun_earth_orbit = intval($num23);
                $num24 = $params['num24'];
                $heliocentric_orbit = intval($num24);
                $num25 = $params['num25'];
                $subo_rbital = intval($num25);
                $num26 = $params['num26'];
                $mars_orbit = intval($num26);
                $num27 = $params['num27'];
                $earth_moon_l_two__orbit = intval($num27);

                if(
                    is_numeric($num0) &&
                    is_numeric($num1) &&
                    is_numeric($num2) &&
                    is_numeric($num3) &&
                    is_numeric($num4) &&
                    is_numeric($num5) &&
                    is_numeric($num6) &&
                    is_numeric($num7) &&
                    is_numeric($num8) &&
                    is_numeric($num9) &&
                    is_numeric($num10) &&
                    is_numeric($num11) &&
                    is_numeric($num12) &&
                    is_numeric($num13) &&
                    is_numeric($num14) &&
                    is_numeric($num15) &&
                    is_numeric($num16) &&
                    is_numeric($num17) &&
                    is_numeric($num18) &&
                    is_numeric($num19) &&
                    is_numeric($num20) &&
                    is_numeric($num21) &&
                    is_numeric($num22) &&
                    is_numeric($num23) &&
                    is_numeric($num24) &&
                    is_numeric($num25) &&
                    is_numeric($num26) &&
                    is_numeric($num27)
                ) {
                    $status = 200;
                    $status_msg = 'valid parameters';
                } else {
                    $status = 400;
                    $status_msg = 'invalid parameters';
                }

                $scaled_space_x = $space_x * 2 / 1 - 1;
                $scaled_boein_g = $boein_g * 2 / 1 - 1;
                $scaled_martin__marietta = $martin__marietta * 2 / 1 - 1;
                $scaled_us_air_fo_rce = $us_air_fo_rce * 2 / 1 - 1;
                $scaled_european_space_agency = $european_space_agency * 2 / 1 - 1;
                $scaled_brazilian_space_agency = $brazilian_space_agency * 2 / 1 - 1;
                $scaled_arianespace = $arianespace * 2 / 1 - 1;
                $scaled_falcon = $falcon * 2 / 1 - 1;
                $scaled_delta = $delta * 2 / 1 - 1;
                $scaled_titan = $titan * 2 / 1 - 1;
                $scaled_ariane = $ariane * 2 / 1 - 1;
                $scaled_vls = $vls * 2 / 1 - 1;
                $scaled_vega = $vega * 2 / 1 - 1;
                $scaled_li_ftoff_thrust_kn = ($li_ftoff_thrust_kn - 5318.350098) / 2683.75;
                $scaled_payload_to_orbit_kg = ($payload_to_orbit_kg - 10130.2002) / 8307.179688;
                $scaled_rocket_height_m = ($rocket_height_m - 56.05830002) / 16.62989998;
                $scaled_fairin_g_diameter_m = ($fairin_g_diameter_m - 4.232450008) / 1.297140002;
                $scaled_low_earth_orbit = $low_earth_orbit * 2 / 1 - 1;
                $scaled_geostationary_transfer_orbit = $geostationary_transfer_orbit * 2 / 1 - 1;
                $scaled_medium_earth_orbit = $medium_earth_orbit * 2 / 1 - 1;
                $scaled_sun_synchronous_orbit = $sun_synchronous_orbit * 2 / 1 - 1;
                $scaled_polar_orbit = $polar_orbit * 2 / 1 - 1;
                $scaled_high_earth_orbit = $high_earth_orbit * 2 / 1 - 1;
                $scaled_sun_earth_orbit = $sun_earth_orbit * 2 / 1 - 1;
                $scaled_heliocentric_orbit = $heliocentric_orbit * 2 / 1 - 1;
                $scaled_subo_rbital = $subo_rbital * 2 / 1 - 1;
                $scaled_mars_orbit = $mars_orbit * 2 / 1 - 1;
                $scaled_earth_moon_l_two__orbit = $earth_moon_l_two__orbit * 2 / 1 - 1;

                $perceptron_layer_1_output_0 = tanh(
                    -0.0942795 +
                    ($scaled_space_x * 0.702067) +
                    ($scaled_boein_g * -0.0170059) +
                    ($scaled_martin__marietta * 0.0470749) +
                    ($scaled_us_air_fo_rce * -0.47815) +
                    ($scaled_european_space_agency * -0.197814) +
                    ($scaled_brazilian_space_agency * 0.00383229) +
                    ($scaled_arianespace * -0.132937) +
                    ($scaled_falcon * -0.417503) +
                    ($scaled_delta * 0.523223) +
                    ($scaled_titan * 0.31237) +
                    ($scaled_ariane * 0.37118) +
                    ($scaled_vls * 0.137667) +
                    ($scaled_vega * 0.162865) +
                    ($scaled_li_ftoff_thrust_kn * -0.455865) +
                    ($scaled_payload_to_orbit_kg * -0.28675) +
                    ($scaled_rocket_height_m * 0.256828) +
                    ($scaled_fairin_g_diameter_m * 0.142462) +
                    ($scaled_low_earth_orbit * -0.27272) +
                    ($scaled_geostationary_transfer_orbit * -0.482047) +
                    ($scaled_medium_earth_orbit * -0.462576) +
                    ($scaled_sun_synchronous_orbit * 0.369507) +
                    ($scaled_polar_orbit * 0.0185951) +
                    ($scaled_high_earth_orbit * 0.0922492) +
                    ($scaled_sun_earth_orbit * -0.0870965) +
                    ($scaled_heliocentric_orbit * -0.172303) +
                    ($scaled_subo_rbital * -0.162662) +
                    ($scaled_mars_orbit * -0.319743) +
                    ($scaled_earth_moon_l_two__orbit * -0.0856191)
                );
                $perceptron_layer_1_output_1 = tanh(
                    -0.422752 +
                    ($scaled_space_x * -0.258938) +
                    ($scaled_boein_g * -0.214319) +
                    ($scaled_martin__marietta * -0.42923) +
                    ($scaled_us_air_fo_rce * -0.375662) +
                    ($scaled_european_space_agency * -0.0476738) +
                    ($scaled_brazilian_space_agency * 0.10171) +
                    ($scaled_arianespace * 0.370183) +
                    ($scaled_falcon * 0.25583) +
                    ($scaled_delta * 0.302148) +
                    ($scaled_titan * -0.337364) +
                    ($scaled_ariane * 0.214177) +
                    ($scaled_vls * -0.0696817) +
                    ($scaled_vega * -0.0187755) +
                    ($scaled_li_ftoff_thrust_kn * 0.362849) +
                    ($scaled_payload_to_orbit_kg * 0.215) +
                    ($scaled_rocket_height_m * 0.31683) +
                    ($scaled_fairin_g_diameter_m * 0.00323973) +
                    ($scaled_low_earth_orbit * 0.44099) +
                    ($scaled_geostationary_transfer_orbit * 0.424313) +
                    ($scaled_medium_earth_orbit * -0.458034) +
                    ($scaled_sun_synchronous_orbit * -0.320734) +
                    ($scaled_polar_orbit * 0.360563) +
                    ($scaled_high_earth_orbit * -0.136187) +
                    ($scaled_sun_earth_orbit * 0.144218) +
                    ($scaled_heliocentric_orbit * 0.244443) +
                    ($scaled_subo_rbital * 0.314661) +
                    ($scaled_mars_orbit * -0.0178495) +
                    ($scaled_earth_moon_l_two__orbit * -0.0084962)
                );

                $perceptron_layer_2_output_0 = tanh(
                    -0.487008 +
                    ($perceptron_layer_1_output_0 * -0.0343533) +
                    ($perceptron_layer_1_output_1 * -0.0264203)
                );
                $perceptron_layer_2_output_1 = tanh(
                    -0.265716 +
                    ($perceptron_layer_1_output_0 * 0.362391) +
                    ($perceptron_layer_1_output_1 * -0.393499)
                );

                $perceptron_layer_3_output_0 = tanh(
                    -0.378593 +
                    ($perceptron_layer_2_output_0 * 0.140179) +
                    ($perceptron_layer_2_output_1 * 0.154387)
                );
                $perceptron_layer_3_output_1 = tanh(
                    0.275937 +
                    ($perceptron_layer_2_output_0 * 0.33761) +
                    ($perceptron_layer_2_output_1 * -0.462585)
                );

                $perceptron_output = tanh(
                    -0.270832 +
                    ($perceptron_layer_3_output_0 * 0.122652) +
                    ($perceptron_layer_3_output_1 * 0.113689)
                );

                $rescaled_perceptron_output = ($perceptron_output + 1) * 1 / 2;

                $output = array(
                    'scaled_perceptron_output' => $rescaled_perceptron_output,
                    'parameters_validity' => $status_msg
                );

                echo json_encode($output);
            } else {
                echo json_encode(array(
                    'parameters_validity' => 'invalid'
                ));
            }
            ?>
        </h4>
    </div>
</body>
</html>

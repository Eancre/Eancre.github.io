<?php
// Nom du fichier image
$filename = 'image.jpg'; 

// 1. Enregistrement des statistiques
$date = date('Y-m-d H:i:s');
$ip = $_SERVER['REMOTE_ADDR']; // Optionnel : pour savoir qui télécharge
$log_entry = [$date, $ip];

// Ouvrir le fichier CSV en mode "append" (ajout)
$fp = fopen('stats.csv', 'a');
fputcsv($fp, $log_entry);
fclose($fp);

// 2. Envoi du fichier au navigateur
if (file_exists($filename)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="'.basename($filename).'"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($filename));
    readfile($filename);
    exit;
} else {
    echo "L'image est introuvable sur le serveur.";
}
?>

# Journal du dispositif de consentement

Preuve de niveau « mécanisme » : chaque version du bandeau est datée, décrite et accompagnée de l'empreinte SHA-256 du fichier `_includes/consent.html`.
Les captures d'écran datées de chaque version sont conservées par l'association (hors dépôt).

## Version 1 — 25 novembre 2026

- Services concernés : Google Maps (page Contact) et HelloAsso (page Don), catégorie « Contenus tiers ».
- Bandeau : 3 boutons de même style (Tout refuser, Personnaliser, Tout accepter), aucune case pré-cochée, pas de fermeture sans choix.
- Choix enregistré dans le navigateur (`localStorage`, clé `eancre_consent`), valable 180 jours, redemandé si la version change.
- Réglages modifiables sur la page `/cookies/` ; lien « Cookies » dans le pied de page.
- Sans choix ou en cas de refus : aucun contenu externe n'est chargé ; encadrés avec lien direct.
- Aucune mesure d'audience ni publicité à ce jour (GTM retiré du site).
- SHA-256 de `_includes/consent.html` : `4f2bdec8187cc5b9865eefb11b2707966138d687db45890e596e6520958926f3`

## À prévoir (chantier « 3G »)

Google Ad Grants, Google Analytics, GTM : ajouter les catégories « Mesure d'audience » et « Publicité », mettre à jour la page `/cookies/`, les mentions légales et ce journal (nouvelle version).

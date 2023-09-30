# CSS Grid Layout

## Introduction à Grid
- Qu'est-ce que le Grid Layout?
- Pourquoi utiliser Grid?

## Bases de Grid
- Conteneur grid (grid container) vs Élément grid (grid item)
- Définir un conteneur grid : `display: grid` ou `display: inline-grid`

## Définir des colonnes et des lignes
- `grid-template-columns` : définir la taille et le nombre de colonnes
- `grid-template-rows` : définir la taille et le nombre de lignes
- Unités fr (fraction) pour la répartition de l'espace
- `repeat()`: pour répéter des tailles de manière concise

## Espacement et alignement
- `grid-gap`, `row-gap`, `column-gap`: définir l'espacement entre les colonnes et les lignes
- `justify-items` et `align-items`: alignement des éléments dans leur cellule
- `justify-content` et `align-content`: alignement du contenu de la grille dans son conteneur

## Placer des éléments
- `grid-column` et `grid-row`: définir la position de départ et de fin des éléments
- `grid-area`: définir un nom pour une zone de la grille
- `grid-template-areas`: définir un modèle de grille en utilisant les noms des zones

## Propriétés de l'élément grid
- `place-self`: pour l'alignement individuel d'un élément
- `z-index`: superposition d'éléments dans la grille

## Tailles de piste et fonctions de répétition
- Tailles de piste minimax avec `minmax()`
- Création de grilles responsives avec `auto-fill` et `auto-fit`

## Grille imbriquée
- Utilisation de grilles à l'intérieur d'éléments grid pour des mises en page plus complexes

## Exemples pratiques
- Mise en page d'un site Web complet avec en-tête, pied de page, barre latérale et contenu
- Grille de photos avec des tailles variables

## Avantages et inconvénients
- Quand utiliser Grid vs d'autres méthodes (comme Flexbox)
- Limitations de Grid

## Ressources et outils
- Outils de visualisation Grid en ligne
- Astuces et modèles Grid courants
- Bibliothèques et frameworks utilisant Grid


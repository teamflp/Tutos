<!-- TOC -->
* [1. Introduction](#1-introduction)
  * [Qu'est-ce que le HTML ?](#quest-ce-que-le-html-)
  * [Structure d'un document HTML](#structure-dun-document-html)
* [2. Fondamentaux](#2-fondamentaux)
  * [Les balises](#les-balises)
  * [Les attributs](#les-attributs)
  * [Les commentaires](#les-commentaires)
  * [Les entités HTML](#les-entités-html)
* [3. Structure de base et mise en forme](#3-structure-de-base-et-mise-en-forme)
  * [Les blocs](#les-blocs)
  * [Les classes et les identifiants](#les-classes-et-les-identifiants)
    * [Classes](#classes)
    * [Identifiants](#identifiants)
    * [Balises de texte](#balises-de-texte)
    * [Éléments de base](#éléments-de-base)
    * [Éléments de section](#éléments-de-section)
  * [4. Les éléments interactifs](#4-les-éléments-interactifs)
    * [* Les liens hypertextes : `<a>`](#--les-liens-hypertextes--a)
    * [Les boutons : `<button>`](#les-boutons--button)
    * [Les formulaires](#les-formulaires)
    * [Les types d'entrée](#les-types-dentrée)
  * [5. Les éléments multimédias](#5-les-éléments-multimédias)
    * [Les images : `<img>`](#les-images--img)
    * [Les médias : `<audio>` et `<video>`](#les-médias--audio-et-video)
  * [6. Sémantique et organisation du code](#6-sémantique-et-organisation-du-code)
    * [Les balises de sémantiques](#les-balises-de-sémantiques)
  * [Les balises de programmation](#les-balises-de-programmation)
  * [Conclusion](#conclusion)
  * [Ressources](#ressources)
<!-- TOC -->

------------------------------------------------------------------------------------------------

# 1. Introduction

Le HTML (HyperText Markup Language) est le langage de balisage standardisé qui forme la structure des pages web. Chaque élément d'une page web, que ce soit du texte, une image, un lien ou même simplement une couleur ou une marge, est en quelque sorte influencé ou contrôlé par le HTML. Dans ce guide, nous allons explorer les fondamentaux du HTML, des balises simples aux éléments interactifs et multimédias, en passant par les balises sémantiques qui aident à donner un sens à la structure de votre contenu.

Comprendre le HTML est essentiel pour quiconque souhaite créer ou maintenir des sites web. Que vous soyez un débutant total ou que vous ayez besoin d'une remise à niveau, ce guide est conçu pour vous fournir des connaissances pratiques et utiles sur la manière de structurer efficacement vos contenus web à l'aide du HTML.

Plongez-vous dans cette aventure et découvrez les nombreuses balises, attributs et éléments qui donnent vie à l'internet tel que nous le connaissons aujourd'hui.

## Qu'est-ce que le HTML ?

Le HTML est un langage de balisage qui permet de structurer et de présenter le contenu d'une page web. Il est composé d'une série d'éléments qui indiquent au navigateur comment afficher le contenu. Chaque élément est représenté par une balise. Les balises HTML sont des mots entourés de chevrons (par exemple `<html>`).

La plupart des balises HTML sont composées d'une balise ouvrante et d'une balise fermante. La balise ouvrante est utilisée pour indiquer le début d'un élément, tandis que la balise fermante indique la fin. Par exemple, la balise `<p>` est utilisée pour indiquer le début d'un paragraphe, tandis que la balise `</p>` indique la fin du paragraphe. Entre les deux balises, vous pouvez placer du texte, des images, des liens et d'autres éléments.

Il existe également des balises qui n'ont pas de balise fermante, comme la balise `<img>`. Ces balises sont appelées balises vides ou auto-fermantes. Elles sont utilisées pour insérer des images, des vidéos, des lignes de séparation et d'autres éléments dans une page web.

## Structure d'un document HTML

Un document HTML est composé de deux parties principales : l'en-tête et le corps. L'en-tête contient des informations sur le document, telles que le titre, l'encodage des caractères et les liens vers d'autres ressources (comme les feuilles de style CSS). Le corps contient le contenu de la page web.

Voici un exemple de document HTML :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Titre de la page</title>
</head>

<body>
    <h1>Titre principal</h1>
    <p>Paragraphe</p>
</body>
</html>
```

* La première ligne `<!DOCTYPE html>` de ce document est une déclaration de type de document (DTD). Il indique au navigateur que le document est un document HTML5. La ligne suivante est la balise `<html>`. Cette balise indique au navigateur que tout ce qui se trouve entre les balises ouvrante et fermante est un document HTML. La balise `<html>` est également appelée élément racine.
* La balise `<head>` contient des informations sur le document, telles que le titre de la page, les liens vers les feuilles de style CSS et les scripts JavaScript, ainsi que les métadonnées. Les métadonnées sont des informations sur le document qui ne sont pas affichées directement dans le navigateur. Par exemple, la balise `<meta charset="UTF-8">` indique au navigateur que le document est encodé en UTF-8, ce qui permet d'afficher correctement les caractères spéciaux.
* La balise `<title>` est utilisée pour définir le titre de la page. Le titre de la page est affiché dans l'onglet du navigateur et est utilisé par les moteurs de recherche pour déterminer le contenu de la page.
* La balise `<body>` contient le contenu de la page web. C'est là que vous placez le texte, les images, les liens, les listes et tous les autres éléments que vous souhaitez afficher sur la page.
* La balise `<h1>` est utilisée pour définir le titre principal de la page. Il existe six niveaux de titres, de `<h1>` à `<h6>`. Le titre principal est le titre le plus important de la page. Il est généralement placé en haut de la page et est souvent le premier élément que les visiteurs voient lorsqu'ils visitent une page web.
* La balise `<p>` est utilisée pour définir un paragraphe. Les paragraphes sont généralement utilisés pour afficher de longs blocs de texte. Les paragraphes sont généralement séparés par des lignes vides.
* Les balises `<h1>` et `<p>` sont des balises de niveau bloc. Les balises de niveau bloc sont utilisées pour structurer le contenu de la page. Elles sont généralement utilisées pour afficher de grands blocs de contenu, tels que des paragraphes, des listes, des images, etc. Les balises de niveau bloc commencent généralement sur une nouvelle ligne et occupent toute la largeur de la page.
* La balise `</body>` indique la fin du corps du document. La balise `</html>` indique la fin du document HTML.
* La balise `</html>` indique la fin du document HTML.

# 2. Fondamentaux

## Les balises

En HTML, une balise est un élément qui délimite et définit le contenu et la structure de la page. Les balises sont généralement constituées d'un nom d'élément entouré de chevrons (< et >). La plupart des balises HTML fonctionnent par paire : une balise d'ouverture et une balise de fermeture. Par exemple, pour définir un paragraphe, on utilise la balise d'ouverture <p> suivie du contenu du paragraphe, puis la balise de fermeture </p>. Les balises de fermeture sont identiques aux balises d'ouverture, à l'exception du slash (/) qui précède le nom de l'élément.

```html
<p>Contenu du paragraphe</p>
```

## Les attributs

Les attributs sont utilisés pour fournir des informations supplémentaires sur un élément. Ils sont généralement spécifiés dans la balise d'ouverture et sont composés d'un nom et d'une valeur. Le nom et la valeur sont séparés par un signe égal (=). La valeur est ensuite placée entre guillemets doubles (""). Par exemple, la balise `<img>` est utilisée pour insérer une image dans une page web. Elle prend un attribut obligatoire, src, qui spécifie l'emplacement de l'image. L'attribut src est composé d'un nom (src) et d'une valeur ("image.jpg").

```html
<img src="image.jpg" alt="">
```

## Les commentaires

Les commentaires sont utilisés pour ajouter des notes à un document HTML. Ils sont généralement utilisés pour fournir des informations supplémentaires sur le code HTML, ce qui peut être utile lors de la modification du code. Les commentaires sont ignorés par le navigateur et ne sont donc pas affichés sur la page web. Les commentaires sont généralement placés entre les balises `<!--` et `-->`.

```html
<!-- Commentaire -->
```

## Les entités HTML

Les entités HTML sont utilisées pour afficher des caractères spéciaux dans une page web. Par exemple, si vous souhaitez afficher un signe de dollar ($), vous devez utiliser l'entité HTML `&dollar;`. Voici quelques-unes des entités HTML les plus courantes :

```html
&dollar; : $
&cent; : ¢
&euro; : €
&copy; : ©
&reg; : ®
&trade; : ™
```

# 3. Structure de base et mise en forme

## Les blocs

Les balises de niveau bloc sont utilisées pour structurer le contenu de la page. Elles sont généralement utilisées pour afficher de grands blocs de contenu, tels que des paragraphes, des listes, des images, etc. Les balises de niveau bloc commencent généralement sur une nouvelle ligne et occupent toute la largeur de la page. Voici quelques-unes des balises de niveau bloc les plus courantes :

* `<div>` : La balise `<div>` est utilisée pour créer une division ou une section dans une page web. Elle est généralement utilisée pour créer des sections de contenu qui peuvent être stylisées à l'aide de CSS.

```html
<div>Contenu de la division</div>
```

* `<span>` : La balise `<span>` est utilisée pour créer une division ou une section dans une page web. Elle est généralement utilisée pour créer des sections de contenu qui peuvent être stylisées à l'aide de CSS.

```html
<span>Contenu de la division</span>
```

* `<header>` : La balise `<header>` est utilisée pour définir l'en-tête d'une page web ou d'une section. Elle est généralement utilisée pour afficher le titre ou le logo d'une page web.

```html
<header>Contenu de l'en-tête</header>
```

* `<footer>` : La balise `<footer>` est utilisée pour définir le pied de page d'une page web ou d'une section. Elle est généralement utilisée pour afficher les informations de contact, les liens vers les médias sociaux, les informations de copyright.

```html
<footer>Contenu du pied de page</footer>
```

* `<main>` : La balise `<main>` est utilisée pour définir le contenu principal d'une page web. Elle est généralement utilisée pour afficher le contenu principal d'une page web.

```html
<main>Contenu principal</main>
```

* `<article>` : La balise `<article>` est utilisée pour définir un article autonome dans une page web. Elle est généralement utilisée pour afficher des articles de blog, des commentaires, des messages de forum, etc.

```html
<article>Contenu de l'article</article>
```

* `<section>` : La balise `<section>` est utilisée pour définir une section dans une page web. Elle est généralement utilisée pour afficher des sections de contenu qui peuvent être stylisées à l'aide de CSS.

```html
<section>Contenu de la section</section>
```

* `<aside>` : La balise `<aside>` est utilisée pour définir un contenu à part dans une page web. Elle est généralement utilisée pour afficher des contenus qui sont séparés du contenu principal de la page.

```html
<aside>Contenu à part</aside>
```

* `<nav>` : La balise `<nav>` est utilisée pour définir une section de navigation dans une page web. Elle est généralement utilisée pour afficher des liens vers d'autres pages web.

```html
<nav>Contenu de la navigation</nav>
```

* `<address>` : La balise `<address>` est utilisée pour définir les informations de contact dans une page web. Elle est généralement utilisée pour afficher les informations de contact, telles que l'adresse, le numéro de téléphone, l'adresse e-mail, etc.

```html
<address>Contenu de l'adresse</address>
```

* `<blockquote>` : La balise `<blockquote>` est utilisée pour définir une longue citation dans une page web. Elle est généralement utilisée pour afficher des longues citations.

```html
<blockquote>Contenu de la citation longue</blockquote>
```

* `<cite>` : La balise `<cite>` est utilisée pour définir une référence à une source dans une page web. Elle est généralement utilisée pour afficher des références à des livres, des articles, etc.

```html
<cite>Contenu de la référence</cite>
```

* `<details>` : La balise `<details>` est utilisée pour définir des détails supplémentaires dans une page web. Elle est généralement utilisée pour afficher des informations supplémentaires qui peuvent être masquées ou affichées sur demande.

```html
<details>Contenu des détails</details>
```

* `<summary>` : La balise `<summary>` est utilisée pour définir un résumé dans une page web. Elle est généralement utilisée pour afficher un résumé des détails.

```html
<summary>Contenu du résumé</summary>
```

* `<figure>` : La balise `<figure>` est utilisée pour définir une figure dans une page web. Elle est généralement utilisée pour afficher des images, des diagrammes, des illustrations, etc.

```html
<figure>Contenu de la figure</figure>
```

* `<figcaption>` : La balise `<figcaption>` est utilisée pour définir une légende pour une figure dans une page web. Elle est généralement utilisée pour afficher une légende pour une figure.

```html
<figcaption>Contenu de la légende</figcaption>
```

* `<time>` : La balise `<time>` est utilisée pour définir une date ou une heure dans une page web. Elle est généralement utilisée pour afficher une date ou une heure.

```html
<time>Contenu de la date ou de l'heure</time>
```

* `<code>` : La balise `<code>` est utilisée pour définir du code informatique dans une page web. Elle est généralement utilisée pour afficher du code informatique.

```html
<code>Contenu du code informatique</code>
```

* `<pre>` : La balise `<pre>` est utilisée pour définir du texte préformaté dans une page web. Elle est généralement utilisée pour afficher du texte préformaté.

```html
<pre>Contenu du texte préformaté</pre>
```

* `<kbd>` : La balise `<kbd>` est utilisée pour définir du texte préformaté dans une page web. Elle est généralement utilisée pour afficher du texte préformaté.

```html
<kbd>Contenu du texte préformaté</kbd>
```

* `<samp>` : La balise `<samp>` est utilisée pour définir du texte préformaté dans une page web. Elle est généralement utilisée pour afficher du texte préformaté.

```html
<samp>Contenu du texte préformaté</samp>
```

* `<var>` : La balise `<var>` est utilisée pour définir une variable dans une page web. Elle est généralement utilisée pour afficher des variables.

```html
<var>Contenu de la variable</var>
```

## Les classes et les identifiants

Les classes et les identifiants sont utilisés pour identifier des éléments spécifiques dans une page web. Ils sont généralement utilisés pour appliquer des styles CSS à des éléments spécifiques. Les classes et les identifiants sont spécifiés dans la balise d'ouverture et sont composés d'un nom et d'une valeur. Le nom et la valeur sont séparés par un signe égal (=). La valeur est ensuite placée entre guillemets doubles (""). Les classes sont spécifiées à l'aide de l'attribut class, tandis que les identifiants sont spécifiés à l'aide de l'attribut id. Voici quelques exemples de classes et d'identifiants :

### Classes

**Définition** : Une classe est un attribut qui peut être ajouté à n'importe quel élément HTML pour le marquer comme faisant partie d'un groupe d'éléments ayant des caractéristiques communes.

**Usage** : Les classes sont souvent utilisées pour appliquer un style CSS ou un comportement JavaScript à plusieurs éléments à la fois.

**Syntaxe** : `class="nomDeLaClasse"`

Exemple :

```html
<div class="classe">Contenu de la division</div>
<header class="classe">Contenu de l'en-tête</header>
```

### Identifiants

**Définition :** L'identifiant est un attribut qui peut être ajouté à n'importe quel élément HTML pour le marquer comme unique sur la page.

**Usage :** Les identifiants sont utilisés pour cibler un élément spécifique, que ce soit pour lui appliquer un style, un comportement ou pour le référencer via des fragments d'URL.

**Syntaxe :** `id="nomDeLIdentifiant"`

Exemple :

```html
<div id="identifiant">Contenu de la division</div>
```

### Balises de texte

Les balises de texte sont utilisées pour afficher du texte sur une page web. Elles sont généralement utilisées pour afficher des paragraphes, des titres, des listes, des liens, etc. Voici quelques-unes des balises de texte les plus courantes :

* `<h1>` - `<h6>` : Les balises de titre sont utilisées pour définir les titres et les sous-titres de la page. Il existe six niveaux de titres, de `<h1>` à `<h6>`. Le titre principal de la page est généralement défini avec la balise `<h1>`. Les balises de titre sont des balises de niveau bloc, ce qui signifie qu'elles commencent généralement sur une nouvelle ligne et occupent toute la largeur de la page.

```html
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<h3>Sous-titre</h3>
<h4>Sous-titre</h4>
<h5>Sous-titre</h5>
<h6>Sous-titre</h6>
```

* `<p>` : La balise `<p>` est utilisée pour définir un paragraphe. Les paragraphes sont généralement utilisés pour afficher de longs blocs de texte. Les paragraphes sont généralement séparés par des lignes vides.

```html
<p>Contenu du paragraphe</p>
```

* `<br>` : La balise `<br>` est utilisée pour insérer un saut de ligne. Elle est généralement utilisée pour insérer un saut de ligne dans un paragraphe.

```html
<p>Contenu du paragraphe<br>Contenu du paragraphe</p>
```

* `<hr>` : La balise `<hr>` est utilisée pour insérer une ligne de séparation. Elle est généralement utilisée pour séparer les sections d'une page web.

```html
<p>Contenu du paragraphe</p>
<hr>
<p>Contenu du paragraphe</p>
```

* `<strong>` : La balise `<strong>` est utilisée pour mettre en évidence le texte. Elle est généralement utilisée pour mettre en évidence les mots ou les phrases importantes.

```html
<p>Contenu du paragraphe avec un <strong>mot important</strong></p>
```

* `<b>` : La balise `<b>` est utilisée pour mettre en gras le texte. Elle est généralement utilisée pour mettre en gras le texte.

```html
<p>Contenu du paragraphe avec du <b>texte en gras</b></p>
```

* `<strong>` : La balise `<strong>` est utilisée pour mettre en gras le texte. Elle est généralement utilisée pour mettre en gras le texte.

```html
<p>Contenu du paragraphe avec du <strong>texte en gras</strong></p>
```

* `<i>` : La balise `<i>` est utilisée pour mettre en italique le texte. Elle est généralement utilisée pour mettre en italique le texte.

```html
<p>Contenu du paragraphe avec du <i>texte en italique</i></p>
```

* `<em>` : La balise `<em>` est utilisée pour mettre en italique le texte. Elle est généralement utilisée pour mettre en italique le texte.

```html
<p>Contenu du paragraphe avec du <em>texte en italique</em></p>
```

* `<u>` : La balise `<u>` est utilisée pour souligner le texte. Elle est généralement utilisée pour souligner le texte.

```html
<p>Contenu du paragraphe avec du <u>texte souligné</u></p>
```

* `<s>` : La balise `<s>` est utilisée pour barrer le texte. Elle est généralement utilisée pour barrer le texte.

```html
<p>Contenu du paragraphe avec du <s>texte barré</s></p>
```

* `<small>` : La balise `<small>` est utilisée pour afficher le texte en plus petit. Elle est généralement utilisée pour afficher le texte en plus petit.

```html
<p>Contenu du paragraphe avec du <small>texte plus petit</small></p>
```

* `<mark>` : La balise `<mark>` est utilisée pour mettre en évidence le texte. Elle est généralement utilisée pour mettre en évidence les mots ou les phrases importantes.

```html
<p>Contenu du paragraphe avec un <mark>mot important</mark></p>
```

* `<del>` : La balise `<del>` est utilisée pour barrer le texte. Elle est généralement utilisée pour indiquer que le texte a été supprimé.

```html
<p>Contenu du paragraphe avec un <del>mot supprimé</del></p>
```

* `<ins>` : La balise `<ins>` est utilisée pour souligner le texte. Elle est généralement utilisée pour indiquer que le texte a été ajouté.

```html
<p>Contenu du paragraphe avec un <ins>mot ajouté</ins></p>
```

* `<sub>` : La balise `<sub>` est utilisée pour afficher le texte en exposant. Elle est généralement utilisée pour afficher les indices chimiques et les formules mathématiques.

```html
<p>Contenu du paragraphe avec un <sub>indice</sub></p>
```

* `<sup>` : La balise `<sup>` est utilisée pour afficher le texte en exposant. Elle est généralement utilisée pour afficher les indices chimiques et les formules mathématiques.

```html
<p>Contenu du paragraphe avec un <sup>exposant</sup></p>
```

* `<q>` : La balise `<q>` est utilisée pour afficher une courte citation. Elle est généralement utilisée pour afficher des courtes citations.

```html
<p>Contenu du paragraphe avec une <q>courte citation</q></p>
```

* `<blockquote>` : La balise `<blockquote>` est utilisée pour afficher une longue citation. Elle est généralement utilisée pour afficher des longues citations.

```html
<blockquote>
    <p>Contenu de la citation longue</p>
</blockquote>
```

* `<abbr>` : La balise `<abbr>` est utilisée pour afficher une abréviation. Elle est généralement utilisée pour afficher des abréviations.

```html
<p>Contenu du paragraphe avec une <abbr title="HyperText Markup Language">HTML</abbr></p>
```

* `<cite>` : La balise `<cite>` est utilisée pour afficher une référence à une source. Elle est généralement utilisée pour afficher des références à des livres, des articles, etc.

```html
<p>Contenu du paragraphe avec une <cite>référence</cite></p>
```

* `<code>` : La balise `<code>` est utilisée pour afficher du code informatique. Elle est généralement utilisée pour afficher du code informatique.

```html
<p>Contenu du paragraphe avec du <code>code informatique</code></p>
```

* `<pre>` : La balise `<pre>` est utilisée pour afficher du texte préformaté. Elle est généralement utilisée pour afficher du texte préformaté.

```html
<pre>Contenu du paragraphe avec du texte préformaté</pre>
```

* `<kbd>` : La balise `<kbd>` est utilisée pour afficher du texte préformaté. Elle est généralement utilisée pour afficher du texte préformaté.

```html
<p>Contenu du paragraphe avec du <kbd>texte préformaté</kbd></p>
```

* `<samp>` : La balise `<samp>` est utilisée pour afficher du texte préformaté. Elle est généralement utilisée pour afficher du texte préformaté.

```html
<p>Contenu du paragraphe avec du <samp>texte préformaté</samp></p>
```

* `<var>` : La balise `<var>` est utilisée pour afficher une variable. Elle est généralement utilisée pour afficher des variables.

```html
<p>Contenu du paragraphe avec une <var>variable</var></p>
```

* `<a>` : La balise `<a>` est utilisée pour créer un lien hypertexte. Elle est généralement utilisée pour créer des liens vers d'autres pages web, des fichiers, des adresses e-mail, des emplacements dans la même page, etc.

```html
<a href="https://www.example.com">Lien hypertexte</a>
```

**Les listes non ordonnées et ordonnées**

**Non ordonnées**

Les listes non ordonnées sont utilisées pour créer des listes d'éléments qui n'ont pas besoin d'être ordonnés. Elles sont généralement utilisées pour créer des listes d'éléments qui n'ont pas besoin d'être ordonnés.

`<ul>` : La balise `<ul>` est utilisée pour créer une liste non ordonnée. Elle est généralement utilisée pour créer des listes d'éléments qui n'ont pas besoin d'être ordonnés.

```html
    <ul>
        <li>Élément de liste</li>
        <li>Élément de liste</li>
        <li>Élément de liste</li>
    </ul>
```

**Ordonnées**

Les listes ordonnées sont utilisées pour créer des listes d'éléments qui doivent être ordonnés. Elles sont généralement utilisées pour créer des listes d'éléments qui doivent être ordonnés.
`<ol>` : La balise `<ol>` est utilisée pour créer une liste ordonnée. Elle est généralement utilisée pour créer des listes d'éléments qui doivent être ordonnés.

```html
<ol>
    <li>Élément de liste</li>
    <li>Élément de liste</li>
    <li>Élément de liste</li>
</ol>
```

`<dl>` : La balise `<dl>` est utilisée pour créer une liste de définitions. Elle est généralement utilisée pour créer des listes de termes et de définitions.

```html
<dl>
    <dt>Terme</dt>
    <dd>Définition</dd>
    <dt>Terme</dt>
    <dd>Définition</dd>
    <dt>Terme</dt>
    <dd>Définition</dd>
</dl>
```

`<dt>` : La balise `<dt>` est utilisée pour définir un terme dans une liste de définitions. Elle est généralement utilisée avec la balise `<dl>`.

```html
<dl>
    <dt>Terme</dt>
    <dd>Définition</dd>
    <dt>Terme</dt>
    <dd>Définition</dd>
    <dt>Terme</dt>
    <dd>Définition</dd>
</dl>
```

`<dd>` : La balise `<dd>` est utilisée pour définir une définition dans une liste de définitions. Elle est généralement utilisée avec la balise `<dl>`.

```html
<dl>
    <dt>Terme</dt>
    <dd>Définition</dd>
    <dt>Terme</dt>
    <dd>Définition</dd>
    <dt>Terme</dt>
    <dd>Définition</dd>
</dl>
```

**Les tableaux**

Les tableaux sont utilisés pour afficher des données dans une page web. Ils sont généralement utilisés pour afficher des données tabulaires, telles que des listes de noms, des prix, des dates, etc.
Bien qu'ils soient parfois utilisés à des fins de mise en page, cette pratique est déconseillée. Les tableaux devraient principalement être utilisés pour afficher des données, comme des feuilles de calcul ou des résultats. Voici quelques-unes des balises de tableau les plus courantes :

### Éléments de base

* `<table>` : La balise `<table>` est utilisée pour créer un tableau.

```html
<table></table>
```

* `<tr>` : La balise `<tr>` représente une ligne du tableau. Chaque tableau contient une ou plusieurs lignes.

```html
<tr></tr>
```

* `<td>` : La balise `<td>` Définit une cellule de données dans le tableau. Elle représente les données proprement dites. Chaque ligne du tableau contient une ou plusieurs cellules de données.

```html
<td>Le contenu</td>
```

* `<th>` : La balise `<th>` est utilisée pour définir une cellule d'en-tête dans un tableau. Elle représente les en-têtes de colonne ou de ligne. Chaque ligne du tableau contient une ou plusieurs cellules d'en-tête. Le texte dans un `<th>` est généralement en gras et centré.

```html
<th>Titre de l'en-tête</th>
```

* `<thead>` : La balise `<thead>` utilisée pour regrouper les en-têtes de colonne dans un tableau. Il peut contenir plusieurs lignes `<tr>` d'en-têtes `<th>`.

```html
<thead>
    <tr>
        <th>Entête de la colonne</th>
        <th>Entête de la colonne</th>
        <th>Entête de la colonne</th>
    </tr>
</thead>
```

* `<tbody>` : La balise `<tbody>` est utilisée pour regrouper le corps du tableau dans un tableau. Il peut contenir plusieurs lignes `<tr>` de cellules `<td>`.

```html
<tbody>
    <tr>
        <td>Contenu de la cellule</td>
        <td>Contenu de la cellule</td>
        <td>Contenu de la cellule</td>
    </tr>
    <tr>
        <td>Contenu de la cellule</td>
        <td>Contenu de la cellule</td>
        <td>Contenu de la cellule</td>
    </tr>
</tbody>
```

* `<tfoot>` : La balise `<tfoot>` est utilisée pour regrouper le pied de page du tableau dans un tableau. Il peut contenir plusieurs lignes `<tr>` de cellules `<td>`.

```html
<tfoot>
    <tr>
        <td>Pied de page de la cellule</td>
        <td>Pied de page de la cellule</td>
        <td>Pied de page de la cellule</td>
    </tr>
</tfoot>
```

Exemple de tableau complet :

```html
<table> Définition du tableau
    <thead>
        <tr>
            <th>Nom</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>28</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>32</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th>Moyenne d'âge</th>
            <td>30</td>
        </tr>
    </tfoot>
</table>
```

### Éléments de section

* `<caption>` : La balise `<caption>` est utilisée pour définir le titre du tableau. Elle est généralement utilisée pour afficher le titre du tableau.

```html
<caption>Titre du tableau</caption>
```

* `<col>` : La balise `<col>` est utilisée pour définir les attributs de colonne pour chaque colonne du tableau. Elle est généralement utilisée pour définir la largeur, la couleur et d'autres attributs de colonne.
  Cet élément est souvent omis dans les explications basiques sur les tableaux en HTML, mais il peut être très utile pour appliquer des styles à des colonnes entières sans avoir à cibler chaque cellule individuellement.
  
L'élément `<col>` est utilisé en conjonction avec l'élément <colgroup> pour spécifier des propriétés pour une ou plusieurs colonnes dans un tableau.

**Comment ça marche ?**

`<colgroup> :` Cet élément enveloppe les éléments `<col>`. Chaque `<col>` à l'intérieur de `<colgroup>` représente une colonne du tableau.

`<col>` : Il définit les propriétés d'une colonne. Habituellement, on l'utilise pour appliquer des styles CSS à une colonne entière.

**Exemple d'utilisation**

Disons que vous avez un tableau avec trois colonnes, et que vous voulez que la première colonne ait une largeur de 50px, et la deuxième colonne une couleur de fond jaune. Vous pouvez le faire comme ceci :

```html
<table>
    <colgroup>
        <col style="width: 50px;">
        <col style="background-color: yellow;">
        <col>
    </colgroup>
    <thead>
        <tr>
            <th>Colonne 1</th>
            <th>Colonne 2</th>
            <th>Colonne 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
        </tr>
    </tbody>
</table>
```

Dans cet exemple, la première colonne du tableau aura une largeur de 50px et la deuxième colonne aura une couleur de fond jaune. La troisième colonne n'a pas de styles spécifiques définis.

**Remarques**

1. * Vous pouvez utiliser l'attribut `span` avec `<col>` pour indiquer que le style doit s'appliquer à plusieurs colonnes. Par exemple, `<col span="2" style="background-color: yellow;">` appliquera un fond jaune aux deux prochaines colonnes du tableau.

2. * Le `<colgroup>` peut également être utilisé sans `<col>` pour styliser des groupes de colonnes, mais l'utilisation de `<col>` offre une granularité plus fine.

3. * Le HTML5 a limité le nombre d'attributs que l'on peut utiliser avec `<col>`. Auparavant, des attributs comme width, `align` et `valign` étaient couramment utilisés avec `<col>`, mais maintenant, il est recommandé d'utiliser CSS pour styliser les colonnes.

En somme, `<col>` et `<colgroup>` offrent une manière élégante de styliser des colonnes dans les tableaux HTML sans avoir à intervenir sur chaque cellule ou en-tête individuellement.

* `<colgroup>` : La balise `<colgroup>` est utilisée pour définir un groupe de colonnes dans un tableau. Elle est généralement utilisée pour définir les attributs de colonne pour chaque colonne du tableau.

```html
<colgroup>
    <col style="width: 50px;">
    <col style="background-color: yellow;">
    <col>
</colgroup>
```

## 4. Les éléments interactifs

### * Les liens hypertextes : `<a>`

La balise `<a>` est utilisée pour créer un lien hypertexte. Elle est généralement utilisée pour créer des liens vers d'autres pages web, des fichiers, des adresses e-mail, des emplacements dans la même page, etc.

```html
<a href="https://www.gnpinformatique.fr">GNP-INFORMATIQUE</a>
```

### Les boutons : `<button>`

La balise `<button>` est utilisée pour créer un bouton cliquable. Elle est généralement utilisée pour créer des boutons cliquables.

```html
<button>Contenu du bouton</button>
```

### Les formulaires

Les formulaires sont utilisés pour collecter des données auprès des utilisateurs. Ils sont généralement utilisés pour collecter des données telles que les noms, les adresses, les numéros de téléphone, les adresses e-mail, etc. Voici quelques-unes des balises de formulaire les plus courantes :

**Les éléments de base :**

* `<form>` : La balise `<form>` est utilisée pour créer un formulaire. Elle est généralement utilisée pour collecter des données auprès des utilisateurs.

```html
<form></form>
```

* `<input>` : La balise `<input>` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les noms, les adresses, les numéros de téléphone, les adresses e-mail, etc.

```html
<input type="text">
```

* `<textarea>` : La balise `<textarea>` est utilisée pour créer un champ de texte multiligne. Elle est utilisée pour collecter des données telles que les commentaires, les messages, etc.

```html
<textarea></textarea>
```

* `<select>` et `<option>` :
  * La balise `<select>` est utilisée pour créer une liste déroulante. Elle est généralement utilisée pour collecter des données telles que les pays, les villes, les langues, etc.
  * La balise `<option>` est utilisée pour définir une option dans une liste déroulante. Elle est généralement utilisée avec la balise `<select>`.

```html
<select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
</select>
```

* `<label>` : La balise `<label>` est utilisée pour définir une étiquette pour un élément de formulaire. Elle est généralement utilisée pour définir une étiquette pour un champ de saisie.

```html
<label>Étiquette du champ de saisie<input type="text"></label>
```

* `<fieldset>` et `<legend>` :
  * La balise `<fieldset>` est utilisée pour regrouper les éléments de formulaire. Elle est généralement utilisée pour regrouper les éléments de formulaire.
  * La balise `<legend>` est utilisée pour définir un titre pour un groupe de champs de formulaire. Elle est généralement utilisée avec la balise `<fieldset>`.

```html
<fieldset>
    <legend>Titre du groupe</legend>
    <label>Étiquette du champ de saisie<input type="text"></label>
    <label>Étiquette du champ de saisie<input type="text"></label>
</fieldset>
```

* `<legend>` :

```html
<fieldset>
    <legend>Titre du groupe</legend>
    <label>Étiquette du champ de saisie<input type="text"></label>
    <label>Étiquette du champ de saisie<input type="text"></label>
</fieldset>
```

* `<datalist>` et `<option>` :
  * La balise `<datalist>` est utilisée pour créer une liste déroulante. Elle est généralement utilisée pour collecter des données telles que les pays, les villes, les langues, etc.
  * La balise `<option>` est utilisée pour définir une option dans une liste déroulante. Elle est généralement utilisée avec la balise `<datalist>`.

```html
<input list="liste">
<datalist id="liste">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
</datalist>
```

* `<output>` : La balise `<output>` est utilisée pour afficher le résultat d'un script. Elle est généralement utilisée pour afficher le résultat d'un script.

```html
<output></output>
```

* `<progress>` : La balise `<progress>` est utilisée pour afficher la progression d'une tâche. Elle est généralement utilisée pour afficher la progression d'une tâche.

```html
<progress></progress>
```

* `<meter>` : La balise `<meter>` est utilisée pour afficher une mesure scalaire dans une barre de progression. Elle est généralement utilisée pour afficher une mesure scalaire dans une barre de progression.

```html
<meter></meter>
```

* `<button>` : La balise `<button>` est utilisée pour créer un bouton cliquable. Elle est généralement utilisée pour créer des boutons cliquables.

```html
<button>Contenu du bouton</button>
```

### Les types d'entrée

* `<input type="text">` : La balise `<input type="text">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les noms, les adresses, les numéros de téléphone, les adresses e-mail, etc.

```html
<input type="text">
```

* `<input type="password">` : La balise `<input type="password">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les mots de passe.

```html
<input type="password">
```

* `<input type="email">` : La balise `<input type="email">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les adresses e-mail.

```html
<input type="email">
```

* `<input type="tel">` : La balise `<input type="tel">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les numéros de téléphone.

```html
<input type="tel">
```

* `<input type="url">` : La balise `<input type="url">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les URL.

```html
<input type="url">
```

* `<input type="search">` : La balise `<input type="search">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les termes de recherche.

```html
<input type="search">
```

* `<input type="number">` : La balise `<input type="number">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les nombres.

```html
<input type="number">
```

* `<input type="range">` : La balise `<input type="range">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les nombres.

```html
<input type="range">
```

* `<input type="date">` : La balise `<input type="date">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les dates.

```html
<input type="date">
```

* `<input type="month">` : La balise `<input type="month">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les mois.

```html
<input type="month">
```

* `<input type="week">` : La balise `<input type="week">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les semaines.

```html
<input type="week">
```

* `<input type="time">` : La balise `<input type="time">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les heures.

```html
<input type="time">
```

* `<input type="datetime-local">` : La balise `<input type="datetime-local">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les dates et les heures.

```html
<input type="datetime-local">
```

* `<input type="color">` : La balise `<input type="color">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les couleurs.

```html
<input type="color">
```

* `<input type="file">` : La balise `<input type="file">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les fichiers.

```html
<input type="file">
```

* `<input type="hidden">` : La balise `<input type="hidden">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les données cachées.

```html
<input type="hidden">
```

* `<input type="submit">` : La balise `<input type="submit">` est utilisée pour créer un bouton cliquable. Elle est généralement utilisée pour créer des boutons cliquables.

```html
<input type="submit">
```

* `<input type="checkbox">` : La balise `<input type="checkbox">` est utilisée pour créer une case à cocher. Elle est généralement utilisée pour collecter des données telles que les cases à cocher.

```html
<input type="checkbox">
```

* `<input type="radio">` : La balise `<input type="radio">` est utilisée pour créer un bouton radio. Elle est généralement utilisée pour collecter des données telles que les boutons radio.

```html
<input type="radio">
```

* `<input type="range">` : La balise `<input type="range">` est utilisée pour créer un champ de saisie. Elle est généralement utilisée pour collecter des données telles que les nombres.

```html
<input type="range">
```

* `<input type="submit">` : La balise `<input type="submit">` est utilisée pour créer un bouton cliquable. Elle est généralement utilisée pour créer des boutons cliquables.

```html
<input type="submit">
```

* `<input type="reset">` : La balise `<input type="reset">` est utilisée pour créer un bouton cliquable. Elle est généralement utilisée pour créer des boutons cliquables.

```html

### Les iframes : `<iframe>`
La balise `<iframe>` est utilisée pour créer un cadre intégré. Elle est utilisée pour afficher une page web dans une page web.
```html
<iframe src="https://www.gnpinformatique.fr"></iframe>
```

Exemple de formulaire de contact complet :

```html
<form>
  <label>Email<input type="email"></label>
  <label>Prénom<input type="password"></label>
  <button>Envoyer</button>
</form>
```
<form>
  <label>Email : <input type="email"></label><br>
  <label>Prénom : <input type="password"></label>
  <button>Envoyer</button>
</form>

## 5. Les éléments multimédias

### Les images : `<img>`

La balise `<img>` est utilisée pour insérer une image dans une page web. Elle est généralement utilisée pour insérer des images dans une page web.

```html
<img src="image.jpg">
```

### Les médias : `<audio>` et `<video>`

* La balise `<audio>` est utilisée pour insérer un fichier audio dans une page web. Elle est généralement utilisée pour insérer des fichiers audio dans une page web.

```html
<audio src="audio.mp3"></audio>
```

* La balise `<video>` est utilisée pour insérer un fichier vidéo dans une page web. Elle est généralement utilisée pour insérer des fichiers vidéo dans une page web.

```html
<video src="video.mp4"></video>
```

## 6. Sémantique et organisation du code

### Les balises de sémantiques

* `<header>` : La balise `<header>` est utilisée pour définir l'en-tête d'une page web ou d'une section. Elle est généralement utilisée pour afficher le titre ou le logo d'une page web.

```html
<header>Contenu de l'en-tête</header>
```

* `<footer>` : La balise `<footer>` est utilisée pour définir le pied de page d'une page web ou d'une section. Elle est généralement utilisée pour afficher les informations de contact, les droits d'auteur, etc.

```html
<footer>Contenu du pied de page</footer>
```

* `<main>` : La balise `<main>` est utilisée pour définir le contenu principal d'une page web. Elle est généralement utilisée pour afficher le contenu principal d'une page web.

```html
<main>Contenu principal</main>
```

* `<article>` : La balise `<article>` est utilisée pour définir un contenu indépendant dans une page web. Elle est généralement utilisée pour afficher des articles, des blogs, des commentaires, etc.

```html
<article>Contenu de l'article</article>
```

* `<section>` : La balise `<section>` est utilisée pour définir une section dans une page web. Elle est généralement utilisée pour afficher des sections dans une page web.

```html
<section>Contenu de la section</section>
```

* `<aside>` : La balise `<aside>` est utilisée pour définir un contenu à part dans une page web. Elle est généralement utilisée pour afficher des contenus qui sont séparés du contenu principal de la page.

```html
<aside>Contenu à part</aside>
```

* `<nav>` : La balise `<nav>` est utilisée pour définir une section de navigation dans une page web. Elle est généralement utilisée pour afficher des liens vers d'autres pages web.

```html
<nav>Contenu de la navigation</nav>
```

* `<details>` : La balise `<details>` est utilisée pour définir des détails supplémentaires dans une page web. Elle est généralement utilisée pour afficher des informations supplémentaires qui peuvent être masquées ou affichées sur demande.

```html
<details>Contenu des détails</details>
```

* `<summary>` : La balise `<summary>` est utilisée pour définir un résumé dans une page web. Elle est généralement utilisée pour afficher un résumé des détails.

```html
<summary>Contenu du résumé</summary>
```

* `<figure>` : La balise `<figure>` est utilisée pour définir une figure dans une page web. Elle est généralement utilisée pour afficher des images, des diagrammes, des illustrations, etc.

```html
<figure>Contenu de la figure</figure>
```

* `<figcaption>` : La balise `<figcaption>` est utilisée pour définir une légende pour une figure dans une page web. Elle est généralement utilisée pour afficher une légende pour une figure.

```html
<figcaption>Contenu de la légende</figcaption>
```

* `<time>` : La balise `<time>` est utilisée pour définir une date ou une heure dans une page web. Elle est généralement utilisée pour afficher une date ou une heure.

```html
<time>Contenu de la date ou de l'heure</time>
```

* `<code>` : La balise `<code>` est utilisée pour définir du code informatique dans une page web. Elle est généralement utilisée pour afficher du code informatique.

```html
<code>Contenu du code informatique</code>
```

* `<pre>` : La balise `<pre>` est utilisée pour définir du texte préformaté dans une page web. Elle est généralement utilisée pour afficher du texte préformaté.

```html
<pre>Contenu du texte préformaté</pre>
```

* `<kbd>` : La balise `<kbd>` est utilisée pour définir du texte préformaté dans une page web. Elle est généralement utilisée pour afficher du texte préformaté.

```html
<kbd>Contenu du texte préformaté</kbd>
```

* `<samp>` : La balise `<samp>` est utilisée pour définir du texte préformaté dans une page web. Elle est généralement utilisée pour afficher du texte préformaté.

```html
<samp>Contenu du texte préformaté</samp>
```

* `<var>` : La balise `<var>` est utilisée pour définir une variable dans une page web. Elle est généralement utilisée pour afficher des variables.

```html
<var>Contenu de la variable</var>
```

* `<mark>` : La balise `<mark>` est utilisée pour mettre en évidence le texte. Elle est généralement utilisée pour mettre en évidence les mots ou les phrases importantes.

```html
<p>Contenu du paragraphe avec un <mark>mot important</mark></p>
```

* `<del>` : La balise `<del>` est utilisée pour barrer le texte. Elle est généralement utilisée pour indiquer que le texte a été supprimé.

```html
<p>Contenu du paragraphe avec un <del>mot supprimé</del></p>
```

* `<ins>` : La balise `<ins>` est utilisée pour souligner le texte. Elle est généralement utilisée pour indiquer que le texte a été ajouté.

```html
<p>Contenu du paragraphe avec un <ins>mot ajouté</ins></p>
```

* `<sub>` : La balise `<sub>` est utilisée pour afficher le texte en exposant. Elle est généralement utilisée pour afficher les indices chimiques et les formules mathématiques.

```html
<p>Contenu du paragraphe avec un <sub>indice</sub></p>
```

* `<sup>` : La balise `<sup>` est utilisée pour afficher le texte en exposant. Elle est généralement utilisée pour afficher les indices chimiques et les formules mathématiques.

```html
<p>Contenu du paragraphe avec un <sup>exposant</sup></p>
```

* `<q>` : La balise `<q>` est utilisée pour afficher une courte citation. Elle est généralement utilisée pour afficher des courtes citations.

```html
<p>Contenu du paragraphe avec une <q>courte citation</q></p>
```

* `<blockquote>` : La balise `<blockquote>` est utilisée pour afficher une longue citation. Elle est généralement utilisée pour afficher des longues citations.

```html
<blockquote>
    <p>Contenu de la citation longue</p>
</blockquote>
```

* `<abbr>` : La balise `<abbr>` est utilisée pour afficher une abréviation. Elle est généralement utilisée pour afficher des abréviations.

```html
<p>Contenu du paragraphe avec une <abbr title="HyperText Markup Language">HTML</abbr></p>
```

* `<cite>` : La balise `<cite>` est utilisée pour afficher une référence à une source. Elle est généralement utilisée pour afficher des références à des livres, des articles, etc.

```html
<p>Contenu du paragraphe avec une <cite>référence</cite></p>
```

## Les balises de programmation

* `<script>` : La balise `<script>` est utilisée pour définir un script client side. Elle est généralement utilisée pour définir un script client side.

```html
<script></script>
```

* `<noscript>` : La balise `<noscript>` est utilisée pour définir un contenu alternatif pour les utilisateurs qui n'ont pas activé les scripts dans leur navigateur. Elle est généralement utilisée pour définir un contenu alternatif pour les utilisateurs qui n'ont pas activé les scripts dans leur navigateur.

```html
<noscript>Contenu alternatif</noscript>
```

* `<canvas>` : La balise `<canvas>` est utilisée pour dessiner des graphiques, des graphiques, des images, etc. Elle est généralement utilisée pour dessiner des graphiques, des graphiques, des images, etc.

```html
<canvas></canvas>
```

* `<svg>` : La balise `<svg>` est utilisée pour dessiner des graphiques vectoriels. Elle est généralement utilisée pour dessiner des graphiques vectoriels.

```html
<svg></svg>
```

* `<math>` : La balise `<math>` est utilisée pour afficher des formules mathématiques. Elle est généralement utilisée pour afficher des formules mathématiques.

```html
<math></math>
```

* `<iframe>` : La balise `<iframe>` est utilisée pour créer un cadre intégré. Elle est utilisée pour afficher une page web dans une page web.

```html
<iframe src="https://www.gnpinformatique.fr"></iframe>
```

* `<object>` : La balise `<object>` est utilisée pour insérer un objet dans une page web. Elle est généralement utilisée pour insérer des objets dans une page web.

```html
<object></object>
```

* `<param>` : La balise `<param>` est utilisée pour définir un paramètre pour un objet dans une page web. Elle est généralement utilisée avec la balise `<object>`.

```html
<object>
    <param name="name" value="value">
</object>
```

* `<embed>` : La balise `<embed>` est utilisée pour insérer un contenu externe dans une page web. Elle est généralement utilisée pour insérer des contenus externes dans une page web.

```html
<embed src="https://www.gnpinformatique.fr">
```

* `<applet>` : La balise `<applet>` est utilisée pour insérer un applet Java dans une page web. Elle est généralement utilisée pour insérer des applets Java dans une page web.

```html
<applet></applet>
```

## Conclusion

Le HTML, pierre angulaire du web, nous offre une panoplie d'éléments et d'outils pour structurer et représenter du contenu. Que ce soit à travers des balises basiques, des tableaux ou des spécificateurs comme les classes et les identifiants, chaque composant joue un rôle essentiel dans la création de pages web robustes et interactives. Toutefois, il ne s'agit que de la couche fondamentale. Pour créer des expériences utilisateur riches et attrayantes, il est essentiel d'intégrer d'autres technologies comme le CSS pour la mise en forme et le JavaScript pour la dynamique.

Gardez toujours à l'esprit que la maîtrise du HTML est la première étape vers le développement de compétences avancées en matière de conception web. Avec la pratique, la patience et une quête continue d'apprentissage, vous pouvez transformer ces balises et ces attributs en pages web fascinantes qui captivent vos utilisateurs.

Bonne continuation dans votre parcours d'apprentissage et de découverte du monde du développement web !

Ce cours est terminé, vous avez appris les bases du HTML. Vous pouvez maintenant passer à la pratique en créant votre première page web. Vous pouvez également consulter notre cours sur le CSS pour apprendre à styliser votre page web.

## Ressources

* [w3schools](https://www.w3schools.com/html/default.asp)
* [openclassrooms](https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3)
* [developer.mozilla](https://developer.mozilla.org/fr/docs/Web/HTML)
* [grafikart](https://www.grafikart.fr/formations/apprendre-html5)
* [codecademy](https://www.codecademy.com/learn/learn-html)

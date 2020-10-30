# Mettre en page avec bindery.js


## Intro

*Bindery* est une librairie javascript permettant de mettre en page un livret dans le navigateur.
Pour ce projet le code javascript dans le fichier ```script.js``` est séparé en deux parties. Dans un premier temps on aspire le contenu du pad dans lequel le client va rentrer son contenu , puis , une fois le contenu chargé dans la page on active Bindery pour générer la mise en page.

## Librairies utilisées

1. Bindery js     
Le système chargeant le contenu suivant le gabarit défini
2. Jquery     
Librarie simplifiant le code pour charger le contenu du pad dans la page
3. Marked ou Showdown     
Deux librairies que je teste pour transformer le markdown, présent dans le pad, en balise html.

## Organisation du dossier et utilisation du site

```
├── assets
│   ├── fonts --------> typo utilisées
│   │   └── AlegreyaSans-Regular.woff
│   ├── lib  ---------> librairie en local
│   │   ├── bindery.js
│   │   └── jquery.js
│   ├── script.js  ---> chargement du contenu et initialisation de bindery
│   └── style.css ----> feuille de style
├── index.html  ------> page html principal
└── README.md
```

Pour lancer et utiliser la plateforme, il suffit simplement de copier ce dossier dans ton serveur local ( WAMP MAMP LAMP ) ou de lancer la ligne de commande ```php -S localhost:8888``` . Puis de se rendre à l'adresse ```localhost/nomdemonfichier```

J'ai eu quelque bug sur Firefox et je conseille fortement d'utiliser chrome ou chromium, permettant d'avoir un aperçu avant impression.
Ensuite pour faciliter l'usage et la mise en page des éléments, je conseille aussi d'ouvrir l'inspecteur de la page et de désactiver le cache afin de s'assurer que tous les changement css / contenus soient pris en compte .

> https://stackoverflow.com/questions/5690269/disabling-chrome-cache-for-website-development

## Documentation

Toute la documentation se retrouve à cette adresse :
>  https://evanbrooks.info/bindery/docs

1. Initialisation du gabarit

Dans le fichier ```script.js``` commençant à la ligne 27 tu retrouveras quelques règles de mise en page.
On y initialise la taille de la page, les marges. Mais aussi, dans cette partie, il est possible de gérer finement la façon dont les paragraphes sont coupés, les images disposées (à la coupe, ou en double page) etc.
J'ai commenté le code le plus que je pouvais pour te guider.

2. Feuille de style

Le reste du css se fait de façon très classique.
Il faut savoir que Bindery assigne des *CLASS* et des *ID*  à tous les éléments de la page et suivant leur positions ( gauche / droite, paragraphe coupé en deux etc. )
Néanmoins les noms de certaines class sont étranges avec des emoticones comme ceci : ```📖-page-background```.
Mais il semblerait que ça ne pose aucun souci.

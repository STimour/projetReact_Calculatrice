Composant:
Un composant est une partie réutilisable d'une interface utilisateur dans une application React. Les composants sont généralement créés pour encapsuler la logique et la présentation d'une partie spécifique de l'interface utilisateur. Ils peuvent être de deux types principaux : les composants de classe et les composants fonctionnels.

Dépendances:
Les dépendances dans le contexte de React se réfèrent aux bibliothèques ou packages externes nécessaires pour construire et exécuter une application React. Ces dépendances peuvent inclure des bibliothèques tierces, des modules Node.js, des composants React, etc. Elles sont généralement gérées à l'aide d'un gestionnaire de paquets comme npm ou Yarn.

Moyen de communication entre composants:
Les moyens de communication entre composants sont des méthodes permettant aux composants de partager des données ou d'interagir les uns avec les autres. Les principaux moyens de communication entre composants en React sont :

- Props : Les propriétés (props) sont des données passées d'un composant parent à un composant enfant pour lui transmettre des informations.
- Key : La clé (key) est utilisée pour aider React à identifier de manière unique les éléments d'une liste lors de leur rendu. Cela permet d'optimiser les mises à jour de liste.

Initialisation d'une donnée à afficher:
L'initialisation des données à afficher dans un composant React peut se faire de plusieurs manières :

- État (State) : L'état est utilisé pour gérer les données qui peuvent changer au fil du temps dans un composant. Vous pouvez utiliser useState pour initialiser l'état d'un composant.
- useEffect : useEffect est un hook React qui permet d'effectuer des opérations en réaction à des changements, y compris l'initialisation de données.
- État initial : L'état initial fait référence à la valeur initiale d'une donnée, généralement définie lors de la création d'un composant.
- useMemo : useMemo est un hook qui permet de mémoriser le résultat d'un calcul coûteux, notamment pour l'initialisation de données.
- useCallback : useCallback est utilisé pour mémoriser une fonction, notamment pour l'initialisation de gestionnaires d'événements.

Return:
"Return" est utilisé dans le contexte d'une fonction ou d'un composant React pour renvoyer un élément JSX, c'est-à-dire le contenu à afficher dans le composant. Le contenu renvoyé par "return" est ce qui sera rendu à l'écran.

Attribut HTML:
Les attributs HTML sont des propriétés que vous pouvez ajouter à des éléments HTML pour définir leur comportement ou leur apparence. En React, vous pouvez utiliser des attributs HTML dans les éléments JSX pour configurer les éléments HTML.

Style:
Le style est utilisé pour définir la présentation visuelle des éléments HTML ou des composants React. Vous pouvez définir les styles en utilisant des objets JavaScript dans JSX ou en utilisant des feuilles de style externes.

onClick:
"onClick" est un événement utilisé pour gérer les clics de souris sur un élément. Dans React, il est couramment utilisé pour définir des gestionnaires d'événements pour les composants interactifs.

Rendu:
Le rendu se réfère au processus par lequel les composants React génèrent et affichent leur interface utilisateur. Cela implique de convertir les éléments JSX en éléments DOM réels qui sont affichés à l'écran.

Map:
"Map" est une méthode JavaScript couramment utilisée en React pour parcourir un tableau d'éléments et créer un nouveau tableau en appliquant une fonction à chaque élément. Cela permet de générer dynamiquement des listes ou des composants en fonction des données d'entrée.

Modifier (mot en anglais):
En React, "modifier" est généralement traduit en anglais par "modify". Cela fait référence à l'action de changer ou de mettre à jour une valeur, un état, ou un élément dans le contexte d'une application React.

Handler:
Un "handler" est un gestionnaire d'événements, généralement une fonction, qui est appelé en réponse à un événement particulier, comme un clic de souris ou une saisie de clavier.

Event:
Un "event" fait référence à un événement déclenché, comme un clic de souris, une saisie de clavier, ou tout autre type d'interaction utilisateur. En React, les événements sont associés à des éléments JSX et sont gérés à l'aide de gestionnaires d'événements.

onUnmount:
"onUnmount" est un concept utilisé pour désigner les actions ou les nettoyages effectués lorsqu'un composant React est démonté ou supprimé. Cela peut inclure la suppression d'abonnements à des événements ou la libération de ressources.

onChange:
"onChange" est un événement couramment utilisé pour détecter les modifications dans les éléments de formulaire tels que les champs de texte, les cases à cocher, ou les boutons radio. Il est déclenché lorsque la valeur d'un élément change.

onMount:
"onMount" est un concept utilisé pour désigner les actions ou les opérations effectuées lorsqu'un composant React est monté ou rendu pour la première fois dans le DOM. Cela peut inclure des opérations d'initialisation ou des appels à des API externes.
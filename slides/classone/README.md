Presentation
============

This is a simple, web-based presentation framework. With the proper markup and some CSS and JS includes (along with jQuery), you can have your very own slideshow presentation. Includes support for offline storage of the presentation.

How to Use
----------
The `index.html` file contains the basic markup needed to create each of the three layouts: title, bullets, and questions. Feel free to modify this file to your purposes.

You're also given blank `thispresentation.css` and `thispresentation.js` files to customize for this particular presentation. They are linked to in the `index.html`.

Offline Storage
---------------
Details for offline storage are included in the `cache.manifest` file. **This file does not include the "thispresentation" files by default.** If you wish to allow offline storage of these files, you'll have to add them to the manifest yourself. This should help prevent debugging headaches.
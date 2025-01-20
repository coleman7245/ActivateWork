JavaScript Web App by Derek Coleman

Introduction

Originally, I had tried to make a search query that fetched the desired query 
from the video game website Giant Bomb, which then retrieved the data and 
posted the image and info on another page. However, I ran into difficulties 
fetching from their API, and finding a replacement proved time-consuming. 
Listed below are the APIs I tried to pull from.

* Giant Bomb API - Denied my request due to COR policy. 
I tried to add the ALLOW property in the header, but to no avail.

* quotes.react - No longer free.

* Merriam-Webster's API - Required the information I couldn't provide, like company name.

* IGDB - Required a Twitch Dev account.

* Steam API - Required to be a developer.

* IMDB API - Wasn't working at the time of access.

I also wasted a bunch of time by forgetting that the POST requirements were 
axed. Ultimately, I had to use the Cat API again, just to put something, 
anything up. I still hope to finish the assignment with this, but in case I 
don't, here is the explanation as to why.
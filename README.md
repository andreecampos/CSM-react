# Webb21-CMS: Headless CMS med din Wordpress.com och React Frontend

### Importera projektet till ditt eget GitHub-repository

Börja med att klicka på Create repository och efter det "Import code". Du kommer att komma till en sida där du måste lägga url av projektet som du kommer att klona sen (projektet som du kommer att jobba med). Klicka på Begin import knappen.
Du kan kickla på url som bekräfta att du lyckades med importering. Det kommer att ta dig till det nya repository som innehåller all kod.

### Klona din GitHub repository (local)
Tryck på Code och i HTTPS kopiera du url. Efter det du kan köra git clone your-GitHub-repository-url.
Öppna projektet i visual studio, i projektet terminalen du kan köra: npm install.

### Skapa och ställ in environment variable
I .env fil skapa en variable **REACT_APP_API_URL** och lägg din url **"https://public-api.wordpress.com/rest/v1.1/sites/**your-wordpress-com-website-url"**
Min url : https://public-api.wordpress.com/rest/v1.1/sites/andree652609768.wordpress.com/


### Kör projektet local med React

I terminalen du kan köra: npm install och sen npm start

### Deploy your GitHub repo

Jag använde Vercel. Jag skapade en konto hos Vercel och importera min Github repo.
Efter det in Configure project- environment variables måste vi lägga Name och Value.
I Name lägger vi **REACT_APP_API_URL** och in value url : https://public-api.wordpress.com/rest/v1.1/sites/andree652609768.wordpress.com/. Slutligen klicka på deploy knappen.
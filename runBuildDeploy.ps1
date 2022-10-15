cd C:\Sites\website-izadji
git checkout main
git pull
cd C:\Sites\website-izadji\izadji
echo moved to directory izadji
nssm stop izadji-site
npm ci
npm install cross-env
npm run build:win
nssm start izadji-site
echo npm run build done
echo install and deploy strapi 
cd C:\Sites\website-izadji\api
echo moved to directory api
nssm stop izadji-strapi
yarn install
yarn run build:win
nssm start izadji-strapi
echo yarn run build done

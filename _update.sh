cp ./config.json ./config_copy.json
git pull
rm ./config.json
mv ./config_copy.json ./config.json
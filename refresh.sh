echo "Copying repo"
docker run --volumes-from=fitness-data -v $(pwd):/source debian:jessie cp -r /source/. /web/
echo "Setting permissions"
docker run --volumes-from=fitness-data -w /web debian:jessie chmod -R 755 .
echo "Refreshed!"

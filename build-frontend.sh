mkdir -p target/classic/static

cd ../frontend
npm install && npm run build
cd ..

cp -r ./frontend/build/* ./demo-spring-data/target/classes/static
mkdir -p target/classic/static

cd ../frontend
npm install && npm run build
cd ..

cp -r ./frontend/build/* ./backend/target/classes/static
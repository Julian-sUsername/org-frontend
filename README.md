# org-frontend  
frontend from project using Vue.js  

# Para poder trabajar sobre el c�digo de Frontend ya existente:  

## Desde la consola del Git Bash:  

mkdir \<directorio>  
cd \<directorio>  
git init  
git clone -b dev --single-branch \<url>  
cd \<project>  
git branch -a (verificar que sea dev)  

## Desde el Visual Studio:  
Abrir la carpeta <directorio> y el powershell en ese <directorio>  
Ejecutar:  
Set-ExecutionPolicy Unrestricted -Scope Process  
Verificar que ya est� instalado el node y el npm en el computador:  
node -v  (debe mostrar la versi�n instalada)  
npm -v  (debe mostrar la versi�n instalada)  
Si muestra error indicando que no reconoce esos comandos, entonces ejecutar:  
* En Windows: descargar el instaldor desde https://nodejs.org/es en versi�n LTS   
* y probar de nuevo node -v y npm -v  
Luego, retornar a Visual y ejecutar:  
npm install -g @vue/cli  
vue --version (debe mostrar la versi�n instalada)  
Si muestra error ejecutar:  
Set-ExecutionPolicy Unrestricted -Scope Process  
Y volver a ejecutar vue --version  
Si vuelve a mostrar error, cerrar el Visual y volverlo a abrir. Intentar de nuevo vue --version sobre el directorio acogelo-vue  
Luego, ejecutar  
npm install axios   
npm install jwt-decode  
### Finalmente, para desplegar el servidor:  
Verificar en los archivos de configuraci�n (App.vue y dem�s) las rutas configuradas de backend y app de frontend  
Ejecutar:  
npm run serve  
Una vez confirme que el despliegue fue exitoso, visitar la p�gina que indique el script (si el despliegue fue local, la direcci�n ser� http://localhost:8080)  

# Posibles ajustes al Backend  
Cuando se usa el backend en despliegue en el computador local, es posible que sean necesarios los siguientes pasos:  
Desde el Visual, ingresar por terminal al directorio del backend  
Ejecutar:  
Set-ExecutionPolicy Unrestricted -Scope Process  
.\env\Scripts\activate  
pip install django-cors-headers  
Verificar que el archivo settings.py contenga toda la configuraci�n de CORS que indica la gu�a 14 del material del curso  